/*
Too Much TNT mod v0.2.3
MCPE Version! :)
Based on Mister_Magister's More TNT mod and MinecraftTNTStuff's Too Much TNT Mod
With special thanks to Mister_Magister for allowing me to use his code! :)
Sulphur Ore Generation thanks to DAW330073!
Made by MRAndyPE

------------------------------------------------------
|                      DO NOT                        |
|                       COPY						 |
|                     THIS MOD						 |
|				     WITHOUT MY						 |
|                    PERMISSION!					 |
------------------------------------------------------

Custom TNT IDs:

TNTx5 - 25
	recipe - Four normal TNT
TNTx20 - 55
	recipe - Four TNTx5
TNTx100 - 28
	recipe - Four TNTx20
TNTx500 - 29
	recipe - Four TNTx100
Meteor TNT - 33
	recipe - One TNTx500, Seven Obsidian blocks, One lava block
Flat Bomb - 72
    recipe - One TNTx20, one obsidian
Mining Flat Bomb - 76
	recipe - Six Torches, One Flat Bomb, Two TNTx5
Compact TNT - 77
	recipe - Eight normal TNT's, One TNTx5
Lava TNT - 34
	recipe - One TNTx5, One Lava Block
Lava Block - 23
	recipe - Tap on a lava block with any shovel type!
House TNT - 36
	recipe - One TNTx5, five cobblestone, one crafting table, two glass blocks
Wood House TNT - 75
	recipe - One House TNT, Six oak planks, two gold ingots
Brick House TNT - 70
    recipe - One Wood House TNT,  two diamonds, 6 brick blocks
Fire TNT - 84
	recipe - One Flint and Steel, One TNTx5
Snow TNT - 88
	recipe - One Snow Block, One TNTx5
	
Other Custom IDs:

Sulphur Ore - 90
	Spawns randomly between block levels 20 - 50.
*/
ModPE.overrideTexture("mob/meteor.png","http://s10.postimg.org/s47aw8c91/Meteor.png");

Block.defineBlock(25, "§9TNTx5", [["cauldron_top", 0], ["command_block", 0], ["cauldron_side", 0], ["cauldron_side", 0], ["cauldron_side", 0], ["cauldron_side", 0]], 46, false, 0);
Item.addCraftRecipe(25, 1, 0, [46, 4, 0]);
Block.setDestroyTime(25,0.01);

Block.defineBlock(55, "§aTNTx20", [["enchanting_table_bottom", 0], ["enchanting_table_side", 0], ["dragon_egg", 0], ["dragon_egg", 0], ["dragon_egg", 0], ["dragon_egg", 0]], 46, false, 0);
Item.addCraftRecipe(55, 1, 0, [25, 4, 0]);
Block.setDestroyTime(55,0.01);

Block.defineBlock(28, "§6TNTx100", [["flower_pot", 0], ["itemframe_background", 0], ["soul_sand", 0], ["soul_sand", 0], ["soul_sand", 0], ["soul_sand", 0]], 46, false, 0);
Item.addCraftRecipe(28, 1, 0, [55, 4, 0]);
Block.setDestroyTime(28,0.01);

Block.defineBlock(29, " §0TNTx500", [["jukebox_top", 0], ["lever", 0], ["jukebox_side", 0], ["jukebox_side", 0], ["jukebox_side", 0], ["jukebox_side", 0]], 46, false, 0);
Item.addCraftRecipe(29, 1, 0, [28, 4, 0]);
Block.setDestroyTime(29,0.01);

Block.defineBlock(33, " §0Meteor TNT", [["cauldron_inner", 0], ["cauldron_bottom", 0], ["brewing_stand_base", 0], ["brewing_stand_base", 0], ["brewing_stand_base", 0], ["brewing_stand_base", 0]], 46, false, 0);
Item.addShapedRecipe(33, 1, 0, [
    "ooo", 
    "olo",
    "oto"], [
    "o", 49, 0, 
    "l",23, 0,
    "t", 29, 0]);
Block.setDestroyTime(33,0.01);

Block.defineBlock(23, "Lava Block", [["still_lava", 0], ["still_lava", 0], ["still_lava", 0], ["still_lava", 0], ["still_lava", 0], ["still_lava", 0]], 46, false, 0);
Block.setShape(23, 0, 0, 0, 1, 0.875, 1);
Block.setLightLevel(23, 15);

Block.defineBlock(34, "§6Lava TNT", [["trip_wire", 0], ["nether_wart", 1], ["redstone_torch_off", 0], ["redstone_torch_off", 0], ["redstone_torch_off", 0], ["redstone_torch_off", 0]], 46, false, 0);
Item.addCraftRecipe(34, 1, 0, [25, 1, 0, 23, 1, 0]);
Block.setDestroyTime(34,0.01);

Block.defineBlock(36, "House TNT", [["enchanting_table_top", 0], ["tnt", 1], ["brewing_stand", 0], ["brewing_stand", 0], ["brewing_stand", 0], ["brewing_stand", 0]], 46, false, 0);
Item.addShapedRecipe(36, 1, 0, [
    "ccc", 
    "gtg",
    "crc"], [
    "c", 4, 0, 
    "t", 25, 0,
    "g", 20, 0,
	"r", 58, 0]);
Block.setDestroyTime(36,0.01);

Block.defineBlock(75, "Wood House TNT", [["enchanting_table_top", 0], ["tnt", 1], ["redstone_torch_on", 0], ["redstone_torch_on", 0], ["redstone_torch_on", 0], ["redstone_torch_on", 0]], 46, false, 0);
Item.addShapedRecipe(75, 1, 0, [
    "www", 
    "gtg",
    "www"], [
    "w", 5, 0, 
    "t", 36, 0,
    "g", 266, 0]);
Block.setDestroyTime(75,0.01);

Block.defineBlock(70, "Brick House TNT", [["enchanting_table_top", 0], ["tnt", 1], ["anvil_top_damaged_x", 0], ["anvil_top_damaged_x", 0], ["anvil_top_damaged_x", 0], ["anvil_top_damaged_x", 0]], 46, false, 0);
Item.addShapedRecipe(70, 1, 0, [
    "bbb", 
    "dtd",
    "bbb"], [
    "b", 45, 0, 
    "t", 75, 0,
    "d", 264, 0]);
Block.setDestroyTime(70,0.01);

Block.defineBlock(72, "§aFlat Bomb", [["obsidian", 0], ["enchanting_table_side", 0], ["anvil_top_damaged_x", 1], ["anvil_top_damaged_x", 1], ["anvil_top_damaged_x", 1], ["anvil_top_damaged_x", 1]], 46, false, 0);
Item.addCraftRecipe(72, 1, 0, [55, 1, 0, 49, 1, 0]);
Block.setDestroyTime(72,0.01);

Block.defineBlock(76, "§6Mining Flat Bomb", [["obsidian", 0], ["itemframe_background", 0], ["piston_bottom", 0], ["piston_bottom", 0], ["piston_bottom", 0], ["piston_bottom", 0]], 46, false, 0);
Item.addShapedRecipe(76, 1, 0, [
	"ttt",
	"nfn",
	"ttt"], [
	"t", 50, 0,
	"n", 25, 0,
	"f", 72, 0]);
Block.setDestroyTime(76,0.01);

Block.defineBlock(77, "Compact TNT", [["piston_inner", 0], ["piston_side", 0], ["piston_top_normal", 0], ["piston_top_normal", 0], ["piston_top_normal", 0], ["piston_top_normal", 0]], 46, false, 0);
Item.addShapedRecipe(77, 1, 0, [
    "ttt", 
    "tnt",
    "ttt"], [ 
    "t", 46, 0,
    "n", 25, 0]);
Block.setDestroyTime(77,0.01);

Block.defineBlock(84, "§6Fire TNT", [["piston_top_sticky", 0], ["rail_activator", 0], ["rail_activator_powered", 0], ["rail_activator_powered", 0], ["rail_activator_powered", 0], ["rail_activator_powered", 0]], 46, false, 0);
Item.addShapedRecipe(84, 1, 0, [
	"ttt",
	"tft",
	"tnt"], [
	"f", 259, 0,
	"n", 25, 0]);
Block.setDestroyTime(84,0.01);

Block.defineBlock(88, "Snow TNT", [["rail_detector", 0], ["rail_detector_powered", 0], ["rail_golden", 0], ["rail_golden", 0], ["rail_golden", 0], ["rail_golden", 0]], 46, false, 0);
Item.addShapedRecipe(88, 1, 0, [
	"ttt",
	"tft",
	"tnt"], [
	"f", 80, 0,
	"n", 25, 0]);
Block.setDestroyTime(88,0.01);

Block.defineBlock(90, "Sulphur Ore", [["redstone_block", 0]], 16, false, 0);
Block.setDestroyTime(90,5);

Block.defineBlock(93, "Ocean TNT", [["redstone_dust_cross", 0], ["redstone_dust_cross_overlay", 0], ["redstone_dust_line", 0], ["redstone_dust_line", 0], ["redstone_dust_line", 0], ["redstone_dust_line", 0]], 46, false, 0);
Item.addShapedRecipe(93, 1, 0, [
	"awa",
	"wtw",
	"awa"], [
	"w", 9, 0,
	"t", 28, 0]);
Block.setDestroyTime(93,0.01);

Block.defineBlock(94, "Hell Fire TNT", [["redstone_dust_line_overlay", 0], ["redstone_lamp_off", 0], ["redstone_lamp_on", 0], ["redstone_lamp_on", 0], ["redstone_lamp_on", 0], ["redstone_lamp_on", 0]], 46, false, 0);
Item.addShapedRecipe(94, 1, 0, [
	"ata",
	"nfn",
	"ata"], [
	"f", 51, 0,
	"t", 55, 0,
	"n", 87, 0]);
Item.addShapedRecipe(94, 1, 0, [
	"ana",
	"tft",
	"ana"], [
	"f", 51, 0,
	"t", 55, 0,
	"n", 87, 0]);
Block.setDestroyTime(94,0.01);

Block.defineBlock(113, "Random TNT", [["repeater_on", 0], ["trip_wire_source", 0], ["repeater_off", 0], ["repeater_off", 0], ["repeater_off", 0], ["repeater_off", 0]], 46, false, 0);
Item.addShapedRecipe(113, 1, 0, [
	"ddd",
	"ttt",
	"ddd"], [
	"d", 264, 0,
	"t", 46, 0]);
