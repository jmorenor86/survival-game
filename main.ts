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
let enemies: any[] = []
 let dialogmode = true
let lastDirection = 0
let sword: Sprite
 startGame()
 
 function startGame() {
    //  sayHistory()
     createTileMap()
     createPlayer()
     createSword()
     shoot()
    
     
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
     tiles.placeOnTile(john, tiles.getTileLocation(2, 48))
  
     
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
        sprites.destroy(otherSprite, effects.fire, 500)

        

    })

    sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
        let mySprite: Sprite = null
        info.changeLifeBy(-1)
        pause(500)
    })
 }
 
 function createEnemy() {
     enemies.forEach(zombie => {
         tiles.placeOnTile(zombie.type, tiles.getTileLocation(zombie.locationX, zombie.locationY))
         if (zombie.orientation == 'vertical') {
            zombie.type.setVelocity(0, -50)
         } else {
            zombie.type.setVelocity(-50, 0)
         }
         
     })
 }
 
 function createTileMap() {
     tiles.setCurrentTilemap(tilemap`level_1`)
     info.setLife(3)
     scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
        info.changeLifeBy(-1)
        pause(500)
    })
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
     game.showLongText("Hi,I'm John. I'm a warrior in Torralba. I need to investigate why all people are becoming zombies!!!!! to attack press A ", DialogLayout.Bottom)
     dialogmode = false
 }
 
game.onUpdate(() => {
    if (enemies.length == 0) {
        createEnemies()
    } else {
        enemies.forEach(enemy => {
           
            if (enemy.type.isHittingTile(CollisionDirection.Left)) {
                enemy.type.vx += 50
            } else if (enemy.type.isHittingTile(CollisionDirection.Right)) {
                enemy.type.vx += -50
            }
            else if (enemy.type.isHittingTile(CollisionDirection.Top)) {
                enemy.type.vy += 50
            }
            else if (enemy.type.isHittingTile(CollisionDirection.Bottom)) {
                enemy.type.vy += -50
            }

            if (enemy.typeEnemy == 'zombie') {
                animationZombie(enemy)
            }

            if (enemy.typeEnemy == 'piranha') {
                animationPiranha(enemy)
            }
        
            
        })
           
    }
});
 
function animationZombie(enemy: any) {
    
    if (enemy.type.vx > 1) {
                
        animation.runImageAnimation(
            enemy.type, assets.animation`enemy_walk_right`, 500, true)
    } else if (enemy.type.vx < 1) { 

        animation.runImageAnimation(
            enemy.type, assets.animation`enemy_walk_left`, 500, true)
    }
    else if (enemy.type.vy > 1) { 

        animation.runImageAnimation(
            enemy.type, assets.animation`enemy_walk_front`, 500, true)
    }
    else if (enemy.type.vy < 1) { 

        animation.runImageAnimation(
            enemy.type, assets.animation`enemy_walk_down`, 500, true)
    }
}

