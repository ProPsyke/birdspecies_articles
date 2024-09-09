function showpass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function navigate(){
    window.location='http://127.0.0.1:5500/code/SignUp.html'
}
function exit(){
    window.location='http://127.0.0.1:5500/index.html'
}