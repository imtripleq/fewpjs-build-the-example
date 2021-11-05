// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

/////////// Declare variables
const modal = document.getElementById("modal");
const loveBtn = document.querySelectorAll(".like-glyph");
const modalMsg = document.getElementById("modal-message");

///////////

//// Hide Error code
document.addEventListener("DOMContentLoaded", () => {
  // Add hidden class
  modal.classList.add("hidden");
  // Click event
  // console.log(loveBtn);
  ///// Love button
  loveBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      mimicServerCall()
        .then((data) => {
          // console.log(data);
          if (data === "Pretend remote server notified of action!") {
            console.log("Success!");
            // console.log(e.target);
            if (e.target.innerHTML === EMPTY_HEART) {
              e.target.innerHTML = FULL_HEART;
              e.target.classList.add("activated-heart");
            } else if (e.target.innerHTML === FULL_HEART) {
              e.target.innerHTML = EMPTY_HEART;
              e.target.classList.remove("activated-heart");
            }
          }
        })
        //////// Error Message
        .catch((err) => {
          console.log(err);
          modal.classList.remove("hidden");
          modalMsg.innerHTML = err;
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
      console.log("clicked");
    });
  });
});

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
