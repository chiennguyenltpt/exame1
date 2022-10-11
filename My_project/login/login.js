let username = document.getElementById("username").value;
let passWord = document.getElementById("password").value;

if (username == localStorage.getItem(username)) {
   let a = localStorage.getItem(username)
   console.log(a);
}