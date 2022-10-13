function dieuhuong() {
    location.assign("http://127.0.0.1:5501/project%20one/mycollection.html")
}


function logOut (){
    let booleanLogOut = localStorage.getItem("boolean") 
    let newValue = JSON.parse(booleanLogOut)
    
    newValue = false
    localStorage.setItem('boolean' , JSON.stringify(newValue))
    window.location.href = "/login/index-login.html"
    
}