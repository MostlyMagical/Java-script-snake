import { getInputDirection } from "./controls.js"

const Snake_Speed = 5
const snakeBody = [{x: 11, y: 11}]
let newSegments = 0

function update() {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i-- ){
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
    // console.log ('update snake')
}
//!####### Renders snake
function draw(gameGrid) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.style.gridRowStart = segment.y
        snakeElement.classList.add('snake')
        gameGrid.appendChild(snakeElement)
    })
    // console.log('draw snake')
}

function expandSnake(amount) {
    newSegments += amount
}

function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

function getSnakeHead() {
    return snakeBody[0]
}

function snakeIntersect() {
    return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2) {
    return (
        pos1.x === pos2.x && pos1.y === pos2.y
    )
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }

    newSegments = 0
}

export {Snake_Speed, update, draw, expandSnake, onSnake, getSnakeHead, snakeIntersect}