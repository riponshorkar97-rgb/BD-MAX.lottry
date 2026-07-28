// Auto Image Slider

let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide(){
    current++;
    if(current >= slides.length){
        current = 0;
    }
    showSlide(current);
}

setInterval(nextSlide, 3000);

// Bottom Navigation Active

let navLinks = document.querySelectorAll(".bottom-nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function(){

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });
});

// Welcome Button Effect

let vipButton = document.querySelector(".vip button");

if(vipButton){
    vipButton.addEventListener("click", function(){
        alert("Welcome to Demo Casino VIP Club!");
    });
}

console.log("Demo Casino Version 2 Loaded");
