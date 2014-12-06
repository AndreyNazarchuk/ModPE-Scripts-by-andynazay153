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
ShareAlike - If you remix, transform, or build upon the material, you must .
No additional restrictions - You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.
Modified by RagingFire629 
*/
function newLevel()
 { 
clientMessage(ChatColor.BLUE + "Kits v3.1 " + ChatColor.WHITE + "Made By" + ChatColor.GREEN + " andynazay153 " + ChatColor.WHITE + "and " + ChatColor.RED + "RagingFire629"); 

clientMessage(ChatColor.GREEN + "Type /kits to see all kits!");
}

function procCmd(cmd) {

if(cmd == "kits")
 {
clientMessage(ChatColor.GREEN + "Kits:");
clientMessage(ChatColor.YELLOW + "Starter: " + ChatColor.WHITE + "The essentials for survival. Type /starter.");
clientMessage(ChatColor.BLUE + "Sniper: " + ChatColor.WHITE + "Snipe Em! Type /sniper."); 
clientMessage(ChatColor.GOLD + "Heavy: " + ChatColor.WHITE + "Golden armor and a surprise!. Type /heavy");
clientMessage(ChatColor.RED + "Miner: " + ChatColor.WHITE + "The essentials to mine. Type /miner");
clientMessage(ChatColor.GREEN + "Farmer: " + ChatColor.WHITE + "Hoe and Seeds. Type /farmer");
clientMessage(ChatColor.YELLOW + "Lumberjack: " + ChatColor.WHITE + "Axe and leather armor. Type /lumberjack");
clientMessage(ChatColor.GRAY + "Builder: " + ChatColor.WHITE + "Crafting Table, wood and cobble. Type /builder");
clientMessage(ChatColor.RED + "Smelter: " + ChatColor.WHITE + "Furnace and coal and things that can smelt. Type /smelter");
clientMessage(ChatColor.GREEN + "Fighter: " + ChatColor.WHITE + "Iron armor and sword. Type /fighter");
clientMessage(ChatColor.BLUE + "EPIC: " + ChatColor.WHITE + "Diamond stuff, Watch out, Cheating has consequences!. Type /EPIC");

}

//Starter Kit Items

else if(cmd == "starter")
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

//Sniper kit items

else if(cmd == "sniper")
  {
Player.addItemInventory(261,1);
Player.addItemInventory(262,128);
Player.addItemInventory(298,1);
Player.addItemInventory(299,1);
Player.addItemInventory(300,1);
Player.addItemInventory(301,1);
Player.addItemInventory(260,25)
clientMessage("Sniper kit has been added to your inventory!");

}

//Heavy Kit Items
	
 else if(cmd == "heavy"){
Player.addItemInventory(314,1);
Player.addItemInventory(315,1);
Player.addItemInventory(316,1);
Player.addItemInventory(317,1);
Player.addItemInventory(268,1);
Player.addItemInventory(364,32);
clientMessage("Heavy Kit Has Been Added To Your Inventory!");
   
}

//Miner kit items

 else if(cmd == "miner"){
	Player.addItemInventory(257,1);
    Player.addItemInventory(50,64);
	clientMessage("Miner Kit Has Been Added To Your Inventory!");

}

//Farmer kit items

 else if(cmd == "farmer"){
   Player.addItemInventory(292,1);
   Player.addItemInventory(325,5);
   Player.addItemInventory(391,5);
   Player.addItemInventory(392,5);
   Player.addItemInventory(458,5);
   Player.addItemInventory(295,5);
   Player.addItemInventory(361,5);
   Player.addItemInventory(362,5);
   clientMessage("Farmer Kit Has Been Added to Your Inventory!");
   
}

//Lumberjack Kit Items

 else if(cmd == "lumberjack"){
   Player.addItemInventory(258,1);
   Player.addItemInventory(298,1);
   Player.addItemInventory(299,1);
   Player.addItemInventory(300,1);
   Player.addItemInventory(301,1);
   clientMessage("Lumberjack Kit Has Been Added To Your Inventory!");
   
}

//Builder Kit Items

 else if(cmd == "builder"){
   Player.addItemInventory(58,1);
   Player.addItemInventory(4,64);
   Player.addItemInventory(17,64);
   clientMessage("Builder Kit Has Been Added To Your Inventory!");
   
}

//Smelter Kit Items

 else if(cmd == "smelter"){
   Player.addItemInventory(61,1);
   Player.addItemInventory(263,64);
   Player.addItemInventory(15,10);
   Player.addItemInventory(14,10);
   clientMessage("Smelter Kit Has Been Added To Your Inventory!");

}
   
//Fighter Kit Items
  
  else if(cmd == "fighter"){
	Player.addItemInventory(306,1);
	Player.addItemInventory(307,1);
	Player.addItemInventory(308,1);
	Player.addItemInventory(309,1);
	Player.addItemInventory(267,1);
	clientMessage("Fighter kit has been added to your inventory!");

}

//Epic kit items
	else if(cmd == "EPIC"){
		Player.addItemInventory(310,1);
		Player.addItemInventory(311,1);
		Player.addItemInventory(312,1);
		Player.addItemInventory(313,1);
		Player.addItemInventory(276,1);
		clientMessage("CHEATER!!!");
		Player.setHealth(1);
	   	   }
		}