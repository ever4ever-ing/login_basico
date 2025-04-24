document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    
    // Obtener valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Validación básica (en un caso real, esto se haría en el servidor)
    if (username === 'admin' && password === '1234') {
        // Credenciales correctas
        errorMessage.textContent = '';
        alert('¡Inicio de sesión exitoso!');
        // Aquí normalmente redirigirías a otra página
        window.location.href = 'dashboard.html';
    } else {
        // Credenciales incorrectas
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
});