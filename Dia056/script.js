const usuario = {
    nome: "Igor",
    contato: {
        email: "igor@email.com"
    }
};


const email = usuario.contato?.email;
const telefone = usuario.contato?.telefone;
const endereco = usuario?.endereco;

console.log(email);
console.log(telefone);//undefined
console.log(endereco);//undefined