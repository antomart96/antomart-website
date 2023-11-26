
 //Function to add a different picture only for the tablet media
window.addEventListener('load', function() {  
    const profileImage = document.querySelector('#profileImage');
    const windowWidth = window.innerWidth;

    if (windowWidth < 720 || windowWidth > 1080) {
        profileImage.src = '../images/photoProfil_mini.jpg';
    } else {
        profileImage.src = '../images/photoProfil.jpg';
    }
});



