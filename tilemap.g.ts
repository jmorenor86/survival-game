// Auto-generated code. Do not edit.
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTiles.transparency16":return img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`;
            case "myTiles.tile1":
            case "money":return img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. 7 7 7 f f f 7 f f f f 7 f f f 
. 7 7 7 f 7 f 7 f 7 7 f 7 f f f 
. 7 7 7 7 7 f 7 f 7 7 f 7 f 4 f 
. 7 7 7 7 7 f 7 f 7 7 f 7 f f f 
. 7 7 7 7 7 f 7 f 7 7 f 7 7 7 7 
. 7 7 7 7 7 f 7 f f f f 7 7 7 7 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`;
            case "myTiles.tile2":
            case "PERSON":return img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . e e e e e e e . . . . . . 
. . . e d d d d d e . . . . . . 
. . . . d f d f d e . . . . . . 
. . . . d d d d d . . . . . . . 
. . . . d f f f d . . . . . . . 
. . . . 8 8 8 8 8 . . . . . . . 
. . . . 8 8 8 8 8 . . . . . . . 
. d 8 8 8 8 8 8 8 8 8 8 d . . . 
. d 8 8 8 8 8 8 8 8 8 8 d . . . 
. . . . f f f f f f . . . . . . 
. . . . f f f f f f . . . . . . 
. . . . f f . . f f . . . . . . 
. . . e e e . . e e e . . . . . 
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

    helpers._registerFactory("song", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

}
// Auto-generated code. Do not edit.

// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level_1":
            case "level 1":return tiles.createTilemap(hex`320032001b15150101010101010101010101010101393d3d3d3d3d3d3d3d0101010101042c2c2c2c2c2c2c2c3e2c2c2c2c2c2c2c2c2c0101010101010101010101010101010101393d3d3d3d3d3d3d3d0101010101012c2c2c3e2c2c2c2c3e3e2c2c3e3e2c2c2c2c0101010239393939393939013c3c3939393930303030303a3d3d01013d3d3d04042c2c3e2c2c2c2c2c2c2c2c2c3e2c2c2c2c01010102392c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c3a3d3d01013d3d3d042c2c2c2c2c2c2c2c2c3e2c2c2c3e2c2c2c2c01010102392c2c2c2c2c2c2c2c3e3e3e3e3e3e3e2c2c2c3a3d3d01013d3d3d042c2c2c2c2c2c2c2c2c2c2c2c2c3e2c2c2c2c01010102392c2c2c2c2c3e3e3e2c2c2c2c2c2c3e2c2c2c3a3d3d01013d3d3d042c2c2c2c2c2c3e2c2c2c2c2c2c3e2c2c2c2c01010102392c2c2c2c2c3e2c2c2c2c2c2c2c2c3e2c2c2c3a01010101010101042c2c2c2c2c2c3e2c2c3e2c2c3e3e2c2c2c2c01010102392c2c2c2c2c3e3e3e3e3e3e3e3e2c3e3e2c2c3a01010101010101042c2c2c2c2c2c2c2c2c2c2c2c3e2c2c2c2c2c01010102392c2c2c2c2c2c2c2c2c2c2c2c3e3e2c2c2c2c3a0101010101010104010101012c2c2c2c2c2c2c3e2c2c2c2c2c2c01010102392c2c2c2c2c2c2c2c2c2c2c2c2c3e2c2c2c2c3a0101010101010104010101012c2c2c2c2c2c2c2c2c2c2c2c2c2c01010102383838383838383838383838372c3e3b3a3a3a3a3b303c3a3a01013a3a3a3a3a3a3a3a3a3a3a3a3a2c2c2c2c2c2c0101013b3b0d0d0d0d0d0d0d0d0d0d0d362c2c3e2c2c2c2c2c2c2c2c0101011515151515151515151515163a01013a3a3a3a010101023b0d0d0d0d0d0d0d0d0d0d0d362c2c3e3e2c2c2c2c2c2c2c3a01010101010101010101010101023a010101010101010104043b0d0d0d0d0d0d0d0d0d0d0d362c2c2c3e3e2c2c2c2c2c2c3a01010101010101010101010101023a010101010101010101020d0d0d0d0d0d0d0d0d0d0d0d362c2c2c2c3e3e3e3e2c2c2c3a01010101010101010101010101023a010101010101010101010d0d0d0d0d0d0d0d0d0d0d0d362c2c2c2c2c2c2c3e2c2c2c3a01010101010101010101010101023a01010101010101010102340d0d0d0d0d0d0d0d0d0d0d362c2c2c2c2c2c2c3e2c2c2c3a01010101010101010101010101023a01010101010101010102340d0d0d0d0d0d0d0d0d0d0d362c3e3e3e3e3e3e3e2c2c2c3a01010101010101010101010101023a010101010101010101020735353535353535353535350a2c2c2c2c2c2c2c2c2c2c2c0101010101010101010101010101023a01010101010101010430303030303030303030303030002c2c2c2c2c2c2c2c2c2c2c01171717171717171717171717171e3a010101010101010101151515151515151515151515040404040404040404040404043a3a3a3a3a3a3a3a3a3a3a3a3a3a3a3a010101010101010101010101010101010101010101042c2c2c2c2c2c2c2c2c2c2c0401010101010101010101010101010101010101010104010101010101010101010101010101042c2c2c2c2c2c2c2c2c2c2c0401010101010101010101010101010101010101010104010101010101010101010101010101042c2c2c2c2c2c2c2c2c2c2c04040404040101040401040404040404043d3d3d3d0404010101010101010101010101010101012c2c2c2c3e2c2c3e2c2c2c0401010101010101040404010401010104040404040401010101010101010101010101010101012c2c3e2c2c2c2c2c2c3e2c0401010101010101010101040101010101014201010101040404040404040404040404040404042c2c2c2c2c2c2c2c2c2c2c04010101010101010101010401010101010101010101011b1515151515151515151515151516042c2c2c2c2c3e2c2c2c2c2c0401010101010101010101040101010101010101010101030101010101010101010101010102042c2c3e2c2c2c2c2c2c2c2c0401010101010101010101040101010101010101010101030101010117010101010101010102042c2c2c2c2c3e2c2c2c2c2c0401010101010101010101040101010101010101010101030101010204181819191919191919042c2c2c2c2c2c2c2c3e2c2c04010101010101010101010401010101010101010101010301010102040d0d0d0d0d0d0d0d19042c3e2c2c2c2c2c2c2c2c2c04010101010101010101040101010101010101010101010301010102040d0d0d0d0d0d0d0d19042c2c2c2c2c2c3e2c2c2c2c0401010101010101010104010101010101010101010101030101010204191919190d0d0d1919042c2c3e2c2c2c2c2c2c2c2c04010101010101010101040101010101010101010101010301010102043d3d3d190d0d0d193d042c2c2c2c2c2c2c2c2c2c2c0401010101010101010104010101010101010101010101030101010204191919190d0d0d191919232824282a2a2824272726040101010101010101010401010101010101010101010106090c0909193d3d0d0d0d0d0d3d3d19222b1212121212121213250401010101010101010104010101010101010101010101080d12130b193d3d0d0d0d0d0d3d3d1922110d0d0d0d0d0d0d1425040101010101010101010401010101010101010101010108110d140b19191919190d0d1919191922110d0d0d0d0d0d0d1425040101010101010101010401010101010101010101010108110d140b0d0d0d0d0d0d0d0d0d3d1929110d0d0d0d0d0d0d14250401010101010101010104040404010101010101010101080e0f100b0d0d0d0d0d0d0d0d193d1922110d0d0d0d0d0d0d14250401010101010101010101010104232424241824242426070d0d070a1a1a19191919191919191922110d0d0d0d0d0d0d1425040101010101010101010101010122320d0d0d0d0d0d3103010102041c05050505050505050519220e0f0f0f0f0d0d0d1425040101010101010101010101010122330d0d0d0d0d0d3103010101040505050505050505050519211f2a1f1f4141410f10200401010101010101010101010101220d0d0d0d0d0d0d3103010101403f3f3f3f3f3f3f3f3f3f192f2d2d2d2e04030101020404010101010101010101010101010d0d0d0d0d0d0d0d31030101024019191919191919191818190404040404041d0101020404010101010101010101010101010d0d0d0d0d0d0d0d31030101020419050505050505050505191b151515151515010102040401010101010101010101010101220d0d0d0d0d0d0d310404040504190505050505050505051a03010101010101010102040401010101010101010101010101220d0d0d0d0d0d0d310301010204190505050505050505051a1d17171717171717171e040404010101010101010101010101220d0d0d0d0d0d0d310301010204191919191919191919191904040404040404040404040101010101010101010101010101211f1f1f1f1f1f1f20`, img`
