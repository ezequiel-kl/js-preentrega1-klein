
function tipo(persona){
    if(persona == 1) {
        alert('Elegiste Piedra');
    } else if(persona == 2) {
        alert('Elegiste Papel');
    } else if(persona == 3) {
        alert('Elegiste Tijera');
    } else if(persona == 4) {
        alert('Elegiste Lagarto');
    } else if(persona == 5) {
        alert('Elegiste Spock');
    }
}

function maquina(sheldon){
    if(sheldon == 0) {
        alert('Sheldon usó Piedra');
    } else if(sheldon == 1) {
        alert('Sheldon usó Papel');
    } else if(sheldon == 2) {
        alert('Sheldon usó Tijera');
    } else if(sheldon == 3) {
        alert('Sheldon usó Lagarto');
    } else if(sheldon == 4) {
        alert('Sheldon usó Spock');
    }
}

function validar(sheldon, persona){
    if(sheldon == (persona-1)) {
        alert('En la universidad tambien te copiabas?');
    } else if(sheldon == 0 && persona == 2) {
        alert('Papel envuelve piedra, tuviste suerte.');
    } else if(sheldon == 1 && persona == 3) {
        alert('Tijera corta papel, tuviste suerte.');
    } else if(sheldon == 2 && persona == 1) {
        alert('Piedra apalasta tijera, tuviste suerte.');
    } else if(sheldon == 2 && persona == 5) {
        alert('Spock rompe tijera, tuviste suerte.');
    } else if(sheldon == 4 && persona == 3) {
        alert('Lagarto envenena Spock, tuviste suerte.');
    } else if(sheldon == 1 && persona == 4) {
        alert('Lagarto devora papel, tuviste suerte.');
    } else if(sheldon == 0 && persona == 5) {
        alert('Spock vaporiza piedra, tuviste suerte.');       
    } else if(sheldon == 4 && persona == 2) {
        alert('Papel desautoriza Spock, tuviste suerte.');       
    } else if(sheldon == 3 && persona == 3) {
        alert('Tijera decapita lagarto, tuviste suerte.');       
    } else if(sheldon == 0 && persona == 4) {
        alert('Piedra aplasta lagarto, tuviste suerte.');       
    }
    else {
        alert('There there');
    }
}

alert('Hola humano promedio, elije bien, de todas formas voy a ganar');
let confirmacion=1;
while (confirmacion!=2) {
    let bandera = false;
    let persona = null;

    do{
    persona = prompt('Opciones: 1 para Piedra, 2 para Papel, 3 para Tijera, 4 para Lagarto, 5 para Spock');
    if((persona >= 1) && (persona <= 5)){
        bandera=true;
        tipo(persona);
    } else if(bandera = false);
    }while (bandera == false);
    while(bandera == true) {

        let sheldon = Math.round(Math.random() * 2);
        maquina(sheldon);
        
        validar(sheldon, persona);
        bandera=false;
    }

    do{
        confirmacion = prompt('¿Ya te rindes? (1 para continuar o 2 para salir)');
    } while ((confirmacion!=1) && (confirmacion!=2));
}

alert('Algun día quizás seas mejor, pero no lo creo')