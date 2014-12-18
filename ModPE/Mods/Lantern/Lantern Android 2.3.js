/*
Made by andynazay153.
This is my mod. Please do not copy or add it to anything or make a video without giving me credit ;)
This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
You are free to:
Share - copy and redistribute the material in any medium or format
Adapt - remix, transform, and build upon the material for any purpose, even commercially, But with credit to the original author.
The licensor cannot revoke these freedoms as long as you follow the license terms.
Under the following terms:
Attribution - You must give appropriate credit, provide a link to the license, and indicate if changes were made. 
You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
ShareAlike - If you remix, transform, or build upon the material, you must ask the Owner of this mod if you can release it to the public.
No additional restrictions - You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.
*/

//Lantern Code

function newLevel(){
	Block.defineBlock(499,"Lantern",[["redstone_lamp_on", 0],["redstone_lamp_on", 0],["redstone_lamp_on", 0],["redstone_lamp_on", 0],["redstone_lamp_on", 0],["redstone_lamp_on", 0]]);
	Block.setDestroyTime(499,2);
	Block.setShape(499,0.5,0,0.5,0.5,0.5,0.5);
	Block.setLightLevel(499,16);
	Item.setCategory(499,8,0);
	Item.addShapedRecipe(499, 4, 0, ["p","ptp","p"], ["t",50,0,"p",339,0]);
	Player.addItemCreativeInv(499, 1, 0);
	if(!ModPE.readData("lanternintro")){
		clientMessage(ChatColor.GOLD + "Lantern " + ChatColor.WHITE + "by " + ChatColor.BLUE + "andynazay153" + ChatColor.GREEN + "Loaded Successfully!");
		ModPE.saveData("lanternintro", "LanternIntro");
	}
}

function destroyBlock(x, y, z){
var blockId = Level.getTile(x, y, z);
if(blockId == 499){
preventDefault();
Level.destroyBlock(x, y, z, true);
}
}
/*
function leaveGame(){
ModPE.resetImages();
}
*/