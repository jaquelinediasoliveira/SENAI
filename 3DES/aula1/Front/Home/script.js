const alerta = document.querySelector('#alerta');
const cadastrar = document.querySelector('#cadastrar');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const menu = document.querySelector('.menu');

var map;
var meuAlerta;

function initMap() {
    map = new google.maps.Map(document.querySelector(".map"), {
        center: { lat: -22.7016704, lng: -46.9925888 },
        zoom: 18,
    });

    map.addListener('click', (data) => {
        console.log(data.latLng.lat(), data.latLng.lng());
        let coord = { lat: data.latLng.lat(), lng: data.latLng.lng()}

        // addMarker(coord, "teste", "../assets/radar.png");
        meuAlerta = coord;

        showModal();
    })

    navigator.geolocation.getCurrentPosition((location) => {
        let coord = { lat: location.coords.latitude, lng: location.coords.longitude}

        map.setCenter(coord);

        addMarker(coord, "Minha Localização", "../assets/location.png");
    });
}

function cadastro(){
    let idUser = JSON.parse(localStorage.getItem('userdata')).id;

    let data = JSON.stringify({ 
        "id_user": idUser,
        "id_alerta": alerta.value,
        "coordenadas": meuAlerta.lat + "," + meuAlerta.lng,
        "ativo": true
    });

    fetch("http://localhost:3000/localizacao", { 
        "method": "POST",
        "headers": { 
            "Content-Type": "application/json"
        },
        "body": data
    })
    .then(resp => {return resp.json()})
    .then(data => { 
        if(data.id != undefined){
            let tipo = alerta.value;
            addMarker(meuAlerta, tipo, "../assets/"+tipo+".png");
            modal.hidden = true;
        } else{
            alert("Falha ao adicionar alerta!");
        }
    })

    closeModal();
}

function addMarker(coord, title, image) {
    new google.maps.Marker({
        position: coord,
        map: map,
        title: title,
        icon: image
      });
}

function carregarAlertas(){
    fetch("http://localhost:3000/alerta") 
    .then(resp => { return resp.json()})
    .then(data => { 
        data.forEach(alert => {
            let op = document.createElement("option");
            op.value = alert.id;
            op.innerHTML = alert.tipo;
            // op.style.backgroundColor = "green"
            alerta.appendChild(op);
        })
    })
}

function inicializar(){
    Alertinhas();
    carregarAlertas()
}

function Alertinhas(){
    let alertas = localStorage.getItem("alertas");

    fetch("http://localhost:3000/localizacao")
    .then(resp => { return resp.json()})
    .then(data => { 
        data.forEach(localizacao => {
            let coordenadas = localizacao.coordenadas.split(',');
            let coord = { lat: Number(coordenadas[0]), lng: Number(coordenadas[1])};

            let imagem = "../assets/" + localizacao.alertum.id + ".png";

            if(alertas !== null){
                if(alertas.includes(localizacao.alertum.id)){
                    addMarker(coord, localizacao.alertum.tipo, imagem);
                } 
            }else{
                addMarker(coord, localizacao.alertum.tipo, imagem);
            }
        })
    })
}

function showModal(){
    modal.style.display = "flex";
}

function closeModal(){
    modal.style.display = "none";
}

function showMenu(){
 menu.style.left = "0px";
}

function closeMenu(){
    menu.style.left = "-50%";
}

function config(){
    window.location.href = "../Usuario";
}

function sair(){
    localStorage.clear();
    window.location.href = "../Login";
}