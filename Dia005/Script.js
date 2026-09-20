let temCarteira = true;
let temCarro = false;

let podeDirigirCarro = temCarteira && temCarro; //false
let temCarteiraOuCarro = temCarteira || temCarro; //true
let naoTemCarteira = !temCarteira; //false

console.log(podeDirigirCarro);
console.log(temCarteiraOuCarro);
console.log(naoTemCarteira);

