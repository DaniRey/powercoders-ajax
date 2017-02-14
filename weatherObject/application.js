function Weather(json) {
  this.current = function(){
    var curr = json.data.currentHour //here the json is used
    return "<p>The current weather condition is " + curr.condition +" with a temperature of " + curr.temperatureInCelsius.value + "</p>"
  }
  this.forecasts = function(){
    var text = "";
    for(forecast of json.data.forecasts) {
      text += "<li>on " + forecast.date + " the weather condition is " + forecast.condition + "</li>";
    }
    return text;
  }
}
$(document).ready(function() {
  $.ajax(
    'https://www.jungfrau.ch/api/weather/v01/average/jungfraujoch',
    {
      dataType: 'json',
      contentType: 'application/json',
      success: function(response){
        var weather = new Weather(response);
        $('#current_weather').html(weather.current);
        $('#forecasts').html(weather.forecasts);
      }
    }
  )
});
