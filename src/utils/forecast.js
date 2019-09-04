const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1c6a0ff3be82509df9c894bccac6949d/'
                + latitude + ',' + longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Cannot find location', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' The forecast high temperature is ' + body.daily.data[0].temperatureHigh + ' degrees and the low is ' + body.daily.data[0].temperatureLow + ' degrees. It is currently ' + body.currently.temperature + ' degrees. There is a ' + body.currently.precipProbability + '% chance of rain.');
        }
    });
};

module.exports = forecast;