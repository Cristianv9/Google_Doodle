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
      repeat: -1,
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

// ---- DRIFTWOOD FLOAT + DRIFT MOTION ----
gsap.to("#driftwoodGroup", {
  y: "+=1",            // gentle bobbing up/down
  rotation: "-=1.5",   // slight rocking
  duration: 2.4,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  transformOrigin: "50% 50%"
});

// Continuous river flow drift 
gsap.fromTo("#driftwoodGroup",
  { x: -200 },   // start off-screen on the LEFT
  {
    x: 820,      // move off the RIGHT side
    duration: 25,
    ease: "none",
    repeat: -1
  }
);




// ----------------- TIME OF DAY TOGGLE -----------------

let timeIndex = 0;  // 0 = morning, 1 = noon, 2 = night

function setTimeOfDay(index) {

  if (index === 0) {
    // MORNING
    gsap.to("#skyMorning", { opacity: 1, duration: 0.7 });
    gsap.to("#skyNoon",    { opacity: 0, duration: 0.7 });
    gsap.to("#skyNight",   { opacity: 0, duration: 0.7 });

    // Sun / Moon / Stars
    gsap.to("#sun",  { opacity: 1, duration: 0.7 });
    gsap.to("#moon", { opacity: 0, duration: 0.7 });
    gsap.to("#star1, #star2, #star3, #star4, #star5", {
      opacity: 0, duration: 0.7
    });

    // River Day Color
    gsap.to("#river", {
      attr: { fill: "url(#riverWater)" },
      duration: 0.7
    });

    // Driftwood – normal brightness
    gsap.to("#driftwoodGroup", {
      opacity: 1,
      filter: "brightness(1)",
      duration: 0.7
    });

  } else if (index === 1) {
    // NOON
    gsap.to("#skyMorning", { opacity: 0, duration: 0.7 });
    gsap.to("#skyNoon",    { opacity: 1, duration: 0.7 });
    gsap.to("#skyNight",   { opacity: 0, duration: 0.7 });

    // Sun / Moon / Stars
    gsap.to("#sun",  { opacity: 1, duration: 0.7 });
    gsap.to("#moon", { opacity: 0, duration: 0.7 });
    gsap.to("#star1, #star2, #star3, #star4, #star5", {
      opacity: 0, duration: 0.7
    });

    // River Noon Color
    gsap.to("#river", {
      attr: { fill: "url(#riverWater)" },
      duration: 0.7
    });

    // Driftwood – a bit brighter at noon
    gsap.to("#driftwoodGroup", {
      opacity: 1,
      filter: "brightness(1.15)",
      duration: 0.7
    });

  } else if (index === 2) {
    // NIGHT
    gsap.to("#skyMorning", { opacity: 0, duration: 0.7 });
    gsap.to("#skyNoon",    { opacity: 0, duration: 0.7 });
    gsap.to("#skyNight",   { opacity: 1, duration: 0.7 });

    // Sun / Moon / Stars
    gsap.to("#sun",  { opacity: 0, duration: 0.7 });
    gsap.to("#moon", { opacity: 1, duration: 0.7 });
    gsap.to("#star1, #star2, #star3, #star4, #star5", {
      opacity: 1, duration: 0.7
    });

    // River Night Color
    gsap.to("#river", {
      attr: { fill: "url(#riverNight)" },
      duration: 0.7
    });

    // Driftwood – darker at night
    gsap.to("#driftwoodGroup", {
      opacity: 0.65,
      filter: "brightness(0.55)",
      duration: 0.7
    });
  }
}

// Initialize morning state
setTimeOfDay(timeIndex);

// Click to cycle (Morning → Noon → Night → Morning)
document.querySelector("#scene").addEventListener("click", function () {
  timeIndex = (timeIndex + 1) % 3;
  setTimeOfDay(timeIndex);
});
