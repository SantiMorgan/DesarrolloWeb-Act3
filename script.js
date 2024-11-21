// Generar las opciones de horario
function generarOpcionesHorario() {
    const selectHora = document.getElementById("hora");

    // Limpiar opciones anteriores (si existieran)
    selectHora.innerHTML = '<option value="" disabled selected>Selecciona una hora</option>';

    // Generar opciones desde las 9:00 hasta las 18:00 en intervalos de 30 minutos
    for (let h = 9; h < 18; h++) {
      for (let m = 0; m < 60; m += 30) {
        const hora = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
        const option = document.createElement("option");
        option.value = hora;
        option.textContent = hora;
        selectHora.appendChild(option);
      }
    }
  }

  // Manejar el envío del formulario
  function manejarEnvioFormulario(event) {
    event.preventDefault(); // Evitar recargar la página

    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    // Validar que todos los campos estén llenos
    if (nombre && email && fecha && hora) {
      alert(`¡Turno solicitado con éxito!\n\nNombre: ${nombre}\nCorreo: ${email}\nFecha: ${fecha}\nHora: ${hora}`);
      document.getElementById("turnoForm").reset(); // Reiniciar el formulario
    } else {
      alert("Por favor, completa todos los campos antes de enviar.");
    }
  }

  // Configurar eventos al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    generarOpcionesHorario(); // Generar las opciones de horario al cargar la página

    // Asociar el manejador al formulario
    const formulario = document.getElementById("turnoForm");
    formulario.addEventListener("submit", manejarEnvioFormulario);
  });

  
function calcularPresupuesto() {
    var servicio = document.getElementById("servicio").value;
    var promocion = document.getElementById("promocion").value;
    var precio = 0;

    switch(servicio) {
        case "restauracion":
            precio = 1000;
            break;
        case "pintura":
            precio = 500;
            break;
        case "mecanica":
            precio = 750;
            break;
    }

    switch(promocion) {
        case "descuento10":
            precio *= 0.9;
            break;
        case "descuento20":
            precio *= 0.8;
            break;
    }

    document.getElementById("resultado").innerText = "El presupuesto es: $" + precio;
}
