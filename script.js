// locomotive scroll

// function init(){
//   gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
// el: document.querySelector("#main"),
// smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
// scrollTop(value) {
//   return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
// }, // we don't have to define a scrollLeft because we're only scrolling vertically.
// getBoundingClientRect() {
//   return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
// },
// // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
// pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }
// init ()


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

// copy from newweb 

// cursor into image cursor code

var client = document.querySelectorAll("#client-table")
client.forEach(function(elem){

    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "450px"
        crsr.style.height = "450px"   
        crsr.style.backgroundImage = `url(${att})`
        // crsr.style.cursor = "initial" 

    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.width = "15px"
        crsr.style.height = "15px"
        crsr.style.backgroudImage = `none`
        

    })


})

// gsap color change code from page 4



let tl = gsap.timeline();

let targetSection = document.querySelector('#page4');
tl.to( "#page4", {
  backgroundColor: "#000" ,
  // color: "#fff" ,
  // overwrite: "concurrent"
  
  
  scrollTrigger: {
      trigger: targetSection,
      scroller: "#main" ,
      start: "top -350%" ,
      end: "bottom -450%" ,
      scrub: 2 



  }



},"samesequence")
