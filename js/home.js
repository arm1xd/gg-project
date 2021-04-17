//slider
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);
let nav =document.querySelector('.navigation')
function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

window.addEventListener('scroll',(Event)=>{
if (window.pageYOffset > 210) {
  nav.style.position = 'fixed';
}
})