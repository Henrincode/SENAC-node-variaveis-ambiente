import os from 'os'
import fs from 'fs-extra'

console.log('1 - Retornar memória RAM livre em GB')
console.log((os.freemem() / (1024 ** 3)).toFixed(3), 'GB')

console.log('\n2 - Total de memória ram')
console.log((os.totalmem() / (1024 ** 3)).toFixed(3), 'GB')

console.log('\n3 - Retornar em minutos e em horas quanto tempo o PC esta ligado')
console.log((os.uptime() / 60).toFixed(), 'minutos')
console.log((os.uptime() / 60 / 60).toFixed(), 'horas')

console.log(`
4 - Faça um programa que registre as seguintes
informações em um arquivo texto chamado
“registro_XXXX.txt” aonde XXXX deve ser o nome do
host. As informações nesse arquivo devem ser:

nome do host
total de memória em gb
sistema operacional – tipo do sistema
nome do usuário ativo
quantidade de CPU – modelo da CPU`)

const hostName = os.hostname()
const ram = (os.totalmem() / (1024 ** 3)).toFixed(3)
const so = os.type()
const userPC = os.userInfo().username
const cpuCount = os.cpus()

const path = `registro_${hostName}.txt`

const file = `
nome do host:
${hostName}
total de memória em gb:
${ram}
sistema operacional – tipo do sistema:
${so}
nome do usuário ativo:
${userPC}
quantidade de CPU – modelo da CPU:
${cpuCount}
`

// if (fs.existsSync(path)) {
//     fs.writeFileSync(path)
// }
fs.writeFileSync(path, file)

console.log(os.cpus())