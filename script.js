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
let submitform = document.querySelector(".form-sections")
let valid = true
console.log(submitform)
submitform.addEventListener("submit", function(e){
  if(fullName.value.trim() === ""){
    fullName.style.borderColor="red";
    valid = false;
  }
})


