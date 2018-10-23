/* aula10_ex01.js */

function inicio() {
	document.gentElementById('nome').disabled = "true";
	document.gentElementById('email').disabled = "true";
	document.gentElementById('cidade').disabled = "true";
	document.gentElementById('endereço').disabled = "true";
	document.gentElementById('bairro').disabled = "true";
}	

function validar formulário(){
	document.gentElementById('endereço').disabled = "false";
	document.gentElementById('bairro').disabled = "false";
	document.gentElementById('cidade').disabled = "false";
} 

function()A{
	document.gentElementById('nome').style.display = "block";
	document.gentElementById('endereço').style.display = "false";
	document.gentElementById('bairro').style.display = "false";
}

function()B{
	document.gentElementById('nome').style.display = "false";
	document.gentElementById('endereço').style.display = "false";
	document.gentElementById('bairro').style.display = "false";
}

function()C1{
	document.gentElementById('nome').style.display = "nome";
	document.gentElementById('endereço').style.display = "nome";
	document.gentElementById('bairro').style.display = "block";
}



