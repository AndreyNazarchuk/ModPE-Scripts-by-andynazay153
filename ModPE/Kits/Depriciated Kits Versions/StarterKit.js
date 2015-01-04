/*
Made by andynazay153.
This is my first mod. Please do not copy or add it to anything or make a video without giving me credit :)
*/
clientMessage("type /kits to view all kits. Mod made by andynazay153");

function procCmd(c)
{
var cmd = c.split(" ");
if(cmd[0]=="kit-starter")
 {
Player.addItemInventory(298,1);
Player.addItemInventory(299,1);
Player.addItemInventory(300,1);
Player.addItemInventory(301,1);
Player.addItemInventory(364,10);
Player.addItemInventory(392,2);
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
  clientMessage("Starter Items have been added to your inventory!");
}
}
  