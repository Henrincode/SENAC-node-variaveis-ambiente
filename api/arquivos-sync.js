// lib fs = file system
import fs from 'fs'

// const estadosBrasileiros = [
//   '11 - Rondônia - RO',
//   '12 - Acre - AC',
//   '13 - Amazonas - AM',
//   '14 - Roraima - RR',
//   '15 - Pará - PA',
//   '16 - Amapá - AP',
//   '17 - Tocantins - TO',
//   '21 - Maranhão - MA',
//   '22 - Piauí - PI',
//   '23 - Ceará - CE',
//   '24 - Rio Grande do Norte - RN',
//   '25 - Paraíba - PB',
//   '26 - Pernambuco - PE',
//   '27 - Alagoas - AL',
//   '28 - Sergipe - SE',
//   '29 - Bahia - BA',
//   '31 - Minas Gerais - MG',
//   '32 - Espírito Santo - ES',
//   '33 - Rio de Janeiro - RJ',
//   '35 - São Paulo - SP',
//   '41 - Paraná - PR',
//   '42 - Santa Catarina - SC',
//   '43 - Rio Grande do Sul - RS',
//   '50 - Mato Grosso do Sul - MS',
//   '51 - Mato Grosso - MT',
//   '52 - Goiás - GO',
//   '53 - Distrito Federal - DF'
// ]

// const dados = estadosBrasileiros.join('\n')

// try {
//     const escreverArquivo = fs.writeFileSync('./api/estados.txt', dados) 
//     console.log('Estados cadastrados')
// } catch(error) {
//     console.error(error)
// }

// const lerArquivo = fs.readFileSync('./api/estados.txt', 'utf8')
// console.log(lerArquivo)

const novoCliente = 'Regina\n'

// try {
//     const datos = fs.writeFileSync('./api/clienes.txt', novoCliente)
//     console.log('Novo cliente')
// } catch (error) {
//     console.error(error)
// }

// // const dados = fs.readFileSync('./api/campeonato_brasileiro.csv', 'utf8')
// // console.log(dados)
// // console.log('Bem vindo')

try {
    const dados = fs.appendFileSync('./api/clientes.txt', novoCliente)
    console.log('+ 1 cliete!')
} catch(error) {
    console.error(error)
}

const dados = fs.readFileSync('./api/clientes.txt', 'utf8')
console.log(dados)
console.log('Bem vindo')