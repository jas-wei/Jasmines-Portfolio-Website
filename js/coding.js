let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(num){
    showSlides(slideIndex += num);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides"); //gives a list
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length){
        slideIndex = 1;
    } else if(n < 1){
        slideIndex = slides.length;
    } 

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
    for (i = 0; i < slides.length; i++) {
        dots[i].style.backgroundColor = "white";
    }

    dots[slideIndex-1].style.backgroundColor = "rgb(142, 145, 41)";
    slides[slideIndex-1].style.display = "block";
}
