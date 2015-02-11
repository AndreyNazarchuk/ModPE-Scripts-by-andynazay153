//Please Read The Readme.txt for Info
var firePunch = 0;
var throwPunch = 0;
var killPunch = 0;
var explodingPunch = 0;
var regeneratingPunch = 0;
var destroyBlockPunch = 0;
var ridePunch = 0;
var hardPunch = 0;
var webPunch = 0;
var waterPunch = 0;
var lavaPunch = 0;
var diamondPunch = 0;
var extraWeb = 0;

function useItem(x, y, z, itemId, blockId, side)
{
if(destroyBlockPunch == 1)
Level.destroyBlock (x, y, z, true)

}

function procCmd(cmd){
if (cmd=="fire punch"){
firePunch = 1;
throwPunch = 0;
killPunch = 0;
explodingPunch = 0;
regeneratingPunch = 0;
destroyBlockPunch = 0;
ridePunch = 0;
hardPunch = 0;
webPunch = 0;
waterPunch = 0;
lavaPunch = 0;
diamondPunch = 0;
extraWeb = 0;
clientMessage("Fire Punch Selected");
}
else if (cmd=="throw punch"){
firePunch = 0;
throwPunch = 1;
killPunch = 0;
explodingPunch = 0;
regeneratingPunch = 0;
destroyBlockPunch = 0;
ridePunch = 0;
hardPunch = 0;
webPunch = 0;
waterPunch = 0;
lavaPunch = 0;
diamondPunch = 0;
extraWeb = 0;
clientMessage("Throw Punch Selected");
}
else if (cmd=="kill punch"){
firePunch = 0;
throwPunch = 0;
killPunch = 1;
explodingPunch = 0;
regeneratingPunch = 0;
destroyBlockPunch = 0;
ridePunch = 0;
hardPunch = 0;
webPunch = 0;
waterPunch = 0;
lavaPunch = 0;
diamondPunch = 0;
extraWeb = 0;
clientMessage("Kill Punch Selected");
}
else if (cmd=="exploding punch"){
firePunch = 0;
throwPunch = 0;
killPunch = 0;
explodingPunch = 1;
regeneratingPunch = 0;
destroyBlockPunch = 0;
ridePunch = 0;
hardPunch = 0;
webPunch = 0;
waterPunch = 0;
lavaPunch = 0;
diamondPunch = 0;
extraWeb = 0;
clientMessage("Exploding Punch Selected");
}
else if (cmd=="restart"){
firePunch = 0;
throwPunch = 0;
killPunch = 0;
explodingPunch = 0;
regeneratingPunch = 0;
destroyBlockPunch = 0;
ridePunch = 0;
hardPunch = 0;
webPunch = 0;
waterPunch = 0;
lavaPunch = 0;
diamondPunch = 0;
extraWeb = 0;
clientMessage("Powerful Fists Has Restarted");
}
else if (cmd=="regenerating punch"){
firePunch = 0;
throwPunch = 0;
killPunch = 0;
explodingPunch = 0;
regeneratingPunch = 1;
destroyBlockPunch = 0;
ridePunch = 0;
hardPunch = 0;
webPunch = 0;
waterPunch = 0;
lavaPunch = 0;
diamondPunch = 0;
extraWeb = 0;
clientMessage("Regenerating Punch Selected");
}
else if (cmd=="fun punch"){
firePunch = 1;
throwPunch = 1;
killPunch = 1;
explodingPunch = 1;
regeneratingPunch = 1;
destroyBlockPunch = 0;
ridePunch = 0;
hardPunch = 0;
webPunch = 0;
waterPunch = 0;
lavaPunch = 0;
diamondPunch = 0;
extraWeb = 0;
clientMessage("Every punch selected Selected");
}
else if (cmd=="destroy punch"){
firePunch = 0;
throwPunch = 0;
killPunch = 0;
explodingPunch = 0;
regeneratingPunch = 0;
destroyBlockPunch = 1;
ridePunch = 0;
hardPunch = 0;
webPunch = 0;
waterPunch = 0;
lavaPunch = 0;
diamondPunch = 0;
extraWeb = 0;
clientMessage("Destroy Block Punch Selected");
}
else if (cmd=="ride punch"){
firePunch = 0;
throwPunch = 0;
killPunch = 0;
explodingPunch = 0;
regeneratingPunch = 0;
destroyBlockPunch = 0;
ridePunch = 1;
hardPunch = 0;
webPunch = 0;
waterPunch = 0;
lavaPunch = 0;
diamondPunch = 0;
extraWeb = 0;
clientMessage("Ride Punch Selected");
}
else if (cmd=="hard punch"){
firePunch = 0;
throwPunch = 0;
killPunch = 0;
explodingPunch = 0;
regeneratingPunch = 0;
destroyBlockPunch = 0;
ridePunch = 0;
hardPunch = 1;
webPunch = 0;
waterPunch = 0;
lavaPunch = 0;
diamondPunch = 0;
extraWeb = 0;
clientMessage("Hard Punch Selected");
}
else if (cmd=="help punch"){
clientMessage("List Of Punches");
clientMessage(" /fire punch");
clientMessage(" /throw punch");
clientMessage(" /exploding punch");
clientMessage(" /diamond punch");
clientMessage(" /regenerating punch");
clientMessage(" do /help punch 2 for more")
}
else if (cmd=="help punch 2"){
clientMessage(" /fun punch");
clientMessage(" /destroy punch");
clientMessage(" /ride punch");
clientMessage(" /hard punch");
clientMessage(" /water punch");
clientMessage(" /lava punch");
clientMessage(" /web punch");}
else if (cmd=="web punch"){
firePunch = 0;
throwPunch = 0;
killPunch = 0;
explodingPunch = 0;
regeneratingPunch = 0;
destroyBlockPunch = 0;
ridePunch = 0;
hardPunch = 0;
webPunch = 1;
waterPunch = 0;
lavaPunch = 0;
diamondPunch = 0;
extraWeb = 1;
clientMessage("Web Punch Selected");
}
else if (cmd=="water punch"){
firePunch = 0;
throwPunch = 0;
killPunch = 0;
explodingPunch = 0;
regeneratingPunch = 0;
destroyBlockPunch = 0;
ridePunch = 0;
hardPunch = 0;
webPunch = 0;
waterPunch = 1;
lavaPunch = 0;
diamondPunch = 0;
extraWeb = 0;
clientMessage("Water Punch Selected");
}
else if (cmd=="lava punch"){
firePunch = 0;
throwPunch = 0;
killPunch = 0;
explodingPunch = 0;
regeneratingPunch = 0;
destroyBlockPunch = 0;
ridePunch = 0;
hardPunch = 0;
webPunch = 0;
waterPunch = 0;
lavaPunch = 1;
diamondPunch = 0;
extraWeb = 0;
clientMessage("Lava Punch Selected");
}
else if (cmd=="diamond punch"){
firePunch = 0;
throwPunch = 0;
killPunch = 0;
explodingPunch = 0;
regeneratingPunch = 0;
destroyBlockPunch = 0;
ridePunch = 0;
hardPunch = 0;
webPunch = 0;
waterPunch = 0;
lavaPunch = 0;
diamondPunch = 1;
extraWeb = 0;
clientMessage("Diamond Punch Selected");
}
}

