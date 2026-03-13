import fs from 'fs-extra'

let pasta = 'fotos'

console.log('\n\n===== verificando pasta =====')
if(fs.existsSync(pasta)) {
    console.log('Tudo certo, a pata já existe')
} else {
    console.log('A pasta não existe')
}

console.log("\n\n===== criando pasta =====")

pasta = 'icones'

if (!fs.existsSync(pasta)) {
    fs.mkdirSync(pasta)
    
    console.log("pasta criada")
} else {
    console.log("pasta já existe")
}

console.log(fs.readdirSync(pasta).join('\n'))

console.log("\n\n===== renomeando pasta =====")
try{
    fs.renameSync("icones", "icons")
    console.log("pasta renomeado")
} catch(erro){
    console.log("não foi renomedo")
}


console.log("\n\n===== excluindo pasta =====")

const folder = 'icons'
fs.remove(folder, erro => {
    console.error(erro)
})