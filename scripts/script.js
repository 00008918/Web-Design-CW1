/*MOBILE MENU*/

/*Function navSlide is created, it is used to show an animation of a smoothly sliding mobile menu*/
const navSlide = () => {
    /*Choosing an appropriate elements from DOM and assigning them to constants */
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');

    /*Creating eventListener, when element is clicked => element class name is changed and corresponding CSS styles are used*/
    burger.addEventListener('click',()=>{
        nav.classList.toggle("main-nav-active")


    burger.classList.toggle('toggle');
    });

   
}
/*Calling a function*/
navSlide();



/*FORM VALIDATION*/

/*Choosing appropriate DOM elements and assigning them to corresponding constants is sake of code simplicity*/
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const form = document.querySelector('form');
const send = document.querySelector('#send');

/*Creating eventListener, when submit button is clicked => "checkInputs" function runs */
form.addEventListener('submit', (e)=>{
e.preventDefault();
checkInputs();

});

/*This function checks whether user have inserted a value,
 in case user didnt type any value or typed invalid value, function lets user know that values are invalid
 Finally when appropriate values are inputted message is sent  */
function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (usernameValue === '' || usernameValue === ' ') {
        username.className = 'error';
        username.placeholder = "Error, please enter your name";
    }
    else{
        username.className = 'success';
    }

    if(emailValue.match(mailformat)){
        email.className = 'success'
    }
    else{
        email.className = 'error'
        email.placeholder = "Not valid email";
    }

    if(messageValue === '' || messageValue === ' '){
        message.className = 'error';
        message.placeholder = 'Error, Empty message'
    }
    else if(messageValue.length < 5){
        message.className = 'error';
        message.placeholder = 'Too little characters'
    }
    else{
        message.className = 'success';
    }

    if(username.className === 'success' && email.className === 'success' && message.className === 'success'){
        send.value = 'Message is sent!';
    }
    else{
        send.value = 'Send';
    }
    
}





