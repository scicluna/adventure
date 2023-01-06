import {map} from "./map.js"
import {updateVariables, player, hp, ap, gp } from "./player.js"
//DOMS
const hpEl = document.querySelector('.hp')
const apEl = document.querySelector('.ap')
const textEl = document.querySelector('.text')
const btnContainerEl = document.querySelector(".buttongrid")
let current = 0

//init game
function initGame(){
    resetState()
    initText()
    initBtns()
}
initGame()

//reset player object to intital value
function resetState(){
    player.hp = 10
    player.ap = 5
    player.shortsword = true
    current = 0
    player.day = 1
    delete player.criminal
    delete player.shield
    delete player.rations
    delete player.rope
    delete player.shovel
    delete player.coins
    delete player.gem
    delete player.compass
    delete player.dagger
    delete player.mead
    delete player.goldchain
    delete player.housekey
    delete player.rations
    delete player.shortbow
    delete player.whistle
    delete player.ring
    delete player.spices
    delete player.compass
    updateVariables()
}

//write our current doms to the screen
function initText(){
    hpEl.innerText = player.hp
    apEl.innerText = player.ap
    textEl.innerText = ""
    btnContainerEl.innerHTML = ""

    if (current < 0){
        resetState()
    }

    textEl.innerText = map[current].desc

    for (let i = 0; i<map[current].options.length; i++){

        if (checkRequirement(map[current].options[i].req)){
        let btnEl = document.createElement("button")
        let btnContent = map[current].options[i].txt
        btnEl.innerText = btnContent
        btnEl.classList.add("btn")
        btnEl.dataset.button = i
        btnContainerEl.append(btnEl)
        }
    }
}
//check for player hp
function hpCheck(){
    if (player.hp <= 0){
        console.log("Game Over, You Died")
        initGame()
    } 
    if (current < 0){
        console.log("Game Over, Something Bad Happened to You")
        initGame()
    }
    console.log("Still alive!")
}

//check if the booleon is false else return true
function checkRequirement(bool){
    if (bool === false){
        return false
    } 
    return true
}

//handles a clicked option
function handleClick(e){
    let option = e.target.dataset.button
    //if a state exists, do it
    if (map[current].options[option].state){
        map[current].options[option].state
    }
    //change our map's destination
    current = map[current].options[option].destination
    //update everything
    hpCheck()
    initText()
    initBtns()
    updateVariables()
    console.log(player)
}

//init the new buttons
function initBtns(){
    const btnEls = document.querySelectorAll(".btn")
    btnEls.forEach(btn =>{
        btn.addEventListener("click", handleClick)
    })
}