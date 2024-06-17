let slideIndex = 1;
showSlides(slideIndex);//start

function plusSlides(n) {
  showSlides(slideIndex += n); //ใช้กับ arrow
}

function currentSlide(n) {
  showSlides(slideIndex = n); //ใช้กับ Dot
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length)
  {slideIndex = 1;} 
  if (n < 1)
  {slideIndex = slides.length;}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  //ลบ รูป display ออก
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //ลบ class   active ออก 
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active "; //ต้องวรรคไม่งั้น class จะติดกันเป็น class ใหม่
}
