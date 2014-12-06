//Cloud's Commands v1.0 by Code_Cloud
//40+ Commands

var IK = 0;
var IM = 0;
var player = getPlayerEnt();
var getbiome = 0;
var world;
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
var silverfish = 0;
var enderman = 0;
//var slime = 0;
var zombiepigman = 0;
var spider = 0;
var skeleton = 0;
var creeper = 0;
var zombie = 0;
var chicken = 0;
var cow = 0;
var pig = 0;
var sheep = 0;
//var wolf = 0;
var mooshroom = 0;
var villager = 0;

ModPE.setItem(419, "stick", 0, "Nature Staff");

function useItem(x, y, z, itemId, blockId, side) {
    if (itemId == 419) {
        if (blockId == 2) {
            setTile(x, y + 1, z, 37);
            setTile(x, y + 1, z + 2, 37);
            setTile(x + 3, y + 1, z + 1, 38);
            setTile(x + 1, y + 1, z, 37);
        }
        if (blockId == 12) {
            setTile(x, y + 1, z, 81);
            setTile(x, y + 2, z, 81);
            setTile(x, y + 3, z, 81);
        }
        if (blockId == 60) {
            setTile(x, y + 1, z, 244);
        }
        if (blockId == 79) {
            setTile(x, y, z, 9);
        }
        if (blockId == 87) {
            setTile(x, y + 1, z, 40);
        }
    }
}

function modTick() {
    if (silverfish == 1) {
        Entity.setRenderType(getPlayerEnt(), 16);
        Entity.setMobSkin(getPlayerEnt(), "mob/silverfish.png");
    }
    if (enderman == 1) {
        Entity.setRenderType(getPlayerEnt(), 19);
        Entity.setMobSkin(getPlayerEnt(), "mob/enderman.png");
    }
    if (zombiepigman == 1) {
        Entity.setRenderType(getPlayerEnt(), 3);
        Entity.setMobSkin(getPlayerEnt(), "mob/pigzombie.png");
    }
    if (spider == 1) {
        Entity.setRenderType(getPlayerEnt(), 15);
        Entity.setMobSkin(getPlayerEnt(), "mob/spider.png");
    }
    if (skeleton == 1) {
        Entity.setRenderType(getPlayerEnt(), 14);
        Entity.setMobSkin(getPlayerEnt(), "mob/skeleton.png");
    }
    if (creeper == 1) {
        Entity.setRenderType(getPlayerEnt(), 17);
        Entity.setMobSkin(getPlayerEnt(), "mob/creeper.png");
    }
    if (zombie == 1) {
        Entity.setRenderType(getPlayerEnt(), 3);
        Entity.setMobSkin(getPlayerEnt(), "mob/zombie.png");
    }
    if (chicken == 1) {
        Entity.setRenderType(getPlayerEnt(), 5);
        Entity.setMobSkin(getPlayerEnt(), "mob/chicken.png");
    }
    if (cow == 1) {
        Entity.setRenderType(getPlayerEnt(), 6);
        Entity.setMobSkin(getPlayerEnt(), "mob/cow.png");
    }
    if (pig == 1) {
        Entity.setRenderType(getPlayerEnt(), 8);
        Entity.setMobSkin(getPlayerEnt(), "mob/pig.png");
    }
    if (sheep == 1) {
        Entity.setRenderType(getPlayerEnt(), 9);
        Entity.setMobSkin(getPlayerEnt(), "mob/sheep_0.png");
    }
    if (mooshroom == 1) {
        Entity.setRenderType(getPlayerEnt(), 7);
        Entity.setMobSkin(getPlayerEnt(), "mob/mooshroom.png");
    }
    if (villager == 1) {
        Entity.setRenderType(getPlayerEnt(), 11);
        Entity.setMobSkin(getPlayerEnt(), "mob/villager/villager.png");
    }

}

function mobreset() {
    silverfish = 0;
    enderman = 0;
    //slime = 0;
    zombiepigman = 0;
    spider = 0;
    skeleton = 0;
    creeper = 0;
    zombie = 0;
    chicken = 0;
    cow = 0;
    pig = 0;
    sheep = 0;
    //wolf = 0;
    mooshroom = 0;
    villager = 0;
    player = 0;
}

