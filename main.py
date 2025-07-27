tiles.set_current_tilemap(tilemap("""world"""))

chosenCountry = MultiplayerState.create()
chosenCountry = 0

fight = SpriteKind.create()

def on_controller_event_connected(player):
    crosshair: Sprite = None

    crosshair = sprites.create(assets.image("""bob"""), SpriteKind.player)

    mp.set_player_sprite(player, crosshair)
    
    mp.move_with_buttons(player)

    mp.set_player_state(player, chosenCountry, 0)

    if player == mp.get_player_by_index(0):
        scene.camera_follow_sprite(crosshair)
    
    mp.set_player_indicators_visible(True)

mp.on_controller_event(ControllerEvent.CONNECTED, on_controller_event_connected)

class aiStrategy:
    def __init__(self, name: str, aggressiveness: int, peacefulness: int, trading: int):
        self.name = name
        self.aggressiveness = aggressiveness
        self.peacefulness = peacefulness
        self.trading = trading

class countryType:
    def __init__(self, name: str, pop: int, eco: int, strategy: aiStrategy, isAi: bool, casualties: int, tilesLost: int, warTarget: str, warCooldown: int, peaceCooldown: int, peaceTarget: str, borderingCountries: List[countryType], tradePartners: List[countryType], enemies: List[countryType], isDestroyed: bool, chargeCooldown: int, chargeTarget: str, tiles: List[tiles.Location]):
        self.name = name
        self.pop = pop
        self.eco = eco
        self.strategy = strategy
        self.isAi = isAi
        self.casualties = casualties
        self.tilesLost = tilesLost
        self.warTarget = warTarget
        self.warCooldown = warCooldown
        self.peaceCooldown = peaceCooldown
        self.peaceTarget = peaceTarget
        self.borderingCountries = borderingCountries
        self.tradePartners = tradePartners
        self.enemies = enemies
        self.isDestroyed = isDestroyed
        self.chargeCooldown = chargeCooldown
        self.chargeTarget = chargeTarget
        self.tiles = tiles

germany = countryType("Germany", 200000, 4, aiStrategy("", 0, 0, 0), True, 0, 0, None, 0, 0, None, [], [], [], False, 0, None, tiles.get_tiles_by_type(assets.tile("""germanTile""")))
france = countryType("France", 100000, 2, aiStrategy("", 0, 0, 0), True, 0, 0, None, 0, 0, None, [], [], [], False, 0, None, tiles.get_tiles_by_type(assets.tile("""franceTile""")))
belgium = countryType("Belgium", 50000, 1, aiStrategy("", 0, 0, 0), True, 0, 0, None, 0, 0, None, [], [], [], False, 0, None, tiles.get_tiles_by_type(assets.tile("""belgiumTile""")))
britain = countryType("United Kingdom", 150000, 3, aiStrategy("", 0, 0, 0), True, 0, 0, None, 0, 0, None, [], [], [], False, 0, None, tiles.get_tiles_by_type(assets.tile("""britainTile""")))