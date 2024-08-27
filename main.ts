 /**
 * This is the main file for your project.
 *
 * Create images, tilemaps, animations, and songs using the
 * asset explorer in VS Code. You can reference those assets
 * using the tagged templates on the assets namespace:
 *
 *     assets.image`myImageName`
 *     assets.tilemap`myTilemapName`
 *     assets.tile`myTileName`
 *     assets.animation`myAnimationName`
 *     assets.song`mySongName`
 *
 * New to MakeCode Arcade? Try creating a new project using one
 * of the templates to learn about Sprites, Tilemaps, Animations,
 * and more! Or check out the reference docs here:
 *
 * https://arcade.makecode.com/reference
 */

 namespace SpriteKind {
    export const Sword = SpriteKind.create()
 }

 let john : any 
 let enemy: any
 let dialogmode = true
let lastDirection = 0
let sword: Sprite
 startGame()
 
 function startGame() {
     sayHistory()
     createTileMap()
     createPlayer()
     createSword()
     shoot()
     createEnemy()
     
 }

function createSword() {
    sword = sprites.create(assets.image`sword`, SpriteKind.Sword)
 }
 
 function createPlayer() {
     john=sprites.create(assets.image`john_left`, SpriteKind.Player)
     controller.moveSprite(john) 
     
     controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
         lastDirection = 0
         walk()
     })
 
     controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
         lastDirection = 1
         walk()
     })
 
     controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
         lastDirection = 2
         walk()
     })
 
     controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
         lastDirection = 3
         walk()
     })
 
     scene.cameraFollowSprite(john)
     tiles.placeOnTile(john, tiles.getTileLocation(1, 49))
     
 }
 
 function walk() {
     if (lastDirection == 0) {
         animation.runImageAnimation(
             john, assets.animation`john_walk_front`,
             200,
             false
         ) 
     }
     else if (lastDirection == 1) {
         animation.runImageAnimation(
             john, assets.animation`john_walk_right`,
             200,
             false
         ) 
     }
     else if (lastDirection == 2) {
         animation.runImageAnimation(
             john, assets.animation`john_walk_down`,
             200,
             false
         ) 
     }
     else if (lastDirection == 3) {
         animation.runImageAnimation(
             john, assets.animation`john_walk_left`,
             200,
             false
         ) 
     }
     
     
 }

function shoot() {
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        if (lastDirection == 0) {
            animation.runImageAnimation(
                sword, assets.animation`sword_front`,
                100,
                false
            )
        }
        if (lastDirection == 1) {
            animation.runImageAnimation(
                sword, assets.animation`sword_right`,
                100,
                false
            )
        }
        if (lastDirection == 2) {
            animation.runImageAnimation(
                sword, assets.animation`sword_down`,
                100,
                false
            )
        }
        if (lastDirection == 3) {
            animation.runImageAnimation(
                sword, assets.animation`sword_left`,
                100,
                false
            )
        }

    })

    sprites.onOverlap(SpriteKind.Sword, SpriteKind.Enemy, function (sprite, otherSprite) {
        let mySprite: Sprite = null
        sprites.destroy(enemy, effects.fire, 500)

    })

    sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
        let mySprite: Sprite = null
        info.changeLifeBy(-1)
        pause(500)
    })
 }
 
 function createEnemy() {
     enemy = sprites.create(assets.image`enemy_left`, SpriteKind.Enemy)
     tiles.placeOnTile(enemy, tiles.getTileLocation(4, 44))
     enemy.setVelocity(-50, 0)
     
     //scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass1, function (sprite, location) {
        // enemy.follow(john, 30)})
 }
 
 function createTileMap() {
     tiles.setCurrentTilemap(tilemap`level_1`)
     info.setLife(3)
     
 }
 

 
 function sayHistory() {
 
     forever(function () {
         if (dialogmode == false) {
             controller.moveSprite(john)
         } else if (dialogmode == true) {
             controller.moveSprite(john, 0, 0)
         } else {
             
         }
     })
     game.showLongText("Hi,I'm John. I'm a military in Torralba. I need to investigate why all people are becoming zombies!!!!! to attack press A ", DialogLayout.Bottom)
     dialogmode = false
 }
 
game.onUpdate(() => {
     if (enemy.isHittingTile(CollisionDirection.Left)) {
         enemy.vx += 50
     } else if (enemy.isHittingTile(CollisionDirection.Right)) {
         enemy.vx += -50
     }
 
     if (enemy.vx > 1) {
         animation.runImageAnimation(
             enemy, assets.animation`enemy_walk_right`, 500, true)
     } else if (enemy.vx < 1) { 
 
         animation.runImageAnimation(
             enemy, assets.animation`enemy_walk_left`, 500, true)
     }
 });
 
 game.onUpdate(function () {
    if (lastDirection == 0) {
        sword.bottom = john.top
        sword.x = john.x
    } else if (lastDirection == 1) {
        sword.left = john.right
        sword.y = john.y
    } else if (lastDirection == 2) {
        sword.top = john.bottom
        sword.x = john.x
    } else {
        sword.right = john.left
        sword.y = john.y
    }
 })

 game.onUpdate(function () {
    let tmLocation = john.tilemapLocation()
    if (tmLocation.col == 3 && tmLocation.row == 47) {
       enemy.follow(john, 30)
    }
 })