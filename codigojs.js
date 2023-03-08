
// Función para cambiar Info de contacto por Formulario completo

    document.getElementById("form-show").onclick = function () {
    document.getElementById("form-message").style.display = "none";
    document.getElementById("form-full").style.display = "block";
}

// Función para cambiar Formulario completo por Info de contacto 
    document.getElementById("form-back").onclick = function () {
    document.getElementById("form-full").style.display = "none";
    document.getElementById("form-message").style.display = "block";
}


// Función para validar los campos del formulario
function validarform() {
    let name;
    let email;
    let expresion;
    name = document.getElementById("form-name").value;
    email = document.getElementById("form-email").value;
    expresion = /\w+@+\w+\.+[a-z]/;

    if (name === "" || email === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (name.length > 24){
        alert("El nombre es muy largo");
        return false;
    }

    else if (email.length > 30){
        alert("El correo es muy largo");
        return false;
    }

    else if(!expresion.test(email)){
        alert("El correo no es válido");
        return false;
    }

}