Block.setDestroyTime(113,0.01);

Block.defineBlock(115, "Trap TNT", [["jukebox_side", 0], ["nether_wart", 1], ["nether_wart", 0], ["nether_wart", 0], ["nether_wart", 0], ["nether_wart", 0]], 46, false, 0);
Item.addShapedRecipe(115, 1, 0, [
	"lll",
	"oto",
	"ooo"], [
	"l", 23, 0,
	"t", 25, 0,
	"o", 49, 0]);
Block.setDestroyTime(115,0.01);

Block.defineBlock(117, "Digging TNT", [["tnt", 2], ["tnt", 1], ["door", 3], ["door", 3], ["door", 3], ["door", 3]], 46, false, 0);
Item.addShapedRecipe(117, 1, 0, [
	"oto",
	"oto",
	"owo"], [
	"t", 25, 0,
	"w", 9, 0]);
Block.setDestroyTime(117,0.01);

Block.defineBlock(118, "Drilling TNT", [["flower_pot", 0], ["itemframe_background", 0], ["door", 2], ["door", 2], ["door", 2], ["door", 2]], 46, false, 0);
Item.addShapedRecipe(118, 1, 0, [
	"ooo",
	"odo",
	"oto"], [
	"d", 117, 0,
	"t", 28, 0]);
Block.setDestroyTime(118,0.01);

Player.addItemCreativeInv(90,1,0);
Player.addItemCreativeInv(118,1,0);
Player.addItemCreativeInv(117,1,0);
Player.addItemCreativeInv(113,1,0);
Player.addItemCreativeInv(115,1,0);
Player.addItemCreativeInv(94,1,0);
Player.addItemCreativeInv(93,1,0);
Player.addItemCreativeInv(88,1,0);
Player.addItemCreativeInv(84,1,0);
Player.addItemCreativeInv(70,1,0);
Player.addItemCreativeInv(75,1,0);
Player.addItemCreativeInv(36,1,0);
Player.addItemCreativeInv(34,1,0);
Player.addItemCreativeInv(77,1,0);
Player.addItemCreativeInv(76,1,0);
Player.addItemCreativeInv(72,1,0);
Player.addItemCreativeInv(33,1,0);
Player.addItemCreativeInv(29,1,0);
Player.addItemCreativeInv(28,1,0);
Player.addItemCreativeInv(55,1,0);
Player.addItemCreativeInv(25,1,0);
Player.addItemCreativeInv(23,1,0);

var bugWait = false;
var bugWaitTime = 0;
var blockNum;
var blockIds = [];
var blockX = [];
var blockY = [];
var blockZ = [];
var meteorFlalling = false;
var waitForTorch = false;
var torchCount = false;
var oreX, oreY, oreZ;
var xL = 0;
var zL = 0;
var alreadyGenerated = false;
var path=android.os.Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/minecraftworlds/"+Level.getWorldName()+"/";
var generatedXL = [];
var generatedZL = [];
var ET = [34, 25, 55, 28, 29, 33, 72, 76, 77, 36, 75, 70, 84, 88, 93, 94, 115, 113, 116, 117, 118];
var saveT;
var rVel, rxy;
var rtc = false;
var entityCd;
var tntArray = [];
var torches = [];
var meteorArray = [];

