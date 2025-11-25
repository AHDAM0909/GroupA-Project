let navLinks = document.querySelector (".nav-link");
let menuLinks = document.querySelector("#menu-links");

menuLinks.addEventListener("click", function(){
  navLinks.classList.toggle("active")
})
