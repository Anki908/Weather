const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });


const API_KEY = process.env.API_KEY;

const getWeather = async(city) => {
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    var temperture = data.data.main.temp - 273.15;
    temperture = temperture.toFixed(0);
    return temperture;
}

exports.weather = async (req , res) => {
    const query = req.body.cities;
    const result = {};

    for (const city of query) {
        const weather = await getWeather(city.toLowerCase());
        result[city] = weather+'C';
    }

    res.status(200).json({
        status: "Success",
        weather: result,
    })
}