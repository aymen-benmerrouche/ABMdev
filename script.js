// ====================================
// MOBILE NAVIGATION TOGGLE
// ====================================
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ====================================
// SMOOTH SCROLL WITH OFFSET
// ====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ====================================
// BACK TO TOP BUTTON
// ====================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ====================================
// CONTACT FORM HANDLING
// ====================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
        showFormStatus('Please fill in all fields.', 'error');
        return;
    }

    if (!isValidEmail(formData.email)) {
        showFormStatus('Please enter a valid email address.', 'error');
        return;
    }

    // Create mailto link (fallback method)
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:Aymenbenmerrouche@gmail.com?subject=${subject}&body=${body}`;

    // Open mailto link
    window.location.href = mailtoLink;

    // Show success message
    showFormStatus('Opening your email client... Please send the message.', 'success');

    // Reset form after a delay
    setTimeout(() => {
        contactForm.reset();
        formStatus.style.display = 'none';
    }, 3000);
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';
}

// ====================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ====================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all glass cards for fade-in animation
document.querySelectorAll('.glass-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ====================================
// ACTIVE NAV LINK ON SCROLL
// ====================================
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ====================================
// DYNAMIC BACKGROUND PARTICLES (OPTIONAL)
// ====================================
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = 'rgba(56, 189, 248, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    particle.style.animation = `float ${5 + Math.random() * 10}s linear infinite`;
    particle.style.zIndex = '0';
    
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 15000);
}

// Create particles periodically
setInterval(createParticle, 3000);

// Add CSS animation for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 0.5;
        }
        90% {
            opacity: 0.5;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ====================================
// TYPING EFFECT FOR HERO SUBTITLE (OPTIONAL)
// ====================================
const heroSubtitle = document.querySelector('.hero-subtitle');
const originalText = heroSubtitle.textContent;
let charIndex = 0;

function typeEffect() {
    if (charIndex < originalText.length) {
        heroSubtitle.textContent = originalText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeEffect, 50);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    heroSubtitle.textContent = '';
    setTimeout(typeEffect, 500);
});

// ====================================
// PROJECT CARD INTERACTIONS
// ====================================
// Project links are now direct anchor tags, no additional JS needed
// This section can be used for future modal implementations

// ====================================
// CONSOLE EASTER EGG
// ====================================
console.log('%c👋 Hello Developer!', 'font-size: 20px; color: #38BDF8; font-weight: bold;');
console.log('%cWelcome to ABMdev Portfolio', 'font-size: 14px; color: #CBD5E1;');
console.log('%cInterested in the code? Check out the GitHub repo!', 'font-size: 12px; color: #6366F1;');
