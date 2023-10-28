let verificacion = "";

function calcularpago() {
    verificacion = verificardatos();
    if (verificacion === "ok") {
        let pagoTotal = total();
        document.getElementById('totalapagar').innerHTML = pagoTotal;
    }
}

function seleccioncategoriaet() {
    document.getElementById('categoria').value = "Estudiante";
}

function seleccioncategoriatr() {
    document.getElementById('categoria').value = "Trainee";
}

function seleccioncategoriajr() {
    document.getElementById('categoria').value = "Junior";
}

function borrar() {
    document.getElementById('totalapagar').innerHTML = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('cantidaddetickets').value = '';
    document.getElementById('categoria').value = document.getElementById('selop').value;
}

function verificardatos() {
    let verificacion = "";
    let dato1 = "";
    let dato2 = "";
    let dato3 = "";
    let dato4 = "";
    let dato5 = "";

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correo').value;
    let cantidad = Number(document.getElementById('cantidaddetickets').value);
    let categoria = document.getElementById('categoria').value;

    if (nombre === '') {
        alert("Debe completar el nombre");
    } else {
        dato1 = "ok";
    }
    if (apellido === '') {
        alert("Debe completar el apellido");
    } else {
        dato2 = "ok";
    }
    if (correo === '') {
        alert("Debe completar el correo");
    } else {
        dato3 = "ok";
    }
    if (cantidad === 0 || cantidad > 100) {
        alert("Debe ingresar cantidad de tickets entre 1 y 100");
    } else {
        dato4 = "ok";
    }
    if (categoria === "Selecciona una opción") {
        alert("Debe seleccionar una categoria");
    } else {
        dato5 = "ok";
    }

    if (dato1 === "ok" && dato2 === "ok" && dato3 === "ok" && dato4 === "ok" && dato5 === "ok") {
        verificacion = "ok";
    }
    return verificacion;
}

function total() {
    let cantidad = Number(document.getElementById('cantidaddetickets').value);
    let categoria = document.getElementById('categoria').value;
    let pagoinicial = cantidad * 200;
    let pagototal = 0;
    if (categoria === "Estudiante") {
        pagototal = pagoinicial * 0.2;
    }
    if (categoria === "Trainee") {
        pagototal = pagoinicial * 0.5;
    }
    if (categoria === "Junior") {
        pagototal = pagoinicial * 0.85;
    }
    return pagototal;
}