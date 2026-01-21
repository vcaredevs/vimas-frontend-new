 
// let navbar = document.getElementById('navbar').classList;
// let active_class = "navbar_scrolled";
// let active_class_back = "navbar_scrolled_down";

// window.addEventListener('scroll', e => {
//   if (pageYOffset > 0) {
//     navbar.add(active_class);
//   } else {
//     navbar.remove(active_class);
//   }
// });


// const page = document.querySelector(".page");
// const wrapper = document.querySelector(".page__wrapper");

// const ease = 0.05;

// const scroll = {
//   current: 0,
//   target: 0,
//   limit: 0
// };

// const updateTarget = (e) => {
//   e.preventDefault();
//   let delta = 0;

//   if (e.deltaY) {
//     delta = e.deltaY;
//   } else if (e.wheelDelta) {  
//     delta = -e.wheelDelta;
//   }

//   scroll.target += delta;
// };

// document.addEventListener('wheel', updateTarget, { passive: false });
// document.addEventListener('mousewheel', updateTarget, { passive: false });

// const lerp = (current, target) => {
//   const distanceBetween = target - current;
//   const distanceToTravel = distanceBetween * ease;
//   return current + distanceToTravel;
// };

// const clamp = (min, max, value) => {
//   const clamped = Math.min(Math.max(value, min), max);
//   return clamped;
// };

// const smoothScroll = () => {
//   const maxScroll = wrapper.clientHeight - window.innerHeight;
//   scroll.target = clamp(0, maxScroll, scroll.target);

//   const { current, target } = scroll;
//   const transition = lerp(current, target);
//   scroll.current = transition;

//   wrapper.style.transform = `translateY(-${scroll.current}px)`;

//   window.requestAnimationFrame(smoothScroll);
// };

// smoothScroll();


const page = document.querySelector(".page");
const wrapper = document.querySelector(".page__wrapper");

const ease = 0.05;

const scroll = {
  current: 0,
  target: 0,
  limit: 0
};

const updateTarget = (e) => {
  e.preventDefault();
  let delta = 0;

  // Detect deltaY for modern browsers (Firefox, Chrome, Edge, etc.)
  if (e.deltaY) {
    delta = e.deltaY;
  } else if (e.wheelDelta) {  // For older browsers (e.g., Internet Explorer)
    delta = -e.wheelDelta;
  }

  scroll.target += delta;
};

// Use both 'wheel' and 'mousewheel' events
document.addEventListener('wheel', updateTarget, { passive: false });
document.addEventListener('mousewheel', updateTarget, { passive: false });

const lerp = (current, target) => {
  const distanceBetween = target - current;
  const distanceToTravel = distanceBetween * ease;
  return current + distanceToTravel;
};

const clamp = (min, max, value) => {
  const clamped = Math.min(Math.max(value, min), max);
  return clamped;
};

// const smoothScroll = () => {
//   const maxScroll = wrapper.clientHeight - window.innerHeight;
//   scroll.target = clamp(0, maxScroll, scroll.target);

//   const { current, target } = scroll;
//   const transition = lerp(current, target);
//   scroll.current = transition;

//   wrapper.style.transform = `translateY(-${scroll.current}px)`;

//   window.requestAnimationFrame(smoothScroll);
// };

// smoothScroll();
  