/*
Made by andynazay153.
This is my second mod. Please do not copy or add it to anything or make a video without giving me credit ;)
This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
You are free to:
Share - copy and redistribute the material in any medium or format
Adapt - remix, transform, and build upon the material for any purpose, even commercially.
The licensor cannot revoke these freedoms as long as you follow the license terms.
Under the following terms:
Attribution - You must give appropriate credit, provide a link to the license, 
and indicate if changes were made. You may do so in any reasonable manner, 
but not in any way that suggests the licensor endorses you or your use.
ShareAlike - If you remix, transform, or build upon the material, you must .
No additional restrictions - You may not apply legal terms or technological measures
 that legally restrict others from doing anything the license permits.
*/




function newLevel(){
	if(!ModPE.readData("test"));{
	clienMessage(ChatColor.GOLD + "Lantern, " + ChatColor.WHITE = "by " + ChatColor.BLUE + "andynazay153" + ChatColor.GREEN + "Loaded Successfully!");
	ModPE.saveData("test", "Test");
	}
}
//                                       Bottom                   Top                     North                    South                    East                     West 
Block.defineBlock(699,"Lantern",[["redstone_lamp_on", 0],["redstone_lamp_on", 0], ["redstone_lamp_on", 0], ["redstone_lamp_on", 0], ["redstone_lamp_on", 0], ["redstone_lamp_on", 0]],type,false,0);
Block.setDestroyTime(699,2);
Block.setShape(699,.5,0,.5,.5,.5,.5);
Block.setLightLevel(699, 16);

function leaveGame() {
ModPE.resetImages();
}