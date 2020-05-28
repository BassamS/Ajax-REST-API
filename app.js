// Getting Jokes
$('#get-jokes').click(function getJokes(e) {

  var xhr = new XMLHttpRequest();

  // Getting URL
  xhr.open('GET', `http://api.icndb.com/jokes/random`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      $('.jokes').html('');
      $('.jokes').html($('.jokes').html() + response.value.joke);

    }
  }

  xhr.send();

  e.preventDefault();
});


///////////////////////////////////// Code in JavaScript format

// Event Listener
// document.getElementById('get-jokes').addEventListener('click', getJokes);

// // Getting Jokes
// function getJokes(e) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', `http://api.icndb.com/jokes/random`, true);
//         xhr.onload = function () {
//           if (this.status === 200) {
//             const response = JSON.parse(this.responseText);
//             let output = ''; output += response.value.joke;
//             document.querySelector('.jokes').innerHTML = output;
//           }
//         }
//   xhr.send();
//       e.preventDefault();
//     }
