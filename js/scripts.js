console.log('OK');

console.log('OK');


// Bobber gentle bounce (stays in same position)
gsap.to("#bobber, #bobberStripe", {
  yPercent: -8,       // moves visually, NOT physically
  duration: 1.2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  transformOrigin: "center"
});

function rippleAnim(id, delay = 0) {
  gsap.fromTo(
    id,
    {
      opacity: 0.8
    },
    {
      opacity: 0,
      duration: 4,
      ease: "sine.out",
      delay: delay
    }
  );
}

// Run ripple animations with staggered timing
rippleAnim("#ripple1", 0);
rippleAnim("#ripple2", 0.3);
rippleAnim("#ripple3", 0.6);


// ---- WAVES ANIMATION ----

// Set up dashed strokes so they can "slide"
gsap.set("#wave1, #wave2, #wave3", {
  strokeDasharray: 400,   // length of the dash pattern
  strokeDashoffset: 0
});

// wave's dash slide to the left
gsap.to("#wave1", {
  strokeDashoffset: -400,
  duration: 6,
  repeat: -1,
  ease: "none"
});

gsap.to("#wave2", {
  strokeDashoffset: -400,
  duration: 8,
  repeat: -1,
  ease: "none"
});

gsap.to("#wave3", {
  strokeDashoffset: -400,
  duration: 10,
  repeat: -1,
  ease: "none"
});
