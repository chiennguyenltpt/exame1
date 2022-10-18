


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

    let oldPassword =  document.querySelectorAll(".makeNewPassword input")[0].value;
    let newPassword =document.querySelectorAll(".makeNewPassword input")[1].value;
    let confirmPassword = document.querySelectorAll(".makeNewPassword input")[2].value;
    let infoUser = JSON.parse(localStorage.getItem("infoUser"))
    let indexUser = localStorage.getItem("user")
    if (oldPassword.length<6) {
        setTimeout(() =>{
            document.querySelectorAll(".makeNewPassword small")[0].style.visibility = "visible"
        },5)
    }
    if (newPassword.length<6) {
        document.querySelectorAll(".makeNewPassword small")[1].style.visibility = "visible"
    }

    if (confirmPassword.length<6) {
        document.querySelectorAll(".makeNewPassword small")[2].style.visibility = "visible"
    }

    if (oldPassword != infoUser[indexUser].password){ 
        document.querySelectorAll(".makeNewPassword small")[0].style.visibility = "visible"
        document.querySelectorAll(".makeNewPassword small")[0].innerHTML = "password wrong"
    } else if (newPassword != confirmPassword || newPassword.length<6 ) {
        document.querySelectorAll(".makeNewPassword small")[2].style.visibility = "visible"
        document.querySelectorAll(".makeNewPassword small")[2].innerHTML = "password is not the same"
    } else {
        infoUser[indexUser].password = newPassword
        
        localStorage.setItem('infoUser',JSON.stringify(infoUser))
        document.querySelector(".bnt-savepassword p").style.visibility = "visible"
        document.querySelectorAll(".makeNewPassword small")[0].style.visibility = "hidden"
        document.querySelectorAll(".makeNewPassword small")[1].style.visibility = "hidden"
        document.querySelectorAll(".makeNewPassword small")[2].style.visibility = "hidden"
    }
}

// funct cancel changePassword
function cancelChangePassword() {
    document.querySelector(".makeNewPassword").style.visibility = "hidden"
    document.querySelectorAll(".makeNewPassword small")[0].style.visibility = "hidden"
    document.querySelectorAll(".makeNewPassword small")[1].style.visibility = "hidden"
    document.querySelectorAll(".makeNewPassword small")[2].style.visibility = "hidden"
}



function showChangePassword() {
    if (document.querySelector(".makeNewPassword").style.visibility == "hidden") {
        document.querySelector(".makeNewPassword").style.visibility = "visible"
    } else {
        document.querySelector(".makeNewPassword").style.visibility = "hidden"
    }
}



// show inforUser 
function showInfoUser() {
    if(document.getElementById('showAccount').style.visibility =='hidden') {
        document.getElementById('showAccount').style.visibility ="visible"
        let dataInforUser = JSON.parse(localStorage.getItem('inforAccount'))
        for (i=0;i<document.querySelectorAll("#showAccount span").length;i++) {
            for (j=0;j<Object.values(dataInforUser).length;j++) {
                document.querySelectorAll("#showAccount span")[i].innerHTML = Object.values(dataInforUser)[i]        
            }
        }
    } else {
        document.getElementById('showAccount').style.visibility ="hidden"
    }

    
}

// update infor
function update() {
    let inforAccount = JSON.parse(localStorage.getItem("inforAccount"))
    inforAccount.birthday = document.querySelectorAll(".update input")[0].value
    inforAccount.phone = document.querySelectorAll(".update input")[1].value
    inforAccount.address = document.querySelectorAll(".update input")[2].value
    localStorage.setItem('inforAccount',JSON.stringify(inforAccount)) 
    document.getElementsByClassName('update')[0].style.visibility = "hidden" 
} 


// cancel showinfor
function cancelShowImfor() {
    document.getElementById('showAccount').style.visibility ="hidden"
}

// cancel update
function cancelUpdate() {
    document.getElementsByClassName('update')[0].style.visibility = "hidden"
    
}

// functtion chuyen update
function changeUpdate () {
    document.getElementsByClassName('update')[0].style.visibility = "visible"
    document.getElementById('showAccount').style.visibility ="hidden"
}



// chuyen sang tran collection
function moveCollection() {
    window.location.href = '../mycollection/mycollection.html'
}

    
