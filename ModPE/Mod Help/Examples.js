//EXAMPLES OF EVERY FUNCTION AND HOOK
//The functions that edit the textures, getLevel(), Level.getAddress(), renderers, and getMCPE() from the iOS version of ModPE are not included

ModPE.setItem(511, "ruby", 0, "ruby", 65); //Defines a ruby with the ID of 511 and the max stack limit of 65
Item.setMaxDamage(511, 5); //Sets the max damage of the ruby to 5
ModPE.langEdit("item.ruby.name", "Ruby"); //Changes the value of "item.ruby.name" in the en_US.lang file to the string "Ruby"
Block.defineBlock(137, "commandBlock", [["command_block", 0]], 7, 0, 0); //Defines a command block
ModPE.langEdit("tile.commandBlock.name", "Command Block"); //Changes the value of "tile.commandBlock.name" in the en_US.lang file to the string "Command Block"
Block.setExplosionResistance(137, 18000000); //Sets the explosion resistance of the command block to 18000000
Block.setDestroyTime(137, -1); //Sets the command block's destroy time to -1 ticks; making it undestroyable
Block.setColor(35, [0x000000, 0x000000]); //Sets the color of each of the first 2 damage values of the command block to white
Block.setLightLevel(137, 10); //Sets the light level of the command block to 10
Block.setShape(137, 0, 0, 0, 1, 0.5, 1); //Sets the commmand block's shape to the shape of a half slab
Block.setRenderLayer(137, 1); //Makes the command block transparent
Item.setCategory(61, 8, 0); //Sets the furnace's category to the fourth tab in the crafting table
Item.addCraftRecipe(61, 1, 0, [3, 2, 0, 351, 1, 15]); //Adds a new recipe for the furnace which uses 2 dirt and 1 bone meal
Item.addShapedRecipe(1, 1, 0, ["S", "S", "S", "G", "G", "G", "D", "I", "D"], ["S", 280, 0, "G", 2, 0, "D", 264, 0, "I", 266, 0]); //Adds a new recipe for stone where sticks fill the first row, grass blocks fill the second row, and diamonds fill up the third row except for the middle, which is filled with an iron ingot.
Item.addFurnaceRecipe(263, 351, 15); //Adds a smelting recipe in which it gives you bone meal if you smelt coal
ModPE.setFoodItem(510, "stick", 0, 20, "Test Food", 66); //Defines a food item that looks like a stick, is named "Test Food", restores 20 half hearts, and as the max stack limit of 66

function newLevel(hasLevel) { //Runs when a world is entered
	clientMessage("Hi"); //Client messages "Hi"
	print(hasLevel); //Prints the boolean hasLevel
	Player.addItemCreativeInv(331, 5, 0); //Adds redstone to the creative inventory
	if(!ModPE.readData("test")) ModPE.saveData("test", "Test"); //If the saved data with the key of "test" doesn't exist, saves data with the key of "test" equal to the value "Test"
}

function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage) { //Runs when an item is used
	clientMessage(Item.getName(itemId, itemDamage, 1)); //Client messages the raw name of the item that was used
	if(side == 1) { //If the side 1 (the top)
		Level.explode(x, y, z, 4); //Explodes at the coordinates of the tapped block with a radius of 4; an alternative is explode()
		Player.addItemInventory(blockId, 1, blockDamage); //Adds one of the tapped block into the player's inventory; an alternative is addItemInventory();
	} else { //Otherwise
		if(blockId == 58) preventDefault(); //Prevents the player from going into the crafting table if the tapped block is a crafting table
		else { //Otherwise
			Entity.setMobSkin(Player.getEntity(), "mob/chicken.png"); //Sets the player's skin to "mob/chicken.png"; an alternative to Player.getEntity() is getPlayerEnt(), an alternative to Entity.setMobSkin() is bl_setMobSkin(), which will be removed in BlockLauncher 1.7
			Entity.setRenderType(Player.getEntity(), 6); //Sets the render type of the player to a chicken
			Level.dropItem(x + 0.5, y + 1, z + 0.5, 0, 264, 64, 0); //Drops 64 diamonds right above where the player has tapped
			Level.setTile(x, y, z, 57, 0); //Sets the tile at the coordinates x, y, and z to a diamond block; an alternative is setTile()
		}
	} if(Level.getBrightness(x, y, z) > 5) clientMessage("That's a bright block!"); //Client messages "That's a bright block" if the raw loght level of the specified block is larger than 5
	if(b == 68) { //If the tapped block is a wall sign
		print(Level.getSignText(x, y, z, 0)); //Prints the first line of the tapped sign
		Level.setSignText(x, y, z, 0, "Hi"); //Sets the first line of the tapped sign to "Hi"
	}
	Level.playSound(x, y, z, "random.burp", 100, 100); //Plays a burping sound at the tapped block.
}

