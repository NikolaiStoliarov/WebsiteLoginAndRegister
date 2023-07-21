const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {wrapper.classList.add('active');});
loginLink.addEventListener('click', ()=> {wrapper.classList.remove('active');});
btnPopup.addEventListener('click', ()=> {wrapper.classList.add('active-popup');});
iconClose.addEventListener('click', ()=> {wrapper.classList.remove('active-popup');});

document.getElementById('submitBtn').addEventListener('click', function(event) {
  var checkbox = document.getElementById('myCheckboxIAgree');
  var errorMessage = document.getElementById('error-message');
  
  if (!checkbox.checked) {
    event.preventDefault(); 
    errorMessage.style.display = 'block'; 
  } else {
    errorMessage.style.display = 'none';
  }
});

window.onload = function() { // Hide the error message when the page loads
  document.getElementById('error-message').style.display = 'none';
};