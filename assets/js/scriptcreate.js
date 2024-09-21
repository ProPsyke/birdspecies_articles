    //count word
    let x = 0
function countWord() {

  // Get the input text value
  let words = document
      .getElementById("more").value;

  // Initialize the word counter
  let count = 0
  // Split the words on each
  // space character 
  let split = words.split(' ');

  // Loop through the words and 
  // increase the counter when 
  // each split word is not empty
  for (let i = 0; i < split.length; i++) {
      if (split[i] != "") {
          count += 1;
      }
  }

   // Display it as output
   document.getElementById("show")
   .innerHTML = count;
}

//set date
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
document.getElementById('formdate').value= today

function add(){
  const tit = document.getElementById('tit').value.length
  const des = document.getElementById('des').value.length
  const must = document.getElementById('must')

  console.log(tit, des, must)
    if(tit==0){
      must.innerHTML='title must be written'
      must.style.display='block'
    }
    if(des==0){
      must.innerHTML='description must be written'
            must.style.display='block'
    }
    if(document.getElementById('show').textContent<150){
        must.innerHTML='must write a 150 word article'
              must.style.display='block'
    }
   if(tit>0 && des>0 && document.getElementById('show').textContent>=150){
    if(localStorage.getItem('id')==null){
      document.getElementById('alert').style.display='block'
    }
    if(localStorage.getItem('id') !=null){
      document.getElementById('must').style.display='none'
      const newTask ={
        title : document.getElementById('tit').value,
        createDateAt : document.getElementById('formdate').value,
        des : document.getElementById('des').value,
        content : document.getElementById('more').value,
        tag : document.getElementById('tags').value,
        idUser : localStorage.getItem('id')
      }
      fetch('https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/article', {
          method: 'POST',
          headers: {'content-type':'application/json'},
          body: JSON.stringify(newTask)
        }).then(res => {
          if (res.ok) {
              alert('successfully created an article');
              return res.json(window.location.href='http://127.0.0.1:5500/index.html')
              
          }
          // handle error
        }).then(task => {
          console.log('why')
        }).catch(error => {
          // handle error
          console.log(error)
        })}
        
          
      
        }
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

function ca(){
  document.getElementById('alert').style.display='none'
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