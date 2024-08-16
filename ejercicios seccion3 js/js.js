let pantalla = document.getElementById('pantalla')
function numeros(valor){
    pantalla.value += valor;
}

function resultado (){
    let res = eval(pantalla.value);
    pantalla.value = res;
}

function borrar (){
    pantalla.value = ''
}
