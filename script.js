//integrates GSAP's ScrollTrigger plugin with Locomotive Scroll
function locomotive() {
  //registering the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  //initializing Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    //The element to be scrolled smoothly.
    el: document.querySelector("#main"),
    smooth: true,
  });
  //Synchronizing ScrollTrigger with Locomotive Scroll
  locoScroll.on("scroll", ScrollTrigger.update);
  //Creating a Scroller Proxy
  //it tells ScrollTrigger how to handle the custom scrolling container (#main) instead of the default window scrolling.
  ScrollTrigger.scrollerProxy("#main", {
    //if a value is provided, it scrolls to that position using Locomotive Scroll's scrollTo method. Otherwise, it returns the current scroll position.
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    //getBoundingClientRect(): Returns the size and position of the scrolling container. This is used by ScrollTrigger to calculate scroll positions.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    //Determines whether to use CSS transforms or fixed positioning for pinning elements. If the #main element uses transforms, pinType is set to "transform"; otherwise, it defaults to "fixed".
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  //Updating ScrollTrigger on Refresh
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  //ScrollTrigger.refresh() is called to force an initial refresh, ensuring both systems start in sync.

  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
//Getting context of the canvas
const context = canvas.getContext("2d");
//Setting the canvas width and height to the window's INNER  width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//Resizing the canvas when the window is resized
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});
//storing the image files in a function and returning the image file at the given index
function files(index) {
  var data = `
  https://zelt.app/assets/img/home/hero/sequence/mobile/1.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/2.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/3.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/4.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/5.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/6.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/7.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/8.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/9.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/10.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/11.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/12.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/13.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/14.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/15.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/16.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/17.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/18.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/19.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/20.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/21.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/22.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/23.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/24.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/25.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/26.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/27.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/28.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/29.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/30.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/31.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/32.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/33.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/34.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/35.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/36.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/37.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/38.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/39.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/40.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/41.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/42.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/43.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/44.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/45.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/46.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/47.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/48.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/49.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/50.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/51.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/52.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/53.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/54.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/55.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/56.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/57.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/58.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/59.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/60.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/61.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/62.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/63.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/64.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/65.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/66.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/67.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/68.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/69.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/70.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/71.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/72.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/73.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/74.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/75.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/76.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/77.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/78.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/79.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/80.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/81.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/82.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/83.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/84.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/85.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/86.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/87.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/88.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/89.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/90.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/91.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/92.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/93.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/94.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/95.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/96.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/97.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/98.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/99.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/100.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/101.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/102.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/103.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/104.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/105.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/106.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/107.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/108.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/109.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/110.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/111.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/112.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/113.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/114.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/115.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/116.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/117.webp
https://zelt.app/assets/img/home/hero/sequence/mobile/118.webp
 `;
  return data.split("\n")[index];
}
//Total number of frames/images
const frameCount = 118;
//Creating an array to store the images
const images = [];
//Object to store the current frame
const imageSeq = {
  frame: 1,
};

//Creating an array of image instances for each image file using src from the files function
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}
//It animated the image sequence using GSAP's gsap.to method, with the frame property of the imageSeq object as the target property.
gsap.to(imageSeq, {
  //The frame property is animated from 1 to frameCount - 1, with a snap value of "frame" to ensure that the frame value is always an integer.
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.1,
    //The trigger is set to the canvas element, and the start and end values are set to "top top" and "400% top", respectively.
    trigger: `#page>canvas`,
    start: `top top`,
    end: `400% top`,
    //The scroller property is set to "#main" to specify that the Locomotive Scroll instance should be used for scrolling.
    scroller: `#main`,
  },
  //The onUpdate callback function is called on every frame of the animation, and the render function is called to render the current frame.
  onUpdate: () => {
    render();
    console.log(imageSeq.frame);
  },
});

//`onload` event listener is added to the first image in the images array, and the render function is called to render the first image.
images[1].onload = render;
//The render function is called to render the current frame.
function render() {
  //The scaleImage function is called with the current image and context as arguments to render the current frame. the value of the imageSr.frame is set by the gsap.to method while scrolling

  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `400% top`,
});
// Initializing the main Swiper
gsap.to("#data_items", {
  top: "-6rem",
  ease: "ease-in-out",

  scrollTrigger: {
    trigger: "#data_items",
    start: "top 60%",
    end: "top 45%",
    scrub: 5,
    // markers: true,
    scroller: "#main",
  },
});

document.addEventListener("mousemove", function (e) {
  gsap.to("#cursor-dot", {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: "ease-in-out",
    overwrite: "auto",
    update: function () {
      document.getElementById("cursor-dot").style.transform =
        "translate(-50%, -50%)";
    },
  });
});

document.addEventListener("mouseleave", function () {
  gsap.to("#cursor-dot", { opacity: 0, duration: 0, ease: "none" });
});

document.addEventListener("mouseenter", function () {
  gsap.to("#cursor-dot", { opacity: 1, duration: 0, ease: "none" });
});

function animateCursorOnHover() {
  const hoverTargets = document.querySelectorAll("img, button, a");
  hoverTargets.forEach((target) => {
    target.addEventListener("mouseenter", () => {
      gsap.to("#cursor-dot", {
        scale: 8,
        opacity: 0.2,

        duration: 0.1,
        ease: "none",
      });
    });
    target.addEventListener("mouseleave", () => {
      gsap.to("#cursor-dot", {
        scale: 1,
        opacity: 1,
        backgroundColor: "black",

        duration: 0.3,
        ease: "none",
      });
    });
  });
}

animateCursorOnHover();

gsap.from(".fadein", {
  
  y: 100,
  stagger: 0.5,
  duration: 1.3,
  stagger: 0.5,
  ease: "ease-in-out",
});
gsap.to(".fadein", {
  opacity: 1,
  y: 10,
  stagger: 0.5,
  duration: 1.3,
  stagger: 0.5,
  ease: "ease-in-out",
});
