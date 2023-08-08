var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

function currentDiv(number) {
    slideIndex = number+1;
    let x = document.getElementsByClassName("mySlides");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[number].style.display = "block";
}
