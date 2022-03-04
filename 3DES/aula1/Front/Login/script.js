const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const camera = document.querySelector('#camera');
const login = document.querySelector('#login');
const cadastro = document.querySelector('a');

camera.addEventListener('click', () => {
    foto.click();
})

var imagem = '';

foto.addEventListener('change', (e) => {
    let file = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (data) => {
        imagem = data.target.result;
    }

    reader.readAsDataURL(file);
})

function conectar(){
    let data = JSON.stringify({ 
        email: email.value,
        senha: md5(senha.value)
    });

    fetch("http://localhost:3000/login",{
        "method": 'POST',
        "headers": {
            "Content-Type": 'application/json'
        },
        "body": data
    })
    .then(resp => {return resp.json() })
    .then(data => {
        if(data.length > 0){
            localStorage.setItem("userdata", JSON.stringify(data[0]));
            window.location.href = "../Home"
        } else{
            alert("Usuário ou senha inválidos");
        }
    })
}

function registrar(){
    let data = JSON.stringify({
        email: email.value, 
        senha: md5(senha.value),
        foto: imagem
    })

    fetch("http://localhost:3000/usuario", {
        'method': "POST",
        'headers': {
            "Content-Type": 'application/json'
        },
        "body": data
    })
    .then(resp => {return resp.json()})
    .then(data => {
        if(data.id !== undefined){
            localStorage.setItem("userdata", JSON.stringify(data));
            window.location.href = "../Home";
        } else{
            alert("Falha ao realizar cadastro!");
        }
    })
}

function verificaLogin(){
    if(localStorage.getItem("userdata") != null) {
        window.location.href = '../home';
    }
}

function cadastrar(){
    login.innerHTML = "Cadastrar";
    login.style.width = "40%";
    login.onclick = registrar;
    cadastro.hidden = true;
    camera.hidden = false;
}