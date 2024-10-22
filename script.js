function calcularPresupuesto() {
    var servicio = document.getElementById("servicio").value;
    var promocion = document.getElementById("promocion").value;
    var precios = {
        "restauracion": 1000,
        "pintura": 500,
        "mecanica": 750
    };

    var precio = precios[servicio];

    if (promocion === "descuento10") {
        precio *= 0.9;
    } else if (promocion === "descuento20") {
        precio *= 0.8;
    }

    if (!isNaN(precio)) {
        document.getElementById("resultado").innerText = "El presupuesto es: $" + precio.toFixed(2);
    } else {
        document.getElementById("resultado").innerText = "Por favor, selecciona un servicio válido.";
    }
}