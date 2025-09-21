 // js/app.js

 gsap.to(".my-animated-element", { duration: 1, x: 100, rotation: 360, ease: "power1.out" });

 gsap.registerPlugin(EasePack);

var tween = gsap.to("#redBox", 1, { backgroundPosition:"-500px 0px", ease:SteppedEase.config(5), repeat:-1, paused:true});
  

$("#restart").on("click", function() {tween.paused(!tween.paused());});