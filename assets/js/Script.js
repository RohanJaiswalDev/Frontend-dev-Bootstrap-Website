// Smooth anchor tag
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


// Back to top
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        document.querySelector('#back-to-top').style.display = 'block';
    } else {
        document.querySelector('#back-to-top').style.display = 'none';
    }
});
document.querySelector('#back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Initialize AOS
    AOS.init({
        duration: 800, // Animation duration
    easing: 'ease-in-out', // Easing type
    once: true // Whether animation should happen only once
  });

  // Disable on screens smaller than 768px
  AOS.init({
    disable: function() {
      return window.innerWidth < 768; // Disable on screens smaller than 768px
    }
  });