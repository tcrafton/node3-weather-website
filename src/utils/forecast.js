const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=74a21342667eacd9a4618f4c89869ec1&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service.");
    } else if (body.error) {
      callback("Unable to find location, try other coordinates.");
    } else {
      let data = body.current;

      callback(
        undefined,
        `${data.weather_descriptions[0]}. It is currently ${data.temperature}.  It feels like ${data.feelslike} degrees out.  The humidity is ${data.humidity}%.`
      );
    }
  });
};

module.exports = forecast;
