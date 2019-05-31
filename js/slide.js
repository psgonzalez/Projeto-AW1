// // Para passar manualmente

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   // var b = document.getElementsByClassName("w3-button")
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  

//   // $(".btn-menu").on('click', function(){
//   //   if (slideIndex > x.length) {slideIndex = 1} 
//   //   x[slideIndex-1].style.display = "none"; 
//   //   // b[].style.display = "none";
//   // })

//   // $(".btn-close").on('click', function(){
//   //   if (slideIndex > x.length) {slideIndex = 1} 
//   //   x[slideIndex-1].style.display = "block"; 
//   //   // b[].style.display = "none";
//   // })
// }

// Para passar automaticamente 

var slideIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 3000); // Muda a imagem a cada 3 segundos
}

carousel();

