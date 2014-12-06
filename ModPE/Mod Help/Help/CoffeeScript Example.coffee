#A simple CoffeeScript example

useItem = (x, y, z, itemId, blockId, side, itemDamage, blockDamage) ->
	Player.addItemInventory blockId, 1, blockDamage
	preventDefault()