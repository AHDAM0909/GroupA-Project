let navLinks = document.querySelector (".nav-link");
let menuLinks = document.querySelector("#menu-links");

menuLinks.addEventListener("click", function (){
  navLinks.classList.toggle("active")
});


let  bookMeeting = document.querySelector(".book-meeting");
console.log(bookMeeting)
bookMeeting.addEventListener("click", function(){
  alert("Opening meeting scheduler…")

  setTimeout(() => {
    alert("Here you can choose a date & time!");
  }, 1000);
}) 

let fullName = document.querySelector("#full-name");
let companyName = document.querySelector("#company-name");
let email = document.querySelector("#email");
let phone =  document.querySelector("#phone-number")
let text = document.querySelector("#text")

let form = document.querySelector(".Contact-form")
console.log(form)
form.addEventListener("submit", function(e){
  valid = true;
  if (fullName.value.trim() === "") {
    fullName.style.borderColor = "red";
    valid = false;
  }
  if (!valid) {
    e.preventDefault(); // stop form from actually submitting
    text.textContent = "Please fill all required fields."
  }
})