function animationPiranha(enemy: any) {
    if (enemy.type.vx > 1) {             
        animation.runImageAnimation(
            enemy.type, assets.animation`piranha_animation_right`, 500, true)
    } else if (enemy.type.vx < 1) { 

        animation.runImageAnimation(
            enemy.type, assets.animation`piranha_animation_left`, 200, true)
            
    }
  
}
 
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
     
    enemies.forEach(zombie => {
        if (tmLocation.col == zombie.followX && tmLocation.row == zombie.followY) {
            zombie.type.follow(john, 60)
         }
    })
     
   
 })


 function createEnemies() {
    let enemy0 = { type: sprites.create(assets.image`enemy_left`, SpriteKind.Enemy), locationX: 4, locationY: 44, followX:3, followY: 47,orientation:'horizontal',typeEnemy:'zombie'}
     let enemy1 = { type: sprites.create(assets.image`enemy_right`, SpriteKind.Enemy), locationX: 4, locationY: 30, followX:2, followY: 35 ,orientation:'horizontal',typeEnemy:'zombie'}
     let enemy2 = { type: sprites.create(assets.image`enemy_right`, SpriteKind.Enemy), locationX: 6, locationY: 28, followX: 2, followY: 35,orientation:'horizontal',typeEnemy:'zombie' }
     let enemy3 = { type: sprites.create(assets.image`enemy_down`, SpriteKind.Enemy), locationX: 2, locationY: 27, followX: 2, followY: 35 ,orientation:'horizontal',typeEnemy:'zombie'}
     let enemy4 = { type: sprites.create(assets.image`enemy_front`, SpriteKind.Enemy), locationX: 7, locationY: 31, followX: 6, followY: 29, orientation: 'vertical',typeEnemy:'zombie' }
     let enemy5 = { type: sprites.create(assets.image`enemy_left`, SpriteKind.Enemy), locationX: 17, locationY: 37, followX: 25, followY: 43, orientation: 'horizontal' ,typeEnemy:'zombie'}
     let enemy6 = { type: sprites.create(assets.image`enemy_left`, SpriteKind.Enemy), locationX: 14, locationY: 43, followX: 5, followY: 41, orientation: 'horizontal' ,typeEnemy:'zombie'}
     let enemy7 = { type: sprites.create(assets.image`enemy_down`, SpriteKind.Enemy), locationX: 8, locationY: 46, followX: 13, followY: 45, orientation: 'vertical',typeEnemy:'zombie' }
     let enemy8 = { type: sprites.create(assets.image`enemy_down`, SpriteKind.Enemy), locationX: 22, locationY: 46, followX: 15, followY: 48, orientation: 'vertical',typeEnemy:'zombie' }
     let enemy9 = { type: sprites.create(assets.image`enemy_right`, SpriteKind.Enemy), locationX: 17, locationY: 40, followX: 24, followY: 43, orientation: 'horizontal',typeEnemy:'zombie' }
     let enemy10 = { type: sprites.create(assets.image`enemy_right`, SpriteKind.Enemy), locationX: 12, locationY: 20, followX: 15, followY: 25, orientation: 'horizontal',typeEnemy:'zombie' }
     let enemy11 = { type: sprites.create(assets.image`enemy_down`, SpriteKind.Enemy), locationX: 8, locationY: 20, followX: 15, followY: 24, orientation: 'vertical',typeEnemy:'zombie' }
     let enemy12 = { type: sprites.create(assets.image`enemy_down`, SpriteKind.Enemy), locationX: 3, locationY: 20, followX: 15, followY: 24, orientation: 'vertical',typeEnemy:'zombie' }
     let enemy13 = { type: sprites.create(assets.image`enemy_left`, SpriteKind.Enemy), locationX: 0, locationY: 22, followX: 15, followY: 25, orientation: 'horizontal',typeEnemy:'zombie' }
     let enemy14 = { type: sprites.create(assets.image`enemy_left`, SpriteKind.Enemy), locationX: 0, locationY: 17, followX: 0, followY: 19, orientation: 'horizontal' ,typeEnemy:'zombie'}
     let enemy15 = { type: sprites.create(assets.image`enemy_down`, SpriteKind.Enemy), locationX: 6, locationY: 11, followX: 4, followY: 15, orientation: 'vertical' ,typeEnemy:'zombie'}
     let enemy16 = { type: sprites.create(assets.image`enemy_down`, SpriteKind.Enemy), locationX: 8, locationY: 11, followX: 4, followY: 14, orientation: 'vertical' ,typeEnemy:'zombie'}
     let enemy17 = { type: sprites.create(assets.image`enemy_left`, SpriteKind.Enemy), locationX: 3, locationY: 8, followX: 1, followY: 13, orientation: 'horizontal' ,typeEnemy:'zombie'}
     let enemy18 = { type: sprites.create(assets.image`enemy_left`, SpriteKind.Enemy), locationX: 3, locationY: 5, followX: 0, followY: 13, orientation: 'horizontal',typeEnemy:'zombie' }
     let enemy19 = { type: sprites.create(assets.image`enemy_front`, SpriteKind.Enemy), locationX: 4, locationY: 1, followX: 1, followY: 3, orientation: 'vertical',typeEnemy:'zombie' }
     let enemy20 = { type: sprites.create(assets.image`enemy_front`, SpriteKind.Enemy), locationX: 31, locationY: 19, followX: 28, followY: 19, orientation: 'vertical',typeEnemy:'zombie' }
     let enemy21 = { type: sprites.create(assets.image`enemy_front`, SpriteKind.Enemy), locationX: 35, locationY: 11, followX: 28, followY: 18, orientation: 'vertical' ,typeEnemy:'zombie'}
     let enemy22 = { type: sprites.create(assets.image`enemy_front`, SpriteKind.Enemy), locationX: 30, locationY: 7, followX: 29, followY: 12, orientation: 'horizontal' ,typeEnemy:'zombie'}
     let enemy23 = { type: sprites.create(assets.image`enemy_right`, SpriteKind.Enemy), locationX: 31, locationY: 0, followX: 27, followY: 3, orientation: 'horizontal',typeEnemy:'zombie' }
     let enemy24 = { type: sprites.create(assets.image`enemy_right`, SpriteKind.Enemy), locationX: 49, locationY: 14, followX: 45, followY: 11, orientation: 'horizontal',typeEnemy:'zombie' }
     let enemy25 = { type: sprites.create(assets.image`enemy_right`, SpriteKind.Enemy), locationX: 49, locationY: 19, followX: 44, followY: 14, orientation: 'horizontal',typeEnemy:'zombie' }
     let enemy26 = { type: sprites.create(assets.image`enemy_left`, SpriteKind.Enemy), locationX: 28, locationY: 29, followX: 33, followY: 23, orientation: 'horizontal',typeEnemy:'zombie' }
     let enemy27 = { type: sprites.create(assets.image`enemy_left`, SpriteKind.Enemy), locationX: 28, locationY: 33, followX: 32, followY: 23, orientation: 'horizontal' ,typeEnemy:'zombie'}
     let enemy28 = { type: sprites.create(assets.image`enemy_left`, SpriteKind.Enemy), locationX: 28, locationY: 40, followX: 32, followY: 23, orientation: 'horizontal',typeEnemy:'zombie' }
     let enemy29 = { type: sprites.create(assets.image`enemy_left`, SpriteKind.Enemy), locationX: 28, locationY: 40, followX: 32, followY: 23, orientation: 'horizontal' ,typeEnemy:'zombie'}
     let enemy30 = { type: sprites.create(assets.image`enemy_down`, SpriteKind.Enemy), locationX: 37, locationY: 40, followX: 32, followY: 23, orientation: 'horizontal',typeEnemy:'zombie' }
     let piranha0 = { type: sprites.create(assets.image`piranha_right`, SpriteKind.Enemy), locationX: 17, locationY: 31, followX: 20, followY: 35, orientation: 'horizontal', typeEnemy: 'piranha' }
     let piranha1 = { type: sprites.create(assets.image`piranha_right`, SpriteKind.Enemy), locationX: 17, locationY: 27, followX: 20, followY: 35, orientation: 'horizontal', typeEnemy: 'piranha' }
     let piranha2 = { type: sprites.create(assets.image`piranha_left`, SpriteKind.Enemy), locationX: 24, locationY: 25, followX: 20, followY: 35, orientation: 'horizontal', typeEnemy: 'piranha' }
     let piranha3 = { type: sprites.create(assets.image`piranha_left`, SpriteKind.Enemy), locationX: 24, locationY: 23, followX: 20, followY: 35, orientation: 'horizontal', typeEnemy: 'piranha' }
     let piranha4 = { type: sprites.create(assets.image`piranha_left`, SpriteKind.Enemy), locationX: 6, locationY: 7, followX: 11, followY: 2, orientation: 'horizontal', typeEnemy: 'piranha' }
     let piranha5 = { type: sprites.create(assets.image`piranha_right`, SpriteKind.Enemy), locationX: 20, locationY: 7, followX: 11, followY: 2, orientation: 'horizontal', typeEnemy: 'piranha' }
     let piranha6 = { type: sprites.create(assets.image`piranha_right`, SpriteKind.Enemy), locationX: 27, locationY: 12, followX: 11, followY: 2, orientation: 'horizontal', typeEnemy: 'piranha' }
     let piranha7 = { type: sprites.create(assets.image`piranha_right`, SpriteKind.Enemy), locationX: 26, locationY: 14, followX: 11, followY: 2, orientation: 'horizontal', typeEnemy: 'piranha' }
     let piranha8 = { type: sprites.create(assets.image`piranha_right`, SpriteKind.Enemy), locationX: 47, locationY: 1, followX: 31, followY: 1, orientation: 'horizontal', typeEnemy: 'piranha' }
     let piranha9 = { type: sprites.create(assets.image`piranha_right`, SpriteKind.Enemy), locationX: 46, locationY: 4, followX: 31, followY: 1, orientation: 'horizontal', typeEnemy: 'piranha' }
     let   piranha10 = { type: sprites.create(assets.image`piranha_right`, SpriteKind.Enemy), locationX: 47, locationY: 9, followX:31, followY: 1,orientation:'horizontal',typeEnemy:'piranha' }

    enemies.push(enemy0)
      enemies.push(enemy1)
      enemies.push(enemy2)
      enemies.push(enemy3)
      enemies.push(enemy4)
       enemies.push(enemy5)
      enemies.push(enemy6)
      enemies.push(enemy7)
      enemies.push(enemy8)
      enemies.push(enemy9)
     enemies.push(enemy10)
     enemies.push(enemy11)
     enemies.push(enemy12)
     enemies.push(enemy13)
     enemies.push(enemy14)
     enemies.push(enemy15)
     enemies.push(enemy16)
     enemies.push(enemy17)
     enemies.push(enemy18)
     enemies.push(enemy19)
     enemies.push(enemy20)
     enemies.push(enemy21)
     enemies.push(enemy22)
     enemies.push(enemy23)
     enemies.push(enemy24)
     enemies.push(enemy25)
     enemies.push(enemy26)
     enemies.push(enemy27)
     enemies.push(enemy28)
     enemies.push(enemy29)
     enemies.push(enemy30)
     enemies.push(piranha0)
      enemies.push(piranha1)
      enemies.push(piranha2)
     enemies.push(piranha3)
     enemies.push(piranha4)
     enemies.push(piranha5)
     enemies.push(piranha6)
     enemies.push(piranha7)
     enemies.push(piranha8)
     enemies.push(piranha9)
     enemies.push(piranha10)
    createEnemy()
 }


