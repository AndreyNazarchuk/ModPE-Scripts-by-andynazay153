// Survival Game Hax Beta Script
// https://github.com/adrianwebster/survival-game-hax
// Original Coding by AdrianModr aka adrianwebster

var rp = 0;
var tps = 0;
var plx = getPlayerX();
var ply = getPlayerY();
var plz = getPlayerZ();

function procCmd(cmd)
{
var cmd = cmd.split (" ");
{
if (cmd[0] == "fly" && cmd[1] == "on"){
  if (Level.getGameMode() == 1){
  clientMessage("§5You Can Already Fly In Creative.");
}else if (Level.getGameMode() == 0){
  Player.setCanFly(true);
  Player.setFlying(true);
  clientMessage("§2You Are Now Flying.");
}
}
}
if (cmd[0] == "fly" && cmd[1] == "off"){
  if (Level.getGameMode() == 1){
  clientMessage("§5You Cant Disable Flying In Creative.");
}else if (Level.getGameMode() == 0){
  Player.setFlying(false);
  Player.setCanFly(false);
  clientMessage("§4Flying Disabled.");
}
}if (cmd[0] == "s"){
  Server.sendChat('/spawn')
  ModPE.showTipMessage('Quick Spawn Activated!');
}if (cmd[0] == "kill"){
  clientMessage("§4Suiciding.");
  Player.setHealth(0);
}if (cmd[0] == "ride" && cmd[1] == "on"){
  rp = 1;
  clientMessage("§2Ride Punch Enabled.");
  clientMessage("§5Use /ride off To Disable.");
}else if (cmd[0] == "ride" && cmd[1] == "off"){
  rp = 0;
  clientMessage("§4Ride Punch Disabled.");
}if (cmd[0] == "tpswords" && cmd[1] == "on"){
  tps = 1;
  clientMessage("§2Teleport Swords On.");
}else if (cmd[0] == "tpswords" && cmd[1] == "off"){
  tps = 0;
    clientMessage("§4Teleport Swords Off");
}if (cmd[0] == "allhax"){
  clientMessage("§6Enabling All Hacks.");
  clientMessage("§4This Doesnt Include Ride Punch.");
  Player.setCanFly(true);
  Player.setFlying(true);
  tps = 1
}
}

function attackHook(attacker, victim){
if (rp == 1){
  rideAnimal(attacker, victim);
}
}

function useItem(x, y, z, itemId, blockId, side){
  if(tps == 1){
    if(itemId == 267){
      setPosition(getPlayerEnt(), x, y + 2, z);
    }if(itemId == 268){
      setPosition(getPlayerEnt(), x, y + 2, z);
    }if(itemId == 272){
      setPosition(getPlayerEnt(), x, y + 2, z);
    }if(itemId == 276){
      setPosition(getPlayerEnt(), x, y + 2, z);
    }if(itemId == 283){
      setPosition(getPlayerEnt(), x, y + 2, z);
    }
  }
}