document.addEventListener("DOMContentLoaded", function() {
    // Eye Animation
    setTimeout(function() {
        document.getElementById('main-content').style.display = 'block';
    }, 5000); // 5 seconds for eye animation

    // Scroll animations
    const scrollElements = document.querySelectorAll(".scroll-animation");

    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            ((window.innerHeight || document.documentElement.clientHeight) - offset)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

    handleScrollAnimation(); // Check for visible elements on load

    // Advanced Water-Like Confetti Following Mouse
    document.addEventListener('mousemove', function(e) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Randomize size and rotation
        if (Math.random() > 0.5) {
            confetti.classList.add('confetti--large');
        } else if (Math.random() > 0.7) {
            confetti.classList.add('confetti--small');
        }
        
        if (Math.random() > 0.5) {
            confetti.classList.add('confetti--rotate');
        }
        
        confetti.style.left = `${e.clientX}px`;
        confetti.style.top = `${e.clientY}px`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000); // Remove confetti after animation
    });

    // Water Ripple Effect
    document.querySelectorAll('.scroll-animation').forEach((element) => {
        element.addEventListener('mouseenter', function(e) {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            ripple.style.left = `${e.clientX - element.offsetLeft}px`;
            ripple.style.top = `${e.clientY - element.offsetTop}px`;
            element.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600); // Remove ripple after animation
        });
    });
});
