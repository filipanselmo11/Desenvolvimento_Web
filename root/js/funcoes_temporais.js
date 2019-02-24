

//Executa minha funcao daqui um segundo//
setTimeout(minhaFuncao, 1000);

//executa minha funcao de um em um segundo//
setInterval(minhaFuncao, 1000);

//agenda uma execução qualquer//
var timer = setInterval(minhaFuncao, 10);

//cancela a execução//

clearInterval(timer);