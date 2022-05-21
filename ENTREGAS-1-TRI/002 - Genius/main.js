const divPontuacao = document.querySelector("div.pontuacao")
const divMain = document.querySelector("main")
const divs = Array.from(divMain.querySelectorAll("div"))
const divBtm = document.querySelector("href.start")
const divBtm2 = document.querySelector("href.start2")
const divBtm3 = document.querySelector("href.start3")
const divCnt = document.querySelector("div.timer")
const ender = document.querySelector("href.endgame")
const finish = document.querySelector("div.warning1")
const ender2 = document.querySelector("href.endgame2")
const alert1 = document.querySelector("div.warning2")
const alert2 = document.querySelector("div.warning3")

    
let sequencia = []
let animatingColors = false
let currentColorPosition = 0
let turnTime = 1421
let gameStarted = false
let gameEnd = false

divMain.addEventListener("click", ev => {
    if (animatingColors) {
        console.log("pattern=waitturn")
        if(gameStarted){
            alert1.classList.remove("warning2")
            setTimeout(() => alert1.classList.add("warning2"), 1598)
        } 
        return
    }
    
    const idxClickedElement = divs.indexOf(ev.target)
    
    if (idxClickedElement !== sequencia[currentColorPosition]) {
        console.log("pattern=defeat")
        if(gameStarted){
            finish.classList.remove("warning1")
            alert2.classList.add("warning3")
            alert1.classList.add("warning2")
            gameEnd = true
        }
        gameStarted = false
        return
    }

    currentColorPosition++
    ev.target.classList.add("animate")

    if(gameEnd){
        return
    }
    
    if (currentColorPosition >= sequencia.length) {
        currentColorPosition = 0
        setTimeout(() => turno(), turnTime)
    }
})


divs.forEach(div => {
    div.addEventListener("animationend", () => {
        div.classList.remove("animate")
    })
})

function playAnimationColors() {
    sequencia.forEach((current, index) => {
        setTimeout(() => {
            divs[current].classList.add("animate");
            animatingColors = index < sequencia.length - 1
        }, turnTime * index);
    })
}

function inicio() {
    console.log("pattern=begin")
    cnt = 3
    sequencia = []
    currentColorPosition = 0
    let idx = setInterval(() => {
        
        divCnt.innerHTML = cnt--

        if(cnt <= -1) {
            divCnt.innerHTML = "go"
            setTimeout(() => divCnt.innerHTML = "", turnTime)
            turno()
            clearInterval(idx)
        }
    }, 831)
}

function inicio2() {
    console.log("pattern=begin")
    cnt = 5
    sequencia = []
    currentColorPosition = 0
    let idx = setInterval(() => {
        
        divCnt.innerHTML = cnt--

        if(cnt <= -1) {
            divCnt.innerHTML = "go"
            setTimeout(() => divCnt.innerHTML = "", turnTime)
            turno()
            clearInterval(idx)
        }
    }, 598)
}

function turno() {
    divPontuacao.innerHTML = sequencia.length
    const rnd = Math.round(Math.random() * 3)
    sequencia.push(rnd)
    playAnimationColors()
}

divBtm.addEventListener("click", ev =>{
    if(gameStarted){
        alert2.classList.remove("warning3")
        alert1.classList.add("warning2")
        setTimeout(() => alert2.classList.add("warning3"), 2115) 
        console.log("pattern:waitstart")
        return
    }
    gameStarted = true
    inicio()
})

divBtm2.addEventListener("click", ev => {
    if(gameStarted){
        alert2.classList.remove("warning3")
        alert1.classList.add("warning2")
        setTimeout(() => alert2.classList.add("warning3"), 2115) 
        console.log("pattern:waitstart")
        return
    }
    gameStarted = true
    turnTime = 537
    inicio2()
})

divBtm3.addEventListener("click", ev=> {
    if(gameStarted){
        alert2.classList.remove("warning3")
        alert1.classList.add("warning2")
        setTimeout(() => alert2.classList.add("warning3"), 2115) 
        console.log("pattern:waitstart")
        return
    }
    gameStarted = true
    turnTime = 967
    inicio()
})

ender.addEventListener("click", ev =>{
    document.location.reload() 
    //usei reload na falta de algo melhor... eu adoro gambiarras :)
})

ender2.addEventListener("click", ev =>{
    document.location.reload() 
})

//oq q os console log significa (isso não é pra mim, é pro professor.... todos os comentarios aqui são pro professor)
//  patterns:   ||  meaning:
//  -begin      ->  jogo começou
//  -waitstart  ->  esperar função inicio terminar
//  -waitturn   ->  esperar animação terminar
//  -defeat     ->  sequencia errada || sequencia inexistente