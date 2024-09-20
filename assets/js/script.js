let myLabels = document.querySelectorAll('.lbl-toggle'); 
Array.from(myLabels).forEach(label => 
    { label.addEventListener('keydown', e => 
        { if (e.which === 32 || e.which === 13) 
            { 
                e.preventDefault(); label.click(); 
            }; 
        }); 
    }); 

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