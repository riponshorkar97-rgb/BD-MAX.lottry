/* ==========================
   Demo Casino
   script.js Part 1/2
========================== */

// Splash Screen

window.addEventListener("load", function () {

    setTimeout(function () {

        const splash = document.getElementById("splash");

        if (splash) {

            splash.style.display = "none";

        }

    }, 2500);

});


// Auto Slider

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

if(slides.length > 0){

    setInterval(nextSlide,3000);

}


// Bottom Navigation

const navLinks = document.querySelectorAll(".bottom-nav a");

navLinks.forEach(link=>{

    link.addEventListener("click",function(){

        navLinks.forEach(item=>{

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// Login Popup

const loginButton = document.querySelector(".login-btn");

const popup = document.getElementById("loginPopup");

const closeBtn = document.querySelector(".close-btn");

if(loginButton){

loginButton.onclick = function(){

popup.style.display="flex";

}

}

if(closeBtn){

closeBtn.onclick=function(){

popup.style.display="none";

}

}

window.onclick=function(event){

if(event.target==popup){

popup.style.display="none";

}

};
/* ==========================
   Demo Casino
   script.js Part 2/2
========================== */

// VIP Button

const vipBtn = document.querySelector(".vip-btn");

if(vipBtn){

    vipBtn.addEventListener("click",function(){

        alert("Welcome to Demo Casino VIP Club!");

    });

}

// Banner Buttons

const bannerButtons=document.querySelectorAll(".banner-buttons button");

bannerButtons.forEach(btn=>{

    btn.addEventListener("click",function(){

        this.style.transform="scale(.95)";

        setTimeout(()=>{

            this.style.transform="scale(1)";

        },150);

    });

});

// News Auto Highlight

const newsCards=document.querySelectorAll(".news-card");

let newsIndex=0;

if(newsCards.length>0){

setInterval(()=>{

newsCards.forEach(card=>{

card.style.borderLeft="4px solid #FFD700";

card.style.opacity=".6";

});

newsCards[newsIndex].style.borderLeft="4px solid #00ff99";

newsCards[newsIndex].style.opacity="1";

newsIndex++;

if(newsIndex>=newsCards.length){

newsIndex=0;

}

},2500);

}

// Smooth Scroll

document.querySelectorAll('a[href="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

});

});

console.log("Demo Casino UI Loaded Successfully");
// Demo Login

const loginBtn=document.querySelector(".login-button");

if(loginBtn){

loginBtn.onclick=function(){

alert("Demo Login Successful!");

window.location.href="index.html";

}

}
