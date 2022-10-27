const Carro = (nome, idade, fabricante) => ({
    nome,
    idade,
    fabricante,
    getDataArray: () => {
        return [nome, idade, fabricante]
    }
})

const veiculo = Carro(`350GT`, 1964, `lamborghini`)
console.log(veiculo.getDataArray())