// javascript for responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// javascript forvideo slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slider");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) =>{
        btn.classList.remove("active")content) =>{
       content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) =>{
    btn.addEventListener("click", () => {
          sliderNav(i);
    });
});