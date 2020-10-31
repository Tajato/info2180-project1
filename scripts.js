/* Add your JavaScript to this file */
window.onload= function() {
var email = document.getElementById('email');

const form = document.getElementsByTagName('form')[0];
const showError = document.getElementsByClassName('message')[0];
var submitButton = document.getElementsByClassName('btn');


form.addEventListener('submit', (e) => {

if (email.value === "") {
    e.preventDefault();
    showError.innerHTML = "Please enter a valid email address";
}

else {
    
    showError.innerHTML = `Thank you! Your email ${email.value} has been added to our mailing list!`
   
   
}
    
})



}


