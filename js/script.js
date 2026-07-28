// Demo Casino JavaScript


// Splash Screen

window.addEventListener("load", function(){

    const splash = document.getElementById("splash");

    if(splash){

        setTimeout(function(){

            splash.style.display="none";

        },2500);

    }

});


// Slider

let slides = document.querySelectorAll(".slide");

let slideIndex = 0;


function changeSlide(){

    if(slides.length > 0){

        slides.forEach(function(slide){

            slide.classList.remove("active");

        });

        slides[slideIndex].classList.add("active");

        slideIndex++;

        if(slideIndex >= slides.length){

            slideIndex = 0;

        }

    }

}


if(slides.length > 0){

    setInterval(changeSlide,3000);

}


// Login Demo

const loginButton = document.querySelector(".login-button");

if(loginButton){

loginButton.onclick=function(){

alert("Demo Login Successful!");

window.location.href="index.html";

}

}


// Register Demo

const registerBtn = document.getElementById("registerBtn");


if(registerBtn){

registerBtn.onclick=function(){


let username = document.getElementById("username").value;

let email = document.getElementById("email").value;

let password = document.getElementById("password").value;


if(username=="" || email=="" || password==""){

alert("Please fill all fields");

}

else{

alert("Demo Account Created Successfully!");

window.location.href="login.html";

}


}

}


// Bottom Menu

const menuItems=document.querySelectorAll(".bottom-nav a");


menuItems.forEach(function(item){

item.addEventListener("click",function(){

menuItems.forEach(function(nav){

nav.classList.remove("active");

});

this.classList.add("active");

});

});


console.log("Demo Casino Script Loaded");
