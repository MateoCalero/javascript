function limpiar(){
    document.getElementById('formulario').reset();
}

function sumar(){
    let n1=parseInt(document.getElementById('valor1').value);
    let n2=parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=n1+n2;
}

function restar(){
    let n1=parseInt(document.getElementById('valor1').value);
    let n2=parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=n1-n2;
}

function multiplicar(){
    let n1=parseInt(document.getElementById('valor1').value);
    let n2=parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=n1*n2;
}

function dividir(){
    let n1=parseInt(document.getElementById('valor1').value);
    let n2=parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=n1/n2;
}