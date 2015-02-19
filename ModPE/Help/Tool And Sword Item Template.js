//DO NOT EDIT BELOW (unless you know what you're doing)

var tools = [];

Item.defineToolOrSwordItem = function(id, textureName, additionalTextures, unlocalizedName, localizedName, maxDamage, damageToVictim, doRandomDamageToVictim, callOnAttack, isSword, isHoe) {
	if(!id) {
		throw new TypeError("At least the ID parameter must be entered for Item.defineToolOrSwordItem()");
		return;
	}
	for(var i in tools) if(tools[i][0] == id) {
		throw new TypeError("A tool or sword item cannot have the same ID as another tool item or sword item.");
		return;
	}
	if(isSword && isHoe) throw new TypeError("A tool or sword item cannot be a hoe and a sword at the same time.");
	else if(isHoe && (damageToVictim != 1 || doRandomDamageToVictim)) throw new TypeError("A hoe normally does only 1 half heart of damage to a victim.");
	else {
		ModPE.setItem(id, textureName, additionalTextures, unlocalizedName ? unlocalizedName : "", 1);
		ModPE.langEdit("item." + (unlocalizedName ? unlocalizedName : "") + ".name", localizedName ? localizedName : (unlocalizedName ? unlocalizedName : ""));
		Item.setMaxDamage(id, maxDamage);
		tools.push([id, maxDamage, damageToVictim ? damageToVictim : 1, doRandomDamageToVictim, callOnAttack ? callOnAttack : function() {}, isSword, isHoe]);
	}
};

Player.damageCarriedCustomToolOrSwordItem = function(damage) {
	var found, maxDamage;
	for(var i in tools) if(tools[i][0] == Player.getCarriedItem()) {
		found = 1;
		maxDamage = tools[i][1];
	}
	if(!found) return;
	if(Player.getCarriedItemData() < maxDamage - 1 - damage) Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(), Player.getCarriedItemCount(), Player.getCarriedItemData() + damage);
	else {
		Player.clearInventorySlot(Player.getSelectedSlotId());
		Level.playSoundEnt(Player.getEntity(), "random.break", 100, 100);
	}
};

function customToolOrSwordItemAttackHook(attacker, victim) {
	if(Player.isPlayer(victim) && Level.getGameMode() == 1) return;
	var arr;
	for(var i in tools) if(tools[i][0] == Player.getCarriedItem() && !tools[i][6]) arr = tools[i];
	if(!arr) return;
	arr[4](attacker, victim);
	if(arr[2] < 2) return;
	var damage = arr[3] ? (Math.random() > 0.5 ? arr[2] - 1 : arr[2]) : arr[2];
	Entity.setHealth(victim, Entity.getHealth(victim) - damage > 0 ? Entity.getHealth(victim) - damage : 1);
	Player.damageCarriedCustomToolOrSwordItem(arr[5] ? 1 : 2);
}

function customToolOrSwordItemUseItem(x, y, z, itemId, blockId, side, itemDamage) {
	var arr;
	for(var i in tools) if(tools[i][0] == itemId && tools[i][6]) arr = tools[i];
	if(!arr || blockId < 2 || blockId > 3 || side != 1) return;
	Level.setTile(x, y, z, 66, 0);
	if(blockId == 2) {
		var r = Math.floor(Math.random() * 2);
		var r2 = Math.floor(Math.random() * 2);
		if(Math.random() > 0.67 && r) Level.dropItem(x + 0.5, y + 1, z + 0.5, 0, 295, r, 0);
		else {
			if(Math.random() > 0.98 && r2) Level.dropItem(x + 0.5, y + 1, z + 0.5, 0, 458, r, 0);
		}
	}
	Player.damageCarriedCustomToolOrSwordItem();
}

function customToolOrSwordItemDestroyBlock() {
	var found;
	for(var i in tools) if(tools[i][0] == Player.getCarriedItem() && (tools[i][5] || (!tools[i][5] && !tools[i][6])) found = 1;
	if(!arr) return;
	Player.damageCustomToolOrSwordItem(2);
}

//DO NOT EDIT ABOVE (unless you know what you're doing)

//All tool or sword items will take damage when a block is destroyed with the tool or sword except for a hoe; this is preventable by removing line 97

/*Methods:

Item.defineToolOrSwordItem(ID, textureName, additionalTextures, unlocalizedName, localizedName, maxDamage, damageToVictim, useRandomDamageToVictim, callOnAttack, isSword, isHoe); //The parameter callOnAttack is a function, and doRandomDamageToVictim indicates whether to do random damage in which it can be the specified damage or 1 below the specified damage
Player.damageCarriedCustomToolOrSwordItem(damage); //Will only work on custom tools or sword items, and will damage the custom tool or sword item that the player is holding

Example:

Item.defineToolOrSwordItem(300, "sword", 3, "swordIcy", "Icy Sword", 200, 3, 1, function(attacker, victim) {
	Level.setTile(Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 79, 0);
}, 1, 0);
Item.addCraftRecipe(300, 1, 0, [280, 1, 0, 79, 2, 0]);

Will define a sword item called the "Icy Sword" with the diamond sword texture which places an ice block in the victim's head.*/

//Your code below



function attackHook(attacker, victim) {
	customToolOrSwordItemAttackHook(attacker, victim); //DO NOT EDIT (unless you know what you're doing)
	
}

function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage) {
	customToolOrSwordItemUseItem(x, y, z, itemId, blockId, side, itemDamage); //DO NOT EDIT (unless you know what you're doing)
	
}

function destroyBlock(x, y, z, side) {
	customToolOrSwordItemDestroyBlock(); //DO NOT EDIT (unless you know what you're doing)
	
}



//Your code above