// from locomotive js github, scroll down to smooth and then copy the below code
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var a = document.querySelectorAll(".elem");
a.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("dataimage");
    fixedimage.style.backgroundImage = `url(${image})`;
  });
});

var elemc = document.querySelector("#elemcontainer");
var fixedimage = document.querySelector("#fixedimage");
elemc.addEventListener("mouseenter", function () {
  fixedimage.style.display = "block";
});
elemc.addEventListener("mouseleave", function () {
  fixedimage.style.display = "none";
});

// var b = document.querySelector("#elem1");
// var bc = b.getAttribute("dataimage");
// console.log(bc);
fixedimage.addEventListener("mouseenter", function () {
  fixedimage.style.display = "block";
});
fixedimage.addEventListener("mouseleave", function () {
  fixedimage.style.display = "none";
});

//function for page 4 clicks and pic change

// function changeContent(index) {
//   document.getElementById(`dash${index}`).classList.add("active");
//   document.getElementById(`dash${index}`).classList.remove("inactive");
// // }
// const element = document.getElementById("dash2");

// // Remove 'inactive' class
// element.classList.remove("inactive");

// // Add 'active' class
// element.classList.add("active");
//click functions not done

var click1 = document.getElementById("dash1");
var click2 = document.getElementById("dash2");
var click3 = document.getElementById("dash3");
var changePara = document.getElementById("page4para");
var imageChange = document.getElementById("imagefour");

click1.addEventListener("click", function () {
  click1.classList.add("active");
  click1.classList.remove("inactive");
  click2.classList.add("inactive");
  click2.classList.remove("active");
  click3.classList.add("inactive");
  click3.classList.remove("active");
  changePara.innerHTML =
    "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
  imageChange.src =
    "https://images.unsplash.com/photo-1703514881823-eda837e5fbbd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
});

click2.addEventListener("click", function () {
  click1.classList.add("inactive");
  click1.classList.remove("active");
  click2.classList.add("active");
  click2.classList.remove("inactive");
  click3.classList.add("inactive");
  click3.classList.remove("active");
  changePara.innerHTML =
    "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
  imageChange.src =
    "https://images.unsplash.com/photo-1705323111650-4297b5cad135?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
});

click3.addEventListener("click", function () {
  click1.classList.add("inactive");
  click1.classList.remove("active");
  click2.classList.add("inactive");
  click2.classList.remove("active");
  click3.classList.add("active");
  click3.classList.remove("inactive");
  changePara.innerHTML =
    "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. ";
  imageChange.src =
    "https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
});




function swiperAnimation(){
  var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 50,
 
});
}
swiperAnimation()