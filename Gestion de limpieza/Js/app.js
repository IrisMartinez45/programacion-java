function calcular() {
    const precios = {
        "Jabon_liquido": 50,
        "Detergente_barra": 45,
        "Escoba": 60,
        "Trapeador": 60,
        "Cepillo_bano": 40,
        "Esponja": 25,
        "Cloro": 20,
        "Papel_higienico": 25,
        "Bolsas_basura": 10,
    };

    const producto = document.getElementById('producto').value;
    const cantidad = parseFloat(document.getElementById('cantidad_entregada').value);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor ingrese una cantidad válida.");
        return;
    }

    const precio = precios[producto];
    const total = precio * cantidad;

    document.getElementById('producto_entregado').value = producto;
    document.getElementById('Total').value = total + " Lps";
}

function Nuevo_Registro() {
    document.getElementById('nombre_encargado').value = '';
    document.getElementById('nombre_empleado').value = '';
    document.getElementById('producto_entregado').value = '';
    document.getElementById('cantidad_entregada').value = '';
    document.getElementById('fecha_entrega').value = '';
    document.getElementById('Total').value = '';
}