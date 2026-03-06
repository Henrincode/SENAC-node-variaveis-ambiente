import 'dotenv/config'
import express from 'express'

const app = express()

// app.get('/', (req, res) => {
//     res.send('Olá mundo!')
// })

app.get("/", (req, res) => {
    res.send(`Processo rodando na porta ${process.env.PORTA}`)
})

app.listen(process.env.PORTA)