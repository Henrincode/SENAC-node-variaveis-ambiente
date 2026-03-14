const carros = [{
    marca: 'Ford',
    modelo: 'Fiesta'
}, {
    marca: 'Fiat',
    modelo: 'Uno'
}]

export function fnListarCarros() {
    carros.forEach(carro => console.log(carro.marca + ' - ' + carro.modelo))
}

export function fnCadastrarCarro(carro){
    carros.push(carro)
    console.log('Carro cadastrado com sucesso!')
}