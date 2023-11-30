document.addEventListener('DOMContentLoaded',function() {
    var saludoElement =
    document.getElementById('Saludo');
    var horaActual = new
    Date().getHours();
    

    if ( horaActual >= 5 && horaActual < 12) {
        saludoElement.textContent = '¡Buenos días!';
    } else if (horaActual >= 12 && horaActual < 18) {
        saludoElement.textContent = '¡Buenas tardes!';
    } else {
        saludoElement.textContent = '¡Buenas noches!';
    }
  
});

function enviarFormulario() {
    var Nombre=
    document.getElementById('Nombre').value;
    var Apellido=
    document.getElementById('Apellido').value;
    var gmail=
    document.getElementById('email').value;
    var Comentarios=
    document.getElementById('Comentarios').value;
    var FundacionONG=
    document.getElementById('CV').value;


    if (Nombre === '' || Apellido === '' || email === '' || Comentarios === '' || CV === '' ) {
        alert('Por favor completa todos los campos obligatorios.');
    } else {
        alert('¡Formulario enviado con éxito!');
    
    } 
    window.location.href = 'https://127.0.0.1:5500/index.html';
}