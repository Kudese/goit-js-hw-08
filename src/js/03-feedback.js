const throttle = require("lodash.throttle");

import throttle from "lodash.throttle";
const elSubButton = document.querySelector('.feedback-form');
const elEmailField = document.querySelector('input[name=email]');
const elMessageField = document.querySelector('textarea[name=message]');
const localKey = 'feedback-form-state';

elEmailField.addEventListener('input', throttle(saveMail, 500));
elMessageField.addEventListener('input', throttle(saveMessage, 500));
elSubButton.addEventListener('submit', sellForm);
const localSave = { email: '', message: '' };
if (localStorage.getItem(localKey) !== null) {
  localSave.email = JSON.parse(localStorage.getItem(localKey)).email;
  localSave.message = JSON.parse(localStorage.getItem(localKey)).message;
}


function saveMail(e) {
  localSave.email = e.target.value;
  localStorage.setItem(localKey, JSON.stringify(localSave));
}
function saveMessage(e) {
  localSave.message = e.target.value;
  localStorage.setItem(localKey, JSON.stringify(localSave));
}





function sellForm(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(localKey)));
  localStorage.clear(localKey);
  elEmailField.value = '';
  elMessageField.value = '';
  localSave.email=""
  localSave.message=""
}
if (localStorage.getItem(localKey) !== null) {
  elEmailField.value = JSON.parse(localStorage.getItem(localKey)).email;
  elMessageField.value = JSON.parse(localStorage.getItem(localKey)).message;
}

