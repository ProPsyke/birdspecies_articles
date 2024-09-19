fetch('https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/article/', { //đường dẫn
    method: 'GET', //phương thức
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then((tasks) => {
    console.log(tasks)
    const ex = document.querySelector('.h')
    console.log(ex)
    for(let i=0; i< tasks.length; i++){
        ex.innerHTML += `<td>${i+1}</td>
         <td class="a">${(tasks[i].title)}</td>
         <td>${(tasks[i].createDateAt)}</td>
         <td>${(tasks[i].des)}</td>
         <td>${(tasks[i].content)}</td>
         <td>${(tasks[i].tag)}</td>
         <td>
          <span onclick="edit(${tasks[i].id})"><i class="fa-solid fa-pen-to-square"></i></span>
          <span onclick="handleDelete(${tasks[i].id})"><i class="fa-solid fa-trash"></i></span>
        </td>
        `
    }
  }).catch((error) => {
    console.error(error)
  })


  //create button
  function btn(){
    document.getElementById('x').style.display='block'
    document.getElementById('formdate').value= today
  }

  //deleting
  const handleDelete = async(id) =>{
    console.log('delete',id)
    const checkdelete = confirm('bạn có muốn xoá tài khoản người dùng này?')
    if(checkdelete){
        const response = await fetch(
            'https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/article/' + id, 
           { 
            method: 'DELETE'
           }
        );
        location.reload()
    }
}


//exit creating
function exit(){
  document.getElementById('name').value= ''
  document.getElementById('description').value= ''
  document.getElementById('more').value= ''
  document.getElementById('x').style.display = 'none'
  document.getElementById('er').style.display='none'
  document.getElementById('must').style.display='none'
  document.getElementById('show').innerHTML = '0'
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


//create work
function old(){
  if(document.getElementById('show').textContent<150 ){
     document.getElementById('must').style.display='block'
  }
  else{
    document.getElementById('must').style.display='none'
    const newTask ={
      title : document.getElementById('name').value,
      createDateAt : document.getElementById('formdate').value,
      des : document.getElementById('description').value,
      content : document.getElementById('more').value,
      tag : document.getElementById('tags').value,
    }
    fetch('https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/article', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(newTask)
    }).then(res => {
      if (res.ok) {
          return res.json(location.reload());  
      }
      // handle error
    }).then(task => {
      console.log('why')
    }).catch(error => {
      // handle error
      console.log(error)
    })
    

  }
}

function backhome(){
  window.location=('http://127.0.0.1:5500/index.html')
}

function user(){
  window.location.href='http://127.0.0.1:5500/code/administrator.html'
}

