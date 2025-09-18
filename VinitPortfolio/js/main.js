// ===== Smooth Scrolling for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== Fade-in Sections on Scroll =====
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});

// ===== Animated Header Overlay on Scroll =====
const headerOverlay = document.querySelector('header .overlay');
window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    let opacity = Math.min(0.6 + scroll/1000, 0.9); // gradually darken overlay
    headerOverlay.style.backgroundColor = `rgba(0,0,0,${opacity})`;
});

// ===== Optional: Highlight Active Section in Nav =====
// (Use if you add navigation links with href="#projects", etc.)
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 100; // offset for header height
    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
