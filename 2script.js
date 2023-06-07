let matriz = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]   
];

let marcador = 0; 
let casillaSelec = null;


function mostrarMatriz(){
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            let valor = matriz[i][j];
            let divId = i.toString() + j.toString();
            let divElement = document.getElementById(divId);
            divElement.textContent = valor.toString();
        }

    }
}

function rellenar(){
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            matriz[i][j] = Math.floor(Math.random() * 50) + 1;
        }
    }
}

function marcar(event){
    let divElement = event.target;
        if (casillaSelec === null){
            casillaSelec = divElement;
            divElement.style.backgroundColor = "#84c3be";
        }else{
            if(casillaSelec.textContent === divElement.textContent){
                marcador ++;
                casillaSelec.style.backgroundColor = '';
                divElement.style.backgroundColor = '';
            } else {
                casillaSelec.style.backgroundColor = '';
                divElement.style.backgroundColor = '';
            }
            casillaSelec = null;
        }
        let marcadorElement = document.getElementById('marcador');
        marcadorElement.textContent = 'Marcador: ' + marcador;
}



window.addEventListener('load', function(){
    rellenar();
    mostrarMatriz();
    let divElement = document.querySelectorAll('#cabecera div');
    divElement.forEach(function(divElement){
        divElement.addEventListener('click', marcar);
    });
});

