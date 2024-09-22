const urlUser ='https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/users'
const si = localStorage.getItem('id')

const on = localStorage.getItem('user')
const tw = localStorage.getItem('email')
const th = localStorage.getItem('permission')
const fo = localStorage.getItem('date')


const fi = document.getElementById('ab')

function ed(){
    window.location.href='http://127.0.0.1:5500/code/useredit.html'
}

fi.innerHTML=`<h2>About me!</h2>
            <div>
                <div>
                    <p>name: ${on}</p>
                    <p>email: ${tw}</p>
                    <p>permission: ${th}</p>
                    <p>created date: ${fo}</p>
                    <div class="e">               
                      <button class="ed" onclick='logout()'>Log Out</button>    
                      <button class='ed' id="ed" onclick="ed()">Edit</button>
                    </div>
                </div>
            </div>`

const article = document.getElementById('article')

fetch('https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/article', { //đường dẫn
    method: 'GET', //phương thức
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then((tasks) => {
    for(i=0; i<tasks.length; i++){
      console.log(i)
        if(tasks[i].idUser == si){
            article.innerHTML+=`
          <div class="di3-1">
            <a href="/code/Read.html?id=${tasks[i].id}">
              <img src="" alt="" width="100px" />
              <div class="di3-1-1">
                <h3>${tasks[i].title}</h3>
                <p>${tasks[i].des}</p>
              </div>
            </a>
          </div>
          `
        }
        else{
            article.innerHTML=`You haven't posted an article yet.`
        }
    }
  }).catch((error) => {
    console.error(error)
  })

  function logout(){
    localStorage.clear()
    window.location.href='http://127.0.0.1:5500/index.html'
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
  function add(){
    window.location.href='create.html'
  }
  

