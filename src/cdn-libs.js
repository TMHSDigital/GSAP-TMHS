function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
}

// GSAP and Plugins
loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js");
loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js");
loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/Draggable.min.js");
loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/MotionPathPlugin.min.js");
loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollToPlugin.min.js");
loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/InertiaPlugin.min.js");

// Other Libraries
loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js");
loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js");