function attackHook(attacker, victim) { //Runs when a player attacks an entity
	if(Entity.getEntityTypeId(victim) == 32) Entity.setSneaking(victim, 1); //Makes the victim sneak if the victim is a zombie
	else clientMessage(Entity.getYaw(victim) + " " + Entity.getPitch(victim)); //Otherwise, client messages the victim's yaw and pitch separated by a space; an alternative to Entity.getYaw() is getYaw(), and an alternative to Entity.getPitch() is getPitch()
	Entity.rideAnimal(attacker, victim); //Mounts the attacker onto the victim; an alternative is rideAnimal()
	clientMessage(Level.getData(Entity.getX(attacker), Entity.getY(attacker) - 2, Entity.getZ(attacker))); //Client messages the damage of the block 2 blocks below the attacker's head
	ModPE.setCamera(victim); //Sets the player's view to the victim's view
	if(Player.getCarriedItem() == 511) { //If the player is carrying a ruby; an alternative is getCarriedItem()
		if(Player.getCarriedItemData() < 4) Entity.setCarriedItem(attacker, 511, Player.getCarriedItemCount(), Player.getCarriedItemData() + 1); //Increments the player's carried item damage if the player's carried item damage is below 4
		else { //Otherwise
			Player.clearInventorySlot(Player.getSelectedSlotId()); //Removes the player's carried item
			Level.playSoundEnt(attacker, "random.break", 100, 100); //Plays the sound "random.break" at the player's position
		}
	}
}

function deathHook(murderer, victim) { //Runs when a mob dies
	if(Entity.getEntityTypeId(victim) == 36) Level.dropItem(Entity.getX(victim) + 0.5, Entity.getY(victim) - 1, Entity.getZ(victim) + 0.5, 0, 511, 1, 0); //If the victim is a zombie pigman, drops a ruby at the coordinates of the victim
	else Level.dropItem(Entity.getX(victim) + 0.5, Entity.getY(victim) + 1, Entity.getZ(victim) + 0.5, 0, 200, 1, 0); //Otherwise, drops a command block one block above the victim's head
}

function procCmd(cmd) { //Runs when a command is entered
	var cmd = cmd.split(" "); //Splits the command by spaces into an array
	if(cmd[0] == "test") clientMessage(cmd[1] + " " + Player.getX() + " " + Player.getY() + " " + Player.getZ()); //Client messages cmd[1] if cmd[0] (a.k.a the command) is "test" and the player's X, Y, and Z coordinates joined by spaces; an alternative to Player.getX() is getPlayerX(), an alternative to Player.getY() is getPlayerY(), and an alternative to Player.getZ() is getPlayerZ()
	else if(cmd[0] == "randomspawn") { //Else if cmd[0] (a.k.a the command) is "randomspawn"
		var random = Math.random(); //Defines the variable random and set it equal to Math.random()
		if(random < 0.1) Level.spawnChicken(Player.getX() + 0.5, Player.getY() - 1, Player.getZ() + 0.5, "mob/chicken.png"); //Spawns a chicken at the player's position with the skin of "mob/chicken.png" if random is smaller than 0.1; an alternative is spawnChicken()
		else if(random >= 0.1 && random < 0.2) Level.spawnCow(Player.getX() + 0.5, Player.getY() - 1, Player.getZ() + 0.5, "mob/cow.png") //Spawns a cow at the player's position with the skin of "mob/cow.png" if random is larger than or equal to 0.1 and is smaller than 0.2; an alternative is spawnCow()
		else spawnPigZombie(Player.getX() + 0.5, Player.getY() - 1, Player.getZ() + 0.5, 276, "mob/pigzombie.png"); //Spawns a zombie pigman at the player's position carrying a diamond sword with the skin of "mob/pigzombie.png" if none of the above statemnts fit; unlike the other spawn functions, spawnPigZombie() has no Level namespace
	} else if(cmd[0] == "joinserver") { //Else if cmd[0] (a.k.a the command) is "joinserver"
		if(!cmd[1]) return; //Returns if cmd[1] is not entered
		Server.joinServer(cmd[1], cmd[2] ? cmd[2] : 19132); //Joins the server with the IP address of cmd[1], and the port of cmd[2] if it is entered, otherwise 19132; an alternative is ModPE.joinServer(), which will be removed in BlockLauncher 1.7
	} else if(cmd[0] == "enterworld") { //Else if cmd[0] (a.k.a the command) is "enterworld"
		if(!cmd[1]) return; //Returns if cmd[1] is not entered
		if(java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftworlds/", cmd[1] + "/").exists()) { //If the specified world exists
			ModPE.selectLevel(cmd[1], null, null, null); //Selects the specified world
			clientMessage("Selected"); //Client messages "Selected"
		} else clientMessage("§cEnter a valid world name."); //If the above statement doesn't fit, client messages the string "Enter a valid world name" in red
	} else if(cmd[0] == "screenshot") ModPE.takeScreenshot("screenshot"); //Else if cmd[0] (a.k.a the command) is "screenshot" take a screenshot with the file name "screenshot" (with the date and time added)
	else if(cmd[0] == "list") clientMessage("There are " + Server.getAllPlayers().length + " players:\n" + Server.getAllPlayerNames().join(", ") + "\nThere are also " + Entity.getAll().length + " entities, including players"); //Else if cmd[0] (a.k.a the command) is "list" client messages "There are " joined with the amount of players there are joined with " players" joined with a line break joined with all the player names joined with a comma joined with a line break joined with "There are also " joined with the amount of entities there are in the world joined with " entities, including players"
	else if(cmd[0] == "address") clientMessage(Server.getAddress() + ":" + Server.getPort()); //Else if cmd[0] (a.k.a the command) is "address" client messages the address and port of the current server joined with a colon
	else if(cmd[0] == "gamemode") Level.setGameMode(cmd[1]); //Else if cmd[0] (a.k.a the command) is "gamemode" sets the gamemode to cmd[1]
	else if(cmd[0] == "Player") { //Else if cmd[0] (a.k.a the command) is "Player"
		clientMessage([Player.getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemCountData()].join(", ")); //Client messages the ID, count, and damage of the item that the player is holding joined by a comma; an alternative to Player.getCarriedItem() is getCarriedItem()
		if(Player.getArmorSlot(0) && Player.getArmorSlotDamage(0)) Player.setArmorSlot(0, 3, 0); //Sets the item in the first armor slot to dirt if the ID of the item and the damage of the item in the first armor slot aren't 0
		Player.setHealth(20); //Sets the player's health to 20 half hearts
		print([Player.getInventorySlot(Player.getSelectedSlotId() + 1), Player.getInventorySlotCount(Player.getSelectedSlotId() + 1), Player.getInventorySlotData(Player.getSelectedSlotId() + 1)].join(", ")); //Prints the ID, count, and damage of the item in the slot after the slot that the player has selected joined by a comma
		Player.clearInventorySlot(Player.getSelectedSlotId()); //Clears the selected slot
	} else ModPE.leaveGame(); //Leaves the world if none of the above statements fit
}

