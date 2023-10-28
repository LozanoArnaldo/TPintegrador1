function calcularpago(){
    verificardatos();

     total();

}
function seleccioncategoriaet(){
     document.getElementById('categoria').value = "Estudiante";
}
function seleccioncategoriatr(){
    document.getElementById('categoria').value = "Trainee";
}
function seleccioncategoriajr(){
    document.getElementById('categoria').value = "Junior";
}
function borrar(){
    document.getElementById('totalapagar').innerHTML = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('cantidaddetickets').value = '';
    document.getElementById('categoria').value = document.getElementById('selop').value;
}

function verificardatos(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correo').value;
    let cantidad=Number(document.getElementById('cantidaddetickets').value);
    let categoria=document.getElementById('categoria').value;
    if( nombre == ''){
       alert("Debe completar el nombre");
    }
    if(apellido == ''){
        alert("Debe completar el apellido");
     }
     if(correo == ''){
        alert("Debe completar el correo");
     }
     if(cantidad == 0 || cantidad > 100){
        alert("Debe ingresar cantidad de tickets entre 1 y 100");
     }  
     if(categoria == "Selecciona una opción"){
        alert ("Debe seleccionar una categoria");
     }

     
}
function total(){
    let cantidad=Number(document.getElementById('cantidaddetickets').value);
        let categoria=document.getElementById('categoria').value;
    let pagoinicial = cantidad * 200;
    if(categoria == "Estudiante" ) {
        let pagototal = Number(pagoinicial * 0.2);
        document.getElementById('totalapagar').innerHTML = pagototal;
    }
    if(categoria == "Trainee" ) {
        let pagototal = Number(pagoinicial * 0.5);
        document.getElementById('totalapagar').innerHTML = pagototal;
    }
    if(categoria == "Junior" ) {
        let pagototal = Number(pagoinicial * 0.85);
        document.getElementById('totalapagar').innerHTML = pagototal;
    }
}