.................2.............2..................
.................2................................
....2222222.222222222222.......22.................
....2..................2.......2..................
....2..................2.......2..................
....2..................2.......2..................
....2..................2.......2..................
....2..................2.......2..................
....2..................2.......2..................
....2..................2.......2..................
....2222222222222..2222222222..2222222222222......
...22...........2...........2..............2..2222
....2...........2...........2..............2......
..222...........2...........2..............2......
................2...........2..............2......
................2...........2..............2......
....2...........2...........2..............2......
....2...........2...........2..............2......
....2222222222222..........................2......
..22222222222222...........................2......
...............22222222222222222222222222222......
...............2...........2.....................2
...............2...........2.....................2
...............2...........22222..22.2222222....22
...........................2.......222.....222222.
...........................2..........2...........
2222222222222222...........2..........2...........
...............2...........2..........2...........
...............2...........2..........2...........
...............2...........2..........2...........
.....2..22222222...........2..........2...........
.....2........22...........2.........2............
.....2........22...........2.........2............
.....22222...222...........2.........2............
.....2...2...2.2...........2.........2............
.....22222...2222222..222222.........2............
22.222.........22.........22.........2............
2...22.........22.........22.........2............
2...222222..22222.........22.........2............
2...2..........22.........22.........2222.........
2...2........2.22.........22............22222.2222
2..22..2222222222.........22.............2.......2
....2..........22.........22.............2.......2
....2..........222222222..22.............2.......2
....2..........2.....2....22.....................2
....222222222..2222222....22.....................2
....22.........2..........22.............2.......2
222.22....................22.............2.......2
....22....................222............2.......2
....22222222222222222222222..............222222222
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleSwitchUp,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath8,sprites.builtin.field0,sprites.builtin.brick,sprites.builtin.field1,sprites.castle.tilePath1,sprites.castle.tileGrass2,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.darkGroundNorthWest0,sprites.swamp.swampTile9,sprites.builtin.forestTiles10,sprites.builtin.forestTiles11,sprites.builtin.forestTiles5,sprites.builtin.forestTiles2,sprites.dungeon.greenOuterEast0,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorClosedSouth,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.floorLight2,sprites.builtin.forestTiles4,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,sprites.dungeon.hazardLava1,sprites.swamp.swampTile13,sprites.castle.tileGrass3,sprites.builtin.forestTiles20,sprites.dungeon.greenOuterSouth0,sprites.dungeon.stairLadder], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return myTiles.transparency16;
            case "money":
            case "tile1":return myTiles.tile1;
            case "PERSON":
            case "tile2":return myTiles.tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
