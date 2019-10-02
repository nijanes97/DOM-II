// Your code goes here

const bodyImgs = document.querySelectorAll(".img-content");
bodyImgs.forEach(function(element){
    element.addEventListener("mouseenter", () => {
        element.style.transform = "scale(1.1)";
        element.style.transition = "all 0.3s"
      })
      element.addEventListener("mouseleave", () => {
       element.style.transform = "none";
       element.style.transition = "all 0.3s"
      })
})

const bodyBg = document.querySelector("body");
bodyBg.addEventListener("dblclick", () => {
  bodyBg.style.backgroundColor = randColor();
})


function randColor (){
  let letters = "0123456789ABCDEF";
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const sectionTitles = document.querySelector("img");
sectionTitles.addEventListener("mouseover", () => {
  sectionTitles.style.transform = "rotate(5deg)";
  sectionTitles.style.transition = "all 0.3s";
  setTimeout(function(){
    sectionTitles.style.transform = "rotate(-5deg)";
    sectionTitles.style.transition = "all 0.6s";
    setTimeout(function(){
      sectionTitles.style.transform = "none";
      sectionTitles.style.transition = "all 0.3s";
    }, 500)
  }, 500)
}, false)

const navEfect = document.querySelectorAll("a");
navEfect.forEach(function(element) {
    element.addEventListener("mousedown", () => {
      element.style.transform = "scale(0.9)";
      element.style.transition = "all .03s";
  })
  element.addEventListener("mouseup", () => {
    element.style.transform = "scale(1.0)";
    element.style.transition = "all .03s";
  })
})
const txtP = document.querySelectorAll("p");
txtP.forEach(function(element){
  element.addEventListener("keydown", () =>{
    element.style.transform = "scale(1.5)";
    element.style.transition = "all 0.3s";
  })
  element.addEventListener("keyup", () =>{
    element.style.transform = "none";
    element.style.transition = "all 0.3s";
  })
})

const logo = document.querySelector(".logo-heading");
logo.addEventListener("keypress", () => {
  element.backgroundColor = randColor();
})

navEfect.forEach(function(element) {
  element.addEventListener("click", (event) =>{
    console.log("stopped link");
    event.preventDefault();
  })
})
