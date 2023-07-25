let noseClick = document.querySelector(".noseButton");
let shoulderClick = document.querySelector(".rightArmButton");

//Since I wanted to make more complicated animations that's why I made this JavaScript file.


//The idea of how an animation plays is as follows:
//Button is pressed and then some elements get a class to make those parts animate.
//After some time the class is removed, resetting the portrait.
let slap = () => {
    let upperArm = document.querySelector(".left.upperArm");
    let lowerArm = document.querySelector(".left.lowerArm");
    let mouth = document.querySelector(".mouth");
    //There are two irises and two pupils.
    let iris = document.querySelectorAll(".iris");
    let pupil = document.querySelectorAll(".pupil");

    upperArm.classList.add("slap");
    lowerArm.classList.add("slap");
    mouth.classList.add("slap");
    //Didn't want to make a for cycle.
    iris[0].classList.add("slap");
    iris[1].classList.add("slap");
    pupil[0].classList.add("slap");
    pupil[1].classList.add("slap");

    setTimeout(() => {
        upperArm.classList.remove("slap");
        lowerArm.classList.remove("slap");
        mouth.classList.remove("slap");
        iris[0].classList.remove("slap");
        iris[1].classList.remove("slap");
        pupil[0].classList.remove("slap");
        pupil[1].classList.remove("slap");
    }, 4000)
}

let wave = () => {
    let upperArm = document.querySelector(".right.upperArm");
    let lowerArm = document.querySelector(".right.lowerArm");
    let iris = document.querySelectorAll(".iris");
    let pupil = document.querySelectorAll(".pupil");

    upperArm.classList.add("wave");
    lowerArm.classList.add("wave");
    iris[0].classList.add("wave");
    iris[1].classList.add("wave");
    pupil[0].classList.add("wave");
    pupil[1].classList.add("wave");

    setTimeout(() => {
        upperArm.classList.remove("wave");
        lowerArm.classList.remove("wave");
        iris[0].classList.remove("wave");
        iris[1].classList.remove("wave");
        pupil[0].classList.remove("wave");
        pupil[1].classList.remove("wave");
    }, 4000)
}

//Adding event listeners to the buttons.
shoulderClick.addEventListener("click", wave);
noseClick.addEventListener("click", slap);