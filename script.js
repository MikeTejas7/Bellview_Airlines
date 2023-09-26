//slidehow functionality//
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// JavaScript code to handle form submission and authentication

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the entered username and password
    const usernameInput = document.getElementById("login-username").value;
    const passwordInput = document.getElementById("login-password").value;

    // Perform authentication (for demonstration purposes, use hardcoded credentials)
    if (usernameInput === "user" && passwordInput === "password") {
        // Authentication successful, redirect to "contact.html"
        window.location.href = "contact.html";
    } else {
        // Authentication failed, display an error message
        alert("Invalid username or password. Please try again.");
    }
});



