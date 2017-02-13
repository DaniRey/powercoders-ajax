function Weather(weather) {
  this.current = function(){
    var curr = weather.data.currentHour
    return "<p>The current weather condition is " + curr.condition +" with a temperature of " + curr.temperatureInCelsius.value + "</p>"
  }
  this.forecasts = function(){
    var text = "";
    for(forecast of weather.data.forecasts) {
      text += "<li>on " + forecast.date + " the weather condition is " + forecast.condition + "</li>";
    }
    return text;
  }
}

$(document).ready(function() {
  $.ajax(
    'http://2016.jungfrau.ch/api/weather/v01/average/jungfraujoch',
    {
      dataType: 'json',
      contentType: 'application/json',
      success: function(json){
        var weather = new Weather(json);
        $('#current_weather').html(weather.current);
        $('#forecasts').html(weather.forecasts);
      }
    }
  )
});
