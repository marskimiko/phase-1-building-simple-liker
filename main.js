// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//document.body.innerHTML = error.message

const hearts = document.querySelectorAll("span.like-glyph")
//console.log(hearts)
hearts.forEach(hearts => hearts.addEventListener('click', heartCallback))

debugger
function heartCallback(hearts) {
  //console.log(hearts.target)
  debugger
  mimicServerCall()
  .then(() => {
    if (hearts.target.innerText === EMPTY_HEART) {
      return hearts.target.innerText === FULL_HEART
    }
    else if(hearts.target.innerText === FULL_HEART) {
      return hearts.target.innerText === EMPTY_HEART
    }
  })
  .catch(() => {
    const errorMessage = document.getElementById('modal')
    console.log(errorMessage);
    errorMessage.className = 'show'
    debugger

    setTimeout(() => {
      const errorMessage = document.getElementById('modal')
      errorMessage.className = ('hidden', 3000)
    })
  })
}

//heartCallback();




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


// Heart Button Click
// 1. Get all like buttons on the page and store them as a variable to reference
// 2. Create callback function that has if statement for what should happen if its a full heart vs an empty heart
// 2a. If it's a full heart -- make server request. If response successful then make heart empty
// 2b. If it's an emtpy heart -- make server request. If response successful then make heart full
// 2c. If we get back an error from the server, catch and display the error modal
// 3. Go through all of them and add  an onClick event listener that will use that function