const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

//<fix bag with email>
//</fix bag with email>

registerLink.addEventListener('click', ()=> {wrapper.classList.add('active');});
loginLink.addEventListener('click', ()=> {wrapper.classList.remove('active');});
btnPopup.addEventListener('click', ()=> {wrapper.classList.add('active-popup');});
iconClose.addEventListener('click', ()=> {wrapper.classList.remove('active-popup');});

document.getElementById('submitBtn').addEventListener('click', function(event) {
  var checkbox = document.getElementById('myCheckboxIAgree');
  var errorMessage = document.getElementById('error-message');
  var wrapper = document.querySelector('.wrapper');
  
  if (!checkbox.checked) {
    event.preventDefault(); 
    errorMessage.style.display = 'block';
    wrapper.classList.remove('invalid');
    void wrapper.offsetWidth; // Trigger a reflow, flushing the CSS changes
    wrapper.classList.add('invalid'); 
  } else {
    errorMessage.style.display = 'none';
    wrapper.classList.remove('invalid');
  }
});

//<fix bag with email>
//</fix bag with email>

window.onload = function() { // Hide the error message when the page loads
  document.getElementById('error-message').style.display = 'none';
};