function newLevel(){
	load();
}
function useItem(x,y,z,itemId,blockId) {
	if(itemId==(277||269||273||256||284)) {
		if(getTile(x,y+1,z)==10||getTile(x,y+1,z)==11){
			Level.destroyBlock(x,y+1,z, false);
			addItemInventory(23, 1, 0);
		}else if(getTile(x,y+1,z)==8||getTile(x,y+1,z)==9){
			Level.destroyBlock(x,y+1,z, false);
			addItemInventory(9, 1, 0);
		}
	}
	if(itemId==259&&((blockId==34)||(blockId==25)||(blockId==55)||(blockId==28)||(blockId==29)||(blockId==33)||(blockId==72)||(blockId==76)||(blockId==77)||(blockId==36)||(blockId==75)||(blockId==70)||(blockId==84)||(blockId==88)||(blockId==93)||(blockId==94)||(blockId==115)||(blockId==113)||(blockId==116)||(blockId==117)||(blockId==118))){
		if(blockId==34){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/LavaTNT.png");
			tntArray.push({Ent: TNT, explosive: 0, waitUntil: 100, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==25){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/TNTx5.png");
			tntArray.push({Ent: TNT, explosive: 1, waitUntil: 100, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==55){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/TNTx20.png");
			tntArray.push({Ent: TNT, explosive: 2, waitUntil: 110, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==28){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/TNTx100.png");
			tntArray.push({Ent: TNT, explosive: 3, waitUntil: 145, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==29){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/TNTx500.png");
			tntArray.push({Ent: TNT, explosive: 4, waitUntil: 180, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==33){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/MeteorTNT.png");
			tntArray.push({Ent: TNT, explosive: 5, waitUntil: 180, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==72){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/FlatBomb.png");
			tntArray.push({Ent: TNT, explosive: 6, waitUntil: 100, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==76){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/FlatMiningBomb.png");
			tntArray.push({Ent: TNT, explosive: 7, waitUntil: 100, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==77){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/CompactTNT.png");
			tntArray.push({Ent: TNT, explosive: 8, waitUntil: 110, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==36){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/HouseTNT.png");
			tntArray.push({Ent: TNT, explosive: 9, waitUntil: 100, houseNum: 4, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==75){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/WoodHouseTNT.png");
			tntArray.push({Ent: TNT, explosive: 10, waitUntil: 100, houseNum: 5, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==70){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/BrickHouseTNT.png");
			tntArray.push({Ent: TNT, explosive: 11, waitUntil: 100, houseNum: 45, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==84){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/FireTNT.png");
			tntArray.push({Ent: TNT, explosive: 12, waitUntil: 110, cNum: 51, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==88){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/SnowTNT.png");
			tntArray.push({Ent: TNT, explosive: 13, waitUntil: 110, cNum: 78, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==93){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/OceanTNT.png");
			tntArray.push({Ent: TNT, explosive: 14, waitUntil: 130, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==94){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/HellFireTNT.png");
			tntArray.push({Ent: TNT, explosive: 15, waitUntil: 160, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==113){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/RandomTNT.png");
			tntArray.push({Ent: TNT, explosive: "RANDOM_TNT", waitUntil: 180, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==115){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/TrapTNT.png");
			tntArray.push({Ent: TNT, explosive: 16, waitUntil: 90, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==116){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/RandomTNT.png");
			tntArray.push({Ent: TNT, explosive: 17, waitUntil: 90, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==117){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/DiggingTNT.png");
			tntArray.push({Ent: TNT, explosive: 19, waitUntil: 90, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		else if(blockId==118){
			TNT = Level.spawnMob(x+.5, y, z+.5, 15, "mob/DrillingTNT.png");
			tntArray.push({Ent: TNT, explosive: 20, waitUntil: 90, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
		}
		Level.playSound (x, y, z, "random.fuse", 30, 1);
		setTile(x, y, z, 0);
		preventDefault();
		Entity.setRenderType(TNT, tntRenderer.renderType);
		Entity.setVelY(TNT, 0.2);
		rVel = Math.random()*0.18;
		rxy = Math.floor(Math.random()*10);
		if(rxy < 5){Entity.setVelZ(rVel);}
		else if(rxy >= 5){Entity.setVelX(rVel);}
	}
}
function addTntToRenderer(renderer) {
	var model = renderer.getModel();
	var head = model.getPart("head");
	var body = model.getPart("body");
	var rArm = model.getPart("rightArm");
	var lArm = model.getPart("leftArm");
	var rLeg = model.getPart("rightLeg");
	var lLeg = model.getPart("leftLeg");
	head.clear();
	body.clear();
	body.setTextureOffset(0, 0);
	body.addBox(-8, 8, -8, 16, 16, 16);
	rArm.clear();
	lArm.clear();
	rLeg.clear();
	lLeg.clear();
}

var tntRenderer = Renderer.createHumanoidRenderer();
addTntToRenderer(tntRenderer);

function modTick()
	{
		var cx=Player.getX();
		var cz=Player.getZ();
		if(((cx%256)==0)&&(cx>xL)&&(cx>0)&&(checkOres(xL+256, zL)==true)){
			xL+=256; 
			print("Generating Ore");
			alreadyGenerated = false;
			generatedXL.push(xL);
			generatedZL.push(zL);
		}
		if(((cx%256)==0)&&(cx<xL)&&(cx<0)&&(checkOres(xL-256, zL)==true)){
			xl-=256;
			print("Generating Ore");
			alreadyGenerated = false;
			generatedXL.push(xL);
			generatedZL.push(zL);
		}
		if(((cz%256)==0)&&(cz>zL)&&(cz>0)&&(checkOres(xL, zL+256)==true)){
			zL+=256; 
			print("Generating Ore");
			alreadyGenerated = false;
			generatedXL.push(xL);
			generatedZL.push(zL);
		}
		if(((cz%256)==0)&&(cz<zL)&&(cz<0)&&(checkOres(xL, zL-256)==true)){
			zl-=256;
			print("Generating Ore");
			alreadyGenerated = false;
			generatedXL.push(xL);
			generatedZL.push(zL);
		}
		if(tntArray.length != 0){
			for(var t = 0; t < tntArray.length; t++){
				tntArray[t].entityCd--;
				if(tntArray[t].entityCd > 0){
					tntArray[t].tx = Entity.getX(tntArray[t].Ent);
					tntArray[t].tz = Entity.getZ(tntArray[t].Ent);
				}
				tntArray[t].ty = Entity.getY(tntArray[t].Ent);
				tntArray[t].velTX = Entity.getVelX(tntArray[t].Ent);
				tntArray[t].velTY = Entity.getVelY(tntArray[t].Ent);
				tntArray[t].velTZ = Entity.getVelZ(tntArray[t].Ent);
				setPosition(tntArray[t].Ent, tntArray[t].tx, tntArray[t].ty, tntArray[t].tz);
				setRot(tntArray[t].Ent, 0, 0);
				Entity.setHealth(tntArray[t].Ent, 30000);
				tntArray[t].waitUntil--;	
				if(tntArray[t].waitUntil > 0){
					if(tntArray[t].waitUntil%10 == 0){
						Entity.remove(tntArray[t].Ent);
						tntArray[t].Ent = Level.spawnMob(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 15, "mob/Flash.png");
						Entity.setRenderType(tntArray[t].Ent, tntRenderer.renderType);
						Entity.setVelX(tntArray[t].Ent, tntArray[t].velTX);
						Entity.setVelY(tntArray[t].Ent, tntArray[t].velTY);
						Entity.setVelZ(tntArray[t].Ent, tntArray[t].velTZ);
					}else if(tntArray[t].waitUntil%5 == 0){
						Entity.remove(tntArray[t].Ent);
						tntArray[t].Ent = Level.spawnMob(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 15, blockNum);
						Entity.setRenderType(tntArray[t].Ent, tntRenderer.renderType);
						Entity.setVelX(tntArray[t].Ent, tntArray[t].velTX);
						Entity.setVelY(tntArray[t].Ent, tntArray[t].velTY);
						Entity.setVelZ(tntArray[t].Ent, tntArray[t].velTZ);
						if(tntArray[t].explosive==0){
							Entity.setMobSkin(tntArray[t].Ent, "mob/LavaTNT.png");
						}else if(tntArray[t].explosive==1){
							Entity.setMobSkin(tntArray[t].Ent, "mob/TNTx5.png");
						}else if(tntArray[t].explosive==2){
							Entity.setMobSkin(tntArray[t].Ent, "mob/TNTx20.png");
						}else if(tntArray[t].explosive==3){
							Entity.setMobSkin(tntArray[t].Ent, "mob/TNTx100.png");
						}else if(tntArray[t].explosive==4){
							Entity.setMobSkin(tntArray[t].Ent, "mob/TNTx500.png");
						}else if(tntArray[t].explosive==5){
							Entity.setMobSkin(tntArray[t].Ent, "mob/MeteorTNT.png");
						}else if(tntArray[t].explosive==6){
							Entity.setMobSkin(tntArray[t].Ent, "mob/FlatBomb.png");
						}else if(tntArray[t].explosive==7){
							Entity.setMobSkin(tntArray[t].Ent, "mob/FlatMiningBomb.png");
						}else if(tntArray[t].explosive==8){
							Entity.setMobSkin(tntArray[t].Ent, "mob/CompactTNT.png");
						}else if(tntArray[t].explosive==9){
							Entity.setMobSkin(tntArray[t].Ent, "mob/HouseTNT.png");
						}else if(tntArray[t].explosive==10){
							Entity.setMobSkin(tntArray[t].Ent, "mob/WoodHouseTNT.png");
						}else if(tntArray[t].explosive==11){
							Entity.setMobSkin(tntArray[t].Ent, "mob/BrickHouseTNT.png");
						}else if(tntArray[t].explosive==12){
							Entity.setMobSkin(tntArray[t].Ent, "mob/FireTNT.png");
						}else if(tntArray[t].explosive==13){
							Entity.setMobSkin(tntArray[t].Ent, "mob/SnowTNT.png");
						}else if(tntArray[t].explosive==14){
							Entity.setMobSkin(tntArray[t].Ent, "mob/OceanTNT.png");
						}else if(tntArray[t].explosive==15){
							Entity.setMobSkin(tntArray[t].Ent, "mob/HellFireTNT.png");
						}else if(tntArray[t].explosive=="RANDOM_TNT"){
							Entity.setMobSkin(tntArray[t].Ent, "mob/RandomTNT.png");
						}else if(tntArray[t].explosive==16){
							Entity.setMobSkin(tntArray[t].Ent, "mob/TrapTNT.png");
						}else if(tntArray[t].explosive==17){
							Entity.setMobSkin(tntArray[t].Ent, "mob/RandomTNT.png");
						}else if(tntArray[t].explosive==19){
							Entity.setMobSkin(tntArray[t].Ent, "mob/DiggingTNT.png");
						}else if(tntArray[t].explosive==20){
							Entity.setMobSkin(tntArray[t].Ent, "mob/DrillingTNT.png");
						}
					}
				}
			if(tntArray[t].waitUntil == 0){
				tntArray[t].tx = Math.floor(Entity.getX(tntArray[t].Ent));
				tntArray[t].ty = Math.floor(Entity.getY(tntArray[t].Ent));
				tntArray[t].tz = Math.floor(Entity.getZ(tntArray[t].Ent));
				Entity.remove(tntArray[t].Ent);
				if(tntArray[t].explosive == 0){
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 10);
					for(var i = -5; i < 5; i++){
						for(var j = -5; j < 5; j++){
							var Rcont = Math.floor(Math.random()*5);
							if(Rcont!=3){
								if((i*i)+(j*j)<=25){
									var RY = Math.floor((Math.random()*5)-2);
									setTile(tntArray[t].tx+i, tntArray[t].ty+RY, tntArray[t].tz+j, 10);
								}
							}
						}
					}
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive == 1){
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 10);
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive == 2){
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 40);
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive == 3){
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 10);
                    explode(tntArray[t].tx+20,tntArray[t].ty,  tntArray[t].tz,  10);
                    explode(tntArray[t].tx-20, tntArray[t].ty, tntArray[t].tz,  10);
                    explode(tntArray[t].tx, tntArray[t].ty+20, tntArray[t].tz,  10);
                    explode(tntArray[t].tx,  tntArray[t].ty-20, tntArray[t].tz,  10);
                    explode(tntArray[t].tx, tntArray[t].ty,  tntArray[t].tz+20, 10);
                    explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz-20, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty,  tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty, tntArray[t].tz, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty, tntArray[t].tz, 10);
                    explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty+10,  tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty+10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty+10, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty+10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty+10, tntArray[t].tz, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty+10, tntArray[t].tz, 10);
                    explode(tntArray[t].tx, tntArray[t].ty+10, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx, tntArray[t].ty+10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty-10,  tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty-10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty-10, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty-10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty-10, tntArray[t].tz, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty-10, tntArray[t].tz, 10);
                    explode(tntArray[t].tx, tntArray[t].ty-10, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx, tntArray[t].ty-10, tntArray[t].tz-10, 10);
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive == 4){ 
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 30);
                    explode(tntArray[t].tx+30,tntArray[t].ty,  tntArray[t].tz,  30);
                    explode(tntArray[t].tx-30, tntArray[t].ty, tntArray[t].tz,  30);
                    explode(tntArray[t].tx, tntArray[t].ty+30, tntArray[t].tz,  30);
                    explode(tntArray[t].tx,  tntArray[t].ty-30, tntArray[t].tz,  30);
                    explode(tntArray[t].tx, tntArray[t].ty,  tntArray[t].tz+30, 30);
                    explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz-30, 30);
                    explode(tntArray[t].tx+15, tntArray[t].ty,  tntArray[t].tz+15, 30);
                    explode(tntArray[t].tx+15, tntArray[t].ty, tntArray[t].tz-15, 30);
                    explode(tntArray[t].tx-15, tntArray[t].ty, tntArray[t].tz+15, 30);
                    explode(tntArray[t].tx-15, tntArray[t].ty, tntArray[t].tz-15, 30);
                    explode(tntArray[t].tx+15, tntArray[t].ty, tntArray[t].tz, 30);
                    explode(tntArray[t].tx-15, tntArray[t].ty, tntArray[t].tz, 30);
                    explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz+15, 30);
                    explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz-15, 30);
                    explode(tntArray[t].tx+15, tntArray[t].ty+15,  tntArray[t].tz+15, 30);
                    explode(tntArray[t].tx+15, tntArray[t].ty+15, tntArray[t].tz-15, 30);
                    explode(tntArray[t].tx-15, tntArray[t].ty+15, tntArray[t].tz+15, 30);
                    explode(tntArray[t].tx-15, tntArray[t].ty+15, tntArray[t].tz-15, 30);
                    explode(tntArray[t].tx+15, tntArray[t].ty+15, tntArray[t].tz, 30);
                    explode(tntArray[t].tx-15, tntArray[t].ty+15, tntArray[t].tz, 30);
                    explode(tntArray[t].tx, tntArray[t].ty+15, tntArray[t].tz+15, 30);
                    explode(tntArray[t].tx, tntArray[t].ty+15, tntArray[t].tz-15, 30);
                    explode(tntArray[t].tx+15, tntArray[t].ty-15,  tntArray[t].tz+15, 30);
                    explode(tntArray[t].tx+15, tntArray[t].ty-15, tntArray[t].tz-15, 30);
                    explode(tntArray[t].tx-15, tntArray[t].ty-15, tntArray[t].tz+15, 30);
                    explode(tntArray[t].tx-15, tntArray[t].ty-15, tntArray[t].tz-15, 30);
                    explode(tntArray[t].tx+15, tntArray[t].ty-15, tntArray[t].tz, 30);
                    explode(tntArray[t].tx-15, tntArray[t].ty-15, tntArray[t].tz, 30);
                    explode(tntArray[t].tx, tntArray[t].ty-15, tntArray[t].tz+15, 30);
                    explode(tntArray[t].tx, tntArray[t].ty-15, tntArray[t].tz-15, 30);
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive == 5){
					var Meteor = Level.spawnMob(tntArray[t].tx, 127, tntArray[t].tz, 81, "mob/meteor.png");
					Entity.setRenderType(Meteor, 2);
					meteorArray.push([Meteor, tntArray[t].tx, tntArray[t].ty, tntArray[t].tz]);
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive==6){ 
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					for(var i = 0; i < 22; i++){
						for(var j = 0; j < 10; j++){
							for(var k = 0; k < 22; k++){
								blockIds.push(getTile(tntArray[t].tx-(.5*22)+i, tntArray[t].ty-1-j, tntArray[t].tz-(.5*22)+k));
								blockX.push(i);
								blockY.push(j);
								blockZ.push(k);
							}
						}
					}
                    explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 10);
					for(var l = 0; l < blockIds.length; l++){
						setTile(tntArray[t].tx-11+blockX[l], tntArray[t].ty-1-blockY[l], tntArray[t].tz-11+blockZ[l], blockIds[l]);
					}
					blockIds = [];
					blockX = [];
					blockY = [];
					blockZ = [];
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive==7){ 
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					for(var i = 0; i < 22; i++){
						for(var j = 0; j < 10; j++){
							for(var k = 0; k < 22; k++){
								blockIds.push(getTile(tntArray[t].tx-(.5*22)+i, tntArray[t].ty-1-j, tntArray[t].tz-(.5*22)+k));
								blockX.push(i);
								blockY.push(j);
								blockZ.push(k);
							}
						}
					}
                    explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 10);
					explode(tntArray[t].tx+3, tntArray[t].ty, tntArray[t].tz, 8);
					explode(tntArray[t].tx+3, tntArray[t].ty, tntArray[t].tz+3, 8);
					explode(tntArray[t].tx+3, tntArray[t].ty, tntArray[t].tz-3, 8);
					explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz-3, 8);
					explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz+3, 8);
					explode(tntArray[t].tx-3, tntArray[t].ty, tntArray[t].tz, 8);
					explode(tntArray[t].tx-3, tntArray[t].ty, tntArray[t].tz+3, 8);
					explode(tntArray[t].tx-3, tntArray[t].ty, tntArray[t].tz-3, 8);
					for(var l = 0; l < blockIds.length; l++){
						setTile(tntArray[t].tx-11+blockX[l], tntArray[t].ty-1-blockY[l], tntArray[t].tz-11+blockZ[l], blockIds[l]);
					}
					blockIds = [];
					blockX = [];
					blockY = [];
					blockZ = [];
					placeTorches(tntArray[t].tx, tntArray[t].ty+1, tntArray[t].tz);
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive==8){
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 10);
					for(var tn = -8; tn < 8; tn++){
						for(var u = -8; u < 8; u++){
							if((tn*tn)+(u*u)<=64){
								var randomB = Math.floor((Math.random()*6)+1);
								if(randomB!=5){
									var randomC = Math.floor((Math.random()*6)+1);
									setTile(tntArray[t].tx+tn, LY(tntArray[t].tx+tn, tntArray[t].tz+u), tntArray[t].tz+u, 46);
									if(randomC!=5){
										setTile(tntArray[t].tx+tn, LY(tntArray[t].tx+tn, tntArray[t].tz+u)+1, tntArray[t].tz+u, 51);
									}
								}
							}
						}
					}
					tntArray.splice(t, 1);
				}else if((tntArray[t].explosive >= 9)&&(tntArray[t].explosive <= 11)){
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty, tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty, tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx-1, tntArray[t].ty, tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx -1,  tntArray[t].ty, tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx -1,  tntArray[t].ty, tntArray[t].tz-1, false);
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty,  tntArray[t].tz-1, false);
					Level.destroyBlock(tntArray[t].tx+1,  tntArray[t].ty, tntArray[t].tz-1, false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty,  tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty, tntArray[t].tz + 2, false);
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty, tntArray[t].tz+2, false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty,  tntArray[t].tz + 2,  false);
					Level.destroyBlock(tntArray[t].tx-1, tntArray[t].ty,  tntArray[t].tz+2, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty,  tntArray[t].tz + 2, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty,  tntArray[t].tz + 1, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty,  tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty,  tntArray[t].tz -1,  false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty, tntArray[t].tz-2, false);
					Level.destroyBlock(tntArray[t].tx-1, tntArray[t].ty, tntArray[t].tz - 2, false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz-2, false );
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty, tntArray[t].tz - 2, false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty,  tntArray[t].tz - 2,  false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty, tntArray[t].tz - 1,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx+2,  tntArray[t].ty,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx+1,  tntArray[t].ty,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-1,  tntArray[t].ty,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-2,  tntArray[t].ty,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx-2,  tntArray[t].ty,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx-1,  tntArray[t].ty,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+1,  tntArray[t].ty,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+2,  tntArray[t].ty,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty+1, tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty+1, tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty +1, tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty+1, tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx-1, tntArray[t].ty+1, tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx -1,  tntArray[t].ty+1, tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx -1,  tntArray[t].ty+1, tntArray[t].tz-1, false);
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty+1,  tntArray[t].tz-1, false);
					Level.destroyBlock(tntArray[t].tx+1,  tntArray[t].ty+1, tntArray[t].tz-1, false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty +1,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty +1,  tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty +1, tntArray[t].tz + 2, false);
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty +1, tntArray[t].tz+2, false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty +1,  tntArray[t].tz + 2,  false);
					Level.destroyBlock(tntArray[t].tx-1, tntArray[t].ty +1,  tntArray[t].tz+2, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty +1,  tntArray[t].tz + 2, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty +1,  tntArray[t].tz + 1, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty + 1,  tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty + 1,  tntArray[t].tz -1,  false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty +1, tntArray[t].tz-2, false);
					Level.destroyBlock(tntArray[t].tx-1, tntArray[t].ty +1, tntArray[t].tz - 2, false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty+1, tntArray[t].tz-2, false );
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty +1, tntArray[t].tz - 2, false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty + 1,  tntArray[t].tz - 2,  false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty + 1, tntArray[t].tz - 1,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+1,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+1,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+1,  tntArray[t].tz+2,  false);                         
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+1,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx+2,  tntArray[t].ty+1,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx+1,  tntArray[t].ty+1,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty+1,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-1,  tntArray[t].ty+1,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-2,  tntArray[t].ty+1,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+1,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+1,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+1,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+1,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+1,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+1,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+1,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx-2,  tntArray[t].ty+1,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx-1,  tntArray[t].ty+1,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty+1,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+1,  tntArray[t].ty+1,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+2,  tntArray[t].ty+1,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+1,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+1,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+1,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+1,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+1,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+1,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+1,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+1,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+1,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+1,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+1,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+1,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+1,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+1,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+1,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+1,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+1,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty+2, tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty+2, tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty +2, tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty+2, tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx-1, tntArray[t].ty+2, tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx -1,  tntArray[t].ty+2, tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx -1,  tntArray[t].ty+2, tntArray[t].tz-1, false);
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty+2,  tntArray[t].tz-1, false);
					Level.destroyBlock(tntArray[t].tx+1,  tntArray[t].ty+2, tntArray[t].tz-1, false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty +2,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty +2,  tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty +2, tntArray[t].tz + 2, false);
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty +2, tntArray[t].tz+2, false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty +2,  tntArray[t].tz + 2,  false);
					Level.destroyBlock(tntArray[t].tx-1, tntArray[t].ty +2,  tntArray[t].tz+2, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty +2,  tntArray[t].tz + 2, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty +2,  tntArray[t].tz + 1, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty +2,  tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty +2,  tntArray[t].tz -1,  false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty +2, tntArray[t].tz-2, false);
					Level.destroyBlock(tntArray[t].tx-1, tntArray[t].ty +2, tntArray[t].tz - 2, false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty+2, tntArray[t].tz-2, false );
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty +2, tntArray[t].tz - 2, false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty +2,  tntArray[t].tz - 2,  false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty +2, tntArray[t].tz - 1,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+2,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+2,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+2,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+2,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx+2,  tntArray[t].ty+2,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx+1,  tntArray[t].ty+2,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty+2,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-1,  tntArray[t].ty+2,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-2,  tntArray[t].ty+2,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+2,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+2,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+2,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+2,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+2,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+2,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+2,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx-2,  tntArray[t].ty+2,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx-1,  tntArray[t].ty+2,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty+2,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+1,  tntArray[t].ty+2,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+2,  tntArray[t].ty+2,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+2,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+2,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+2,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+2,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+2,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+2,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+2,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+2,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+2,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+2,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+2,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+2,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+2,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+2,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+2,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+2,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+2,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty+3, tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty+3, tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty +3, tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty+3, tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx-1, tntArray[t].ty+3, tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx -1,  tntArray[t].ty+3, tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx -1,  tntArray[t].ty+3, tntArray[t].tz-1, false);
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty+3,  tntArray[t].tz-1, false);
					Level.destroyBlock(tntArray[t].tx+1,  tntArray[t].ty+3, tntArray[t].tz-1, false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty +3,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty +3,  tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty +3, tntArray[t].tz + 2, false);
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty +3, tntArray[t].tz+2, false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty +3,  tntArray[t].tz + 2,  false);
					Level.destroyBlock(tntArray[t].tx-1, tntArray[t].ty +3,  tntArray[t].tz+2, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty +3,  tntArray[t].tz + 2, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty +3,  tntArray[t].tz + 1, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty +3,  tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty +3,  tntArray[t].tz -1,  false);
					Level.destroyBlock(tntArray[t].tx-2, tntArray[t].ty +3, tntArray[t].tz-2, false);
					Level.destroyBlock(tntArray[t].tx-1, tntArray[t].ty +3, tntArray[t].tz - 2, false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty+3, tntArray[t].tz-2, false );
					Level.destroyBlock(tntArray[t].tx+1, tntArray[t].ty +3, tntArray[t].tz - 2, false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty +3,  tntArray[t].tz - 2,  false);
					Level.destroyBlock(tntArray[t].tx+2, tntArray[t].ty +3, tntArray[t].tz - 1,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+3,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+3,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+3,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+3,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx+2,  tntArray[t].ty+3,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx+1,  tntArray[t].ty+3,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty+3,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-1,  tntArray[t].ty+3,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-2,  tntArray[t].ty+3,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+3,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+3,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+3,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+3,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+3,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+3,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx-3,  tntArray[t].ty+3,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx-2,  tntArray[t].ty+3,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx-1,  tntArray[t].ty+3,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty+3,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+1,  tntArray[t].ty+3,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+2,  tntArray[t].ty+3,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+3,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+3,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx+3,  tntArray[t].ty+3,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+3,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+3,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+3,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+3,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+3,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+3,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx+4,  tntArray[t].ty+3,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+3,  tntArray[t].tz,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+3,  tntArray[t].tz+1,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+3,  tntArray[t].tz+2,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+3,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+3,  tntArray[t].tz-1,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+3,  tntArray[t].tz-2,  false);
					Level.destroyBlock(tntArray[t].tx-4,  tntArray[t].ty+3,  tntArray[t].tz-3,  false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty+4, tntArray[t].tz, false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty+4, tntArray[t].tz+1, false);
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty+4,  tntArray[t].tz-1, false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty +4,  tntArray[t].tz + 2,  false);
					Level.destroyBlock(tntArray[t].tx, tntArray[t].ty+4, tntArray[t].tz-2, false );
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty+4,  tntArray[t].tz+3,  false);
					Level.destroyBlock(tntArray[t].tx,  tntArray[t].ty+4,  tntArray[t].tz-3,  false);
					setTile(tntArray[t].tx, tntArray[t].ty-1, tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1, tntArray[t].ty-1, tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1, tntArray[t].ty -1, tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx, tntArray[t].ty-1, tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1, tntArray[t].ty-1, tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx -1,  tntArray[t].ty-1, tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx -1,  tntArray[t].ty -1, tntArray[t].tz - 1, tntArray[t].houseNum);
					setTile(tntArray[t].tx,  tntArray[t].ty-1,  tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1,  tntArray[t].ty-1, tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2, tntArray[t].ty -1,  tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2, tntArray[t].ty -1,  tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2, tntArray[t].ty -1, tntArray[t].tz + 2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1, tntArray[t].ty -1, tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx, tntArray[t].ty -1,  tntArray[t].tz + 2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1, tntArray[t].ty -1,  tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2, tntArray[t].ty -1,  tntArray[t].tz + 2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2, tntArray[t].ty - 1,  tntArray[t].tz + 1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2, tntArray[t].ty - 1,  tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2, tntArray[t].ty - 1,  tntArray[t].tz -1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2, tntArray[t].ty - 1, tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1, tntArray[t].ty -1, tntArray[t].tz - 2, tntArray[t].houseNum);
					setTile(tntArray[t].tx, tntArray[t].ty-1, tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1, tntArray[t].ty -1, tntArray[t].tz - 2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2, tntArray[t].ty - 1,  tntArray[t].tz - 2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2, tntArray[t].ty - 1, tntArray[t].tz - 1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3,  tntArray[t].ty-1,  tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3,  tntArray[t].ty-1,  tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3,  tntArray[t].ty-1,  tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3,  tntArray[t].ty-1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2,  tntArray[t].ty-1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1,  tntArray[t].ty-1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx,  tntArray[t].ty-1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1,  tntArray[t].ty-1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2,  tntArray[t].ty-1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3,  tntArray[t].ty-1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3,  tntArray[t].ty-1,  tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3,  tntArray[t].ty-1,  tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3,  tntArray[t].ty-1,  tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3,  tntArray[t].ty-1,  tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3,  tntArray[t].ty-1,  tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3,  tntArray[t].ty-1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2,  tntArray[t].ty-1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1,  tntArray[t].ty-1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx,  tntArray[t].ty-1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1,  tntArray[t].ty-1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2,  tntArray[t].ty-1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3,  tntArray[t].ty-1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3,  tntArray[t].ty-1,  tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3,  tntArray[t].ty-1,  tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty-1,  tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty-1,  tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty-1,  tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty-1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty-1,  tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty-1,  tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty-1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty-1,  tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty-1,  tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty-1,  tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty-1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty-1,  tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty-1,  tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty-1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty,  tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4, tntArray[t].ty, tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty,  tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty,  tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty,  tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty,  tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty,  tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty,  tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty,  tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty,  tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4, tntArray[t].ty+1, tntArray[t].tz, 102);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+1,  tntArray[t].tz+1, 102);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+1,  tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+1,  tntArray[t].tz-1, 102);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+1,  tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+1,  tntArray[t].tz, 102);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+1,  tntArray[t].tz+1, 102);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+1,  tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+1,  tntArray[t].tz-1, 102);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+1,  tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+2,  tntArray[t].tz, 102);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+2,  tntArray[t].tz+1, 102);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+2,  tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+2,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+2,  tntArray[t].tz-1, 102);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+2,  tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+2,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+2,  tntArray[t].tz, 102);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+2,  tntArray[t].tz+1, 102);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+2,  tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+2,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+2,  tntArray[t].tz-1, 102);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+2,  tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+2,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+3,  tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+3,  tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+3,  tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+3,  tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+3,  tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+3,  tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+3,  tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+3,  tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+3,  tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+3,  tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+4,  tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+4,  tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+4,  tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+4,  tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+4,  tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+4,  tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+4,  tntArray[t].ty+5,  tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx-4,  tntArray[t].ty+5,  tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3,  tntArray[t].ty,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2,  tntArray[t].ty,  tntArray[t].tz+3, 107);
					setTile(tntArray[t].tx+1,  tntArray[t].ty,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx,  tntArray[t].ty,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1,  tntArray[t].ty,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2,  tntArray[t].ty,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3,  tntArray[t].ty,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3,  tntArray[t].ty+1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1, tntArray[t].ty+1, tntArray[t].tz+3, tntArray[t].houseNum); 
					setTile(tntArray[t].tx,  tntArray[t].ty+1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1,  tntArray[t].ty+1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2,  tntArray[t].ty+1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3,  tntArray[t].ty+1,  tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3,  tntArray[t].ty,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2,  tntArray[t].ty,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1,  tntArray[t].ty,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx,  tntArray[t].ty,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1,  tntArray[t].ty,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2,  tntArray[t].ty,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3,  tntArray[t].ty,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3,  tntArray[t].ty+1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2,  tntArray[t].ty+1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1,  tntArray[t].ty+1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx,  tntArray[t].ty+1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1, tntArray[t].ty+1, tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2, tntArray[t].ty+1, tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3,  tntArray[t].ty+1,  tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3, tntArray[t].ty+2, tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2, tntArray[t].ty+2, tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1, tntArray[t].ty+2, tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3, tntArray[t].ty+2, tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2, tntArray[t].ty+2, tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1, tntArray[t].ty+2, tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx, tntArray[t].ty+2, tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx, tntArray[t].ty+2, tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1, tntArray[t].ty+2, tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1, tntArray[t].ty+2, tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2, tntArray[t].ty+2, tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2, tntArray[t].ty+2, tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3, tntArray[t].ty+2, tntArray[t].tz-3, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3, tntArray[t].ty+2, tntArray[t].tz+3, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3, tntArray[t].ty+3, tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2, tntArray[t].ty+3, tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1, tntArray[t].ty+3, tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3, tntArray[t].ty+3, tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2, tntArray[t].ty+3, tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1, tntArray[t].ty+3, tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx, tntArray[t].ty+3, tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx, tntArray[t].ty+3, tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1, tntArray[t].ty+3, tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1, tntArray[t].ty+3, tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2, tntArray[t].ty+3, tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2, tntArray[t].ty+3, tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3, tntArray[t].ty+3, tntArray[t].tz-2, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3, tntArray[t].ty+3, tntArray[t].tz+2, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3, tntArray[t].ty+4, tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2, tntArray[t].ty+4, tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1, tntArray[t].ty+4, tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3, tntArray[t].ty+4, tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2, tntArray[t].ty+4, tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1, tntArray[t].ty+4, tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx, tntArray[t].ty+4, tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx, tntArray[t].ty+4, tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1, tntArray[t].ty+4, tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1, tntArray[t].ty+4, tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2, tntArray[t].ty+4, tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2, tntArray[t].ty+4, tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3, tntArray[t].ty+4, tntArray[t].tz-1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3, tntArray[t].ty+4, tntArray[t].tz+1, tntArray[t].houseNum);
					setTile(tntArray[t].tx-3, tntArray[t].ty+5, tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx-2, tntArray[t].ty+5, tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx-1, tntArray[t].ty+5, tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx, tntArray[t].ty+5, tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx+1, tntArray[t].ty+5, tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx+2, tntArray[t].ty+5, tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3, tntArray[t].ty+5, tntArray[t].tz, tntArray[t].houseNum);
					setTile(tntArray[t].tx+3, tntArray[t].ty+2, tntArray[t].tz-2, 50);
					setTile(tntArray[t].tx+3, tntArray[t].ty+2, tntArray[t].tz+2, 50);
					setTile(tntArray[t].tx-3, tntArray[t].ty+2, tntArray[t].tz-2, 50);
					setTile(tntArray[t].tx-3, tntArray[t].ty+2, tntArray[t].tz+2, 50);
					if(tntArray[t].houseNum == 4){
						setTile(tntArray[t].tx+3, tntArray[t].ty, tntArray[t].tz-2, 58);
						setTile(tntArray[t].tx+2, tntArray[t].ty, tntArray[t].tz-2, 245);
					}else if(tntArray[t].houseNum == 5){
						setTile(tntArray[t].tx+3, tntArray[t].ty, tntArray[t].tz-2, 58);
						setTile(tntArray[t].tx+2, tntArray[t].ty, tntArray[t].tz-2, 61);
						setTile(tntArray[t].tx-2, tntArray[t].ty, tntArray[t].tz+2, 26);
					}else if(tntArray[t].houseNum==45){
						setTile(tntArray[t].tx+3, tntArray[t].ty, tntArray[t].tz-2, 58);
						setTile(tntArray[t].tx+2, tntArray[t].ty, tntArray[t].tz-2, 61);
						setTile(tntArray[t].tx-2, tntArray[t].ty, tntArray[t].tz+2, 26);
						setTile(tntArray[t].tx+1, tntArray[t].ty, tntArray[t].tz-2, 245);
						setTile(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz-2, 54);
						setTile(tntArray[t].tx-1, tntArray[t].ty, tntArray[t].tz-2, 54);
						setTile(tntArray[t].tx-2, tntArray[t].ty, tntArray[t].tz-2, 171);
						setTile(tntArray[t].tx-3, tntArray[t].ty, tntArray[t].tz-2, 171);
						setTile(tntArray[t].tx-1, tntArray[t].ty, tntArray[t].tz-1, 171);
						setTile(tntArray[t].tx-2, tntArray[t].ty, tntArray[t].tz-1, 171);
						setTile(tntArray[t].tx-3, tntArray[t].ty, tntArray[t].tz-1, 171);
						setTile(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz-1, 171);
						setTile(tntArray[t].tx+1, tntArray[t].ty, tntArray[t].tz-1, 171);
						setTile(tntArray[t].tx+2, tntArray[t].ty, tntArray[t].tz-1, 171);
						setTile(tntArray[t].tx+3, tntArray[t].ty, tntArray[t].tz-1, 171);
						setTile(tntArray[t].tx-1, tntArray[t].ty, tntArray[t].tz, 171);
						setTile(tntArray[t].tx-2, tntArray[t].ty, tntArray[t].tz, 171);
						setTile(tntArray[t].tx-3, tntArray[t].ty, tntArray[t].tz, 171);
						setTile(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 171);
						setTile(tntArray[t].tx+1, tntArray[t].ty, tntArray[t].tz, 171);
						setTile(tntArray[t].tx+2, tntArray[t].ty, tntArray[t].tz, 171);
						setTile(tntArray[t].tx+3, tntArray[t].ty, tntArray[t].tz, 171);
						setTile(tntArray[t].tx-1, tntArray[t].ty, tntArray[t].tz+1, 171);
						setTile(tntArray[t].tx-2, tntArray[t].ty, tntArray[t].tz+1, 171);
						setTile(tntArray[t].tx-3, tntArray[t].ty, tntArray[t].tz+1, 171);
						setTile(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz+1, 171);
						setTile(tntArray[t].tx+1, tntArray[t].ty, tntArray[t].tz+1, 171);
						setTile(tntArray[t].tx+2, tntArray[t].ty, tntArray[t].tz+1, 171);
						setTile(tntArray[t].tx+3, tntArray[t].ty, tntArray[t].tz+1, 171);
						setTile(tntArray[t].tx-1, tntArray[t].ty, tntArray[t].tz+2, 171);
						setTile(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz+2, 171);
						setTile(tntArray[t].tx+1, tntArray[t].ty, tntArray[t].tz+2, 171);
						setTile(tntArray[t].tx+2, tntArray[t].ty, tntArray[t].tz+2, 171);
						setTile(tntArray[t].tx+3, tntArray[t].ty, tntArray[t].tz+2, 171);
					}
					tntArray.splice(t, 1);
				}else if((tntArray[t].explosive==12)||(tntArray[t].explosive==13)){
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					Level.playSound(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, "random.explode", 30, 1);
					for(var a = -10; a < 10; a++){
						for(var b = -10; b < 10; b++){
							if(((b*b)+(a*a)<=100)&&(getTile(tntArray[t].tx+a, LY(tntArray[t].tx+a, tntArray[t].tz+b), tntArray[t].tz+b)!=tntArray[t].cNum)){
								setTile(tntArray[t].tx+a, LY(tntArray[t].tx+a, tntArray[t].tz+b)+1, tntArray[t].tz+b, tntArray[t].cNum);
							}
						}
					}
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive==14){
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					Level.playSound(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, "random.explode", 30, 1);
					for(var a = -15; a < 15; a++){
						for(var b = -15; b < 15; b++){
							for(var c = -10; c < 0; c++){
								if((b*b)+(a*a)<=300){
									setTile(tntArray[t].tx+a, tntArray[t].ty+c, tntArray[t].tz+b, 8);
								}
							}
						}
					}
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive==15){
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					Level.playSound(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, "random.explode", 30, 1);
					explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 10);
                    explode(tntArray[t].tx+20,tntArray[t].ty,  tntArray[t].tz,  10);
                    explode(tntArray[t].tx-20, tntArray[t].ty, tntArray[t].tz,  10);
                    explode(tntArray[t].tx, tntArray[t].ty+20, tntArray[t].tz,  10);
                    explode(tntArray[t].tx,  tntArray[t].ty-20, tntArray[t].tz,  10);
                    explode(tntArray[t].tx, tntArray[t].ty,  tntArray[t].tz+20, 10);
                    explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz-20, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty,  tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty, tntArray[t].tz, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty, tntArray[t].tz, 10);
                    explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty+10,  tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty+10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty+10, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty+10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty+10, tntArray[t].tz, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty+10, tntArray[t].tz, 10);
                    explode(tntArray[t].tx, tntArray[t].ty+10, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx, tntArray[t].ty+10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty-10,  tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty-10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty-10, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty-10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty-10, tntArray[t].tz, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty-10, tntArray[t].tz, 10);
                    explode(tntArray[t].tx, tntArray[t].ty-10, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx, tntArray[t].ty-10, tntArray[t].tz-10, 10);
					for(var a = -25; a < 25; a++){
						for(var b = -25; b < 25; b++){
							if((a*a)+(b*b)<=625){
								generateN(tntArray[t].tx+a, LY(tntArray[t].tx+a, tntArray[t].tz+b), tntArray[t].tz+b);
							}
						}
					}
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive == "RANDOM_TNT"){
					TNT = Level.spawnMob(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 15, blockNum);
					Entity.setRenderType(TNT, tntRenderer.renderType);
					Entity.setVelX(TNT, tntArray[t].velTX);
					Entity.setVelY(TNT, tntArray[t].velTY);
					Entity.setVelZ(TNT, tntArray[t].velTZ);
					tntArray.push({Ent: TNT, explosive: Math.floor(Math.random()*21), waitUntil: 40, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 0});
					if(tntArray[tntArray.length-1].explosive==0){
						Entity.setMobSkin(TNT, "mob/LavaTNT.png");
					}else if(tntArray[tntArray.length-1].explosive==1){
						Entity.setMobSkin(TNT, "mob/TNTx5.png");
					}else if(tntArray[tntArray.length-1].explosive==2){
						Entity.setMobSkin(TNT, "mob/TNTx20.png");
					}else if(tntArray[tntArray.length-1].explosive==3){
						Entity.setMobSkin(TNT, "mob/TNTx100.png");
					}else if(tntArray[tntArray.length-1].explosive==4){
						Entity.setMobSkin(TNT, "mob/TNTx500.png");
					}else if(tntArray[tntArray.length-1].explosive==5){
						Entity.setMobSkin(TNT, "mob/MeteorTNT.png");
					}else if(tntArray[tntArray.length-1].explosive==6){
						Entity.setMobSkin(TNT, "mob/FlatBomb.png");
					}else if(tntArray[tntArray.length-1].explosive==7){
						Entity.setMobSkin(TNT, "mob/FlatMiningBomb.png");
					}else if(tntArray[tntArray.length-1].explosive==8){
						Entity.setMobSkin(TNT, "mob/CompactTNT.png");
					}else if(tntArray[tntArray.length-1].explosive==9){
						Entity.setMobSkin(TNT, "mob/HouseTNT.png");
						tntArray[tntArray.length-1].houseNum = 4;
					}else if(tntArray[tntArray.length-1].explosive==10){
						Entity.setMobSkin(TNT, "mob/WoodHouseTNT.png");
						tntArray[tntArray.length-1].houseNum = 5;
					}else if(tntArray[tntArray.length-1].explosive==11){
						Entity.setMobSkin(TNT, "mob/BrickHouseTNT.png");
						tntArray[tntArray.length-1].houseNum = 45;
					}else if(tntArray[tntArray.length-1].explosive==12){
						Entity.setMobSkin(TNT, "mob/FireTNT.png");
						tntArray[tntArray.length-1].cNum = 51;
					}else if(tntArray[tntArray.length-1].explosive==13){
						Entity.setMobSkin(TNT, "mob/SnowTNT.png");
						tntArray[tntArray.length-1].cNum = 78;
					}else if(tntArray[tntArray.length-1].explosive==14){
						Entity.setMobSkin(TNT, "mob/OceanTNT.png");
					}else if(tntArray[tntArray.length-1].explosive==15){
						Entity.setMobSkin(TNT, "mob/HellFireTNT.png");
					}else if(tntArray[tntArray.length-1].explosive=="RANDOM_TNT"){
						Entity.setMobSkin(TNT, "mob/RandomTNT.png");
					}else if(tntArray[tntArray.length-1].explosive==16){
						Entity.setMobSkin(TNT, "mob/TrapTNT.png");
					}else if(tntArray[tntArray.length-1].explosive==17){
						Entity.setMobSkin(TNT, "mob/RandomTNT.png");
					}else if(tntArray[tntArray.length-1].explosive==19){
						Entity.setMobSkin(TNT, "mob/DiggingTNT.png");
					}else if(tntArray[tntArray.length-1].explosive==20){
						Entity.setMobSkin(TNT, "mob/DrillingTNT.png");
					}
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive == 16){
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					Level.playSound(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, "random.explode", 30, 1);
					for(var i = -3; i < 4; i++){
						for(var j = -3; j < 4; j++){
							setTile(tntArray[t].tx+i, tntArray[t].ty-1, tntArray[t].tz+j, 49);
							setTile(tntArray[t].tx+i, tntArray[t].ty+8, tntArray[t].tz+j, 10);
						}
					}
					for(var a = -4; a < 5; a++){
						for(var b = -4; b < 5; b++){
							setTile(tntArray[t].tx-4, tntArray[t].ty+4+b, tntArray[t].tz+a, 49);
							setTile(tntArray[t].tx+4, tntArray[t].ty+4+b, tntArray[t].tz+a, 49);
							setTile(tntArray[t].tx+b, tntArray[t].ty+4+a, tntArray[t].tz-4, 49);
							setTile(tntArray[t].tx+b, tntArray[t].ty+4+a, tntArray[t].tz+4, 49);
						}
					}
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive == 17){
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 10);
                    explode(tntArray[t].tx+20,tntArray[t].ty,  tntArray[t].tz,  10);
                    explode(tntArray[t].tx-20, tntArray[t].ty, tntArray[t].tz,  10);
                    explode(tntArray[t].tx, tntArray[t].ty+20, tntArray[t].tz,  10);
                    explode(tntArray[t].tx,  tntArray[t].ty-20, tntArray[t].tz,  10);
                    explode(tntArray[t].tx, tntArray[t].ty,  tntArray[t].tz+20, 10);
                    explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz-20, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty,  tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty, tntArray[t].tz, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty, tntArray[t].tz, 10);
                    explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty+10,  tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty+10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty+10, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty+10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty+10, tntArray[t].tz, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty+10, tntArray[t].tz, 10);
                    explode(tntArray[t].tx, tntArray[t].ty+10, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx, tntArray[t].ty+10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty-10,  tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty-10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty-10, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty-10, tntArray[t].tz-10, 10);
                    explode(tntArray[t].tx+10, tntArray[t].ty-10, tntArray[t].tz, 10);
                    explode(tntArray[t].tx-10, tntArray[t].ty-10, tntArray[t].tz, 10);
                    explode(tntArray[t].tx, tntArray[t].ty-10, tntArray[t].tz+10, 10);
                    explode(tntArray[t].tx, tntArray[t].ty-10, tntArray[t].tz-10, 10);
					setTile(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 0);
					var hY = tntArray[t].ty+20;
					for(var h = 0; h < 7; h++){
						setTile(tntArray[t].tx, tntArray[t].ty+3+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx+5, tntArray[t].ty+3+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx+10, tntArray[t].ty+3+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx-11, tntArray[t].ty+3+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx-2, hY+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx-9, hY+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx-21, hY+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx-26, hY+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx-34, hY+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx-37, hY+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx+2, hY+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx+9, hY+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx+13, hY+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx+16, hY+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx+18, hY+h, tntArray[t].tz, 113);
						setTile(tntArray[t].tx+2, hY+h, tntArray[t].tz, 113);
					}
					setTile(tntArray[t].tx-10, tntArray[t].ty+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-9, tntArray[t].ty+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-9, tntArray[t].ty+7, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-8, tntArray[t].ty+8, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-8, tntArray[t].ty+9, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-8, tntArray[t].ty+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-8, tntArray[t].ty+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-6, tntArray[t].ty+9, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-6, tntArray[t].ty+8, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-5, tntArray[t].ty+7, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-4, tntArray[t].ty+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-4, tntArray[t].ty+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-4, tntArray[t].ty+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-4, tntArray[t].ty+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-3, tntArray[t].ty+7, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-2, tntArray[t].ty+8, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-2, tntArray[t].ty+9, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+1, tntArray[t].ty+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+2, tntArray[t].ty+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+3, tntArray[t].ty+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+6, tntArray[t].ty+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+6, tntArray[t].ty+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+6, tntArray[t].ty+9, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+7, tntArray[t].ty+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+7, tntArray[t].ty+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+7, tntArray[t].ty+9, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+8, tntArray[t].ty+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+8, tntArray[t].ty+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+8, tntArray[t].ty+9, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+11, tntArray[t].ty+9, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+11, tntArray[t].ty+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+12, tntArray[t].ty+9, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+12, tntArray[t].ty+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+12, tntArray[t].ty+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+13, tntArray[t].ty+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+13, tntArray[t].ty+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+13, tntArray[t].ty+7, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+13, tntArray[t].ty+8, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-36, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-35, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-32, hY+2, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-32, hY+1, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-32, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-31, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-31, hY+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-31, hY+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-30, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-30, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-29, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-29, hY+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-29, hY+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-28, hY+2, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-28, hY+1, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-28, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-25, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-25, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-24, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-24, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-23, hY+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-23, hY+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-20, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-20, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-19, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-19, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-18, hY+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-18, hY+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-16, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-16, hY+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-15, hY+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-14, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-14, hY+2, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-14, hY+1, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-14, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-13, hY+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-12, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-12, hY+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-8, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-8, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-8, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-7, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-7, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-7, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-6, hY+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-6, hY+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-6, hY+2, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-6, hY+1, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-4, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-4, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-3, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-3, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-1, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx-1, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+3, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+3, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+4, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+4, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+4, hY+2, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+5, hY+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+5, hY+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+5, hY+1, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+5, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+7, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+8, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+10, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+11, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+14, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+15, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+19, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+19, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+20, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+20, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+21, hY+1, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+21, hY+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+22, hY+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+22, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+22, hY+2, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+24, hY+2, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+24, hY+1, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+24, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+25, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+25, hY+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+25, hY+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+26, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+26, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+27, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+27, hY+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+27, hY+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+28, hY+2, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+28, hY+1, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+28, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+30, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+30, hY+5, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+31, hY+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+32, hY+3, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+32, hY+2, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+32, hY+1, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+32, hY, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+33, hY+4, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+34, hY+6, tntArray[t].tz, 113);
					setTile(tntArray[t].tx+34, hY+5, tntArray[t].tz, 113);
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive==19){
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					Level.playSound(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, "random.explode", 30, 1);
					for(var a = tntArray[t].ty; a > 4; a--){
						setTile(tntArray[t].tx, a, tntArray[t].tz, 0);
					}
					tntArray.splice(t, 1);
				}else if(tntArray[t].explosive==20){
					checkTNT(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 3);
					explode(tntArray[t].tx, tntArray[t].ty, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-1, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-2, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-3, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-4, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-5, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-6, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-7, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-8, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-9, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-10, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-11, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-12, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-13, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-14, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-15, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-16, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-17, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-18, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-19, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-20, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-21, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-22, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-23, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-24, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-25, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-26, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-27, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-28, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-29, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-30, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-31, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-32, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-33, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-34, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-35, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-36, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-37, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-38, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-39, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-40, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-41, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-42, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-43, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-44, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-45, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-46, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-47, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-48, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-49, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-50, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-51, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-52, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-53, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-54, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-55, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-56, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-57, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-58, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-59, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-60, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-61, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-62, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-63, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-64, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-65, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-66, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-67, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-68, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-69, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-70, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-71, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-72, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-73, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-74, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-75, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-76, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-77, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-78, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-79, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-80, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-81, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-82, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-83, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-84, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-85, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-86, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-87, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-88, tntArray[t].tz, 5);
					explode(tntArray[t].tx, tntArray[t].ty-89, tntArray[t].tz, 5);
					tntArray.splice(t, 1);
				}
			}
		}
		}
		if(!alreadyGenerated){
			alreadyGenerated = true;
			var oreCount = Math.floor((Math.random()*20)+60);
			for(var i = 0; i < oreCount; i++){
				oreX = Math.floor(Math.random()*256)+xL;
				oreY = Math.floor((Math.random()*30)+20);
				oreZ = Math.floor(Math.random()*256)+zL;
				Generate(oreX, oreY, oreZ);
			}
		}
}
function leaveGame(){
    save();
}
function destroyBlock(x, y, z, side){
	if(getTile(x, y, z)==90){
		if(Level.getGameMode() != 1){
			preventDefault();
			setTile(x, y, z, 0);
			var gDrop = Math.floor((Math.random()*2)+4);
			Level.dropItem(x, y, z, 0, 289, gDrop);
		}
	}
}
function procCmd(command){
	var cmd = command.split(" ");
	if((cmd[0] == "give")&&(cmd[1] == "tnt")){
		Player.addItemInventory(90,64,0);
		Player.addItemInventory(118,64,0);
		Player.addItemInventory(117,64,0);
		Player.addItemInventory(115,64,0);
		Player.addItemInventory(113,64,0);
		Player.addItemInventory(93,64,0);
		Player.addItemInventory(88,64,0);
		Player.addItemInventory(84,64,0);
		Player.addItemInventory(70,64,0);
		Player.addItemInventory(36,64,0);
		Player.addItemInventory(75,64,0);
		Player.addItemInventory(34,64,0);
		Player.addItemInventory(72,64,0);
		Player.addItemInventory(76,64,0);
		Player.addItemInventory(77,64,0);
		Player.addItemInventory(33,64,0);
		Player.addItemInventory(29,64,0);
		Player.addItemInventory(28,64,0);
		Player.addItemInventory(55,64,0);
		Player.addItemInventory(25,64,0);
		Player.addItemInventory(23,64,0);
	}
}	
function entityRemovedHook(entity){
	if((Entity.getEntityTypeId(entity)==81)&&(meteorArray.length != 0)){
		for(var m = 0; m < meteorArray.length; m++){
			if(entity==meteorArray[m][0]){
				explode(meteorArray[m][1], meteorArray[m][2], meteorArray[m][3], 50);
				explode(meteorArray[m][1]+40,meteorArray[m][2],  meteorArray[m][3],  50);
				explode(meteorArray[m][1]-40, meteorArray[m][2], meteorArray[m][3],  50);
				explode(meteorArray[m][1], meteorArray[m][2]+40, meteorArray[m][3],  50);
				explode(meteorArray[m][1],  meteorArray[m][2]-40, meteorArray[m][3],  50);
				explode(meteorArray[m][1], meteorArray[m][2],  meteorArray[m][3]+40, 50);
				explode(meteorArray[m][1], meteorArray[m][2], meteorArray[m][3]-40, 50);
				explode(meteorArray[m][1]+20, meteorArray[m][2],  meteorArray[m][3]+20, 50);
				explode(meteorArray[m][1]+20, meteorArray[m][2], meteorArray[m][3]-20, 50);
				explode(meteorArray[m][1]-20, meteorArray[m][2], meteorArray[m][3]+20, 50);
				explode(meteorArray[m][1]-20, meteorArray[m][2], meteorArray[m][3]-20, 50);
				explode(meteorArray[m][1]+20, meteorArray[m][2], meteorArray[m][3], 50);
				explode(meteorArray[m][1]-20, meteorArray[m][2], meteorArray[m][3], 50);
				explode(meteorArray[m][1], meteorArray[m][2], meteorArray[m][3]+20, 50);
				explode(meteorArray[m][1], meteorArray[m][2], meteorArray[m][3]-20, 50);
				explode(meteorArray[m][1]+20, meteorArray[m][2]+20,  meteorArray[m][3]+20, 50);
				explode(meteorArray[m][1]+20, meteorArray[m][2]+20, meteorArray[m][3]-20, 50);
				explode(meteorArray[m][1]-20, meteorArray[m][2]+20, meteorArray[m][3]+20, 50);
				explode(meteorArray[m][1]-20, meteorArray[m][2]+20, meteorArray[m][3]-20, 50);
				explode(meteorArray[m][1]+20, meteorArray[m][2]+20, meteorArray[m][3], 50);
				explode(meteorArray[m][1]-20, meteorArray[m][2]+20, meteorArray[m][3], 50);
				explode(meteorArray[m][1], meteorArray[m][2]+20, meteorArray[m][3]+20, 50);
				explode(meteorArray[m][1], meteorArray[m][2]+20, meteorArray[m][3]-20, 50);
				explode(meteorArray[m][1]+20, meteorArray[m][2]-20,  meteorArray[m][3]+20, 50);
				explode(meteorArray[m][1]+20, meteorArray[m][2]-20, meteorArray[m][3]-20, 50);
				explode(meteorArray[m][1]-20, meteorArray[m][2]-20, meteorArray[m][3]+20, 50);
				explode(meteorArray[m][1]-20, meteorArray[m][2]-20, meteorArray[m][3]-20, 50);
				explode(meteorArray[m][1]+20, meteorArray[m][2]-20, meteorArray[m][3], 50);
				explode(meteorArray[m][1]-20, meteorArray[m][2]-20, meteorArray[m][3], 50);
				explode(meteorArray[m][1], meteorArray[m][2]-20, meteorArray[m][3]+20, 50);
				explode(meteorArray[m][1], meteorArray[m][2]-20, meteorArray[m][3]-20, 50);
				meteorFlalling = false;
				meteorArray.splice(m, 1);
			}
		}
	}
}
function attackHook(a, v){
	if((tntArray.length != 0)&&(Entity.getEntityTypeId(v)==15)){
		for(var e = 0; e < tntArray.length; e++){
			if(tntArray[e].Ent == v){
				preventDefault();
			}
		}
	}
}
var placeTorches = function(x, y, z){
	for(var a = 0; a < 15; a++){
		if(getTile(x+a, y, z)!=0){
			setTile(x+a-1, y, z, 50);
			break;
		}
	}
	for(var b = 0; b < 15; b++){
		if(getTile(x, y, z+b)!=0){
			setTile(x, y, z+b-1, 50);
			break;
		}
	}
	for(var c = 0; c > -15; c--){
		if(getTile(x, y, z+c)!=0){
			setTile(x, y, z+c+1, 50);
			break;
		}
	}
	for(var d = 0; d > -15; d--){
		if(getTile(x+d, y, z)!=0){
			setTile(x+d+1, y, z, 50);
			break;
		}
	}
	for(var e = 15; e > 0; e--){
		if(getTile(x+e, y, z+e)==0){
			setTile(x+e, y, z+e, 50);
			break;
		}
	}
	for(var f = -15; f < 0; f++){
		if(getTile(x+f, y, z+f)==0){
			setTile(x+f, y, z+f, 50);
			break;
		}
	}
	for(var g = 15; g > 0; g--){
		if(getTile(x+e, y, z-e)==0){
			setTile(x+e, y, z-e, 50);
			break;
		}
	}
	for(var h = 15; h > 0; h--){
		if(getTile(x-h, y, z+h)==0){
			setTile(x-h, y, z+h, 50);
			break;
		}
	}
}
var LY = function(x, z){
	for(var y = 120; y > 0; y--){
		if((getTile(x, y, z)!=0)&&(getTile(x, y, z)!=31)){
			return y;
			break;
		}
	}
}
var Generate = function(x, y, z){
    var oreR = Math.floor((Math.random()*10)+8);
	for(var i = 0; i < (2*oreR); i++){
		for(var j = 0; j < (2*oreR); j++){
			if((i*i)+(j*j)<=(4*oreR)){
				var c = Math.floor(Math.random()*5);
				var rY = Math.floor(Math.random()*3);
				if(c!=3 && getTile(x+i, y+rY, z+j)!=0){
					for(var k = 0; k < rY; k++){
						oreR--;
						setTile(x+i, y+k, z+j, 90);
						setTile(x+i, y-k, z+j, 90);
						if(oreR==0){
							break;
						}
					}
				}
			}	
		}	
	}
}
var checkOres = function(xL, zL){
	for(var x = 0; x <= generatedXL.length; x++){
		if((generatedXL[x]==xL)&&(generatedZL[x]==zL)){
			return false;
			break;
		}
		if(x==generatedXL.length){
			return true;
		}
	}
}
var generateN = function(x, y, z){
	var start = Math.floor(Math.random()*15);
	if(start!=3){
		setTile(x, y, z, 87);
		var start2 = Math.floor(Math.random()*9);
		if(start2 > 7){
			setTile(x, y+1, z, 10);
		}else if(start2 < 4){
			setTile(x, y+1, z, 51);
		}
	}
}
var checkTNT = function(x, y, z, r){
	for(var a = -r; a < r; a++){
		for(var b = -r; b < r; b++){
			for(var c = -r; c < r; c++){
				if((getTile(x+a, y+b, z+c)==34)||(getTile(x+a, y+b, z+c)==25)||(getTile(x+a, y+b, z+c)==55)||(getTile(x+a, y+b, z+c)==28)||(getTile(x+a, y+b, z+c)==29)||(getTile(x+a, y+b, z+c)==33)||(getTile(x+a, y+b, z+c)==72)||(getTile(x+a, y+b, z+c)==76)||(getTile(x+a, y+b, z+c)==77)||(getTile(x+a, y+b, z+c)==36)||(getTile(x+a, y+b, z+c)==75)||(getTile(x+a, y+b, z+c)==70)||(getTile(x+a, y+b, z+c)==84)||(getTile(x+a, y+b, z+c)==88)||(getTile(x+a, y+b, z+c)==93)||(getTile(x+a, y+b, z+c)==94)||(getTile(x+a, y+b, z+c)==115)||(getTile(x+a, y+b, z+c)==113)||(getTile(x+a, y+b, z+c)==116)||(getTile(x+a, y+b, z+c)==117)||(getTile(x+a, y+b, z+c)==118)){
					if(getTile(x+a, y+b, z+c)==34){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/LavaTNT.png");
						tntArray.push({Ent: TNT, explosive: 0, waitUntil: 100, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==25){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/TNTx5.png");
						tntArray.push({Ent: TNT, explosive: 1, waitUntil: 100, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==55){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/TNTx20.png");
						tntArray.push({Ent: TNT, explosive: 2, waitUntil: 110, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==28){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/TNTx100.png");
						tntArray.push({Ent: TNT, explosive: 3, waitUntil: 145, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==29){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/TNTx500.png");
						tntArray.push({Ent: TNT, explosive: 4, waitUntil: 180, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==33){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/MeteorTNT.png");
						tntArray.push({Ent: TNT, explosive: 5, waitUntil: 180, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==72){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/FlatBomb.png");
						tntArray.push({Ent: TNT, explosive: 6, waitUntil: 100, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==76){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/FlatMiningBomb.png");
						tntArray.push({Ent: TNT, explosive: 7, waitUntil: 100, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==77){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/CompactTNT.png");
						tntArray.push({Ent: TNT, explosive: 8, waitUntil: 110, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==36){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/HouseTNT.png");
						tntArray.push({Ent: TNT, explosive: 9, waitUntil: 100, houseNum: 4, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==75){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/WoodHouseTNT.png");
						tntArray.push({Ent: TNT, explosive: 10, waitUntil: 100, houseNum: 5, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==70){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/BrickHouseTNT.png");
						tntArray.push({Ent: TNT, explosive: 11, waitUntil: 100, houseNum: 45, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==84){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/FireTNT.png");
						tntArray.push({Ent: TNT, explosive: 12, waitUntil: 110, cNum: 51, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==88){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/SnowTNT.png");
						tntArray.push({Ent: TNT, explosive: 13, waitUntil: 110, cNum: 78, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==93){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/OceanTNT.png");
						tntArray.push({Ent: TNT, explosive: 14, waitUntil: 130, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==94){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/HellFireTNT.png");
						tntArray.push({Ent: TNT, explosive: 15, waitUntil: 160, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==113){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/RandomTNT.png");
						tntArray.push({Ent: TNT, explosive: "RANDOM_TNT", waitUntil: 180, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==115){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/TrapTNT.png");
						tntArray.push({Ent: TNT, explosive: 16, waitUntil: 90, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==116){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/RandomTNT.png");
						tntArray.push({Ent: TNT, explosive: 17, waitUntil: 90, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==117){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/DiggingTNT.png");
						tntArray.push({Ent: TNT, explosive: 19, waitUntil: 90, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					else if(getTile(x+a, y+b, z+c)==118){
						TNT = Level.spawnMob(x+a+.5, y+b, z+c+.5, 15, "mob/DrillingTNT.png");
						tntArray.push({Ent: TNT, explosive: 20, waitUntil: 90, tx: Entity.getX(TNT), ty: Entity.getY(TNT), tz: Entity.getZ(TNT), entityCd: 10});
					}
					setTile(x+a, y+b, z+c, 0);
					Entity.setRenderType(TNT, tntRenderer.renderType);
					Entity.setVelY(TNT, 0.2);
					rVel = Math.random()*0.25;
					rxy = Math.floor(Math.random()*10);
					if(rxy < 5){Entity.setVelZ(rVel);}
					else if(rxy >= 5){Entity.setVelX(rVel);}
				}
			}
		}
	}
}
var save = function(){
	java.io.File(path).mkdirs();
	var newFile = new java.io.File(path,"save.txt");
	newFile.createNewFile();
	var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
	outWrite.append(alreadyGenerated.toString());
	outWrite.append(";"+xL.toString());
	outWrite.append(";"+zL.toString());
	if(generatedXL.length != 0){
		outWrite.append(";["+generatedXL[0].toString());
		if(generatedXL.length > 1){
			for(var s = 1; s < generatedXL.length; s++){
				outWrite.append(","+generatedXL[s].toString());
			}
		}
		outWrite.append("];");
	}
	if(generatedZL.length != 0){
		outWrite.append("[");
		outWrite.append(generatedZL[0].toString());
		if(generatedZL.length > 1){
			for(var s = 1; s < generatedZL.length; s++){
				outWrite.append(","+generatedZL[s].toString());
			}
		}
		outWrite.append("];");
	}
	outWrite.close();
}
var load = function(){
	if(!java.io.File(path+"save.txt").exists())
        return;
	var file = new java.io.File(path+"save.txt");
    var fos = new java.io.FileInputStream(file);
    var str = new java.lang.StringBuilder();
    var ch;
	while((ch=fos.read())!=-1)
        str.append(java.lang.Character(ch));
	alreadyGenerated = parseInt(str.toString().split(";")[0]);
	xL = parseInt(str.toString().split(";")[1]);
	zL = parseInt(str.toString().split(";")[2]);
	generatedXL = parseInt(str.toString().split(";")[3]);
	generatedZL = parseInt(str.toString().split(";")[4]);
	fos.close();
}

//graduationtassle@gmail.com