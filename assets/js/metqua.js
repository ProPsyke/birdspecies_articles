const urlArticle ="https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/users";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const m =(new URLSearchParams(window.location.search).get('id'))

const authour = document.getElementById('author')

fetch('https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/users/'+m, { //đường dẫn
    method: 'GET', //phương thức
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then((tasks) => {
    authour.innerHTML=`${tasks.fullName}`

  }).catch((error) => {
    console.error(error)
  })

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
function add(){
  window.location.href='create.html'
}