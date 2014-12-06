/*
Made by andynazay153.
This is my mod. Please do not copy or add it to anything or make a video without giving me credit ;)
This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
You are free to:
Share - copy and redistribute the material in any medium or format
Adapt - remix, transform, and build upon the material for any purpose, even commercially, But with credit to the origonal author.
The licensor cannot revoke these freedoms as long as you follow the license terms.
Under the following terms:
Attribution - You must give appropriate credit, provide a link to the license, and indicate if changes were made. 
You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
ShareAlike - If you remix, transform, or build upon the material, you must ask the Owner of this mod if you can release it to the public.
No additional restrictions - You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.
*/

Player.clearInventory = function() {
	for(var i = 0; i < 255; i++) Player.clearInventorySlot(i);
};

function newLevel()
 { 
	clientMessage(ChatColor.BLUE + "Kits v4 " + ChatColor.WHITE + "Made By" + ChatColor.GREEN + " andynazay153"); 
}

function procCmd(cmd) {

//Starter Kit Items

 if(cmd == "starter"){
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
  clientMessage(ChatColor.GREEN + "Have Fun!");
}

//Sniper kit items

 else if(cmd == "sniper"){
  Player.addItemInventory(261,1);
  Player.addItemInventory(262,64);
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

//Demolisher

 else if(cmd == "demolisher"){
	Player.addItemInventory(46,64);
	Player.addItemInventory(259,1);
	Player.addItemInventory(10,64);
	Player.addItemInventory(272,1);
	clientMessage("Thinking of greifing?");
}

//Light Scout kit

 else if(cmd =="lightscout"){
	Player.addItemInventory(261,1);
	Player.addItemInventory(262,16);
	Player.addItemInventory(272,1);
	Player.addItemInventory(301,1);
	clientMessage("Going Scouting?");
}

//Heavy Scout kit

 else if(cmd =="heavyscout"){
	Player.addItemInventory(276,1);
	Player.addItemInventory(262,64);
	Player.addItemInventory(261,1);
	clientMessage("Heavy Scout kit has been added to your inventory!");
}

//Knight kit items

 else if(cmd == "knight"){
	Player.addItemInventory(267,1);
	Player.addItemInventory(302,1);
	Player.addItemInventory(303,1);
	Player.addItemInventory(304,1);
	Player.addItemInventory(305,1);
	clientMessage("Knight kit has been added to your inventory!");
}

//King kit items

 else if(cmd =="king"){
	Player.addItemInventory(314,1);
	Player.addItemInventory(299,1);
	Player.addItemInventory(300,1);
	Player.addItemInventory(301,1);
	Player.addItemInventory(282,5);
	Player.addItemInventory(256,1);
	Player.addItemInventory(257,1);
	Player.addItemInventory(258,1);
	Player.addItemInventory(267,1);
	Player.addItemInventory(292,1);
	clientMessage("Long live the King!");
}

//Thief kit items

 else if(cmd == "thief"){
	Player.addItemInventory(298,1);
	Player.addItemInventory(300,1);
	Player.addItemInventory(391,1);
	Player.addItemInventory(257,1);
	Player.addItemInventory(258,1);
	Player.addItemInventory(8,1);
	Player.addItemInventory(325,1);
	clientMessage("Don't get caught!");
}

//Sheriff kit items

 else if(cmd == "sheriff"){
	Player.addItemInventory(267,1);
	Player.addItemInventory(306,1);
	Player.addItemInventory(307,1);
	Player.addItemInventory(308,1);
	Player.addItemInventory(309,1);
	Player.addItemInventory(259,1);
	Player.addItemInventory(364,64);
	clientMessage("Catch those bad guys");
}

//Reinforced Trooper kit items

 else if(cmd == "trooper"){
 	Player.addItemInventory(276,1);
	Player.addItemInventory(302,1);
	Player.addItemInventory(303,1);
	Player.addItemInventory(304,1);
	Player.addItemInventory(305,1);
	Player.addItemInventory(261,1);
	Player.addItemInventory(262,64);
	Player.addItemInventory(259,1);
	Player.addItemInventory(46,10);
	clientMessage("Reinforced trooper kit has been added to your inventory");
 }
 
 //Gamer kit items
 
 else if(cmd =="gamer"){
 	Player.addItemInventory(267,1);
	Player.addItemInventory(306,1);
	Player.addItemInventory(307,1);
	Player.addItemInventory(308,1);
	Player.addItemInventory(309,1);
	Player.addItemInventory(393,64);
	Player.addItemInventory(276,1);
	Player.addItemInventory(277,1);
	Player.addItemInventory(278,1);
	Player.addItemInventory(279,1);
	Player.addItemInventory(293,1);
	Player.addItemInventory(46,12);
	Player.addItemInventory(259,1);
	clientMessage("Game on!!!");
 }

//Pirate Kit items
 
 else if(cmd == "Pirate"){
	Player.addItemInventory(261,1);
	Player.addItemInventory(262,10);
	Player.addItemInventory(46,10);
	Player.addItemInventory(272,1);
	clientMessage("Arrrgh!");
 }
 
//Butcher kit items

 else if(cmd == "butcher"){
	Player.addItemInventory(363,64);
	Player.addItemInventory(364,64);
	Player.addItemInventory(319,64);
	Player.addItemInventory(320,64);
	Player.addItemInventory(365,64);
	Player.addItemInventory(366,64);
	Player.addItemInventory(258,1);
	Player.addItemInventory(299,1);
	clientMessage("Butcher kit has been added to your inventory!");
}
 
//Tamer kit items

 else if(cmd == "Tamer"){
	Level.spawnMob(x-1,y+2,z,15,"image");
	Level.spawnMob(x-2,y+2,z,15,"image");
	Level.spawnMob(x,y+2,z,15,"image");
	Level.spawnMob(x+1,y+2,z,15,"image");
	Level.spawnMob(x+2,y+2,z,15,"image");
	Player.addItemInventory(352,64);
	Player.addItemInventory(364,64);
	Player.addItemInventory(267,1);
	clientMessage("Tamer kit has been added to your inventory");
}

//Hunter kit items

 else if(cmd == "hunter"){
	Player.addItemInventory(276,1);
	Player.addItemInventory(298,1);
	Player.addItemInventory(299,1);
	Player.addItemInventory(300,1);
	Player.addItemInventory(301,1);
	Player.addItemInventory(261,1);
	Player.addItemInventory(262,64);
	Player.addItemInventory(260,16);
	clientMessage("Happy Hunting!");
}
 
//Scientist kit items

else if(cmd == "scientist"){
	Player.addItemInventory(267,1);
	Player.addItemInventory(393,1);
	Player.addItemInventory(293,1);
	Player.addItemInventory(277,1);
	clientMessage("Happy Inventing!");
}

//Executioner kit items

else if(cmd == "Executioner"){
	clientMessage("This better be for a good reason");
	Player.addItemInventory(298,1);
	Player.addItemInventory(307,1);
	Player.addItemInventory(300,1);
	Player.addItemInventory(301,1);
	Player.addItemInventory(258,1);
	Player.addItemInventory(391,10);
} 

//Adventurer kit items

else if(cmd == "Adventurer"){
	Player.addItemInventory(302,1);
	Player.addItemInventory(303,1);
	Player.addItemInventory(304,1);
	Player.addItemInventory(305,1);
	Player.addItemInventory(272,1);
	Player.addItemInventory(273,1);
	Player.addItemInventory(274,1);
	Player.addItemInventory(275,1);
	Player.addItemInventory(345,1);
	Player.addItemInventory(347,1);
	Player.addItemInventory(364,64);
	clientMessage("Adventure is out there!");
}

//Baker kit items

else if(cmd == "baker"){
	Player.addItemInventory(297,16);
	Player.addItemInventory(354,5);
	Player.addItemInventory(367,16);
	Player.addItemInventory(61,1);
	Player.addItemInventory(263,10);
	clientMessage("Baker kit has been added to your inventory");
}

//Mine manager

else if(cmd == "mine manager"){
	Player.addItemInventory(278,1);
	Player.addItemInventory(354,1);
	Player.addItemInventory(66,64);
	Player.addItemInventory(27,64);
	Player.addItemInventory(328,1);
	Player.addItemInventory(306,1);
	clientMessage("Mine manager kit has been added to your inventory");
}

//construction worker

else if(cmd == "construction worker"){
	Player.addItemInventory(306,1);
	Player.addItemInventory(257,1);
	Player.addItemInventory(5,64);
	Player.addItemInventory(4,64);
	Player.addItemInventory(366,32);
	clientMessage("Happy building!");
}

else if(cmd == "construction manager"){
	Player.addItemInventory(278,1);
	Player.addItemInventory(354,1);
	Player.addItemInventory(27,64);
	Player.addItemInventory(66,64);
	Player.addItemInventory(328,1);
	Player.addItemInventory(306,1);
	Player.addItemInventory(4,64);
	Player.addItemInventory(5,64);
	Player.addItemInventory(366,32);
	Player.addItemInventory(299,1);
	Player.addItemInventory(300,1);
	Player.addItemInventory(301,1);
	clientMessage("Construction manager kit has been added to your inventory");
}

//Admin kit items

else if(cmd == "admin"){
	Player.addItemInventory(276,1);
	Player.addItemInventory(277,1);
	Player.addItemInventory(278,1);
	Player.addItemInventory(279,1);
	Player.addItemInventory(310,1);
	Player.addItemInventory(311,1);
	Player.addItemInventory(312,1);
	Player.addItemInventory(313,1);
	Player.addItemInventory(4,64);
	clientMessage("Admin kit has been added to your inventory");
}

//VIP kit items

else if(cmd == "VIP"){
	Player.addItemInventory(306,1);
	Player.addItemInventory(307,1);
	Player.addItemInventory(308,1);
	Player.addItemInventory(309,1);
	Player.addItemInventory(257,1);
	Player.addItemInventory(258,1);
	Player.addItemInventory(267,1);
	Player.addItemInventory(256,1);
	Player.addItemInventory(5,64);
	clientMessage("VIP kit has been added to your inventory");
}

//Super VIP items

else if(cmd == "Super VIP"){
	Player.addItemInventory(306,1);
	Player.addItemInventory(307,1);
	Player.addItemInventory(308,1);
	Player.addItemInventory(309,1);
	Player.addItemInventory(276,1);
	Player.addItemInventory(277,1);
	Player.addItemInventory(278,1);
	Player.addItemInventory(279,1);
	clientMessage("Super VIP kit has been added to your inventory");
}

//Trapper kit items

else if(cmd == "trapper"){
	Player.addItemInventory(261,1);
	Player.addItemInventory(262,64);
	Player.addItemInventory(301,1);
	Player.addItemInventory(299,1);
	Player.addItemInventory(17,1);
	Player.addItemInventory(363,1);
	clientMessage("Trapper kit has been added to your inventory");
}

//Guardian kit items

else if(cmd == "guardian"){
	Player.addItemInventory(314,1);
	Player.addItemInventory(315,1);
	Player.addItemInventory(316,1);
	Player.addItemInventory(317,1);
	Player.addItemInventory(276,1);
	Player.addItemInventory(54,1);
	Player.addItemInventory(354,1);
	Player.addItemInventory(10,1);
	Player.addItemInventory(325,1);
	clientMessage("Guardian kit has been added to your inventory");
}

//Frogman kit items

else if(cmd == "frogman"){
	Player.addItemInventory(298,1);
	Player.addItemInventory(299,1);
	Player.addItemInventory(300,1);
	Player.addItemInventory(301,1);
	Player.addItemInventory(46,64);
	Player.addItemInventory(259,1);
	Player.addItemInventory(65,64);
	clientMessage("Frogman kit has been added to your inventory");
}

//Food kit items

else if(cmd == "food"){
	Player.addItemInventory(320,16);
	Player.addItemInventory(364,16);
	Player.addItemInventory(393,16);
	Player.addItemInventory(366,16);
	Player.addItemInventory(459,16);
	Player.addItemInventory(282,16);
	Player.addItemInventory(297,16);
	Player.addItemInventory(391,16);
	Player.addItemInventory(400,16);
	Player.addItemInventory(260,16);
	Player.addItemInventory(360,16);
	Player.addItemInventory(354,16);
	Player.addItemInventory(357,16);
	clientMessage("All MCPE foods have been added to your inventory");
}

//EPIC kit items

 else if(cmd == "EPIC"){
	Player.addItemInventory(310,1);
	Player.addItemInventory(311,1);
	Player.addItemInventory(312,1);
	Player.addItemInventory(313,1);
	Player.addItemInventory(276,1);
	Player.setHealth(1);
	clientMessage(ChatColor.AQUA + "CHEATER!!!");
}
}