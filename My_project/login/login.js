





function login() {
   let email = document.querySelector('.mail input');
   let emailValue = email.value.trim();
   
   let passwordValue = document.querySelector(".password input").value.trim();
   
   if(isEmail(emailValue)==false) {
      document.querySelector(".mail small ").innerHTML = "loi sai r"
      document.querySelector(".mail small ").style.visibility = "visible"
      document.querySelector(".mail small ").style.color = "red"  
   } else {
      document.querySelector(".mail small ").style.border = "1px solid green"
   }
   
   if (checkPassword(passwordValue) == true) {
      console.log('11');
   }else {
      console.log('22');
   }
   
   


}


function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}


function checkPassword(password1) {
   
   let userInforPasswor = localStorage.getItem("infoUser")
   let user = JSON.parse(userInforPasswor)
   
   let flag =  false
   for (i=0;i<=user.length;i++) {
      console.log(user[i]); 
      if (user[i].password == (password1)) {
         flag = true
         break
      } else {
         flag = false
      }
   }
   if ( flag == true) {
      return true;
   } else {
      return false;
   }     

   
}

