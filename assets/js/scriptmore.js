const urlArticle ="https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/article";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get("tag");
console.log(queryString)

fetch('https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/article', { //đường dẫn
    method: 'GET', //phương thức
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then((tasks) => {
    console.log(tasks)


            for(i=0; i<tasks.length; i++){
                if(tasks[i].tag==userId){
            const k =document.getElementById('class')
            console.log('ok')
            k.innerHTML+=`
            <div class="di3-1">
            <a href='Read.html?id=${tasks[i].id}'>
            <img src="./assets/images.png" alt="" width="100px" />
            <div class="di3-1-1">
            <h3>${tasks[i].title}</h3>
            <p>${tasks[i].des}</p>
            </div>
            </a>
            </div>`
        }
    }

  }).catch((error) => {
    console.error(error)
  })

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
  const local = localStorage.getItem("id");
  console.log(local);

  if (local == null) {
    document.getElementById("u").style.display = "none";
    document.getElementById("si").style.display = "inline-block";
    document.getElementById("lo").style.display = "inline-block";
  } else {
    document.getElementById("si").style.display = "none";
    document.getElementById("lo").style.display = "none";
    document.getElementById("u").style.display = "inline-block";
  }