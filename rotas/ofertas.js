const { Router } = require("express");
const { getOfertas } = require("../controladores/ofertas");
const router = Router()

router.get('/', getOfertas)

module.exports = router