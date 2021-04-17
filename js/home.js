//slider\\
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);
let nav =document.querySelector('.navigation')
function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

//animation bg nav scroll\\

// window.addEventListener('scroll',(Event)=>{
// if (window.pageYOffset > 300) {
//   nav.style.position = 'fixed';
//   nav.style.backgroundColor="black";
//   nav.style.transition="2s all ease"
//   nav.style.opacity="0.5";
// }
// })
// window.addEventListener('scroll',(Event)=>{
//   if (window.pageYOffset > 400) {
    
//     nav.style.transition="2s all ease"
//     nav.style.opacity="0.6";
//   }
//   })
//   window.addEventListener('scroll',(Event)=>{
//     if (window.pageYOffset > 500) {
      
//       nav.style.transition="2s all ease"
//       nav.style.opacity="0.7";
//     }
//     })
//     window.addEventListener('scroll',(Event)=>{
//       if (window.pageYOffset > 500) {
        
//         nav.style.transition="2s all ease"
//         nav.style.opacity="0.8";
//       }
//       })
//       window.addEventListener('scroll',(Event)=>{
//         if (window.pageYOffset >600) {
          
//           nav.style.transition="2s all ease"
//           nav.style.opacity="0.9";
//         }
//         })
// window.addEventListener('scroll',(Event)=>{
//   if (window.pageYOffset > 700) {
    
//     nav.style.transition="2s all ease"
//     nav.style.opacity="1";
//   }
//   })
// change the background of the page according to the value of the checkbox
const input = document.querySelector('input[type="checkbox"]');
function handleInput() {
  const { checked } = this;
  document.querySelector('body').style.background = checked ? '#151d29' : '#d6e7f7';
}
input.addEventListener('input', handleInput);