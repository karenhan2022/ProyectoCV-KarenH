
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


// Botón Flechita para subir Scroll-top

let botonSubir = document.getElementById("go-up");

botonSubir.addEventListener("click", subir);

function subir(){
    let desplazamientoActual = document.documentElement.scrollTop;
    if (desplazamientoActual > 0) {
        window.scrollTo (0, 0);
    }
}

window.onscroll = function() {mostrarBotonSubir()};

function mostrarBotonSubir() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      botonSubir.style.display = "block";
    } else {
      botonSubir.style.display = "none";
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



// LocalStorage

if (localStorage.clickcount) {
  localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
  localStorage.clickcount = 1;
}