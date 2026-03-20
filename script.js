// Script para la landing page de Rorro Fitness

// Toggle del menú móvil
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Manejo del formulario de contacto (simulado)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Simulación de envío
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
        contactForm.reset();
    });
}

// Smooth scroll para anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cambiar logo al hover
const logoImg = document.getElementById('logo-img');
if (logoImg) {
    logoImg.addEventListener('mouseenter', () => {
        logoImg.style.transform = 'rotate(10deg)';
    });
    logoImg.addEventListener('mouseleave', () => {
        logoImg.style.transform = 'rotate(0deg)';
    });
}

// Galería: agregar efecto de zoom al click
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        img.style.transform = img.style.transform === 'scale(1.2)' ? 'scale(1)' : 'scale(1.2)';
    });
});

// Actualizar año en footer (si se quiere)
const footerCopyright = document.querySelector('.footer-copyright p');
if (footerCopyright) {
    const currentYear = new Date().getFullYear();
    footerCopyright.innerHTML = footerCopyright.innerHTML.replace('2026', currentYear);
}

// Mostrar alerta al click en WhatsApp flotante
const whatsappFloating = document.querySelector('.whatsapp-floating a');
if (whatsappFloating) {
    whatsappFloating.addEventListener('click', () => {
        console.log('Redirigiendo a WhatsApp...');
    });
}
