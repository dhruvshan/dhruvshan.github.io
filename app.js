const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const french = document.querySelector(".french");
const introduction = document.querySelector(".introduction");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
const homeme = document.querySelector(".person");
const project_list = document.querySelector(".project_list")
const myProjects = document.querySelector(".myProjects");



let header_height = introduction.offsetHeight;
let section_height = section.offsetHeight;

console.log(section_height);


window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();

  translate.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  })

  opacity.forEach(element => {
    element.style.opacity = scroll / (sectionY.top + section_height);
  })

  big_title.style.opacity = - scroll / (header_height / 0.4) + 0.8;
  french.style.opacity = - scroll / (header_height*0.7 / 0.5) + 0.8;
  homeme.style.opacity = - scroll / (header_height / 0.5) + 0.8;
  myProjects.style.opacity = scroll/ (header_height / 0.5) + 0.1;

})

const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to('.text', {y: "0%", duration: 1, stagger: 1});
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y: "-100%", duration: 1}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 0.4});
tl.fromTo('.french', {opacity: 0}, {opacity: 1, duration: 0.4});
tl.fromTo('.big-title', {opacity: 0}, {opacity: 1, duration: 0.4});

AOS.init({
  duration:2000,
})

