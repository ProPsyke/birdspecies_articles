const urlUser ='https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/users'
const userId = localStorage.getItem('id')

const on = localStorage.getItem('user')
const tw = localStorage.getItem('email')
const th = localStorage.getItem('permission')
const fo = localStorage.getItem('date')




window.onload = async function() {
    if (userId) {
        try {
            const response = await fetch(`${urlUser}/${userId}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const user = await response.json();
            
            // Điền thông tin vào biểu mẫu
            document.getElementById('username').value =user.fullName;
            console.log(user.fullName)
            document.getElementById('email').value = user.email
            document.getElementById('per').innerHTML = `Permission: ${th}`
            document.getElementById('date').innerHTML = `Created Date: ${fo}`
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
};


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();


    // Lấy các giá trị từ biểu mẫu
    const fullName = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const checkPermission =th;
    const dateOfBirth = fo;

    localStorage.setItem('user',fullName)
    localStorage.setItem('email',email)
    localStorage.setItem('permission',checkPermission)
    localStorage.setItem('date',dateOfBirth)

    // Tạo đối tượng người dùng từ các giá trị
    const user = {
        fullName,
        email,
        checkPermission,
        dateOfBirth
    };

    handleUpdateAPIUser(urlUser, userId, user);
});

async function handleUpdateAPIUser(url, id, params) {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        console.log('User updated successfully:', data);
    } catch (error) {
        console.error('Error updating user:', error);
    } finally {
        // Chuyển hướng về trang chính hoặc trang khác sau khi cập nhật
        window.location.href = "http://127.0.0.1:5500/code/user.html";
    }
}



function ed(){
    window.location.href='http://127.0.0.1:5500/code/user.html'
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

