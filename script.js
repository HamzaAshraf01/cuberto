
// sherry code start
Shery.mouseFollower();
Shery.makeMagnet(".magnet-icon");
Shery.hoverWithMediaCircle(".hvr" , {videos: ["./c.mp4" , "./e.mp4" , "./a.mp4"] })
// gsap start

// gsap color change code
// let targetSection = document.querySelector('#main');
// gsap.to( targetSection , {
//   backgroundColor: "#000" ,
//   color: "#fff" ,
//   // overwrite: "concurrent"
  
  
//     scrollTrigger: {
//       trigger: targetSection,
//       scroller: "#main" ,
//       start: "top 10%" ,
//       end: "bottom 100%" ,
//       scrub: 2 



//   }



// })

gsap.to(".fleftelm", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true ,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
    
    
  });
  
  let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".rimages", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});