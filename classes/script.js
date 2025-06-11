//Declarando Classe
class Pessoa{
//Atributos da classe
    constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
}
//Declarando Método
saudar(){
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
} //return - passagem de parametros dentro da chave
} // console.log não passa parametros
//Instânciando
const pessoa1 = new Pessoa("Ana", 35);
const pessoa2 = new Pessoa("João", 28);
console.log(pessoa1.saudar());
console.log(pessoa2.saudar());

//Nova Claasse
class Carro{
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    //Método
    exibirInfo(){
        return `Carro: ${this.marca} ${this.modelo}`;
    }
}
//Instância
const meuCarro = new Carro("Fusca", "1974");
console.log(meuCarro.exibirInfo());