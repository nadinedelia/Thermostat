$(document).ready(function () {
  var thermostat = new Thermostat();
  updateTemperature();

 getWeather('London');

  $('#get-weather').click(function () {
    var currentCity = $("#current-city").val();
    console.log(currentCity)
    getWeather(currentCity)
  });

  function getWeather(city) {

    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e90f3e390607c8ae6d86a559464894e`, function (result) {
      var weather = result.weather[0].description;

      $("#current-weather").html(weather);
      $("#location").html(city);


    });
  }

  $('#temperature-up').click(function () {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function () {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function () {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function () {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function () {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

});
