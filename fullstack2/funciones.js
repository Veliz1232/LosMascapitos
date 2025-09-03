function EnviarMensaje(){
    let nombreCompleto = document.getElementById("fullName");
    let correo = document.getElementById("Correo");
    let contenido = document.getElementById("Contenido");
    if(nombreCompleto.value.trim()==""){
        alert("Ingresa un nombre valido")
        nombreCompleto.focus();
    }

    if(correo.value.trim()==""){
        alert("Ingresa un correo valido")
    }

    if(contenido.value.trim()==""){
        alert("Ingresa el mensaje")
    }
}