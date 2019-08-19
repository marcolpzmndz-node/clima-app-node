const axios = require('axios');


const getClima = async(lat, lng) => {

    const temperatura = 273.15;
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a1b6f812bb4acfaebdcb93a4be325bc7
      `)

    var temperaturaObtenida = resp.data.main.temp;


    return parseFloat(temperaturaObtenida - temperatura).toFixed(2);

}

module.exports = {
    getClima
}