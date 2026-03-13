// lib fs = file system
import fs from 'fs'

const client = 'João da Silva\n'

// fs.writeFile('./api/clientes.txt', client, erro => {
//     if (erro) {
//         console.error(erro)
//         return
//     }
//     console.log('novo cliente')
// })

const novoClient = 'Regina George\n'

fs.appendFile('./api/clientes.txt', novoClient, erro => {
    if(erro) {
        console.error(erro)
        return
    }
    console.log('+ 1 cliente!')
})

fs.readFile('./api/clientes.txt', 'utf8', (erro, dados) => {
    if (erro) {
        console.error(erro)
        return
    }
    console.log(dados)
})
console.log('Bem vindo')