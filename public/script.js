'use strict'

const inputField = document.querySelector('.text-input')
const offset = document.querySelector('.offset-input')
const submit = document.querySelector('.submit')
const output = document.querySelector('.output')

submit.addEventListener('click', () => {
  output.innerText = ''
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "/api/chipher/" + offset.value);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify({text: inputField.value}));
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      console.log(this.response)
      output.innerText = JSON.parse(this.responseText).encodedText
    }
  }
})
