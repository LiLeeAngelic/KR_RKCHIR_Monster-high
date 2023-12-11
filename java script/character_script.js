const carouselInner = document.querySelector(".carousel-inner");
const firstCardWidth = carouselInner.querySelector(".card").offsetWidth;
const arrowButtons = document.querySelectorAll(".arrow");
arrowButtons.forEach(button => {
   button.addEventListener("click", () => {
      carouselInner.scrollLeft += button.id == "left" ? -firstCardWidth : firstCardWidth;
   });
});
