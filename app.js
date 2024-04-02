const express = require('express')
const cors = require('cors')
const rotaOfertas = require('./rotas/ofertas')

const app = express()

app.use(express.json())
app.use(cors({ origin: '*' }))

app.use('/ofertas', rotaOfertas)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})