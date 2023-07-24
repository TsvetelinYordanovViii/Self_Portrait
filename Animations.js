let noseClick = document.querySelector(".noseButton");

let slap = () => {
    let upperArm = document.querySelector(".left.upperArm");
    let lowerArm = document.querySelector(".left.lowerArm");
    let mouth = document.querySelector(".mouth");
    let iris = document.querySelectorAll(".iris");
    let pupil = document.querySelectorAll(".pupil");

    upperArm.classList.add("slap");
    lowerArm.classList.add("slap");
    mouth.classList.add("slap");
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
noseClick.addEventListener("click", slap);