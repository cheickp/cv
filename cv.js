function afficher(val) {
	$("#"+val).toggle();
}

function valider(){
	console.log($("#email").val().includes("@"));
	if(!$("#email").val().includes("@")){
		window.alert("l'Adresse mail saisie est incorrect et doit contenir '@', veuillez recommencer!");
	}
	
	console.log($("#Téléphone").val().length);
	if($("#Téléphone").val().length != 10){
		window.alert("Le numéro de téléphone n'est pas conforme, il doit avoir 10 chiffres!");	
	}
}