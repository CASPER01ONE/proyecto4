// Funciones JavaScript
/*
const usuario = document.querySelector('usuario');
const pass = document.querySelector('password');
const button = document.querySelector('button');

button.addEventListener('click', button
)

if (usuario == "151501" && pass == "2023") {

    window.location ="./pag-cliente.html";
    
}
else {
   
    console.log("ingresa los datos de nuevo")
}
*/
// Obtener referencias a los elementos del formulario
const usuarioInput = document.getElementById('usuario');
const contraseñaInput = document.getElementById('contraseña');
const ingresarButton = document.getElementById('button');


ingresarButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  const usuario = usuarioInput.value;
  const contraseña = contraseñaInput.value;
  if(usuario=="1514"&& contraseña=="2023")
  
  window.location.href = './pag-cliente.html';
});