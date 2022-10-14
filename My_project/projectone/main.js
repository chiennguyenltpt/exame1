


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