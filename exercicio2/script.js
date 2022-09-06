let idade = prompt ("Qual a sua idade ?")
let isMaiorIdade = confirm ("Você ja concluiu o ensino médio ?")
let isCursandoOutraFaculdade = confirm ("Você esta cursando alguma faculdade ?")

if(idade >= 18){
console.log ("A pessoa é maior de idade")
}else{
	console.log("A pessoa é menor de idade")
}

if(isMaiorIdade === true){
    console.log("A pessoa concluiu o ensino médio")
}else{
    console.log("A pessoa não concluiu o ensino médio")
}

if(isCursandoOutraFaculdade === false){
    console.log("A pessoa não esta cursando a faculdade")
}else {
    console.log("A pessoa esta cursando alguma faculdade") 
}