/*Ventana Emergente*/
document.getElementById('boton1').addEventListener('click', function() {
    toggleVentana('ventana1');
});
document.getElementById('boton2').addEventListener('click', function() {
    toggleVentana('ventana2');
});
document.getElementById('boton3').addEventListener('click', function() {
    toggleVentana('ventana3');
});
document.getElementById('boton4').addEventListener('click', function() {
    toggleVentana('ventana4');
});

function toggleVentana(ventanaId) {
    var todasLasVentanas = document.querySelectorAll('.ventana');
    todasLasVentanas.forEach(function(ventana) {
        if(ventana.id !== ventanaId) {
            ventana.style.display = 'none';
        }
    });

    var ventana = document.getElementById(ventanaId);
    if (ventana.style.display === 'none' || ventana.style.display === '') {
        ventana.style.display = 'block';
    } else {
        ventana.style.display = 'none';
    }
}