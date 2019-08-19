const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// argv.direccio

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);


// clima.getClima(-34.610001, -58.369999)
//     .then(console.log)
//     .catch(console.log)



const getInfo = async(direccion) => {


    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temperatura}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);