
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

//*Boton flechita de desplazamiento hacia arriba o Scroll-up*

document.getElementById("go-up").addEventListener("click", subir);

function subir(){
    var desplazamientoActual = document.documentElement.scrollTop;
    if (desplazamientoActual > 0) {
        window.scrollTo (0, 0);
    }
}


// Función acordeón para títulos

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";     
    } 

    else {
        panel.style.display = "block";
      }
  });
}
