import {update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersect} from './snake.js'
import {update as updateApple, draw as drawApple} from './apple.js'
import {update as updateBoost, draw as drawBoost, Snake_Speed} from './Boost.js'
import {outsideGrid} from './grid.js'


let lastRenderTime = 0
let gameOver = false
const gameGrid = document.getElementById('game-grid')

//!######### Renders game
function main(currentTime) {
    if (gameOver) {
        if (confirm('There definitely was not a bad word here. press okay to restart')) {
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceRender < 1 / Snake_Speed) return //not sure divide by 1 is needed here
    lastRenderTime = currentTime
    // console.log('render')

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateApple()
    updateBoost()
    checkForDeath()
}
// !###### draws and removes the snake body
function draw() {
    gameGrid.innerHTML =''
    drawSnake(gameGrid)
    drawApple(gameGrid)
    drawBoost(gameGrid)
}

function checkForDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersect()
}