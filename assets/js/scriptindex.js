const urluser = 'https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/article/'
async function getall(url) {
    try{
        const data = await fetch('https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/article/')
        const res = await data.json()

        const tags = res.map(item => item.tag);

        const uniqueTags =[...new Set(tags)];

        console.log(uniqueTags);
    }
    catch (error){
        console.error(error)
    }finally{
        console.log("đã xong")
    }
}

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
    const ex = document.querySelector('.di3')
    console.log(ex)
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
            if(tasks[i].tag ='Classic'){
                ex.innerHTML += `<div class="di3-1-">
                <img src="./assets/images.png" alt="" width="100px" />
                <div class="di3-1-1">
                  <h3>${(tasks[i].title)}</h3>
                  <p>${(tasks[i].des)}</p>
                </div>
              </div>
              `
            }
    }
   
  }).catch((error) => {
    console.error(error)
  })

getall(url= urluser)

  function add(){
    window.location ='http://127.0.0.1:5500/code/create.html'
  }