function entityAddedHook(entity) { //Runs when an entity is added
	clientMessage("A new entity has been added") //Client messages "A new entity has been added!"
	Entity.setFireTicks(entity, Level.getTime()) //Sets the entity's fire ticks to the current world time
	if(Entity.getEntityTypeId(entity) == 34) Entity.setCarriedItem(entity, 276, 1, 0); //Sets the entity's carried item to a diamond sword if the entity is a skeleton
	if(Player.isPlayer(entity)) Level.setSpawn(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity)); //Sets the world spawn to the entity's position if the entity is a player
	Level.playSoundEnt(entity, "random.splash", 100, 100); //Plays the splash sound at the entity's coordinates
}

function modTick() { //Runs every tick (1 / 20 seconds)
	var random = Math.random(); //Defines the variable random and set it equal to Math.random()
	if(random > 0.99) Level.setNightMode(1); //Sets it to night mode if random is larger than 0.99, Level.setTime() is recommended
	if(random < 0.1) Level.setTime(0); //Sets the time to 0 ticks if random is smaller than 0.1
	if(random > 0.4 && random < 0.5) Entity.setPosition(Player.getEntity(), 0, -1, 0); //Moves the player to the void if random is larger than 0.4 and smaller than 0.5; an alternative to Entity.setPosition() is setPosition()
	if(random > 0.5 && random < 0.6) Entity.setPositionRelative(Player.getEntity(), 0, 1, 0); //Sets the relative position of the player to 0, 1, and 0 if random is larger than 0.5 and smaller than 0.6; an alternative to Entity.setPositionRelative() is setPositionRelative()
	ModPE.log("modTick is running"); //Logs "modTick is running" to the console
}

function leaveGame() { //Runs when a world is left
	print("Bye"); //Prints "Bye"
	if(ModPE.readData("test")) ModPE.removeData("test"); //Removes the saved data with the key of "test" if the saved data with the key of "test" exists
}

function blockEventHook(x, y, z, eventType, data) { //Runs when a block event happens
	if(!eventType && data == 2) clientMessage("A chest has been closed"); //Client messages "A chest has been closed" if a chest has been closed
}

function levelEventHook(entity, eventType, x, y, z, data) { //Runs when a level event happens
	print(eventType + " " + data); //Prints eventType and data joined by a space
	Entity.setPosition(entity, x + 0.5, y + 2, z + 0.5); //Sets the entity's position to two blocks above the coordinates x, y, and z; an alternative is setPosition()
}

