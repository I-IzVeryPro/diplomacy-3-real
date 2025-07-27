tiles.setCurrentTilemap(tilemap`world`)
let chosenCountry = MultiplayerState.create()
chosenCountry = 0
let fight = SpriteKind.create()
mp.onControllerEvent(ControllerEvent.Connected, function on_controller_event_connected(player: mp.Player) {
    let crosshair : Sprite = null
    crosshair = sprites.create(assets.image`bob`, SpriteKind.Player)
    mp.setPlayerSprite(player, crosshair)
    mp.moveWithButtons(player)
    mp.setPlayerState(player, chosenCountry, 0)
    if (player == mp.getPlayerByIndex(0)) {
        scene.cameraFollowSprite(crosshair)
    }
    
    mp.setPlayerIndicatorsVisible(true)
})
class aiStrategy {
    name: string
    aggressiveness: number
    peacefulness: number
    trading: number
    constructor(name: string, aggressiveness: number, peacefulness: number, trading: number) {
        this.name = name
        this.aggressiveness = aggressiveness
        this.peacefulness = peacefulness
        this.trading = trading
    }
    
}

class countryType {
    name: string
    pop: number
    eco: number
    strategy: aiStrategy
    isAi: boolean
    casualties: number
    tilesLost: number
    warTarget: string
    warCooldown: number
    peaceCooldown: number
    peaceTarget: string
    borderingCountries: countryType[]
    tradePartners: countryType[]
    enemies: countryType[]
    isDestroyed: boolean
    chargeCooldown: number
    chargeTarget: string
    tiles: tiles.Location[]
    constructor(name: string, pop: number, eco: number, strategy: aiStrategy, isAi: boolean, casualties: number, tilesLost: number, warTarget: string, warCooldown: number, peaceCooldown: number, peaceTarget: string, borderingCountries: countryType[], tradePartners: countryType[], enemies: countryType[], isDestroyed: boolean, chargeCooldown: number, chargeTarget: string, tiles: tiles.Location[]) {
        this.name = name
        this.pop = pop
        this.eco = eco
        this.strategy = strategy
        this.isAi = isAi
        this.casualties = casualties
        this.tilesLost = tilesLost
        this.warTarget = warTarget
        this.warCooldown = warCooldown
        this.peaceCooldown = peaceCooldown
        this.peaceTarget = peaceTarget
        this.borderingCountries = borderingCountries
        this.tradePartners = tradePartners
        this.enemies = enemies
        this.isDestroyed = isDestroyed
        this.chargeCooldown = chargeCooldown
        this.chargeTarget = chargeTarget
        this.tiles = tiles
    }
    
}

let germany = new countryType("Germany", 200000, 4, new aiStrategy("", 0, 0, 0), true, 0, 0, null, 0, 0, null, [], [], [], false, 0, null, tiles.getTilesByType(assets.tile`germanTile`))
let france = new countryType("France", 100000, 2, new aiStrategy("", 0, 0, 0), true, 0, 0, null, 0, 0, null, [], [], [], false, 0, null, tiles.getTilesByType(assets.tile`franceTile`))
let belgium = new countryType("Belgium", 50000, 1, new aiStrategy("", 0, 0, 0), true, 0, 0, null, 0, 0, null, [], [], [], false, 0, null, tiles.getTilesByType(assets.tile`belgiumTile`))
let britain = new countryType("United Kingdom", 150000, 3, new aiStrategy("", 0, 0, 0), true, 0, 0, null, 0, 0, null, [], [], [], false, 0, null, tiles.getTilesByType(assets.tile`britainTile`))
