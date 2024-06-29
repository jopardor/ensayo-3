
let contenidoTraducido = document.getElementById('contenidoTraduccion')
let boton = document.getElementById('traductor')
let contenedorPersonas = document.getElementById('listaPersonas')
let html

$('document').ready(function(){
    $.ajax({
        url: 'espanol.html',
        type: 'get',
        success: function(respuesta){
            contenidoTraducido.innerHTML = respuesta
        },
        error: function(){
            console.log('No carga el archivo');
        }
    })

    $('#traductor').click(function(){
        $(this).toggleClass('idioma');

        if(boton.getAttribute('class','idioma')){
            $.get({
                url: 'ingles.html',
                success: function(respuesta){
                    contenidoTraducido.innerHTML = respuesta
                    boton.innerText = 'Translate'
                }
            })
        } else {
            $.get({
                url: 'espanol.html',
                success: function(respuesta){
                    contenidoTraducido.innerHTML = respuesta
                    boton.innerText = 'Traducir'
                }
            })
        }
    });



    //LISTA DE DISEÑADORES

    $.getJSON({
        url: 'equipo.json',
        success: function(respuesta){
            $.each(respuesta, function(index,persona){
                html = '<div class="col-3">';
                    html += '<div class="card">';
                        html += '<img src="'+ persona.image +'" class="card-img-top" alt="'+ persona.name +'">';
                        html += '<div class="card-body">';
                            html += '<h5 class="card-title">'+ persona.name +'</h5>';
                            html += '<p class="card-title">'+ persona.cargo +'</p>';
                        html += '</div>';
                    html += '</div>';
                html += '</div>';

                $('#listaPersonas').append(html);
            })
        },
        error: function(){
            contenedorPersonas.innerHTML = 'No funciona'
        }
    })






});