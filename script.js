const elements = ["element1", "element2", "element3"];
const prev = document.querySelector(".prev");
const next = document.querySelector(".nextArrow");

function rotateNext() {
    const element1 = elements[0];
    const element2 = elements[1];
    const element3 = elements[2];
    const picture = document.querySelector(`.${element1}`);
    const nextPicture = document.querySelector(`.${element2}`);
    const lastPicture = document.querySelector(`.${element3}`);
    picture.classList.add("translate");
    setTimeout(() => {
        picture.classList.remove("index3");
        picture.classList.add("index1");
        nextPicture.classList.remove("index2");
        // nextPicture.classList.add("vibe");
        nextPicture.classList.add("index3");
        lastPicture.classList.remove("index1");
        lastPicture.classList.add("index2");
        lastPicture.classList.remove("translate");
        // picture.classList.remove("vibe");
        elements.shift();
        elements.push(element1);
    }, 500);
}

// function rotatePrev() {
//     const element1 = elements[0];
//     const element2 = elements[1];
//     const element3 = elements[2];
//     const picture = document.querySelector(`.${element1}`);
//     const nextPicture = document.querySelector(`.${element2}`);
//     const lastPicture = document.querySelector(`.${element3}`);
//     picture.classList.add("translate");
//     setTimeout(() => {
//         picture.classList.remove("index3");
//         picture.classList.add("index2");
//         lastPicture.classList.remove("index1");
//         lastPicture.classList.add("index3");
//         nextPicture.classList.remove("index2");
//         // nextPicture.classList.add("vibe");
//         nextPicture.classList.add("index1");

//         nextPicture.classList.remove("translate");
//         // picture.classList.remove("vibe");
//         elements.pop();
//         elements.unshift(element3);
//     }, 500);
// }

next.addEventListener("click", rotateNext);
// prev.addEventListener("click", rotatePrev);
let interval = setInterval(() => rotateNext(), 10000);
