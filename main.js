document.addEventListener("DOMContentLoaded", function() {
    // Debug: Log when the DOM is fully loaded
    console.log("DOM fully loaded and parsed.");

    // Show main content after eye animation
    setTimeout(function() {
        const mainContent = document.getElementById('main-content');
        mainContent.style.display = 'block';
        console.log("Main content is now visible."); // Debug message
    }, 5000); // 5 seconds delay

    // Generate water droplets
    for (let i = 0; i < 50; i++) {
        let droplet = document.createElement('div');
        droplet.className = 'droplet';
        droplet.style.left = Math.random() * 100 + 'vw';
        droplet.style.animationDuration = Math.random() * 2 + 3 + 's';
        droplet.style.animationDelay = Math.random() * 5 + 's';
        document.getElementById('water-container').appendChild(droplet);
    }

    // Trigger Scroll Animations
    window.addEventListener('scroll', function() {
        document.querySelectorAll('.scroll-animate').forEach(function(element) {
            if (element.getBoundingClientRect().top < window.innerHeight * 0.8) {
                element.classList.add('visible');
            }
        });
    });

    // Water drains out after a few seconds
    setTimeout(function() {
        const waterContainer = document.getElementById('water-container');
        waterContainer.style.opacity = 0;
        setTimeout(function() {
            waterContainer.style.display = 'none';
            console.log("Water container is now hidden."); // Debug message
        }, 2000);
    }, 10000); // Drains out after 10 seconds
});
