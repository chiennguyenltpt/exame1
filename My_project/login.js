
function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}


function login() {
   // get input
   let email = document.querySelector('.mail input');
   let emailValue = email.value.trim();


   let password = document.querySelector(".password input");
   let passwordValue = password.value.trim();
   let getInfor = JSON.parse(localStorage.getItem("infoUser"))
   let flag = true 
   for(key of getInfor) {
      if(email!==key.mail || password!==key.password) {
         flag=false
         break 
      }
   }

   //validate
   if (isEmail(emailValue) == false || flag ==false) {
      document.querySelector(".mail small ").innerHTML = "email khong chinh xac"
      document.querySelector(".mail small ").style.visibility = "visible"
      document.querySelector(".mail small ").style.color = "red"

   }

   //kiem tra do dai ky tu cua acc, pass
   if ((passwordValue.length < 4) || (passwordValue == "") ||flag ==false) {
      document.querySelector(".password small ").innerHTML = "mat khau khong chinh xac"
      document.querySelector(".password small ").style.visibility = "visible"
      document.querySelector(".password small ").style.color = "red"
   }


   // check account
   if (isEmail(emailValue) && (passwordValue.length > 4 && passwordValue !== "")) {
      let userInforPasswor = localStorage.getItem("infoUser")
      let user = JSON.parse(userInforPasswor)
      

      
      let index = 0
      for (i = 0; i < user.length; i++) {
         if (user[i].mail == emailValue) {
            if (user[i].password == passwordValue) {

               index = i;
               localStorage.setItem("boolean", 'true')
               localStorage.setItem('user', index)
               window.location.href = './home.html'
               break
               
            }
         } 
      }
   }
}



function signup() {
   window.location.href = './signup.html'
}


// reset lai logout
function resetLogout(){

   let getBoolean =JSON.parse(localStorage.getItem('boolean'))
   console.log(getBoolean);
   if(getBoolean==false) {
      window.location.href = './index.html'
   }
}

function moveLogin() {
   window.location.href="./index.html"
}
function moveContactMe() {
   window.location.href="./contactme.html"
}