function procCmd(cmd) {
    var cc = cmd.split(" ");
    var cm = cc[0];
    switch (cm.toLowerCase()) {
        case 'info':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " A mod that adds commands to Mcpe. Current version Public v1.0");
            break;
        case 'help':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " For help do: /p1, /p2, /p3, /p4, /p5, /p6, /p7");
            break;
        case 'p1':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Current Commands(p1): /info, /help, /heal, /infhealth, /kill, /fly, /flyoff, /launch, /explode");
            break;
        case 'p2':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Current Commands(p2): /survival, /creative, /dawn, /day, /midday, /dusk, /night, /midnight");
            break;
        case 'p3':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Current Commands(p3): /silverfish, /enderman, /pigman, /spider, /skeleton, /creeper");
            break;
        case 'p4':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Current Commands(p4): /zombie, /chicken, /cow, /pig, /sheep, /mooshroom, /villager");
            break;
        case 'p5':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Current Commands(p5): /setplayer, /setsilverfish, /setenderman, /setpigman, /setspider, /setskeleton, /setcreeper");
            break;
        case 'p6':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Current Commands(p6): /setzombie, /setchicken, /setcow, /setpig, /setsheep, /setmooshroom, /setvillager");
            break;
        case 'p7':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Current Commands(p7): /location, /setspawn, /biome, /world, /pumpkins, /chest, /naturestaff, /screenshot");
            break;
        case 'heal':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Player Healed!");
            Player.setHealth(20);
            break;
        case 'infhealth':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Health For Days!");
            Player.setHealth(32767);
            break;
        case 'kill':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " USER ERROR!");
            Player.setHealth(0);
            break;
            /*case 'killall':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " All Mobs killed");
            Entity.remove(39);
            Entity.remove(38);
            Entity.remove(37);
            Entity.remove(36);
            Entity.remove(35);
            Entity.remove(34);
            Entity.remove(33);
            Entity.remove(32);
            Entity.remove(10);
            Entity.remove(11);
            Entity.remove(12);
            Entity.remove(13);
            Entity.remove(14);
            Entity.remove(16);
            Entity.remove(15);
            break;
            case 'instakill':
            if (IK === 0) {
                clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Instakill On");
            }
            if (IK == 1) {
                clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Instakill Off");
            }
            break;
        case 'instamine':
            if (IM === 0) {
                clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Instamine On");
            }
            if (IM == 1) {
                clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Instamine Off");
            }
            break;
        case 'copy':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Copy On");
            break;
        case 'stack':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Slot Stacked");
            break;*/
        case 'fly':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Fly On");
            Player.setCanFly(true);
            break;
        case 'flyoff':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Fly Off");
            Player.setCanFly(false);
            break;
        case 'launch':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Player Launched");
            setVelY(getPlayerEnt(), 5);
            break;
        case 'explode':
            x = Player.getX();
            y = Player.getY();
            z = Player.getZ();
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " BOOM!");
            explode(x, y, z, 6);
            break;
        case 'survival':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Gamemode changed to Survival");
            Level.setGameMode(0);
            break;
        case 'creative':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Gamemode changed to Creative");
            Level.setGameMode(1);
            break;
        case 'dawn':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Time changed to dawn");
            Level.setTime(0);
            break;
        case 'day':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Time changed to day");
            Level.setTime(1000);
            break;
        case 'midday':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Time changed to midday");
            Level.setTime(6000);
            break;
        case 'dusk':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Time changed to dusk");
            Level.setTime(12000);
            break;
        case 'night':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Time changed to night");
            Level.setTime(14000);
            break;
        case 'midnight':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Time changed to midnight");
            Level.setTime(18000);
            break;
        case 'silverfish':
            x = Player.getX();
            y = Player.getY();
            z = Player.getZ();
            var mob2 = Level.spawnMob(x + 1, y, z, 39, "mob/silverfish.png");
            Entity.setRenderType(mob2, 16);
            break;
        case 'enderman':
            var mob3 = Level.spawnMob(x + 1, y, z, 38, "mob/enderman.png");
            Entity.setRenderType(mob3, 19);
            break;
            /*case 'slime':
             var mob4 = Level.spawnMob(x + 1, y, z, 37, "mob/slime.png");
                         Entity.setRenderType(mob4,37);
            break;*/
        case 'pigmam':
            var mob5 = Level.spawnMob(x + 1, y, z, 36, "mob/pigzombie.png");
            Entity.setRenderType(mob5, 3);
            break;
        case 'spider':
            var mob6 = Level.spawnMob(x + 1, y, z, 35, "mob/spider.png");
            Entity.setRenderType(mob6, 15);
            break;
        case 'skeleton':
            var mob7 = Level.spawnMob(x + 1, y, z, 34, "mob/skeleton.png");
            Entity.setRenderType(mob7, 14);
            break;
        case 'creeper':
            var mob8 = Level.spawnMob(x + 1, y, z, 33, "mob/creeper.png");
            Entity.setRenderType(mob8, 17);
            break;
        case 'zombie':
            var mob9 = Level.spawnMob(x + 1, y, z, 32, "mob/zombie.png");
            Entity.setRenderType(mob9, 3);
            break;
        case 'chicken':
            var mob10 = Level.spawnMob(x + 1, y, z, 10, "mob/chicken.png");
            Entity.setRenderType(mob10, 5);
            break;
        case 'cow':
            var mob11 = Level.spawnMob(x + 1, y, z, 11, "mob/cow.png");
            Entity.setRenderType(mob11, 6);
            break;
        case 'pig':
            var mob12 = Level.spawnMob(x + 1, y, z, 12, "mob/pig.png");
            Entity.setRenderType(mob12, 8);
            break;
        case 'sheep':
            var mob13 = Level.spawnMob(x + 1, y, z, 13, "mob/sheep_0.png");
            Entity.setRenderType(mob13, 9);
            break;
            /*case 'wolf':
             var mob14 = Level.spawnMob(x + 1, y, z, 14, "mob/wolf.png");
                               Entity.setRenderType(mob14,14);
            break;*/
        case 'mooshroom':
            var mob15 = Level.spawnMob(x + 1, y, z, 16, "mob/mooshroom.png");
            Entity.setRenderType(mob15, 7);
            break;
        case 'villager':
            var mob16 = Level.spawnMob(x + 1, y, z, 15, "mob/villager/villager.png");
            Entity.setRenderType(mob16, 11);
            break;
        case 'setsilverfish':
            mobreset();
            silverfish = 1;
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are a Silverfish");
            break;
        case 'setenderman':
            mobreset();
            enderman = 1;
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are an Enderman");
            break;
            /*case 'setslime':
            mobreset();
            Entity.setRenderType(player, );
            Entity.setMobSkin(player, "/mob/.png");
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are a Slime");
            break;*/
        case 'setpigmam':
            mobreset();
            zombiepigman = 1;
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are a Pigman");
            Entity.setCarriedItem(player, 283, 1, 0);
            break;
        case 'setspider':
            mobreset();
            spider = 1;
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are a Spider");
            break;
        case 'setskeleton':
            mobreset();
            skeleton = 1;
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are a Skeleton");
            break;
        case 'setcreeper':
            mobreset();
            creeper = 1;
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are a Creeper");
            break;
        case 'setzombie':
            mobreset();
            zombie = 1;
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are a Zombie");
            break;
        case 'setchicken':
            mobreset();
            chicken = 1;
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are a Chicken");
            break;
        case 'setcow':
            mobreset();
            cow = 1;
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are a Cow");
            break;
        case 'setpig':
            mobreset();
            pig = 1;
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are a Pig");
            break;
        case 'setsheep':
            mobreset();
            sheep = 1;
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are a Sheep");
            break;
            /*case 'setwolf':
            mobreset();
            Entity.setRenderType(player, );
            Entity.setMobSkin(player, "/mob/.png");
            break;*/
        case 'setmooshroom':
            mobreset();
            mooshroom = 1;
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are a Mooshroom");
            break;
        case 'setvillager':
            mobreset();
            villager = 1;
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are a Villager");
            break;
        case 'setplayer':
            mobreset();
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " You are Steve");
            break;
        case 'location':
            x = Player.getX();
            y = Player.getY();
            z = Player.getZ();
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " X: " + x);
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Y: " + y);
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Z: " + z);
            break;
        case 'setspawn':
            x = Player.getX();
            y = Player.getY();
            z = Player.getZ();
            Level.setSpawn(x, y, z);
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Spawn set");
            break;
        case 'biome':
            if (getbiome === 0) {
                biome = Level.getBiomeName();
                clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " " + biome);
            }
            break;
        case 'world':
            world = Level.getWorldName();
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " " + world);
            break;
        case 'pumpkins':
            x = Player.getX();
            y = Player.getY();
            z = Player.getZ();
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Pumpkins!");
            setTile(x + 3, y - 1, z, 86);
            setTile(x - 2, y - 1, z, 86);
            setTile(x, y - 1, z + 3, 86);
            setTile(x, y - 1, z - 2, 86);
            setTile(x + 4, y - 1, z + 2, 86);
            setTile(x + 10, y - 1, z - 10, 86);
            setTile(x + 5, y - 1, z + 3, 86);
            setTile(x, y - 1, z - 8, 86);
            setTile(x + 15, y - 1, z - 13, 86);
            break;
        case 'chest':
            x = Player.getX();
            y = Player.getY();
            z = Player.getZ();
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Chest placed");
            setTile(x + 1, y, z, 54);
            break;
        case 'naturestaff':
            clientMessage(ChatColor.GOLD + "[CC]" + ChatColor.WHITE + " Naturestaff added to inventory!");
            addItemInventory(419, 1, 0);
            break;
        case 'screenshot':
            ModPE.takeScreenshot(1);
            break;
    }
}