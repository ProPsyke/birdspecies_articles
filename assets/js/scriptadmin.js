
fetch('https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/users', { //đường dẫn
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
       <td class="a">${(tasks[i].fullName)}</td>
       <td>${(tasks[i].dateOfBirth)}</td>
       <td>${(tasks[i].checkPermission)}</td>
       <td>${(tasks[i].email)}</td>
       <td>
        <span onclick="edit(${tasks[i].id})"><i class="fa-solid fa-pen-to-square"></i></span>
        <span onclick="handleDelete(${tasks[i].id})"><i class="fa-solid fa-trash"></i></span>
      </td>
      `
  }
}).catch((error) => {
  console.error(error)
})

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

//create work
function old(){
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
