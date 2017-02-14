function Current(json){
    var curr = json.data.currentHour //here the json is used
    return "<p>The current weather condition is " + curr.condition +" with a temperature of " + curr.temperatureInCelsius.value + "</p>"
  }
function Forecasts(json){
    var text = "";
    for(forecast of json.data.forecasts) {
      text += "<li>on " + forecast.date + " the weather condition is " + forecast.condition + "</li>";
    }
    return text;
  }
$(document).ready(function() {
  $.ajax(
    'https://www.jungfrau.ch/api/weather/v01/average/jungfraujoch',
    {
      dataType: 'json',
      contentType: 'application/json',
      success: function(response){
        $('#current_weather').html(Current(response));
        $('#forecasts').html(Forecasts(response));
      }
    }
  )
});
