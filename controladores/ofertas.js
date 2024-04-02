const { getTodasOfertas } = require("../servicos/ofertas")

function getOfertas(req, res) {
    try {
        const ofertas = getTodasOfertas()
        res.send(ofertas)
    }catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
module.exports = {
    getOfertas
}