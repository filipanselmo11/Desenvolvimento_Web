var inputCor = document.querySelector('[name=cor]');
var outputCor = document.querySelector('[name=valorcor]');

function mostraCor(){
    outputCor.value = inputCor.value;
}

inputCor.oninput = mostraCor;
