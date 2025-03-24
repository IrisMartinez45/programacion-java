let valor1 //declarar dos variables globales
 let operacion

function uno(){
    valor=document.getElementById('pantalla').value
    if (valor===""){
        valor=0
    }
    document.getElementById('pantalla').value=10*(parseInt(valor))+1
}

function dos(){
    valor=document.getElementById('pantalla').value
    if (valor===""){
        valor=0
    }
    document.getElementById('pantalla').value=10*(parseInt(valor))+2
}

function tres(){
    valor=document.getElementById('pantalla').value
    if (valor===""){
        valor=0
    }
    document.getElementById('pantalla').value=10*(parseInt(valor))+3
}

function cuatro(){
    valor=document.getElementById('pantalla').value
    if (valor===""){
        valor=0
    }
    document.getElementById('pantalla').value=10*(parseInt(valor))+4
}



function suma(){
    valor1=document.getElementById('pantalla').value
    operacion="suma"
    document.getElementById('pantalla').value=0
}

function resta(){
    valor1=document.getElementById('pantalla').value
    operacion="resta"
    document.getElementById('pantalla').value=0
    
}


function igual(){
   
    if(operacion=='suma'){
    valor2=document.getElementById('pantalla').value
    let total=parseInt(valor1)+parseInt(valor2)
    document.getElementById('pantalla').value=total
    valor1=document.getElementById('pantalla').value
    Swal.fire({
        title: "¡Suma bien hecha!",
        icon: "success",
        draggable: true
      });
}

else if(operacion=='resta'){
    valor2=document.getElementById('pantalla').value
    let total=parseInt(valor1)-parseInt(valor2)
    document.getElementById('pantalla').value=total
    valor1=document.getElementById('pantalla').value
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "¡Excelente!",
        showConfirmButton: false,
        timer: 1500
      });
}

else if (operacion === 'multiplicacion') {
    valor2 = document.getElementById('pantalla').value
    let total = parseInt(valor1) * parseInt(valor2)
    document.getElementById('pantalla').value = total
    valor1 = document.getElementById('pantalla').value
    Swal.fire({
        title: "¡Muy buen trabajo, sigue así!",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
}


else if (operacion === 'division') {
    valor2 = document.getElementById('pantalla').value
    let total = parseInt(valor1) / parseInt(valor2)
    document.getElementById('pantalla').value = total
    valor1 = document.getElementById('pantalla').value
    Swal.fire("¡Excelente, tu división está bien!");
}

}

  
function cinco(){
    valor=document.getElementById('pantalla').value
    if (valor===""){
        valor=0

    }
    document.getElementById('pantalla').value=10*(parseInt(valor))+5


}


function seis(){
    valor=document.getElementById('pantalla').value
    if (valor===""){
        valor=0

    }
    document.getElementById('pantalla').value=10*(parseInt(valor))+6


}


function siete(){
    valor=document.getElementById('pantalla').value
    if (valor===""){
        valor=0

    }
    document.getElementById('pantalla').value=10*(parseInt(valor))+7


}


function ocho(){
    valor=document.getElementById('pantalla').value
    if (valor===""){
        valor=0

    }
    document.getElementById('pantalla').value=10*(parseInt(valor))+8


}


function nueve(){
    valor=document.getElementById('pantalla').value
    if (valor===""){
        valor=0

    }
    document.getElementById('pantalla').value=10*(parseInt(valor))+9


}


function cero(){
    valor=document.getElementById('pantalla').value 
    if (valor===""){
        valor=0

    }
    document.getElementById('pantalla').value=10*(parseInt(valor))+0


}


function multiplicacion(){
    valor1=document.getElementById('pantalla').value
    operacion="multiplicacion"
    document.getElementById('pantalla').value=0
    }
    
    function division(){
    
        valor1=document.getElementById('pantalla').value
        operacion="division"
        document.getElementById('pantalla').value=0
    }


