var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
var main = document.querySelector("#main");

// main.addEventListener("mousemove", function (dets) {
//   let curX = dets.clientX;
//   let curY = dets.clientY;

//   gsap.to(document.querySelector("#cursor"), {
//     left: curX  + "px",
//     top: curY  + "px",
//   });
// });


main.addEventListener("mousemove", function(dets){    
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
  
  
});
var crsr2 = document.querySelector("#cursor2");
var blur2 = document.querySelector("#cursor-blur2");
var page2 = document.querySelector("#page2");
page2.addEventListener("mousemove", function(dets){    
    crsr2.style.left = dets.x -250 + "px";
    crsr2.style.top = dets.y  -250 + "px";
    blur2.style.left = dets.x - 250 + "px";
    blur2.style.top = dets.y - 250 + "px";
    blur2.style.opacity = "0.6";
  
  
});
// function circleMouseFollower(xscale, yscale) {
//   window.addEventListener("mousemove", function (dets) {
//     document.querySelector(
//       "#cursor"
//     ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
//   });
// }
// circleMouseFollower();

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      //markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
  gsap.to("#page2", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      // end: "top -70%",
      scrub: 2,
    },
  });
  gsap.from("#about-us img,#about", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from(".card", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",

      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    }
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });