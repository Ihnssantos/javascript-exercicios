const pessoa = {
    nome: "Igor",
    idade: 25,
    profissao: "Desenvolvedor",

    apresentar: function() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
    }
}

pessoa.apresentar();