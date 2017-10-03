'use strict'
     // Creo mi objeto literal con sus propiedades y métodos
const wizar = {
    // propiedad que actualiza el número de preguntas
    iniciarNroPregunta: 0,
    // propiedad que actualiza la barra de progreso
    inicioPorcentaje: 0,
    // propiedad que almacena las preguntas, respuestas, imágenes y respuestas correctas
    cuestionario: [{
            pregunta: 'Who was the pinter of heavy forms?',
            respuestas: ['Botero', 'Velásquez', 'Picaso'],
            direccionIMG: 'assets/img/avion.png',
            respuestaCorrecta: 'Botero'
        },
        {
            pregunta: 'Who is the writer of Rayuela?',
            respuestas: ['Cortázar', 'Vargas', 'Bolaños'],
            direccionIMG: 'assets/img/barco.png',
            respuestaCorrecta: 'Cortázar'
        },
        {
            pregunta: 'What is the real name of Quino?',
            respuestas: ['Joaquín', 'Geremías', 'Salvador'],
            direccionIMG: 'assets/img/bici.png',
            respuestaCorrecta: 'Lavado'
        },

        {
            pregunta: 'What is the real name of Quino?',
            respuestas: ['Joaquín Lavado', 'Geremías Gamboa', 'Roberto Bolaños'],
            direccionIMG: 'assets/img/bici.png',
            respuestaCorrecta: 'Joaquín Lavado'
        }
  
    ],
// método que genera las preguntas en HTML y el evento Click (en las opciones),para así pasar al siguiente cuestionario
    inicio: () => {
        console.log(wizar.cuestionario);
        wizar.dibujarpreguntasHTML();
        $('.col-xs-5').click(wizar.siguientePregunta);
    },
// método que dibuja las preguntas en Html (utilizo jQuery)    
    dibujarpreguntasHTML : () => {
        $('#mostrarIMG').append(`<img src='${wizar.cuestionario[wizar.iniciarNroPregunta].direccionIMG}' class='img-responsive'>`);
        $('#mostrarProgreso').append(`<div class="progress progress-striped active">\
            <div class="progress-bar" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: ${wizar.inicioPorcentaje}%">\
                <span class="sr-only"></span></div></div>`);
        $('#mostrarPregunta').append(`<p>${wizar.cuestionario[wizar.iniciarNroPregunta].pregunta}</p>`);
        $('#mostrarRespuestas').append(`<div class="row justify-content-xs-center ">\
                <div class="col-xs-5 col-sm-5"> A ${wizar.cuestionario[wizar.iniciarNroPregunta].respuestas[0]}</div>\
                <div class="col-xs-5 col-sm-5"> B ${wizar.cuestionario[wizar.iniciarNroPregunta].respuestas[1]}</div>\
                <div class="col-xs-5 col-sm-5"> C ${wizar.cuestionario[wizar.iniciarNroPregunta].respuestas[2]}</div>\
            </div>`);
        // actualizo la barra de progreso en el porcentaje proporcional al número de preguntas    
        wizar.inicioPorcentaje += 25;
    },

    // método que genera la siguiente pregunta 
    siguientePregunta: () => {
        wizar.iniciarNroPregunta += 1;
        if(wizar.iniciarNroPregunta == wizar.cuestionario.length){
            wizar.iniciarNroPregunta = 0;
        }else{
            wizar.eliminarHijos();
            wizar.inicio();
        }
    },
    // método que borra las preguntas ya respondidas
    eliminarHijos : () =>{
        $('#mostrarIMG').empty();
        $('#mostrarProgreso').empty();
        $('#mostrarPregunta').empty();
        $('#mostrarRespuestas').empty();
    }
}

$(document).ready(wizar.inicio);