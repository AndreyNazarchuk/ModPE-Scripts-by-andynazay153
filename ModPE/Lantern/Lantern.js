/*
Made by andynazay153 and Mattgo007.
This is my mod. Please do not copy or add it to anything and upload without asking me ;)
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
Block.defineBlock(250, "Lantern",[["cactus", 2],["cactus", 2],["cake_bottom", 0],["cake_bottom", 0],["cake_bottom", 0],["cake_bottom", 0]], 2, false, 0);
Block.setDestroyTime(250,1);
Block.setShape(250, 1/4, 0, 1/4, 3/4, 3/4, 3/4);
Block.setLightLevel(250, 15);
Item.setCategory(250,4,0);
Item.addShapedRecipe(250, 4, 0, [
	" p ",
	"ptp",
	" p "], 
	["t",50,0,
	"p",339,0]);
	
function newLevel(){
	Player.addItemCreativeInv(250, 1, 0);
 
 function procCmd(cmd) {
 if(cmd == "debuglantern"){
Player.addItemInventory(339,10);
Player.addItemInventory(50,10);
}
}
}
function destroyBlock(x, y, z){
	var blockId = Level.getTile(x, y, z);
	if(blockId == 250){
	preventDefault();
	Level.destroyBlock(x, y, z, true);
}
}