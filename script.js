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
                <span class="typewriter-cursor">|</span>
            </span>
        `;
        
        const typewriterText = titleElement.querySelector('.typewriter-text');
        const cursor = titleElement.querySelector('.typewriter-cursor');
        let i = 0;
        const typingSpeed = 100; // typing speed in ms
        
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
                // Animation complete - start color cycling
                cursor.style.animation = 'none'; // Stop blinking when done
                cycleColors();
            }
        }
        
        function cycleColors() {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            typewriterText.style.color = colors[currentColorIndex];
            setTimeout(cycleColors, 1000);
        }
        
        // Start the animation after a short delay
        setTimeout(typeWriter, 500);
    }

    // Call the typing animation function
    initTypewriter();

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

    // Rest of your existing code...
    // (Keep all your other existing functions and event listeners)
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