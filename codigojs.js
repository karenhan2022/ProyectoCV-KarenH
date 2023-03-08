
// Función para cambiar sección Contacto por formulario de contacto

document.getElementById("form-show").onclick = function () {
    document.getElementById("form-message").style.display = "none";
    document.getElementById("form-full").style.display = "block";
}

// Función para cambiar sección mensaje por sección formulario 
    document.getElementById("form-back").onclick = function () {
    document.getElementById("form-full").style.display = "none";
    document.getElementById("form-message").style.display = "block";
}