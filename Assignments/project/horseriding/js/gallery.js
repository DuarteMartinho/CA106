window.onload = function() {
    showSlides();
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gallery");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  if (slideIndex === 1) { 
    captionText.innerHTML = "FEI Eventing Nations Cup";
  }
  if (slideIndex === 2) { 
    captionText.innerHTML = "Longines FEI Jumping World Cup";
  }
  if (slideIndex === 3) { 
    captionText.innerHTML = "Dublin 2018 | FEI Jumping Nations Cup Final";
  }
  if (slideIndex === 4) { 
    captionText.innerHTML = "Dressage";
  }
  if (slideIndex === 5) { 
    captionText.innerHTML = "Show Jumping";
  }
  if (slideIndex === 6) { 
    captionText.innerHTML = "Cross Country";
  }
}