function selectLevelHook() { //Runs when a level is selected
	print(Level.getWorldName() + " " + Level.getWorldDir()); //Prints the world name and the world directory joined by a space
}

function destroyBlock(x, y, z, side) { //Runs when a block is destroyed
	ModPE.setGameSpeed(100 + side); //Sets the game speed to 100 ticks per second plus the side
	Server.sendChat("Block destroyed at " + [x, y, z].join(", ")); //Sends the message "Block destroyed at " with the coordinates joined with a comma to the chat
	if(Level.getGameMode() == 1) { //If the current game mode is creative
		preventDefault(); //Prevents the default action
		Level.destroyBlock(x, y, z, 1); //Destroys the selected block, dropping the same block as the selected block
	}
}

function startDestroyBlock(x, y, z, side) { //Runs when a player starts to destroy a block
	ModPE.showTipMessage([x, y, z, side].join(" ")); //Shows a tip message showing the coordinates of the block and the side of the block joined with a space
	if(Level.getTile(x, y, z) > 60 && Level.getTile(x, y, z) < 63) { //If the selected block is a furnace; an alternative is getTile()
		clientMessage([Level.getFurnaceSlot(x, y, z, 0), Level.getFurnaceSlotCount(x, y, z, 0), Level.getFurnaceSlotData(x, y, z, 0)].join(" ")); //Client messages the ID, count, and damage of the item that is in the first slot of the selected furnace joined by space
		Level.setFurnaceSlot(x, y, z, 1, 1, 1, 0); //Sets the second slot of the selected furnace to 1 stone
	} else if(Level.getTile(x, y, z) == 54) { //Else if the selected block is a chest; an alternative is getTile()
		clientMessage([Level.getChestSlot(x, y, z, 0), Level.getChestSlotCount(x, y, z, 0), Level.getChestSlotData(x, y, z)].join(" ")); //Client messages the ID, count, and damage of the item that is in the first slot of the selected chest joined by a space
		Level.setChestSlot(x, y, z, 1, 1, 1, 0); //Sets the second slot of the selected chest to 1 stone
	}
}

function entityRemovedHook(entity) { //Runs when an entity is removed
	clientMessage("An entity has been removed"); //Client messages "An entity has been removed"
	var newEnt = Level.spawnMob(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity), Entity.getMobSkin(entity), Entity.getEntityTypeId(	entity)); //Spawns a mob at the removed entity's coordinates with the removed entity's type ID and skin, and sets it equal to the variable newEnt; alternatives to Level.spawnMob() are bl_spawnMob() and Entity.spawnMob(), which will both be removed in BlockLauncher 1.7
	Entity.setRenderType(newEnt, Entity.getRenderType(entity)); //Sets the render type of newEnt to the removed entity's render type
	Entity.setNameTag(newEnt, Entity.getNameTag(entity)); //Sets the name tag of newEnt to the removed entity's name tag
	Entity.setVelX(newEnt, Entity.getVelX(entity)); //Sets the X velocity of newEnt to the removed entity's X velocity; an alternative to Entity.setVelX() is setVelX()
	Entity.setVelY(newEnt, Entity.getVelY(entity)); //Sets the Y velocity of newEnt to the removed entity's Y velocity; an alternative to Entity.setVelY() is setVelY()
	Entity.setVelZ(newEnt, Entity.getVelZ(entity)); //Sets the Z velocity of newEnt to the removed entity's Z velocity; an alternative to Entity.setVelZ() is setVelZ()
	Entity.setAnimalAge(newEnt, Entity.getAnimalAge(entity)); //Sets the age of newEnt to the removed entity's age;
	if(Entity.getRider(entity)) Entity.rideAnimal(Entity.getRider(entity), newEnt); //If the removed entity has a rider, forces the removed entity's rider to ride newEnt; an alternative to Entity.rideAnimal() is rideAnimal()
	if(Entity.getRiding(entity)) Entity.rideAnimal(newEnt, Entity.getRiding(entity)); //If the removed entity is riding an entity, forces newEnt to ride the entity that the removed entity was riding; an alternative to Entity.rideAnimal() is rideAnimal()
	Entity.setHealth(newEnt, Entity.getHealth(entity)); //Sets newEnt's health to the removed entity's health
	Entity.setRot(newEnt, Entity.getYaw(entity), Entity.getPitch(entity)); //Sets newEnt's yaw and pitch to the removed entity's yaw and pitch; an alternative to Entity.setRot() is setRot(), an alternative to Entity.getYaw() is getYaw(), and an alternative to Entity.getPitch() is getPitch()
}

function serverMessageReceiveHook(message) { //Called when the server sends a message
	clientMessage(message); //Client messages the message
}

function chatReceiveHook(sender, message) { //Called when a player sends a message
	clientMessage(Player.getName(sender) + " sent a message"); //Client messages the name of the sender joined with the string " sent a message"
}