

const button = document.getElementById('button');
const rock = document.getElementById('Piedra');
const paper = document.getElementById('Papel');
const scissors = document.getElementById('Tijeras');
const imageContainer = document.getElementById("imageContainer");
const container = document.getElementById("first-container");
const newGame = document.getElementById("newGame");
const counters = document.getElementById("counters");
const userCounter = document.getElementById("userCounter");
const botCounter = document.getElementById("botCounter");


let h2 = document.createElement("h2");
let h4 = document.createElement("h4");

var clicked = 0;

let currentImage = 0;
const images = [
    "/img/piedra.png",
    "img/hoja-de-papel.png",
    "img/tijeras.png"
];

function showImage() {
    imageContainer.src = images[currentImage];
    currentImage = (currentImage + 1) % images.length;
}

setInterval(showImage, 300);

button.addEventListener('click', () => {
    button.hidden = true;
    rock.hidden = false;
    paper.hidden = false;
    scissors.hidden = false;
    imageContainer.hidden = false;
    counters.hidden = false;
})

rock.addEventListener('click', () => {
    clicked = 0;
    rock.disable = true;
    paper.disable = true;
    scissors.disable = true;
    game(clicked);
});

paper.addEventListener('click', () => {
    clicked = 1;
    rock.disable = true;
    paper.disable = true;
    scissors.disable = true;
    game(clicked);
});

scissors.addEventListener('click', () => {
    clicked = 2;
    rock.disable = true;
    paper.disable = true;
    scissors.disable = true;
    game(clicked);
});

newGame.addEventListener('click', () => {
    rock.hidden = false;
    paper.hidden = false;
    scissors.hidden = false;
    imageContainer.hidden = false;
    newGame.hidden = true;
    h2.remove();
    h4.remove();
})

var winner = "";
const game = ( clicked ) => {
    const rival = Math.floor(Math.random() * 3);
    imageContainer.src = images[rival];

    if(clicked === 0 && rival === 0){
        winner = "Empate";
    }else if(clicked === 0 && rival === 1){
        winner = "Papel gana a piedra, Has perdido";
        botCounter.innerHTML++;
    }else if(clicked === 0 && rival === 2){
        winner = "Piedra gana a tijeras, Has ganado";
        userCounter.innerHTML++;
    }else if(clicked === 1 && rival === 0){
        winner = "Papel gana a piedra, Has ganado";
        userCounter.innerHTML++;
    }else if(clicked === 1 && rival === 1){
        winner = "Empate";
    }else if(clicked === 1 && rival === 2){
        winner = "Tijeras gana a papel, Has perdido";
        botCounter.innerHTML++;
    }else if(clicked === 2 && rival === 0){
        winner = "Piedra gana a tijeras, Has perdido";
        botCounter.innerHTML++;
    }else if(clicked === 2 && rival === 1){
        winner = "Tijeras gana a papel, Has ganado";
        userCounter.innerHTML++;
    }else {
        winner = "Empate";
    }
    
    let content = winner.split(",");

    h2.innerHTML = content.length == 2 ? content[1] : "";
    container.appendChild(h2);

    h4.innerHTML = content[0];
    container.appendChild(h4);

    rock.hidden = true;
    paper.hidden = true;
    scissors.hidden = true;
    imageContainer.hidden = true;

    newGame.hidden = false;
};