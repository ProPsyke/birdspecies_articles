function add(){
    window.location.href='create.html'
  }

  function tips(){
    window.location.href='http://127.0.0.1:5500/code/Tips.html'
  }
  function login(){
    window.location.href='http://127.0.0.1:5500/code/SignIn.html'
  }
  function signup(){
    window.location.href='http://127.0.0.1:5500/code/SignUp.html'
  }
  function qaa(){
    window.location.href='http://127.0.0.1:5500/code/Q&A.html'
  }
  function main(){
    window.location.href='http://127.0.0.1:5500/index.html'
  }
  function u(){
    window.location.href='http://127.0.0.1:5500/code/user.html'
  }

  const local = localStorage.getItem('id')
  console.log(local)
  
  if(local == null){
    document.getElementById('u').style.display='none'
    document.getElementById('si').style.display='inline-block'
    document.getElementById('lo').style.display='inline-block'
  }
  else{
    document.getElementById('si').style.display='none'
    document.getElementById('lo').style.display='none'
    document.getElementById('u').style.display='inline-block'
  }