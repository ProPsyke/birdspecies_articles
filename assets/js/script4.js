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



function hard(){
  const o =document.getElementById('nam').value
  const p =   document.getElementById('pass').value

  if(nam==0){
    er.innerHTML='Please enter name'
    er.style.display='block'
  }
  fetch('https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/users', { 
  method: 'GET', //phương thức
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then((tasks) => {
  console.log(tasks)
  for(let i=0; i< tasks.length; i++){
    if((tasks[i].fullName==o && tasks[i].password==p)||(tasks[i].email==o && tasks[i].password==p)){
      console.log('success')
      localStorage.setItem('user',tasks[i].fullName)
      localStorage.setItem('email',tasks[i].email)
      localStorage.setItem('date',tasks[i].dateOfBirth)
      localStorage.setItem('id',tasks[i].id)
      localStorage.setItem('permission',tasks[i].checkPermission)
      window.location.href='http://127.0.0.1:5500/index.html'
            
    }
  }
}).catch((error) => {
  console.error(error)
})}
