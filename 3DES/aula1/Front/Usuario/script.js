const visualizacao = document.querySelector(".containercheck");
const tbody = document.querySelector("tbody");
const pswUser = document.querySelector("#pswUser");
const imgUser = document.querySelector("#imgUser");
const emailUser = document.querySelector("#emailUser");

const camera = document.querySelector("#camera");
const foto = document.querySelector("#foto");

const userData = JSON.parse(localStorage.getItem('userdata'));

var imagem = "";

camera.addEventListener("click", () => {
    foto.click();
});

foto.addEventListener("change", (e) => {
    let file = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (data) => {
        //console.log(data.target.result);
        imagem = data.target.result;
        imgUser.src = imagem;
    }

    reader.readAsDataURL(file);
});

function load(){
    carregarAlertas();
    carregarMeusAlertas();
    carregarDados();
}

function carregarMeusAlertas(){
    let idUser = JSON.parse(localStorage.getItem("userdata")).id;
    fetch("http://localhost:3000/localizacao?id_user="+idUser)
    .then(resp => {return resp.json()})
    .then(data => {
        data.forEach(local => {
            let tr = document.createElement('tr');

            let tdId = document.createElement('td');
            let tdCoord = document.createElement('td');
            let tdTipo = document.createElement('td');

            tdId.innerHTML = local.id;
            tdCoord.innerHTML = local.coordenadas;
            tdCoord.style.maxWidth = "150px"
            tdCoord.style.wordWrap = "break-word";
            tdTipo.innerHTML = local.alertum.tipo;

            tr.appendChild(tdId);
            tr.appendChild(tdCoord);
            tr.appendChild(tdTipo);

            tbody.appendChild(tr);
        })
    })
}

function carregarAlertas(){
    let alertas = localStorage.getItem('alertas')

    fetch("http://localhost:3000/alerta")
    .then(resp => {return resp.json()})
    .then(data => {
        data.forEach(alerta => {
            let label = document.createElement("label");
            let checkbox = document.createElement("input");

            label.innerHTML = alerta.tipo;
            label.for = alerta.id;

            checkbox.type = "checkbox";
            checkbox.name = alerta.id;
            if(alertas !== null) {
                if(alertas.includes(alerta.id)) checkbox.checked = true;
            } else{
                checkbox.checked = true;
            }
            
            visualizacao.appendChild(checkbox);
            visualizacao.appendChild(label);
        })
    })
}

function voltar(){
    window.location.href = "../Home"
}

function mostrarMeusAlertas(e){
    const botao = document.querySelector("#salvar");
    
    if(e.parentNode.parentNode.classList.toggle("show") !== false){
        // botao.style.display = "none";
        botao.hidden = true;
    } else if(e.parentNode.parentNode.classList.toggle("show") !== false){
        e.classList.toggle("up");
        e.parentNode.parentNode.classList.toggle("show");
        // botao.style.display = "flex";
        botao.hidden = false;
    }
}

function carregarDados() {
    imgUser.src = (userData.foto !== "") ? userData.foto : '../assets/avatar.png';
    emailUser.value = userData.email;
}

function atualizarDados(){
    let data = {};

    if(pswUser.value !== "") data.senha = md5(pswUser.value);
    if(emailUser.value !== userData) data.email = emailUser.value
    if(imgUser.value !== userData) data.foto = imgUser.src;

    fetch("http://localhost:3000/usuario/"+userData.id, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(resp => {return resp.json()})
    .then(data => {
        if(data.length > 0) {
            localStorage.setItem("userdata", JSON.stringify(data[0]))
        } else {
            alert("Falha ao atualizar dados!")
        }
    })

}

function salvarAlertasAtivos(){
    let alertas = document.querySelector("#alerts").querySelectorAll('input');
    let arr = [];

    alertas.forEach(alerta => {
        if(alerta.checked === true) arr.push(alerta.name);
    })

    localStorage.setItem('alertas', arr);
    alert("Alteração realizada!")
}