function attackHook(attacker, victim)
{
var x = Entity.getX(victim);
var y = Entity.getY(victim);
var z = Entity.getZ(victim);

if(firePunch == 1)
{
Entity.setFireTicks(victim,2000);
}


if(throwPunch == 1){
preventDefault();
var velX;
var velY;
var velZ;
var power = 3.5; //Hierhin kommt die Stärke, mit der der Mob weggeschläudert wird(3.5=Pfeilstärke)

var playerYaw = Entity.getYaw(Player.getEntity()); 
var playerPitch = Entity.getPitch(Player.getEntity());
velY = Math.sin((playerPitch - 180) / 180 * Math.PI);
            velX = power * (Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI)); 
            velZ = power * (-1 * Math.cos(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI));
velY = velY + 2;
setVelX(victim,velX); 
setVelY(victim,velY); 
setVelZ(victim,velZ);
}

if(killPunch == 1){
Entity.setHealth(victim, 0);
}

if(explodingPunch == 1){
Level.explode(x, y, z, 1);
}

if(regeneratingPunch == 1){
Entity.setHealth(attacker, 20);
}

if(ridePunch == 1){
preventDefault();
rideAnimal(attacker, victim);
}

if(hardPunch == 1){
Entity.setHealth(victim, 20);
}

if(webPunch == 1){
setTile(x,y,z, 30);
}

if(waterPunch == 1){
setTile(x,y,z+1, 9);
setTile(x,y,z+2, 9);
setTile(x,y,z+3, 9);
setTile(x,y,z+4, 9);
setTile(x,y,z+5, 9);
setTile(x,y,z+6, 9);
setTile(x,y,z+7, 9);
setTile(x,y,z+8, 9);
}

if(lavaPunch == 1){
setTile(x,y,z+1, 11);
setTile(x,y,z+2, 11);
setTile(x,y,z+3, 11);
setTile(x,y,z+4, 11);
setTile(x,y,z+5, 11);
setTile(x,y,z+6, 11);
setTile(x,y,z+7, 11);
setTile(x,y,z+8, 11);
}

if(diamondPunch == 1){
Level.dropItem(x,y,z,0,264,1);
}

if(extraWeb == 1){
setTile(x,y+1,z, 30);
}
}