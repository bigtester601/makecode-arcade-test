controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.baDing.play()
})
effects.confetti.startScreenEffect()
let mySprite = sprites.create(assets.image`cube`, SpriteKind.Player)
controller.moveSprite(mySprite)
music.playMelody("C D E F G A B C5 ", 120)
