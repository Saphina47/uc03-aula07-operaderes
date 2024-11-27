//Crie uma programa que valida se uma pessoa  pode entrar em uma festa
//As regras para pessoa entrar são
// A pessoa precisar ter 18 anos ou mais
// Ou caso a pessoa ter menos de 18 anos
// Deve estar acompanhando de um responsável
// Todos devem apresentar o RG para entrar


//ENTRADA
const idadePessoa = 17;
const estaComresponsavel = true;
const estaComRG = true;


 //PROCESSAMENTO
// if condição se
//else condição senão

if (idadePessoa >= 18) {
    console.log("entrada Liberada");
}else{
    console.log("Entrada Bloqueada");
}

if (estaComRG){
    (idadePessoa >= 18) {
        console.log ("Entrada Liberada")
    }else {
        if (estaComresponsavel){
            console.log("Entrada Liberada")
        }else{
            console.log ("Entrada Bloqueada")
        }
    }
    else{
        console.log("Entrada Liberada")
    }
}

// if (estaComRG && (idadePessoa  >= 18 || estaComresponsavel)){
// console.log("Entrada Liberada");
}else {
    console.log("entrada bloqueda");
//}

