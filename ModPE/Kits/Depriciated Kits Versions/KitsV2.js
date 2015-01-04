/*
Made by andynazay153.
This is my first mod. Please do not copy or add it to anything or make a video without giving me credit ;)
This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
You are free to:
Share - copy and redistribute the material in any medium or format
Adapt - remix, transform, and build upon the material for any purpose, even commercially.
The licensor cannot revoke these freedoms as long as you follow the license terms.
Under the following terms:
Attribution - You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
ShareAlike - If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
No additional restrictions - You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.
*/
function newLevel()
 { 
clientMessage(ChatColor.GREEN + "Kits " + ChatColor.WHITE + "made by" + ChatColor.GREEN + " andynazay153"); 

clientMessage(ChatColor.GREEN + "Type /kits to see all kits!");
clientMessage("   ");
}

function procCmd(cmd) {

if(cmd == "kits")
 {
clientMessage(ChatColor.RED + "Kits:");
clientMessage(ChatColor.YELLOW + "Starter: " + ChatColor.WHITE + "The essentials for survival. Type /starter kit.");
clientMessage(ChatColor.GREEN + "Bowman: " + ChatColor.WHITE + "Snipe EM! Type /bowman kit."); 
clientMessage(ChatColor.GOLD + "Tank: " + ChatColor.WHITE + "Golden armor and a surprise!. Type /tank kit");
clientMessage(ChatColor.GRAY + "Miner: " + ChatColor.WHITE + "The essentials to mine. Type /miner kit");
clientMessage(ChatColor.RED + "Fighter: " + ChatColor.WHITE + "Iron armor and sword. Type /fighter kit");
clientMessage(ChatColor.BLUE + "EPIC: " + ChatColor.WHITE + "Diamond stuff, Watch out, Cheating has consequences!. Type /Epic kit");

}

//starter kit items

else if(cmd == "starter kit")
 {
Player.addItemInventory(298,1);
Player.addItemInventory(299,1);
Player.addItemInventory(300,1);
Player.addItemInventory(301,1);
Player.addItemInventory(364,10);
Player.addItemInventory(392,5);
Player.addItemInventory(393,20);
Player.addItemInventory(295,5);
Player.addItemInventory(362,5);
Player.addItemInventory(355,1);
Player.addItemInventory(273,1);
Player.addItemInventory(274,1);
Player.addItemInventory(275,1);
Player.addItemInventory(272,1);
Player.addItemInventory(291,1);
Player.addItemInventory(17,64);
Player.addItemInventory(54,1);
Player.addItemInventory(58,1);
Player.addItemInventory(61,1);
Player.addItemInventory(345,1);
Player.addItemInventory(297,20);
Player.addItemInventory(50,64);
clientMessage("Starter kit has been added to your inventory!");
}

//Bowman kit items

else if(cmd == "bowman kit")
  {
Player.addItemInventory(261,1);
Player.addItemInventory(262,128);
Player.addItemInventory(298,1);
Player.addItemInventory(299,1);
Player.addItemInventory(300,1);
Player.addItemInventory(301,1);
Player.addItemInventory(260,25)
clientMessage("Bowman kit has been added to your inventory!");
}

//fighter kit items

else if(cmd=="fighter kit")
{
	Player.addItemInventory(307,1);
	Player.addItemInventory(267,1);
	clientMessage("Fighter kit has been added to your inventory!");
}

//miner kit items

else if(cmd=="miner kit"){
	Player.addItemInventory(257,1);
	Player.addItemInventory(50,64);
	clientMessage("Miner kit has been added to your inventory!");
	}
	
//Tank kit items
	
	else if(cmd=="tank kit"){
		Player.addItemInventory(314,1);
		Player.addItemInventory(315,1);
		Player.addItemInventory(316,1);
		Player.addItemInventory(317,1);
		Player.addItemInventory(268,1);
		Player.addItemInventory(364,32);
		clientMessage("Tank kit has been added to your inventory!");
	}
	
	//Epic kit items
	else if(cmd=="Epic kit"){
		Player.addItemInventory(310,1);
		Player.addItemInventory(311,1);
		Player.addItemInventory(312,1);
		Player.addItemInventory(313,1);
		Player.addItemInventory(276,1);
		clientMessage("CHEATER!"); 
		Player.setHealth(1);
		}
}