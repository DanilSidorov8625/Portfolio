// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
    if (cursorFollower) {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }
});

// Background Canvas Animation with Enhanced Particles
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.trail = [];
        this.maxTrailLength = 5;
        this.color = Math.random() > 0.5 ? '139, 92, 246' : '6, 182, 212';
    }

    update() {
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.maxTrailLength) {
            this.trail.shift();
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
    }

    draw() {
        // Draw trail
        this.trail.forEach((point, index) => {
            const alpha = (index / this.trail.length) * this.opacity * 0.3;
            const size = (index / this.trail.length) * this.size * 0.5;
            
            ctx.beginPath();
            ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${alpha})`;
            ctx.fill();
        });

        // Draw main particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgb(${this.color})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity * 0.8})`;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

class FloatingParticle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
        this.color = Math.random() > 0.3 ? '139, 92, 246' : '6, 182, 212';
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.03;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
    }

    draw() {
        const pulseSize = this.size + Math.sin(this.pulse) * 0.3;
        const pulseOpacity = this.opacity + Math.sin(this.pulse) * 0.2;

        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${pulseOpacity})`;
        ctx.fill();
    }
}

const particles = [];
const floatingParticles = [];
const particleCount = 500;
const floatingParticleCount = 300;

// Create main particles
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Create floating particles
for (let i = 0; i < floatingParticleCount; i++) {
    floatingParticles.push(new FloatingParticle());
}

function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                const opacity = (100 - distance) / 100 * 0.4;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw floating particles
    floatingParticles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // Update and draw main particles
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // Draw connections between particles
    drawConnections();

    requestAnimationFrame(animate);
}
// NEED TO OPTIMIZE
// animate();

// Typing Effect
const typedTextSpan = document.querySelector('.typed-text');
const textArray = [
  'Creative Full-Stack Engineer',
  'UI/UX Enthusiast',
  'Technical Problem Solver',
  'Innovative Project Builder',
  'Digital Craftsman',
  'Code Artist',
  'Experience Maker'
    ];

const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (typedTextSpan) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        }
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (typedTextSpan) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        }
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type, newTextDelay + 250);
});

// Smooth Scroll for Navigation
document.querySelectorAll('[data-scroll-to]').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(button.getAttribute('data-scroll-to'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Initialize VanillaTilt for project cards and skill items
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
    });
}

// Enhanced Skill Item Hover Effects
document.querySelectorAll('.skill-item').forEach(item => {
    const icon = item.querySelector('i');
    
    item.addEventListener('mouseenter', () => {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.top = '50%';
        ripple.style.left = '50%';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.background = 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '1';
        ripple.style.transition = 'all 0.6s ease';
        item.appendChild(ripple);
        
        // Animate item
        item.style.transform = 'scale(1.3) rotate(360deg) translateY(-15px)';
        item.style.backgroundColor = 'rgba(139, 92, 246, 0.8)';
        item.style.borderColor = '#8b5cf6';
        item.style.boxShadow = '0 25px 50px rgba(139, 92, 246, 0.6), 0 0 50px rgba(139, 92, 246, 0.8), inset 0 0 30px rgba(255, 255, 255, 0.2)';
        
        // Animate icon
        if (icon) {
            icon.style.transform = 'scale(1.5) rotate(-360deg)';
            icon.style.color = '#ffffff';
            icon.style.textShadow = '0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(139, 92, 246, 0.8)';
        }
        
        // Animate ripple
        setTimeout(() => {
            ripple.style.width = '200px';
            ripple.style.height = '200px';
            ripple.style.opacity = '0';
        }, 10);
        
        // Remove ripple after animation
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    });
    
    item.addEventListener('mouseleave', () => {
        // Reset item
        item.style.transform = 'scale(1) rotate(0deg) translateY(0)';
        item.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
        item.style.borderColor = 'rgba(139, 92, 246, 0.3)';
        item.style.boxShadow = '0 5px 15px rgba(139, 92, 246, 0.2)';
        
        // Reset icon
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.color = '#8b5cf6';
            icon.style.textShadow = '0 0 10px rgba(139, 92, 246, 0.3)';
        }
    });
});

// Form Animation
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', () => {
        input.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', () => {
        input.style.transform = 'scale(1)';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        } else {
            navbar.style.background = 'rgba(15, 15, 35, 0.9)';
        }
    }
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const button = document.querySelector('.submit-button');
        const originalText = button.innerHTML;

        // Show "Sending..." state
        button.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        button.disabled = true;

        // Prepare data
        const formData = new FormData(contactForm);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                // Show success
                button.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
                contactForm.reset();
            } else {
                // Show failure
                button.innerHTML = '<span>Failed to Send</span><i class="fas fa-times"></i>';
            }
        } catch (error) {
            console.error('Form submission error:', error);
            button.innerHTML = '<span>Error Occurred</span><i class="fas fa-exclamation-triangle"></i>';
        }

        // Reset button after delay
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2500);
    });
}

// Mouse interaction with particles
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Add mouse interaction to particles
    particles.forEach(particle => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
            const force = (150 - distance) / 150;
            particle.vx += (dx / distance) * force * 0.1;
            particle.vy += (dy / distance) * force * 0.1;
        }
    });
});