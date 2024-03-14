input.onButtonPressed(Button.A, function () {
    if (character == "A") {
        basic.clearScreen()
        game.addScore(1)
        basic.pause(500)
        basic.showNumber(game.score())
        randomChar()
        basic.pause(3000)
        basic.showString(character)
    } else {
        basic.clearScreen()
        game.removeLife(1)
        basic.pause(1000)
        basic.showNumber(game.life())
        randomChar()
        basic.pause(3000)
        basic.showString(character)
        if (game.life() == 0) {
            game.gameOver()
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    game.isRunning()
randomChar()
    basic.pause(3000)
    basic.showString(character)
    if (game.life() == 0) {
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    if (character == "B") {
        basic.clearScreen()
        game.addScore(1)
        basic.pause(1500)
        basic.showNumber(game.score())
        randomChar()
        basic.pause(3000)
        basic.showString(character)
    } else {
        basic.clearScreen()
        game.removeLife(1)
        basic.pause(1000)
        basic.showNumber(game.life())
        randomChar()
        basic.pause(3000)
        basic.showString(character)
        if (game.life() == 0) {
            game.gameOver()
        }
    }
})
function randomChar () {
    basic.pause(500)
    characterGenerator = randint(0, 1)
    if (characterGenerator == 0) {
        character = "A"
    } else {
        character = "B"
    }
}
let characterGenerator = 0
let character = ""
game.setScore(0)
game.setLife(2)
randomChar()
basic.showString(character)
