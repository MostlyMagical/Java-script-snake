import {update as updateSnake, draw as drawSnake, Snake_Speed, getSnakeHead, snakeIntersect} from './snake.js'
import {update as updateApple, draw as drawApple} from './apple.js'
import {outsideGrid} from './grid.js'


let lastRenderTime = 0
let gameOver = false
const gameGrid = document.getElementById('game-grid')

//!######### Renders game
function main(currentTime) {
    if (gameOver) {
        if (confirm('Aaaahhhh dickhead. press okay to restart')) {
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
    checkForDeath()
}
// !###### draws and removes the snake body
function draw() {
    gameGrid.innerHTML =''
    drawSnake(gameGrid)
    drawApple(gameGrid)
}

function checkForDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersect()
}