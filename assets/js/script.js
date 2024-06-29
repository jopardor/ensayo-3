









// INDEX-CONTENEDOR-7***********OFFCANVAS***************************


// OFFCANVAS


const offcanvasEjemplo = document.getElementById('offcanvasExample')

offcanvasEjemplo.addEventListener('show.bs.offcanvas', function(event){
  console.log('se está abriendo el offcanva');


  const valor1 = document.getElementById('inputTitulo').value
  const valor2 = document.getElementById('inputContenido').value

  
  let boton = event.relatedTarget // etiquetado-relacionado
  let mensaje = boton.getAttribute('data-titulo')
  let contenido = boton.getAttribute('data-content') 

  // document.getElementById('tituloOffcanvas').innerText = mensaje 
  // document.getElementById('bodyOffcanvas').innerText = contenido

  if (valor1 === '') {
    document.getElementById('tituloOffcanvas').innerHTML = mensaje;
} else {
    document.getElementById('tituloOffcanvas').innerHTML = 'Felicidades! ' + valor1+ ', ya tienes tu Cupón de un 20%! ';
}

if (valor2 === '') {
    document.getElementById('bodyOffcanvas').innerHTML = contenido;
} else {
    document.getElementById('bodyOffcanvas').innerHTML = 'Hemos enviado el código de tu descuento a tu correo ' + valor2 + ', para que lo utilices en tu primera compra! ';
}


});









//***********JQUERY******************

$('.elevar-contenedor').hover(
  function() {
      $(this).addClass('elevated');
  }, function() {
      $(this).removeClass('elevated');
  }
);



$('.zoom-contenedor').hover(
  function() {
      $(this).addClass('zoomin');
  }, function() {
      $(this).removeClass('zoomin');
  }
);












