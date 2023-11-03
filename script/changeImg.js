let imagesClimbing = [      //Array photo climbing
    '../images/climbing/climbing_1.jpeg',
    '../images/climbing/climbing_2.jpg',
    '../images/climbing/climbing_3.jpeg',
    '../images/climbing/climbing_6.jpg',
    '../images/climbing/climbing_8.jpg'
];
let imagesRunning = [      //Array photo Running
    '../images/running/running_1.jpg',
    '../images/running/running_2.jpg',
    '../images/running/running_3.jpg',
    '../images/running/running_4.jpg',
    '../images/running/running_5.jpg',
];
let imagesReading = [      //Array photo Reading
    '../images/reading/reading_1.jpg',
    '../images/reading/reading_2.jpg',
    '../images/reading/reading_3.jpg',
    '../images/reading/reading_4.jpg',
    '../images/reading/reading_5.jpg'
];
let imageClimbing = document.querySelector("#climbingImg");
let imageRunning = document.querySelector("#runningImg");
let imageReading = document.querySelector("#readingImg");

setInterval(function(){         //function to give randomly a new picture every 5 sec
    let random = Math.floor(Math.random() * 5);
    imageClimbing.src = imagesClimbing[random];
    imageRunning.src = imagesRunning[random];
    imageReading.src = imagesReading[random];
}, 4000);