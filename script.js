document.addEventListener('DOMContentLoaded', function() {
    // ====================
    // Typing Animation for Title
    // ====================
    function initTypewriter() {
        const titleElement = document.querySelector('.hero__title');
        if (!titleElement) return;
        
        const originalText = "Data Science Enthusiast";
        const colors = ['#065f46', '#10b981', '#3b82f6', '#6366f1', '#8b5cf6'];
        let currentColorIndex = 0;
        
        // Prepare the HTML structure
        titleElement.innerHTML = `
            <span class="typewriter">
                <span class="typewriter-text"></span>
                <span class="typewriter-cursor" style="opacity: 0">|</span>
            </span>
        `;
        
        const typewriterText = titleElement.querySelector('.typewriter-text');
        const cursor = titleElement.querySelector('.typewriter-cursor');
        let i = 0;
        const typingSpeed = 100;
        const pauseBetweenCycles = 2000; // 2 second pause before restarting
        
        function typeWriter() {
            if (i < originalText.length) {
                // Change color every 3 characters
                if (i % 3 === 0) {
                    currentColorIndex = (currentColorIndex + 1) % colors.length;
                    typewriterText.style.color = colors[currentColorIndex];
                }
                
                typewriterText.textContent = originalText.substring(0, i+1);
                i++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Animation complete - wait, then restart
                setTimeout(() => {
                    i = 0;
                    typewriterText.textContent = '';
                    typeWriter(); // Restart typing
                }, pauseBetweenCycles);
            }
        }
        
        // Start the animation after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Call the typing animation function
    initTypewriter();;

    // ====================
    // Particles.js Background
    // ====================
    particlesJS('particles-js', {
        particles: {
            number: { 
                value: 80, 
                density: { 
                    enable: true, 
                    value_area: 800 
                } 
            },
            color: { 
                value: "#065f46" 
            },
            shape: { 
                type: "circle" 
            },
            opacity: { 
                value: 0.3, 
                random: true 
            },
            size: { 
                value: 3, 
                random: true 
            },
            line_linked: { 
                enable: false 
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { 
                    enable: true, 
                    mode: "repulse" 
                },
                onclick: { 
                    enable: true, 
                    mode: "push" 
                },
                resize: true
            }
        }
    });


});

window.addEventListener('load', function() {
    // Make sure particles canvas fills the viewport
    const particlesCanvas = document.getElementById('particles-js');
    if (particlesCanvas) {
        particlesCanvas.style.width = '100%';
        particlesCanvas.style.height = '100%';
    }
    
    // Add loaded class to body for transition effects
    document.body.classList.add('loaded');
});


  document.addEventListener('scroll', function() {
    const bgDots = document.querySelector('.bg-fading-dots');
    const scrollPercent = window.scrollY / document.body.scrollHeight;
    bgDots.style.transform = `translateY(${scrollPercent * 20}px)`;
  });

  
  const cursor = document.querySelector('.cursor');
  const particles = [];
  const colors = ['#4e54c8', '#8f94fb', '#ff3366', '#00ff88'];
  
  // Create particles
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement('div');
    particle.classList.add('cursor-particle');
    document.body.appendChild(particle);
    particles.push({
      element: particle,
      x: 0,
      y: 0,
      delay: i * 0.05,
      color: colors[i % colors.length]
    });
  }
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 7}px`;
    cursor.style.top = `${e.clientY - 7}px`;
    
    particles.forEach((particle, i) => {
      setTimeout(() => {
        particle.element.style.left = `${e.clientX - 3}px`;
        particle.element.style.top = `${e.clientY - 3}px`;
        particle.element.style.opacity = '1';
        particle.element.style.background = particle.color;
        
        // Fade out effect
        setTimeout(() => {
          particle.element.style.opacity = '0';
        }, 300);
      }, i * 50);
    });
  });
  
  // Hover effects
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Animate cards on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    
    const animateCards = () => {
        serviceCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = `fadeInUp 0.6s forwards ${index * 0.2}s`;
            }, 50);
        });
    };

    // Add animation keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCards();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(document.querySelector('#what-i-do'));

    // Add hover class dynamically for better performance
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hovering');
        });
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hovering');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    function checkScroll() {
      serviceCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // When card enters viewport
        if (cardTop < windowHeight * 0.75) {
          card.classList.add('animate-in');
        } else {
          card.classList.remove('animate-in');
        }
      });
    }
  
    // Initial check
    checkScroll();
    
    // Listen to scroll events with debounce
    let isScrolling;
    window.addEventListener('scroll', function() {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(checkScroll, 50);
    }, { passive: true });
  });


  // Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Create bubbles container
    const bubblesContainer = document.createElement('div');
    bubblesContainer.className = 'bubbles-background';
    document.body.appendChild(bubblesContainer);
    
    
    document.head.appendChild(style);
    
}

);