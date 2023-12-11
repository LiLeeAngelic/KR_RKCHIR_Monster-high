document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("mobile-btn").addEventListener("click" , function() {
      document.querySelector("header").classList.toggle("open");
   });
});