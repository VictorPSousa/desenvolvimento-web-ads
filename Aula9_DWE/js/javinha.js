/*

JAVASCRIPT É CASE SENSITIVE

alert('Olá, Mundo!');
document.write('Olá, Mundo!');
*/

function alerta(){
    var nome = prompt("Digite seu nome: ");
    var idade = 18;
    var altura = 1.69;
    var filho = true;
    alert("Nome " + nome + " Minha idade " + idade);
}

function contar(){
    // PROMPT RECEBE TEXTO
    var n1 = prompt("Digite um valor");
    var n2 = prompt("Digite outro valor");
    var total = n1 + n2;
    // OCORREU A CONCATENAÇÃO

    var conta = parseInt(n1)+parseInt(n2);
    alert("Total: "+conta);
}

function calcular(){
    var v1 = document.getElementById("cxa1").value;
    var v2 = document.getElementById("cxa2").value;
    
    var Total = parseInt(v1)+parseInt(v2);
    document.getElementById("res").value = Total;
}

function imc(){
    var nome = document.getElementById("nome").value
    var alt = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var imc = peso/(alt*alt);
    alert(nome+" seu IMC é de "+imc.toFixed(2));
    
    /*if(imc < 18.5){
        input "Peso Baixo";   
    }else{
        
    }*/
    //document.getElementById("result").value = imc.toFixed(2);
}

// Ou colocar o parseInt no prompt
// alerta();

// document.write(nome);
// alert(nome);