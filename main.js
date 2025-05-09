const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});



//subscribe button

document.querySelector('.subscribe__container form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  alert('Subscription added');
});

     //book now button

document.querySelector('#bookingForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
  alert('Thank you for joining us!');
  
});
    
