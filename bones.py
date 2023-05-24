from flask import Flask, render_template, request, redirect, url_for, jsonify, make_response
import os
import socket
from phue import Bridge
import random

HOST = '169.254.78.160'
PORT = 12345

restricted_password = os.environ.get('RESTRICTED_PASSWORD')
semi_restricted_password = os.environ.get('SEMI_RESTRICTED_PASSWORD')

b = Bridge('192.168.1.236')
b.connect()

def convertColor(hexCode = None):
    # If no hexcode, return random color
    R, G, B = 0, 0, 0
    if not hexCode:
        R = random.randint(0,255)
        G = random.randint(0,255)
        B = random.randint(0,255)
    else:
        R = int(hexCode[:2],16)
        G = int(hexCode[2:4],16)
        B = int(hexCode[4:6],16)
    total = R + G + B
    if R == 0:
        firstPos = 0
    else:
        firstPos = R / total
    if G == 0:
        secondPos = 0
    else:
        secondPos = G / total
    return [firstPos, secondPos]

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

restricted_actions = ["1", "2", "4"]
semi_restricted_actions = ["3", "9"]

@app.route('/action/<id>', methods=['POST', 'GET'])
def action(id):
    response = make_response(jsonify({'error': ''}), 200)
    response.mimetype = "application/json"

    if request.method == 'POST':
        print("Action " + id + " was performed")
        to_send = id

        if id in restricted_actions:
            request_json = request.get_json()
            if request_json['password'] != restricted_password:
                response = make_response(jsonify({'error': 'Wrong password'}), 401)
                return response
            if id == '1':
                print("Waking pc")
                os.system("/home/jesper/wol.sh")
                
        elif id in semi_restricted_actions:
            request_json = request.get_json()
            if request_json['password'] not in [restricted_password, semi_restricted_password]:
                response = make_response(jsonify({'error': 'Wrong password'}), 401)
            elif id == '3':
                request_url = request_json["url"]
                # http://192.168.1.235/debug/clip.html
                if request_url == "LightON":
                    b.set_light(3, 'on', True)
                elif request_url == "LightOFF":
                    b.set_light(3, 'on', False)
                elif request_url == "LightBlink":
                    b.set_light(3, 'on', b.get_light(3, 'on') ^ True)
                elif request_url == "LightRGB":
                    b.set_light(3, 'xy', convertColor(request_json["color"]))
            elif id == '9':
                msg = "m," + request_json['message']
                to_send = msg
        sendSocket(to_send)
        return response

@app.route('/access', methods=['POST'])
def access():
    response = make_response(jsonify({'error': ''}), 200)
    noaccess = []
    if request.method == 'POST':
        request_json = request.get_json()
        if request_json['password'] != restricted_password:
            noaccess = noaccess + restricted_actions
            if request_json['password'] != semi_restricted_password:
                noaccess = noaccess + semi_restricted_actions
        response = make_response(jsonify({'access': noaccess}), 200)
    response.mimetype = "application/json"
    return response

# Try to connect to a socket just to check if the server is running
@app.route('/status', methods=['GET'])
def status():
    if sendSocket(""):
        return "Computer is on"
    return "Computer is off"

@app.route('/message/<msg>', methods=['POST'])
def message(msg):
    response = make_response(jsonify({'error': ''}), 200)
    if request.method == 'POST':
        print("Message " + msg + " was sent")
        if msg != "":
            sendSocket(msg)
    response.mimetype = "application/json"
    return response

def sendSocket(data):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        try:
            s.settimeout(0.1)
            print('Connecting to', HOST, PORT)
            s.connect((HOST, PORT))
            print('Sending data')
            s.sendall(bytes(data, 'utf-8'))
            return True
        except:
            return False


@app.route('/cave', methods=['GET'])
def zork():
    return render_template('cave.html')

@app.route('/getchat', methods=['GET', 'POST'])
def getchat():
    if request.method == 'POST':
        # A json file with [user, message] is sent from the client
        request_json = request.get_json()
        print(request_json)
        user = request_json['user']
        msg = request_json['message']
        print(user, msg)
        if msg != "":
            with open('chatlog.txt', 'a') as f:
                if user == "":
                    f.write( msg + "\n")
                else:
                    f.write(user + ": " + msg + "\n")
        return redirect(url_for('chat'))
    else:
        # Get the 10 latest messages from chatlog.txt
        with open('chatlog.txt', 'r') as f:
            lines = f.readlines()
            lines = lines[-10:]
            # return a json file with the lines
            return jsonify(lines)

@app.route('/chat', methods=['GET'])
def chat():
    # Get the 10 latest messages from chatlog.txt
    with open('chatlog.txt', 'r') as f:
        lines = f.readlines()
        lines = lines[-10:]
        return render_template('chat.html', lines=lines)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
