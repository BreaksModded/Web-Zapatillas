document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const contactForm = document.getElementById('contactForm');

    // Menú móvil
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        // Actualizar menú activo según la sección visible
        updateActiveMenu();
    });

    // Función para actualizar el menú activo
    function updateActiveMenu() {
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Animación de elementos al hacer scroll
    const animateOnScroll = function() {
        const animatedElements = document.querySelectorAll('.service-card, .step, .gallery-item, .testimonial');
        
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Inicializar animaciones
    window.addEventListener('scroll', animateOnScroll);
    
    // Aplicar estilos iniciales para animación
    const elementsToAnimate = document.querySelectorAll('.service-card, .step, .gallery-item, .testimonial');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
    });
    
    // Ejecutar animación inicial
    setTimeout(animateOnScroll, 300);

    // Manejar envío del formulario de contacto
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
            
            // Aquí iría la lógica para enviar el formulario a un servidor
            // Por ahora, solo simularemos un envío exitoso
            
            // Mostrar indicador de carga
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Simular tiempo de procesamiento
            setTimeout(() => {
                // Mostrar mensaje de éxito
                mostrarRespuesta('success', '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
                
                // Restablecer el formulario
                this.reset();
                
                // Restaurar el botón
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Ocultar el mensaje después de 5 segundos
                setTimeout(() => {
                    document.getElementById('formResponse').style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }
    
    // Función para mostrar respuestas del formulario
    function mostrarRespuesta(tipo, mensaje) {
        const respuestaEl = document.getElementById('formResponse');
        respuestaEl.className = 'form-response ' + tipo;
        respuestaEl.textContent = mensaje;
        respuestaEl.style.display = 'block';
        
        // Hacer scroll hasta el mensaje
        respuestaEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Animación mejorada para la galería (simulación de antes/después)
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        const beforeAfter = item.querySelector('.before-after');
        const before = item.querySelector('.before');
        const after = item.querySelector('.after');
        const beforeSpan = before.querySelector('span');
        const afterSpan = after.querySelector('span');
        
        // Comportamiento por defecto al salir del elemento
        item.addEventListener('mouseleave', () => {
            before.style.flex = '1';
            after.style.flex = '1';
            beforeSpan.style.opacity = '1';
            afterSpan.style.opacity = '1';
            beforeSpan.style.transform = 'scale(1)';
            afterSpan.style.transform = 'scale(1)';
        });
        
        // Comportamiento al pasar el ratón sobre la sección "antes"
        before.addEventListener('mouseenter', () => {
            before.style.flex = '3';
            after.style.flex = '1';
            beforeSpan.style.opacity = '1';
            beforeSpan.style.transform = 'scale(1.1)';
            afterSpan.style.opacity = '0.7';
        });
        
        // Comportamiento al pasar el ratón sobre la sección "después"
        after.addEventListener('mouseenter', () => {
            before.style.flex = '1';
            after.style.flex = '3';
            afterSpan.style.opacity = '1';
            afterSpan.style.transform = 'scale(1.1)';
            beforeSpan.style.opacity = '0.7';
        });

        // Función para abrir el overlay
        const openOverlay = (e) => {
            if (e) e.stopPropagation();
            const clickedIndex = Array.from(galleryItems).indexOf(item);
            showGalleryOverlay(clickedIndex);
        };

        // Añadir eventos de clic y táctiles al gallery-item para abrir el overlay
        item.addEventListener('click', openOverlay);
        item.addEventListener('touchend', openOverlay);

        // Asegurarse de que los clics en before/after también abran el overlay
        before.addEventListener('click', openOverlay);
        before.addEventListener('touchend', openOverlay);

        after.addEventListener('click', openOverlay);
        after.addEventListener('touchend', openOverlay);
    });
    
    // Añadir efecto de zoom al hacer clic en las imágenes con navegación entre pares
    let currentGalleryIndex = 0;
    const galleryPairs = [];
    
    // Recopilar todos los pares de imágenes
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        const before = item.querySelector('.before');
        const after = item.querySelector('.after');
        
        if (before && after) {
            const beforeImage = window.getComputedStyle(before).backgroundImage.replace(/url\(["']?(.*?)["']?\)/, '$1');
            const afterImage = window.getComputedStyle(after).backgroundImage.replace(/url\(["']?(.*?)["']?\)/, '$1');
            
            galleryPairs.push({
                before: beforeImage,
                after: afterImage,
                index: index
            });
        }
    });
    
    // Función para mostrar el overlay con ambas imágenes
    function showGalleryOverlay(index) {
        if (index < 0) index = galleryPairs.length - 1;
        if (index >= galleryPairs.length) index = 0;
        currentGalleryIndex = index;
        let overlay = document.querySelector('.gallery-overlay');
        let imagesContainer, beforeContainer, afterContainer, beforeLabel, afterLabel;
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'gallery-overlay';
            imagesContainer = document.createElement('div');
            imagesContainer.className = 'enlarged-images-container';
            beforeContainer = document.createElement('div');
            beforeContainer.className = 'enlarged-image before-enlarged';
            beforeLabel = document.createElement('div');
            beforeLabel.className = 'enlarged-image-label';
            beforeLabel.textContent = 'Antes';
            beforeContainer.appendChild(beforeLabel);
            afterContainer = document.createElement('div');
            afterContainer.className = 'enlarged-image after-enlarged';
            afterLabel = document.createElement('div');
            afterLabel.className = 'enlarged-image-label';
            afterLabel.textContent = 'Después';
            afterContainer.appendChild(afterLabel);
            imagesContainer.appendChild(beforeContainer);
            imagesContainer.appendChild(afterContainer);
            // Añadir botón de cierre
            const closeButton = document.createElement('button');
            closeButton.className = 'close-button';
            closeButton.innerHTML = '&times;';
            const closeOverlay = function(e) {
                e.stopPropagation();
                document.body.removeChild(overlay);
            };
            closeButton.addEventListener('click', closeOverlay);
            closeButton.addEventListener('touchend', closeOverlay);
            // Añadir botones de navegación
            const prevButton = document.createElement('button');
            prevButton.className = 'nav-button prev-button';
            prevButton.innerHTML = '&#10094;';
            const prevImage = function(e) {
                e.stopPropagation();
                showGalleryOverlay(currentGalleryIndex - 1);
            };
            prevButton.addEventListener('click', prevImage);
            prevButton.addEventListener('touchend', prevImage);
            
            const nextButton = document.createElement('button');
            nextButton.className = 'nav-button next-button';
            nextButton.innerHTML = '&#10095;';
            const nextImage = function(e) {
                e.stopPropagation();
                showGalleryOverlay(currentGalleryIndex + 1);
            };
            nextButton.addEventListener('click', nextImage);
            nextButton.addEventListener('touchend', nextImage);
            
            // Añadir elementos al DOM
            imagesContainer.appendChild(beforeContainer);
            imagesContainer.appendChild(afterContainer);
            imagesContainer.appendChild(closeButton);
            overlay.appendChild(imagesContainer);
            overlay.appendChild(prevButton);
            overlay.appendChild(nextButton);
            document.body.appendChild(overlay);
        } else {
            imagesContainer = overlay.querySelector('.enlarged-images-container');
            beforeContainer = imagesContainer.querySelector('.before-enlarged');
            afterContainer = imagesContainer.querySelector('.after-enlarged');
            beforeLabel = beforeContainer.querySelector('.enlarged-image-label');
            afterLabel = afterContainer.querySelector('.enlarged-image-label');
        }
        const pair = galleryPairs[index];
        beforeContainer.style.backgroundImage = `url('${pair.before}')`;
        afterContainer.style.backgroundImage = `url('${pair.after}')`;
        
        // Cerrar al hacer clic en el overlay
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
        
        // Manejar navegación con teclado
        document.addEventListener('keydown', function(e) {
            if (!document.querySelector('.gallery-overlay')) return;
            
            if (e.key === 'Escape') {
                document.body.removeChild(overlay);
            } else if (e.key === 'ArrowLeft') {
                document.body.removeChild(overlay);
                showGalleryOverlay(currentGalleryIndex - 1);
            } else if (e.key === 'ArrowRight') {
                document.body.removeChild(overlay);
                showGalleryOverlay(currentGalleryIndex + 1);
            }
        });
    }
    
    // Asignar evento de clic a las secciones antes/después
    document.querySelectorAll('.before, .after').forEach(section => {
        section.addEventListener('click', function() {
            const galleryItem = this.closest('.gallery-item');
            const index = Array.from(document.querySelectorAll('.gallery-item')).indexOf(galleryItem);
            showGalleryOverlay(index);
        });
    });

    // Scroll suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});