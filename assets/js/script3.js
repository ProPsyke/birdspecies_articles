function showpass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function navigate(){
    window.location='http://127.0.0.1:5500/code/SignIn.html'
}
function exit(){
    window.location='http://127.0.0.1:5500/index.html'
}


var er = document.getElementById('err')


function submit(){
  var pas = document.getElementById('pass').value.length
var nam = document.getElementById('name').value.length
var em = document.getElementById('email').value.length
  if(nam==0){
    er.innerHTML='Please enter name'
    er.style.display='block'
  }
  if(em==0){
    er.innerHTML='Please enter email'
    er.style.display='block'
  }
  if(pas==0){
    er.innerHTML='Please enter pass'
    er.style.display='block'
    console.log(pas)
  }
  if(nam>0 && nam<8){
    er.innerHTML='name 8 characters'
    er.style.display='block'
  }
  if(em>0 && em<8){
    er.innerHTML='email 8 characters'
    er.style.display='block'
    
  }
  if(pas>0 && pas<8){
    er.innerHTML='pass 8 characters'
    er.style.display='block'
    
  }
  if(pas >=8 && em >= 8 && nam>= 8){
    document.getElementById('name').value=''
    document.getElementById('pass').value=''
    document.getElementById('email').value=''
    const newTask1 ={
      fullName : document.getElementById('name').value,
      email : document.getElementById('email').value,
      dateOfBirth : '0',
      checkPermission : 'Người thường',
      password : document.getElementById('pass').value,
      dateOfBirth : today
    }
    console.log(newTask1)
      
      fetch('https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/users', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(newTask1)
      }).then(res => {
        if (res.ok) {
          return res.json(window.location.href='http://127.0.0.1:5500/code/SignIn.html'); 
        }
        // handle error
      }).then(newTask1 => {
        console.log('why')
      }).catch(error => {
        // handle error
        console.log(error)
      })
  }
  }

  var date = new Date();
var day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear(),
    hour = date.getHours(),
    min  = date.getMinutes();
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    var today = year + "-" + month + "-" + day,
    displayTime = hour + ":" + min; 
    console.log(today)
 