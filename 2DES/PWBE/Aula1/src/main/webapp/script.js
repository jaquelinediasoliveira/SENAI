var nome = document.querySelector("#nome");
var doc = document.querySelector("#doc");
var nasc = document.querySelector("#nasc");
var reg = document.querySelector("#reg");
var tipo = document.querySelector("#tipo");

var bt = document.querySelector("input[type=submit]");

function edita(e){
	let linha = e.parentNode.parentNode.querySelectorAll("td");
	nome.value = linha[0].innerHTML;
	reg.value = linha[1].innerHTML;
	nasc.value = linha[2].innerHTML;
	doc.value = linha[3].innerHTML;
	tipo.value = 1;
	bt.value = "Editar";
}

function excluir(e){
	let linha = e.parentNode.parentNode.querySelectorAll("td");
	nome.value = linha[0].innerHTML;
	reg.value = linha[1].innerHTML;
	nasc.value = linha[2].innerHTML;
	doc.value = linha[3].innerHTML;
	tipo.value = 2;
	bt.value = "Excluir";
}