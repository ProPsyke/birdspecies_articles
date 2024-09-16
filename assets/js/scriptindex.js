
const ex = document.getElementById('.di31')
console.log(ex)
const ex2 = document.getElementById('.di32')
console.log(ex2)
fetch('https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/article?_limit=5', { //đường dẫn
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

            if(tasks[i].tag = 'Well Known'){
                 ex.innerHTML += `<div class="di3-1-">
                <img src="./assets/images.png" alt="" width="100px" />
                <div class="di3-1-1">
                  <h3>${(tasks[i].title)}</h3>
                  <p>${(tasks[i].des)}</p>
                </div>
              </div>
              `}
    }
    for(let i=0; i< tasks.length; i++){
      if(tasks[i].tag = 'Classic'){
           ex2.innerHTML += `<div class="di3-1-">
          <img src="./assets/images.png" alt="" width="100px" />
          <div class="di3-1-1">
            <h3>${(tasks[i].title)}</h3>
            <p>${(tasks[i].des)}</p>
          </div>
        </div>
        `}
}
   
  }).catch((error) => {
    console.error(error)
  })

  function add(){
    window.location ='http://127.0.0.1:5500/code/create.html'
  }