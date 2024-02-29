controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        `, Spacy, 0, -50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let Enemy_ship: Sprite = null
let projectile: Sprite = null
let Spacy: Sprite = null
effects.starField.startScreenEffect()
Spacy = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 7 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 8 7 . . . . . . . 
    . . . . . . 8 8 5 6 . . . . . . 
    . . . . . . 8 7 5 6 . . . . . . 
    . . . . . c c c 6 6 6 . . . . . 
    . . . . 8 8 7 7 7 5 6 6 . . . . 
    . . 8 f f f c c 6 6 f f 6 6 . . 
    . 8 8 8 8 6 6 7 7 7 7 5 7 6 6 . 
    8 8 8 8 8 8 6 6 7 7 7 5 7 7 6 6 
    8 8 8 8 8 8 6 6 7 7 7 7 5 7 6 6 
    `, SpriteKind.Player)
Spacy.setPosition(72, 108)
controller.moveSprite(Spacy, 100, 0)
Spacy.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    Enemy_ship = sprites.create(img`
        2 2 4 5 4 4 4 4 2 2 e e e e e e 
        2 2 4 4 5 4 4 4 2 2 e e e e e e 
        . 2 2 4 5 4 4 4 4 2 2 e e e e . 
        . . 2 2 f f 2 2 c c f f f e . . 
        . . . . 2 2 5 4 4 4 e e . . . . 
        . . . . . 2 2 2 c c c . . . . . 
        . . . . . . 2 5 4 e . . . . . . 
        . . . . . . 2 5 e e . . . . . . 
        . . . . . . . 4 e . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . 4 c . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . b c . . . . . . . 
        . . . . . . . d c . . . . . . . 
        . . . . . . . d c . . . . . . . 
        . . . . . . . d c . . . . . . . 
        `, SpriteKind.Enemy)
    Enemy_ship.setPosition(randint(10, 110), 0)
    Enemy_ship.setVelocity(0, 69)
})
