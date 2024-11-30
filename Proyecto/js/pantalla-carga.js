window.onload = function() {
    var contenedor = document.getElementById('container_carga');
    
    // Iniciar animación de opacidad
    contenedor.style.animation = 'fadeOut 1s ease forwards'; // Aplica la animación

    // Espera a que la animación termine y luego redirige
    setTimeout(function() {
        window.location.href = "index.html";  // Redirige a index.html
    }, 1000);  // Retraso de 1 segundo (el mismo tiempo de la animación)
}

