/* Código original do desafio 01
let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = 0; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);
*/




/* Manipulando elementos da página */

function change(valor){
    alert("Voce escolheu a opção "+valor.class)
}

//Não precisa de chamada a função, ao carregar a pagina funciona
function load(){
    alert("Carregou!")
}

/* 
function trocar(){  //não veio nada como parametro
    // o HTML chamou essa função e o getElement eu indico qual elemento estou querendo utilizar 
    document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse por cima do texto"
} */
function trocar(id){  //na chamada da função tem um THIS
    // o HTML chamou essa função e o getElement eu indico qual elemento estou querendo utilizar 
    id.innerHTML = "Obrigado por passar o mouse por cima do texto"
}


function voltar(id){
    console.log(id)
    id.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui"
}


function clicou(){
    document.getElementById('agradecimento').innerHTML="<em>Obrigado por clicar;<em>"; //innerHTML pode inserir textos e HTML em qualquer elemento da página 
    //alert("Obrigado por clicar no botão")
}

function redirencionar(){
    window.open("https://digitalinnovation.one/")  // window.open abre link em outra janela;
    //window.location.href = "https://digitalinnovation.one/"  // abre o link na propira pagina;
}

/* Função Replace 
function mudar(frase, nome, novo){
    return frase.replace(nome,novo)
}
alert(mudar("Vai Japao", "Japao","Brasil"))
*/

/*
function soma(){
    var a =Number(prompt("Informe o primeiro valor",""))  //Number converte o valor que recebemos do prompt em inteiro 
    var b =Number(prompt("Digite o valor que sera somado",""))   
    resultado = a+b
    return "Resultado da soma "+a+"+"+b+"&eacute; igual a : "+resultado
}
alert(soma())
*/

/* chamada de uma função simples
function chegada(arg){
    return "Boas vindas"+ arg
}

alert(chegada(" Bruno Leonardo"))
*/