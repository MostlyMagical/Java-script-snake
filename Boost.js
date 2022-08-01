import { onSnake} from "./snake.js";
import { randomGridPosition } from "./grid.js";
import {applesEaten} from "./apple.js"

let Snake_Speed = 5
let boost = getRandomBoostPosition()

function boostSnake() {
    Snake_Speed += 1
    return Snake_Speed
}

function update() {
    if (onSnake(boost)) {
        boostSnake()
        boost = getRandomBoostPosition()
        console.log(Snake_Speed)
    }
}
//!####### Renders snake
function draw(gameGrid) {
        const boostElement = document.createElement('div')
        boostElement.style.gridColumnStart = boost.x
        boostElement.style.gridRowStart = boost.y
        boostElement.classList.add('boost')
        gameGrid.appendChild(boostElement)
    // console.log('draw snake')
}

function getRandomBoostPosition() {
    let newBoostPosition
    if(applesEaten % 5 == 0 && newBoostPosition == null) {
        newBoostPosition = randomGridPosition()
        return newBoostPosition
    }
    else if (applesEaten % 5 <= 1) {
        newBoostPosition = null
        return newBoostPosition
    }
}

export {update, draw, Snake_Speed}