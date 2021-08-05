/*JS da pagina HTML da aula 01*/

/*
    alert("Hello Word!")
    console.log("Hello World") // escreve no console do navegador
    nome = ["manga","uva","laranja","melao"] //cria array
    nome.push("goiaba","meleca")  // adiciona mais dois elementos ao array mesmo depois de inicializado
    nome.pop() // exclui o elemento da ultima posição do array, neste caso: meleca
    console.log(nome) //escreve todo o array no console
    console.log("Agora converter em string:")
    console.log(nome.toString()) //transforma em string e escreve no console;
    console.log(nome.toString()[0]) //escreve a primeira letra da string que antes era um array;
    console.log(nome.join(" ; ")) // subistitui o separador virgula(,) por Ponto e virgula (;) 
    console.log("Array possui "+nome.length + " posições;")  //tamanho  
    console.log(nome.reverse())  //inverter a posição, ultimo para primeiro
*/
    //dicionario e listas de dicionarios
/*
    var fruta = {nome:"maca", cor:"vermelho",sabor:"doce"} // dicionario
    var verdura = [{nome:"pimentao", cor:"verde",sabor:"leve"},{nome:"tomate", cor:"vermelho",sabor:"azedo"}] // listas dicionario
    console.log(fruta.nome)
    console.log(verdura[0].nome)
    console.log(verdura)
*/
    //condicional e prompt
/*
    var idade = prompt("Qual sua  idade?")
    console.log(idade)
    if(idade <=18){
        console.log("Usuario menor de idade")
        alert("Usuario de menor")
    }else{
        console.log("Usuario maior de idade")
        alert("Usuário de maior")
    }


    //estrutura de repetição WHILE
    var i=0
    while(i<=5 ){
        console.log("estrutura de repet while:"+i)
        i++
    }
    //estrutura de repetição FOR
    for(count=0; count <= 5; count++){
        console.log("estrutura de repet FOR:"+count)
    }
*/
    // Datas: 
    var d = new Date();
    var mes = d.getMonth()+1;
    console.log("Imprimindo new Date() "+"\n"+d) //Imprime toda imformação da data
    console.log("Imprimindo d.getDate() " + d.getDate()) //vai imprimir apenas o dia do mês (a começar por zero) 
    console.log("Imprimindo d.getDay() " + d.getDay()) //vai imprimir o dia da semana (em número: 0=Domingo, 1=Seg, 2=Ter, etc)
    console.log("Imprimindo d.getMonth() "+ mes) //(em número: 0=Jan, 1=Fev, 2=Mar, etc) 
    // console.log() //vai imprimir o dia do mês 
    console.log("Hora atual "+d.getHours()+":"+d.getMinutes())

/*
    var dia;
    switch(d.getDay()){
        
        case 0:
        dia = "Domingo"    
            console.log(dia)
            break
        case 1:
        dia = "Segunda-feira"    
            console.log(dia)
            break
        case 2:
            dia="Terça-feira"
            console.log(dia)
            break
        case 3:
            dia="Quarta-feira"
            console.log(dia)
            break
        case 4:
            dia="Quinta-feira"
            console.log(dia)
            break
        case 5:
            dia="Sexta-feira"
            console.log(dia)
        case 6:
            dia="Sábado"
            console.log(dia)
            break
            default:
                dia="Dia invalido, confira o script"
    }
  
    // alert("Hoje é: "+dia)

    function soma(a,b){
        return a+b
    }
    alert(soma(10,5))

    function setReplace(frase, nome, novo_nome){
        return frase.replace(nome,novo_nome)
    }
    alert(setReplace("A melhor bebida para matar a sede é a Coca","Coca", "água"))

*/

//manipulando elementos da página

//document.getElementById
// desafio criar uma tabela e colocar um botão que acrescente uma nova linha