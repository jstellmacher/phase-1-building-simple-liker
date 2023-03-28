//Jais code
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";
//---------------define liking the heart variable make it select heart icons when called later
console.log("Is my Js loaded?");
const heartLike = document.querySelectorAll(".like-glyph");
//hide the modal! error is now the variable for finding the modal through DOM then hiding it
let error = document.querySelector("#modal");
error.className = "hidden";
// Your JavaScript code goes here!

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
