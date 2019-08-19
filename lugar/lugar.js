const axios = require('axios');



const getLugarLatLng = async(dir) => {



    const encodeUr = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUr}`,
        headers: { 'x-rapidapi-key': '3fc1b1b408mshde723cf4486b6c6p1ad5d3jsnd592c5c8e0cb' }
    });

    const resp = await instance.get();


    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
}