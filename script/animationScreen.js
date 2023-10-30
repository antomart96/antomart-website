
let buttonTop = document.querySelector('#goTop'); 
// when sroll down 500px the link shows up and when u go back it disappear
window.onscroll = function(){
    scrollDown();
}

function scrollDown(){  //fonction qui vérifie qui met un lien visible si il est en dessous de 500px
    if(window.scrollY > 500 ){
        buttonTop.classList.add("visible")
    }else{
        buttonTop.classList.remove("visible")
    }
}

function reveal(){  //function to show animation on screen when u scroll
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight; //give the height of the viewport.
        let elementTop = reveals[i].getBoundingClientRect().top; //gives the distance from the top of the viewport
        let elementVisible = 90; // height at which the element should be revealed to the user
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } 
        console.log(windowHeight);
        console.log(elementTop);
        //   else {
        //     reveals[i].classList.remove("active");
        //   }
    }
}
window.addEventListener("scroll", reveal);
// To check the scroll position on page load
reveal();