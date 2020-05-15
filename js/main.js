//var nome = "Giogio Ricardo";
//var n1 = 40;
//var n2 = 2;
//var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo " + nome);
//alert(nome + " tem " + (n1 + n2) + " anos");
//alert(frase.replace("Japão","Brasil"))
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase.toLocaleLowerCase());
//console.log(frase.toLocaleUpperCase());

//var lista = ["maça", "pera", "laranja"];
//console.log(lista);
//lista.push("uva");
//console.log(lista);
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));

//var fruta = {nome: "maça", cor: "vermelha"};
//console.log(fruta);
//console.log(fruta.nome);
//console.log(fruta.cor);

//var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxo"}];
//console.log(frutas);
//console.log(frutas[0].nome);
//console.log(frutas[1].nome);

//var idade = prompt("Qual sua idade?");
//if (idade >= 18) {
//    console.log(idade + ": maior de idade");
//}else {
//    console.log(idade + ": menor de idade");
//};

//var count = 0;
//while (count <= 5) {
//    console.log(count);
//    count++;
//};

//var contador;
//for(contador=0; contador <= 5; contador++){
//    console.log(contador);
//};

//var d = new Date();
//console.log(d);
//console.log(d.getDate());
//console.log(d.getFullYear());
//console.log(d.getMonth() + 1);

//function soma(n1, n2){
//    return n1 + n2;
//};

//console.log(soma(5,7));

//function setReplace(frase, var1, var2){
//    return frase.replace(var1,var2);
//};

//console.log(setReplace("Vai Japão","Japão","Brasil"));

//function validaIdade(idade){
//    if (idade >= 18){
//        return true;
//    }else{
//        return false;
//    }
//}

//var idade = prompt("Qual sua idade?");
//console.log(validaIdade(idade));

//function clicou(){
//    alert("Obrigado por selecionar nossa loja");
//}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por selecionar nossa loja";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.globo.com");
//    window.location.href = "https://www.uol.com.br";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //console.log("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //console.log("trocar texto");
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    console.log("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}