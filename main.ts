input.onButtonPressed(Button.A, function () {
    botaoApressionado = 0
})
input.onButtonPressed(Button.B, function () {
    botaoApressionado = 1
})
let botaoApressionado = 0
botaoApressionado = 1
basic.forever(function () {
    while (botaoApressionado == 1) {
        for (let index = 0; index < 4; index++) {
            music.playTone(659, 125)
            music.playTone(587, 125)
            music.playTone(349, 250)
            music.playTone(415, 250)
            music.playTone(554, 125)
            music.playTone(494, 125)
            music.playTone(294, 250)
            music.playTone(330, 250)
            music.playTone(494, 125)
            music.playTone(440, 125)
            music.playTone(277, 250)
            music.playTone(330, 250)
            music.playTone(440, 750)
            if (input.buttonIsPressed(Button.A)) {
                break;
            }
        }
    }
})
