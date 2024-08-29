import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, Draggable);

// Basic Animation
gsap.to("#basic-box", { 
    duration: 2, 
    x: 300, 
    rotation: 360,
    repeat: -1,
    yoyo: true
});

// ScrollTrigger Animation
gsap.to("#scroll-box", {
    x: 300,
    rotation: 360,
    scrollTrigger: {
        trigger: "#scroll-box",
        start: "top center",
        end: "top 100px",
        scrub: true,
        markers: true // for debugging, remove in production
    }
});

// Draggable Animation
Draggable.create("#scroll-box", {
    type: "x,y",
    edgeResistance: 0.65,
    bounds: "#demos",
    inertia: true
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        gsap.to(window, {
            duration: 1, 
            scrollTo: targetId,
            ease: "power2.inOut"
        });
    });
});

// Active Link Highlighting
function updateActiveLink() {
    const scrollPosition = window.scrollY;

    document.querySelectorAll('nav a').forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);