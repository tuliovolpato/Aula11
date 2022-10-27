class Carro {
    constructor(nome, idade, fabricante ){
        this.nome = nome
        this.idade = idade
        this.fabricante = fabricante
    }
    getDataArray() {
        return [this.nome, this.idade, this.fabricante]
    }
}

const veiculo = new Carro(`350GT`, 1964, `lamborghini`)
console.log(veiculo.getDataArray())
