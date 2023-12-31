player.onChat("castle", function () {
    function wall (forward: number, left: number, height: number) {
    builder.mark()
    builder.shift(forward, 0, left)
    builder.raiseWall(COBBLESTONE_WALL, 6)
    builder.raiseWall(POLISHED_ANDESITE, height)
}
function bridge () {
    blocks.fill(
    OAK_WOOD_SLAB,
    pos(12, 0, 4),
    pos(16, 0, 9),
    FillOperation.Replace
    )
}
function moat(start: Position) {
        blocks.fill(
            WATER,
            start,
            start.add(pos(26, 0, 28)),
            FillOperation.Replace
        )
        let offset2 = start.add(pos(2, 0, 2))
        blocks.fill(
            STONE_BRICKS,
            offset2,
            offset2.add(pos(22, 0, 24)),
            FillOperation.Replace
        )
    }
function gate () {
    blocks.fill(
    IRON_BARS,
    pos(12, 0, 0),
    pos(16, 3, 0),
    FillOperation.Replace
    )
}
current = player.position()
    player.teleport(pos(100, 0, 100))
    let origin = player.position().add(pos(101, 0, 78
))
// clear
    blocks.fill(
    AIR,
    origin,
    origin.add(pos(5, 0, 0)),
    FillOperation.Replace
    )
    function tower(start: Position, mat_base: Block, mat_roof: Block) {
    blocks.fill(mat_base, start, start.add(pos(5, 4, 5)), FillOperation.Replace)
    let offset = start.add(pos(1, 0, 1))
    blocks.fill(mat_base, offset, offset.add(pos(3, 7, 3)), FillOperation.Replace)
    offset = start.add(pos(0, 8, 1))
    // tower roof
    blocks.fill(mat_roof, offset, offset.add(pos(5, 0, 2)), FillOperation.Replace)
    offset = start.add(pos(1, 8, 0))
    blocks.fill(mat_roof, offset, offset.add(pos(3, 0, 5)), FillOperation.Replace)
    offset = offset.add(pos(0, 1, 1))
    blocks.fill(mat_roof, offset, offset.add(pos(3, 0, 3)), FillOperation.Replace)
    offset = offset.add(pos(1, 1, 1))
    blocks.fill(mat_roof, offset, offset.add(pos(1, 0, 1)), FillOperation.Replace)
}
player.teleport(pos(100, 0, 100))
    builder.setOrigin()
    builder.teleportTo(pos(5, 0, 0))
    wallHeight = 5
    towerHeight = 5
    towerSide = 4
    position = 2
    gateWidth = 4
    gateHeight = 4
    wall(20, 0, wallHeight)
wall(0, -20, wallHeight)
wall(-20, 0, wallHeight)
wall(0, 20, wallHeight)
moat(origin.add(pos(0, -1, -1)))
bridge()
gate()
tower(origin.add(pos(2, 0, 1)), POLISHED_DIORITE, PLANKS_OAK)
tower(origin.add(pos(2, 0, 20)), POLISHED_DIORITE, PLANKS_OAK)
tower(origin.add(pos(19, 0, 1)), POLISHED_DIORITE, PLANKS_OAK)
tower(origin.add(pos(19, 0, 20)), POLISHED_DIORITE, PLANKS_OAK)
windows()
})
function windows () {
    blocks.fill(
    GLASS,
    pos(5, 6, 2),
    pos(6, 7, 2),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS,
    pos(22, 6, 2),
    pos(23, 7, 2),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS,
    pos(23, 6, -20),
    pos(22, 7, -20),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS,
    pos(6, 6, -20),
    pos(5, 7, -20),
    FillOperation.Replace
    )
}
let gateHeight = 0
let gateWidth = 0
let towerSide = 0
let towerHeight = 0
let current: Position = null
let position = 0
let wallHeight = 0
