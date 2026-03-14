import 'dotenv/config'
import express from 'express'
import { fnCadastrarCarro, fnListarCarros } from './frota.js'

const app = express()

app.get('/', (req, res) => {
    res.send()
})

fnCadastrarCarro({marca: 'VW', modelo: 'Fusca'})

fnListarCarros()

console.log(process.env.PORTA)

app.listen(process.env.PORTA)