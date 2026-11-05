let canvas=document.querySelector("canvas");
let pen=canvas.getContext("2d");
let arr=[[0,0]]
let cell=50
let direction='right'
let gameOver=false
let score=0
let scoreSpan=document.getElementById("score")
let food=makeFood()
let id=setInterval(()=>{
    shape()
    update()
},100)
document.addEventListener("keydown",(e)=>{
    if(e.key=="ArrowUp"){
        direction='up'
    }
    else if(e.key=="ArrowDown"){
        direction='down'
    }
    else if(e.key=="ArrowLeft"){
        direction='left'
    }
    else if(e.key=="ArrowRight"){
        direction='right'
    }
})

function shape(){
        if(gameOver){
            clearInterval(id)
            return;
        }
    pen.clearRect(0,0,1000,600)
    pen.font="50px serif"
    pen.textAlign="center"
    pen.textBaseline="middle"
    pen.fillText("🍎",food[0]+cell/2,food[1]+cell/2)
    for(let i of arr){
        pen.beginPath()
        pen.fillStyle="red"
        pen.arc(i[0]+cell/2,i[1]+cell/2,cell/2,0,Math.PI*2)
        pen.fill()
    }
}

function makeFood(){
    let x=Math.floor(Math.random()*20)*cell
    let y=Math.floor(Math.random()*12)*cell
    return [x,y]
}

function update(){
    let headX = arr[arr.length-1][0]
    let headY = arr[arr.length-1][1]


    let newX
    let newY
    if(direction=='right'){
        newX=headX+cell
        newY=headY
        if(newX>=1000){
            gameOver=true
        }
    }
    else if(direction=='left'){
        newX=headX-cell
        newY=headY
        if(newX<=0){
            gameOver=true
        }
    }
    else if(direction=='up'){
        newX=headX
        newY=headY-cell
        if(newY<=0){
            gameOver=true
        }
    }
    else {
        newX=headX
        newY=headY+cell
        if(newY>=600){
            gameOver=true
        }
    }
    arr.push([newX,newY])

    if(newX==food[0] && newY==food[1]){
        score++
        scoreSpan.innerText=score
        food=makeFood()
    }
    else{
        arr.shift()
    }
}

