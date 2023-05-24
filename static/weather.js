(function (smhi, $, undefined) {
    
    smhi.endPoint = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/{lon}/lat/{lat}/data.json";
        
    smhi.forecast = null;
        
    smhi.returnedLatitude = null;
    smhi.returnedLongitude = null;
    
    smhi.approvedTime = null;
    smhi.referenceTime = null;
        
    smhi.previousMarker = null;
    smhi.selectedParameter = null;
    
    smhi.getForecast = function (latitude, longitude, callback) {
        var endPoint = smhi.endPoint.replace("{lat}", latitude).replace("{lon}", longitude);
            
        $.getJSON(endPoint).done(function (forecast) {
            smhi.forecast = forecast;
            smhi.returnedLatitude = null;
            smhi.returnedLongitude = null;
            smhi.approvedTime = new Date(forecast.approvedTime).toISOString().replace(/[a-zA-Z]/g, ' ').substr(0, 16);
            smhi.referenceTime = new Date(forecast.referenceTime).toISOString().replace(/[a-zA-Z]/g, ' ').substr(0, 16);
                
            callback(forecast);
        });
    };
    
}(window.smhi = window.smhi || {}, jQuery));

function getWeather() {
    $.getJSON("https://ipapi.co/json/", function(data) {
        var lat = data.latitude;
        var long = data.longitude;
        smhi.getForecast(lat, long, function (forecast) {
            console.log(forecast);
            var msg = ["", ""];
            for (var i = 0; i < 4; i++) {
                var weather = forecast.timeSeries[i].parameters;
                for (var j = 0; j < weather.length; j++) {
                    if (weather[j].name == "t") {
                        var temp = weather[j].values[0].toString();
                        msg[0] += temp;
                        if (temp.indexOf(".") == -1) {
                            msg[0] += ".0";
                        }
                        msg[0] += "°C ";
                        break;
                    }
                }
            }
            for (var i = 0; i < 4; i++) {
                var time = forecast.timeSeries[i].validTime;
                msg[1] += time.substr(11, 5) + " ";
            }
            showMessageBox(msg, true, null, null, ["OK"]);
        });
    });
}
