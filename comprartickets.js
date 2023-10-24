function calcularpago(){
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
function borrar(){
    document.getElementById('totalapagar').innerHTML = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('cantidaddetickets').value = '';
}