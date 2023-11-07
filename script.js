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

const loginButton = document.getElementById("login-button");
        loginButton.addEventListener("click", function(event) {
            event.preventDefault();

            const usernameInput = document.getElementById("login-username").value;
            const passwordInput = document.getElementById("login-password").value;

            if (usernameInput === "user" && passwordInput === "password") {
                window.location.href = "contact.html";
            } else {
                alert("Invalid username or password. Please try again.");
            }
        });

// Function to toggle the visibility of the navigation links
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const navLinks = document.getElementById('nav-links');

        // Function to toggle the visibility of the navigation links
        function toggleNav() {
            if (navLinks.style.display === 'block') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'block';
            }
        }

        // Add a click event listener to the mobile menu toggle button
        mobileMenuToggle.addEventListener('click', toggleNav);



