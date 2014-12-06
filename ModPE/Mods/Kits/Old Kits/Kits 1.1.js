/*
Made by andynazay153.
This is my first mod. Please do not copy or add it to anything or make a video without giving me credit ;)
*/
function newLevel()
 { 
clientMessage(ChatColor.GREEN + "Kits " + ChatColor.WHITE + "made by" + ChatColor.GREEN + " andynazay153"); 

clientMessage(ChatColor.BLUE + "Type /kits to see all kits!");
clientMessage("   ");
}

function procCmd(cmd) {

if(cmd == "kits")
 {
clientMessage(ChatColor.RED + "Kits:");
clientMessage("   ");
clientMessage(ChatColor.GREEN + "Starter: " + ChatColor.WHITE + "The essentials for survival. Type /kit-starter."); 
clientMessage("   ");
clientMessage(ChatColor.GREEN + "Bowman: " + ChatColor.WHITE + "Snipe EM! Type /kit-bowman."); 
clientMessage("  ");
clientMessage(ChatColor.YELLOW + "More kits comming soon!");
}

//starter kit items

else if(cmd == "kit-starter")
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

else if(cmd == "kit-bowman")
  {
Player.addItemInventory(261,1);
Player.addItemInventory(262,128);
Player.addItemInventory(298,1);
Player.addItemInventory(299,1);
Player.addItemInventory(300,1);
Player.addItemInventory(301,1);
Player.addItemInventory(260,25)
clientMessage("Bowman kit has been added to your inventory, Have fun!");
}
}