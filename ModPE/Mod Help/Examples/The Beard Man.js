ModPE.setItem(397, "stick", 0, "Spawn The Beard Man");//sets a item
ModPE.overrideTexture("images/mob/The Beard Man.png"," http://i.imgur.com/HztP0Nd.png");//downloads the texture
var Beard_Man; //a global variable


function useItem(x, y, z, i, b, s){//when a block is tapped
if(i==397){//with item 397
Beard_Man = Level.spawnMob(x, y+1, z,32,"mob/The Beard Man.png");//a variable equals spawning zombie at the location of where the block was tapped with the Beard Man skin
Entity.setHealth(Beard_Man, 100);//sets the mobs health to 100
}
}


function attackHook(a, v){//when something attacks
if(Entity.getMobSkin(v)=="mob/The Beard Man.png"){//if the victim has that mob skin
Level.playSoundEnt(v, "mob.zombiepig.zpigangry", 100, 30);//plays a zpigman sound
}
}

function deathHook(a, v){//when a mob dies
if (Entity.getMobSkin(v)=="mob/The Beard Man.png"){//if the mob has that mob skin
Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),1,35,64);//drops some wool
Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),1,35,64);
Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),1,35,64);
}
}

function modTick(){//every 1/20 of a second
//makes the paricles appear
Level.addParticle(ParticleType.lava, Entity.getX(Beard_Man)-0.2 , Entity.getY(Beard_Man)+1, Entity.getZ(Beard_Man), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Beard_Man) , Entity.getY(Beard_Man), Entity.getZ(Beard_Man), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Beard_Man)+0.2 , Entity.getY(Beard_Man)+1, Entity.getZ(Beard_Man), 0, 0, 0, 2);
}

function procCmd(c)
{
var cmd = c.split(" ");
if(cmd[0]=="Beard")
{
Player.addItemInventory(397,1);
clientMessage("I NEED TO SHAVE! TRIM MY BEARD WITH A WEEDWHACKER!");
}
}