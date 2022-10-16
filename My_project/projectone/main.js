


function logOut (){
    let booleanLogOut = localStorage.getItem("boolean") 
    let newValue = JSON.parse(booleanLogOut)  
    if(newValue === false) {
        window.location.href = "/login/index-login.html"
    } else {
        newValue = false
        localStorage.setItem('boolean' , JSON.stringify(newValue))    
        window.location.href = "/login/index-login.html"
    }
}



// reset lai logout
function resetLogout(){
    let getBoolean =JSON.parse(localStorage.getItem('boolean'))
    if(getBoolean==false) {
       window.location.href = '../login/index-login.html'
    }
 }


// xin chao user 
function helloUser(){
    let userValue = JSON.parse(localStorage.getItem('infoUser'))
    let indexUser = localStorage.getItem('user')
    console.log(userValue);
    console.log(indexUser);
    console.log(userValue[indexUser].username);
    document.querySelector('.user h3').innerHTML = userValue[indexUser].username

}

// xuat an hien o logout va thong tin dang nhap
function showLogoutAndAccount() {
    if(document.getElementsByClassName("changePassword")[0].style.visibility=="hidden") {
        document.getElementsByClassName("changePassword")[0].style.visibility = "visible"
    } else {
        document.getElementsByClassName("changePassword")[0].style.visibility = 'hidden'
    }
}

// func chang password 

function changePassword() {
    document.querySelectorAll
}
