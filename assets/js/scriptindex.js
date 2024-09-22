const local = localStorage.getItem('id')
const article_api = "https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/baotran/article"

const render_blog = document.querySelector(".render_blog")

render_blog.innerHTML = ``


async function handleGetAPIUser(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Lấy danh sách các tag và lọc các tag duy nhất
    const tags = data.map(item => item.tag);
    const uniqueTags = [...new Set(tags)];

    // Tạo nội dung HTML cho từng tag
    let contentHtml = '';

    for (let j = 0; j < uniqueTags.length; j++) {
      // Lọc các phần tử theo tag hiện tại
      const filteredItems = data.filter(item => item.tag === uniqueTags[j]);

      let x =JSON.stringify(uniqueTags)
      localStorage.setItem('e',x)

      // Tạo HTML cho các phần tử theo tag
      let itemsHtml = '';
      if (filteredItems.length < 5) {
        for (let i = 0; i < filteredItems.length; i++) {
          itemsHtml += `
            <div class="di3-1">
              <a href="./code/Read.html?id=${filteredItems[i].id}">
                <img src="" alt="" width="100%" />
                <div class="di3-1-1">
                  <h3>${filteredItems[i].title}</h3>
                  <p>${filteredItems[i].des}</p>
                </div>
              </a>
            </div>
          `;
        }
      } else {
        for (let i = 0; i < 5; i++) {
          itemsHtml += `
          <div class="di3-1">
            <a href="./code/Read.html">
              <img src="" alt="" width="100px" />
              <div class="di3-1-1">
                <h3>${filteredItems[i].title}</h3>
                <p>${filteredItems[i].des}</p>
              </div>
            </a>
          </div>
          `;
        }
      }

      // Tạo HTML cho từng tag
      contentHtml += `
        <div class="content">
          <div class="seemore">
            <h3 class="topic">${uniqueTags[j]}</h3>
            <a href='./code/more.html?tag=${uniqueTags[j]}'>see more in detail >></a>
          </div>
          <div class="di3" id="di31">
            ${itemsHtml}
          </div>
        </div>
      `;
    }

    // Đưa nội dung HTML vào phần tử render_blog
    const render_blog = document.querySelector('.render_blog');
    if (render_blog) {
      render_blog.innerHTML = contentHtml;
    }

  } catch (error) {
    console.error(error);
  } finally {
    console.log("Đã hoàn thành");
  }
}

handleGetAPIUser(article_api)



if (local == null) {
  document.getElementById("u").style.display = "none";
  document.getElementById("si").style.display = "inline-block";
  document.getElementById("lo").style.display = "inline-block";
} else {
  document.getElementById("si").style.display = "none";
  document.getElementById("lo").style.display = "none";
  document.getElementById("u").style.display = "inline-block";
}

function add(){
  window.location.href='code/create.html'
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
function star(){
  window.location.href='http://127.0.0.1:5500/code/ReadStar.html'
}