// Inicializar EmailJS
// IMPORTANTE: Debes registrarte en https://www.emailjs.com/ y obtener tus credenciales
// Reemplaza 'YOUR_PUBLIC_KEY' con tu clave pública de EmailJS
// Reemplaza 'YOUR_SERVICE_ID' y 'YOUR_TEMPLATE_ID' con tus IDs

// Descomentar la siguiente línea cuando tengas tu Public Key de EmailJS
// emailjs.init('YOUR_PUBLIC_KEY');

// Manejar envío del formulario de contacto con EmailJS
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Validación básica
        if (!nombre || !email || !mensaje) {
            mostrarRespuesta('error', 'Por favor, completa todos los campos obligatorios.');
            return;
        }
        
        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarRespuesta('error', 'Por favor, introduce un email válido.');
            return;
        }
        
        // Mostrar indicador de carga
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // OPCIÓN 1: Usar EmailJS (Recomendado - descomenta cuando configures EmailJS)
        /*
        const templateParams = {
            from_name: nombre,
            from_email: email,
            phone: telefono,
            subject: asunto,
            message: mensaje
        };
        
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                mostrarRespuesta('success', '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                setTimeout(() => {
                    document.getElementById('formResponse').style.display = 'none';
                }, 5000);
            }, function(error) {
                console.log('FAILED...', error);
                mostrarRespuesta('error', 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos por WhatsApp.');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
        */
        
        // OPCIÓN 2: Simulación temporal (mientras configuras EmailJS)
        // Elimina este bloque cuando actives EmailJS
        setTimeout(() => {
            mostrarRespuesta('success', '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            setTimeout(() => {
                document.getElementById('formResponse').style.display = 'none';
            }, 5000);
        }, 1500);
    });
}
