const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
	
	

});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
		
		
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
		
		
	}
	
	if(passwordValue === '' && passwordValue.length<6) {
		setErrorFor(password, 'Password cannot be blank');
		
	} else {
		setSuccessFor(password);
		
		
		
	}
	
	if(password2Value === '' && password2Value.length < 6) {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'mat khau trung lap');
	} else{
		setSuccessFor(password2);
	}


	if(usernameValue !== "" && isEmail(emailValue) && passwordValue===password2Value){
		var infoUser = []
		let user = {
			username:usernameValue,
			mail:emailValue,
			password:passwordValue,
		};
		if (localStorage.getItem("infoUser") == null) {
			infoUser.push(user);
			localStorage.setItem("infoUser",JSON.stringify(infoUser));
			
		} else {
			let getInfoUser = localStorage.getItem("infoUser")
			getInfoUser= JSON.parse(getInfoUser)
			
			let flag = false
			for (key of getInfoUser) {
				if (key["mail"] ==emailValue){
					flag = false
				} else {
					flag = true
				}
			};

			if (flag == false ) {
				setErrorFor(email , "email available")
			} else {
				getInfoUser.push(user);
				localStorage.setItem("infoUser",JSON.stringify(getInfoUser))
				document.location.href = './index.html'
			}

		}
	}
}
				











function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;

}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	
}
	
function isEmail(email) {
	 return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

function moveLogin(){
	window.location.href = './index.html'
}
