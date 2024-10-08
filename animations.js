// Basic Animation
gsap.to("#basic-box", { duration: 2, x: 300, rotation: 360 });

// ScrollTrigger Animation
gsap.to("#scroll-box", {
    x: 300,
    rotation: 360,
    scrollTrigger: {
        trigger: "#scroll-box",
        start: "top center",
        end: "top 100px",
        scrub: true
    }
});

// Inertia Effect for Draggable
Draggable.create("#scroll-box", {
    type: "x,y",
    inertia: true,
    bounds: document.body
});

// Smooth Scroll
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: {y: this.getAttribute("href"), offsetY: 70}});
    });
});

// Active Link Highlighting (Optional)
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY || window.pageYOffset;

    document.querySelectorAll('nav a').forEach(anchor => {
        let section = document.querySelector(anchor.getAttribute('href'));

        if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
        ) {
            document.querySelector('nav a.active').classList.remove('active');
            anchor.classList.add('active');
        }
    });
});
