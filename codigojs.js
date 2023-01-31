
// Función para cambiar sección formulario por sección mensaje 
document.getElementById("form-button").onclick = function () {
    document.getElementById("form-full").style.display = "none";
    document.getElementById("form-message").style.display = "block";
}

// Función para cambiar sección mensaje por sección formulario 
document.getElementById("form-back").onclick = function () {
    document.getElementById("form-message").style.display = "none";
    document.getElementById("form-full").style.display = "block";
}

