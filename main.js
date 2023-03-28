//Jais code
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";
//---------------define liking the heart variable make it select heart icons when called later
console.log("Is my Js loaded?");
const heartLike = document.querySelectorAll(".like-glyph");
//*!hide the modal! error is now the variable for finding the modal through DOM then hiding it
const error = document.querySelector("#modal");
error.classList.add("hidden");
//classlist. add returns tokens from CSS DOM classnames of element
//
//
//
//
//** Jais JavaScript code goes here!
//
//
//
//
heartLike.forEach((heart) => {
  heart.addEventListener("click", () => {
    likeCallback(heart);
  });
});
//*! forEach = Calls a function for each element, heart is my param, its then called as a function? and on "clicks" the function will be called likeCallBack will be called next
function likeCallback(heart) {
  mimicServerCall("dummyUrl")
    .then((response) => {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart");
      } else if (heart.innerText === FULL_HEART) {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      }
    })
    .catch((errors) => {
      error.classList.remove("hidden");
      error.querySelector("#modal-message").innerText = errors;
      setTimeout(() => {
        error.classList.add("hidden");
      }, 3000);
    });
}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
