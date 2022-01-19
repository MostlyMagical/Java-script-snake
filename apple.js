import { onSnake, expandSnake} from './snake.js'
import { randomGridPosition} from './grid.js'

let apple = getRandomApplePosition()
const expansion_Rate = 1

function update() {
    if (onSnake(apple)) {
        expandSnake(expansion_Rate)
        apple = getRandomApplePosition()
    }
}
//!####### Renders snake
function draw(gameGrid) {
        const appleElement = document.createElement('div')
        appleElement.style.gridColumnStart = apple.x
        appleElement.style.gridRowStart = apple.y
        appleElement.classList.add('apple')
        gameGrid.appendChild(appleElement)
    // console.log('draw snake')
}

function getRandomApplePosition() {
    let newApplePosition
    while(newApplePosition == null || onSnake(newApplePosition)) {
        newApplePosition = randomGridPosition()
    }
    return newApplePosition
}

export {update, draw}