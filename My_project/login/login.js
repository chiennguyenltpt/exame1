const email = document.querySelector('.mail input');





function login() {
   const emailValue = email.value;
   console.log(emailValue);
   

   if(emailValue =='') {   
      
      let message = document.querySelector('.mail small')
   
      message.setAttribute('style','visibility: visible')
		message.style.color = 'red'
	} else if (!isEmail(emailValue)) {
		console.log('hi');
	}


}


function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}


function checkPassword() {

}