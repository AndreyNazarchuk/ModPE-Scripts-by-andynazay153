In Literate CoffeeScript, it only reads the code that is indented. Literate CoffeeScript is CoffeeScript code.

	useItem = (x, y, z, itemId, blockId, side, itemDamage, blockDamage) -> clientMessage blockId + " " + blockDamage
	
The above client messages the block ID and block damage joined by a space.

	startDestroyBlock = (x, y, z, side) ->
		clientMessage "Started destroying block at " + x + ", " + y + ", " + z + " with the side of " + side
		ModPE.log "Started destroying block"