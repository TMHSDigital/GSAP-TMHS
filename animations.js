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
