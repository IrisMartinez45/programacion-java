function   agregarDatos(){
    //recolectar información
    let nombre=prompt("Ingrese tu Nombre");
    let edad=prompt("Ingrese tu edad");
    
    //Apuntar a la tabla creada a traves de un ID
    let tabla = document.getElementById('tablaPersonas');
    //crear una nueva fila(tr)
    
    //asignar texto a las tablas
    let fila=""
    fila+=`
    <tr><td>${nombre}</td><td>${edad}</td></tr>`;
    tabla.innerHTML+=fila;
   
    }