let Pessoa1 : {nome:string, idade:number, profissao:string}= 
{nome : "maria",
idade : 29,
profissao : "atriz"
}
interface Pessoa2  {
    nome: string,
    idade: number,
    profissao: string
}
const roberto :Pessoa2 = {
    nome : "roberto",
    idade : 19,
    profissao : "Padeiro"
    
}
let laura: Pessoa2 = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let carlos:Pessoa2 = {
    nome : "carlos",
    idade : 19,
    profissao : "padeiro"
}

console.log(`Meu nome é ${laura.nome} e tenho ${laura.idade} anos.  Minha profissão é ${laura.profissao}`);