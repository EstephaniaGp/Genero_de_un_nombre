
function detectarGenero(){
    
    let nombre_ingresado = (document.getElementById('nombre').value);
    let letra = nombre_ingresado[nombre_ingresado.length - 1];
    
    console.log(letra);

    if(letra == 'a'){
        resultado.innerHTML = ('Es mujer');
    }
    else{
        resultado.innerHTML = ('Es Hombre');
    }
}

