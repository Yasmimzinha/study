let musicas = [
    {titulo:'Blue Dream', artista:'Cheel', src:'musica/Blue Dream - Cheel.mp3', img:'imagens/lofi.jpg'},
    {titulo:'Lazy Walk', artista:'Cheel', src:'musica/Lazy Walk - Cheel.mp3', img:'imagens/lofium.jpg'},
    {titulo:'With a Stamp', artista:'Twin', src:'musica/With a Stamp - Twin Musicom.mp3', img:'imagens/lofidois.jpg'},
];


let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');

let imagem = document.querySelector('img');

let nomeMusica = document.querySelector('.descricao h2');

let nomeArtista = document.querySelector('.descricao i');

setTimeout(() => {
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
 }, 1000);


document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.setas-anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
});

document.querySelector('.setas-proximo').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
});

function renderizarMusica(index){
   musica.setAttribute('src', musicas[index].src);
   musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        setTimeout(() => {
            duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
         }, 1000);
   });
}

function tocarMusica(){
    musica.play();
};

function pausarMusica(){
    musica.pause();
};

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration)* 100) + "%";
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
};
 
function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' +  campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

