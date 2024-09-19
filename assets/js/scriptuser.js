

const on = localStorage.getItem('user')
const tw = localStorage.getItem('email')
const th = localStorage.getItem('permission')
const fo = localStorage.getItem('date')

const fi = document.getElementById('ab')

fi.innerHTML=`<h2>About me!</h2>
            <div>
                <div>
                    <p>name: ${on}</p>
                    <p>email: ${tw}</p>
                    <p>permission: ${th}</p>
                    <p>created date: ${fo}</p>
                </div>
            </div>`