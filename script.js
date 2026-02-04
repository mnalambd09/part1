// Sticky Navbar on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Reveal Sections on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Target all sections for animation
document.querySelectorAll('section').forEach((section) => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Dhanyabad! Apnar message-ti amader kache poucheche. Amra khub shiggori jogajog korbo.');
    this.reset();
});