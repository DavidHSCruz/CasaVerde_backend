const fs = require('fs')

function getTodasOfertas() {
    return JSON.parse(fs.readFileSync('ofertas.json'))
}

module.exports = {
    getTodasOfertas
}