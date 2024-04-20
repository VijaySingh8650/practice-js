// import {sum, navBar} from "./sum.js";

// let result = sum(3,4);

// let newElement = document.createElement("p");
// newElement.innerText = result;

// document.querySelector("body").innerHTML = navBar;
// document.querySelector("body").append(newElement);

// let first = document.querySelector(".div1");
// let second = document.querySelector(".div2");
// let third = document.querySelector(".div3");

// // capturing phase
// first.addEventListener("click", ()=>{
//    console.log("I am captured1");
// }, true);

// second.addEventListener("click", ()=>{
//    console.log("I am captured2");
// }, true);

// third.addEventListener("click", ()=>{
//    console.log("I am captured3");
// }, true);

// //bubbling phase
// first.addEventListener("click", ()=>{
//    console.log("I am captured1");
// }, false);

// // second.addEventListener("click", ()=>{
// //    console.log("I am captured2");
// // }, false);

// third.addEventListener("click", ()=>{
//    console.log("I am captured3");
// }, false);

// //event delegation
// first.addEventListener("click", (e)=>{
//     if(e.target.className==="div3")alert("div3");
//     else if(e.target.className==="div2")alert("div2");
// })


//debouncing
let time;
function debounceFunction(e) {
  if (time) {
    clearTimeout(time);
  }
  time = setTimeout(() => {
    console.log(e.target.value);
  }, 300);
}


function throttlingFunction(delay) {
    
    let prev;

    return () =>{

        if(!prev){
            console.log(prev, "sdkhkhfkf");
            prev = setTimeout(()=>{
               prev = null;
            },1000)
        }
    }

}

let throttle  = throttlingFunction(1000);


document.querySelector("input").addEventListener("input", debounceFunction);
document.querySelector("button").addEventListener("click", ()=> throttle());
