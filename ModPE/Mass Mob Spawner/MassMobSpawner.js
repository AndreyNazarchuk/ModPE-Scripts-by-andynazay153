/*
 * © 2015 by andynazay153
 * Auto-Update code used with permission from Bajan_Deadman0
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * If anything happens to your device you cannot blame me.
 * This mod has been tested by me to be safe and virus free,
 * though I cannot guarantee it is safe unless it was 
 * downloaded from the origional thread. (and none of the Adf.ly ads where clicked)
*/
var version = "1.0";
var checkedForUpdate=false;
var updateWindow=false;
var newUpdate;
var updateMod;
var GUI;
var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var ctx1 = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var mob;
var spawn = true;
var ctx2 = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
    spinnerContent = [
	"Chicken", 
	"Cow",
	"Pig", 
	"Sheep", 
	"Wolf", 
	"Villager", 
	"Mooshroom", 
	"Squid", 
	"Bat", 
	"Zombie", 
	"Creeper", 
	"Skeleton", 
	"Spider", 
	"Zombie Pigman", 
	"Slime", 
	"Enderman", 
	"Silverfish", 
	"Cave Spider", 
	"Ghast", 
	"Magma Cube"
	],
    selection = 0;

function newLevel(){
MMSB();
}

function MMSB(){

ctx.runOnUiThread(new java.lang.Runnable(){

run: function(){

try{

GUI = new android.widget.PopupWindow();

var layout = new android.widget.LinearLayout(ctx);
var MMSButton = new android.widget.Button(ctx);


MMSButton.setText("MMS");

layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.setGravity(android.view.Gravity.LEFT);
layout.addView(MMSButton);

GUI.setContentView(layout);
GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER_VERTICAL, 0, 0);

MMSButton.setOnClickListener(new android.view.View.OnClickListener(){

onClick: function(view){
MMSDialog()
}

});

} catch (e){
print ("Error, this should not be happening")
print ("Please take a screenshot of this and post it on the forums: "+e)
}

}});
}

function resetMMS(){

ctx.runOnUiThread(new java.lang.Runnable(){

run: function(){

try{

} catch (e){
print ("Error resetting MMS, this should not be happening")
print ("Please take a screenshot of this and post it on the forums: "+e)
}

}});
}

function MMSDialog(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var menu = new android.widget.LinearLayout(ctx);
var scroll = new android.widget.ScrollView(ctx);

menu.setOrientation(android.widget.LinearLayout.VERTICAL);

scroll.addView(menu);

var dialog = new android.app.Dialog(ctx);
dialog.setContentView(scroll);

dialog.setTitle("Mass Mob Spawner");

var TextName = new android.widget.TextView(ctx);
TextName.setText("Select a type of mob, ammount to spawn, and location to spawn them at\n\n If you spawn more than 100 mobs at a time it may crash your device and break your world forever.(You have been WARNED)\n");
menu.addView(TextName);

var MB = new android.widget.Button(ctx);
MB.setOnClickListener(new android.view.View.OnClickListener(){
    onClick: function(){
		MobDialog()
    }
})
MB.setText("Mob Type")
MB.setTextSize(20)
menu.addView(MB);

var inputText = new android.widget.EditText(ctx);
inputText.setHint("Amount of mobs");
menu.addView(inputText);

var SB = new android.widget.Button(ctx);
SB.setOnClickListener(new android.view.View.OnClickListener(){
    onClick: function(){
		var text = inputText.getText().toString();
		var n = parseInt(text);
		if(n == null){
			clientMessage("Please type a number of mobs.");
			spawn = false;
		}
		if(n > 100){
			clientMessage("WARNING, spawning more than 100 mobs at a time can break your world or crash your device.");
			spawn = false;
		}
		else{
			spawn = true;
		}
		if(spawn == true){
		var x = Player.getX();
		var y = Player.getY();
		var z = Player.getZ();
		for(i = 0; i < n; i++){
			Level.spawnMob(x,y,z,mob);
		}
        clientMessage(ChatColor.GREEN + "Spawning " + n + mob + "s now");
		}
		else{
			clientMessage("Something is wrong, please follow the instructions")
		}
    }
})
SB.setText("Spawn")
SB.setTextSize(20)
menu.addView(SB);

var UButton = new android.widget.Button(ctx);
UButton.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
if(checkedForUpdate == false) {
    print("Checking for updates");
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    checkVersion();
                    }
                catch(err) {
                    print("Error: \n"+err);
                    }
                }
            }));
        }
if(updateWindow == false) {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                updateVersion();
                }
            catch(err) {
                print("Error: \n" + err);
                }
            }
        }));
updateWindow = false;
checkedForUpdate = true;
clientMessage(ChatColor.GREEN + "Please restart minecraft completely to activate the update");
        }
}
})
UButton.setText("Update")
UButton.setTextSize(20)
menu.addView(UButton);

var rB= new android.widget.Button(ctx);
rB.setOnClickListener(new android.view.View.OnClickListener(){
    onClick: function(){
        resetMMS();
        clientMessage(ChatColor.GREEN + "Reset MMS");
    }
})
rB.setText("Reset")
rB.setTextSize(20)
menu.addView(rB);

dialog.show()

} catch (e){
print ("Error with Dialog, this should not be happening")
print ("Please take a screenshot of this and post it on the forums: "+e)
}
}});
}

function MobDialog(){
ctx1.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var menu1 = new android.widget.LinearLayout(ctx1);
var scroll1 = new android.widget.ScrollView(ctx1);

menu1.setOrientation(android.widget.LinearLayout.VERTICAL);

scroll1.addView(menu1);

var dialog1 = new android.app.Dialog(ctx1);
dialog1.setContentView(scroll1);

dialog1.setTitle("Select a mob");

var TextName = new android.widget.TextView(ctx1);
TextName.setText("Select a type of mob\n");
menu1.addView(TextName);

var chicken = new android.widget.Button(ctx1);
chicken.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.CHICKEN;
		dialog1.dismiss()
	}
})
chicken.setText("Chicken")
chicken.setTextSize(20)
menu1.addView(chicken)

var cow = new android.widget.Button(ctx1);
cow.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.COW;
		dialog1.dismiss()
	}
})
cow.setText("Cow")
cow.setTextSize(20)
menu1.addView(cow)

var pig = new android.widget.Button(ctx1);
pig.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.PIG;
		dialog1.dismiss()
	}
})
pig.setText("Pig")
pig.setTextSize(20)
menu1.addView(pig)

var sheep = new android.widget.Button(ctx1);
sheep.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.SHEEP;
		dialog1.dismiss()
	}
})
sheep.setText("Sheep")
sheep.setTextSize(20)
menu1.addView(sheep)

var wolf = new android.widget.Button(ctx1);
wolf.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.WOLF;
		dialog1.dismiss()
	}
})
wolf.setText("Wolf")
wolf.setTextSize(20)
menu1.addView(wolf)

var villager = new android.widget.Button(ctx1);
villager.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.VILLAGER;
		dialog1.dismiss()
	}
})
villager.setText("Villager")
villager.setTextSize(20)
menu1.addView(villager)

var mooshroom = new android.widget.Button(ctx1);
mooshroom.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.MUSHROOM_COW;
		dialog1.dismiss()
	}
})
mooshroom.setText("Mooshroom")
mooshroom.setTextSize(20)
menu1.addView(mooshroom)

var squid = new android.widget.Button(ctx1);
squid.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.SQUID;
		dialog1.dismiss()
	}
})
squid.setText("Squid")
squid.setTextSize(20)
menu1.addView(squid)

var bat = new android.widget.Button(ctx1);
bat.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.BAT;
		dialog1.dismiss()
	}
})
bat.setText("Bat")
bat.setTextSize(20)
menu1.addView(bat)

var zombie = new android.widget.Button(ctx1);
zombie.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.ZOMBIE;
		dialog1.dismiss()
	}
})
zombie.setText("Zombie")
zombie.setTextSize(20)
menu1.addView(zombie)

var creeper = new android.widget.Button(ctx1);
creeper.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.CREEPER;
		dialog1.dismiss()
	}
})
creeper.setText("Creeper")
creeper.setTextSize(20)
menu1.addView(creeper)

var skeleton = new android.widget.Button(ctx1);
skeleton.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.SKELETON;
		dialog1.dismiss()
	}
})
skeleton.setText("Skeleton")
skeleton.setTextSize(20)
menu1.addView(skeleton)

var spider = new android.widget.Button(ctx1);
spider.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.SPIDER;
		dialog1.dismiss()
	}
})
spider.setText("Spider")
spider.setTextSize(20)
menu1.addView(spider)

var pigZombie = new android.widget.Button(ctx1);
pigZombie.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.PIG_ZOMBIE;
		dialog1.dismiss()
	}
})
pigZombie.setText("Zombie Pigman")
pigZombie.setTextSize(20)
menu1.addView(pigZombie)

var slime = new android.widget.Button(ctx1);
slime.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.SLIME;
		dialog1.dismiss()
	}
})
slime.setText("Slime")
slime.setTextSize(20)
menu1.addView(slime)

var enderman = new android.widget.Button(ctx1);
enderman.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.ENDERMAN;
		dialog1.dismiss()
	}
})
enderman.setText("Enderman")
enderman.setTextSize(20)
menu1.addView(enderman)

var silverfish = new android.widget.Button(ctx1);
silverfish.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.SILVERFISH;
		dialog1.dismiss()
	}
})
silverfish.setText("Silverfish")
silverfish.setTextSize(20)
menu1.addView(silverfish)

var caveSpider = new android.widget.Button(ctx1);
caveSpider.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.CAVE_SPIDER;
		dialog1.dismiss()
	}
})
caveSpider.setText("Cave Spider")
caveSpider.setTextSize(20)
menu1.addView(caveSpider)

var ghast = new android.widget.Button(ctx1);
ghast.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.GHAST;
		dialog1.dismiss()
	}
})
ghast.setText("Ghast")
ghast.setTextSize(20)
menu1.addView(ghast)

var magmaCube = new android.widget.Button(ctx1);
magmaCube.setOnClickListener(new android.view.View.OnClickListener(){
	onClick: function(){
		resetMMS();
		mob = EntityType.LAVA_SLIME;
		dialog1.dismiss()
	}
})
magmaCube.setText("Magma Cube")
magmaCube.setTextSize(20)
menu1.addView(magmaCube)


dialog1.show()

} catch (e){
print("Error with Mob dialog, this should not be happening")
print("Please take a screenshot of this and post it on the forums: "+e)
}
}});
}

 function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
                var urls= new java.net.URL("https://raw.githubusercontent.com/AndreyNazarchuk/ModPE-Scripts-by-andynazay153/master/ModPE/Mass%20Mob%20Spawner/MMSVersion.txt");
                var check = urls.openConnection();
                check.setRequestMethod("GET");
                check.setDoOutput(true);
                check.connect();
                check.getContentLength();
                var script = check.getInputStream();
                var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                var byteCount = 0;
                var checkedVersion;
                while((byteCount = script.read(typeb)) != -1) {
                    checkedVersion = new java.lang.String(typeb, 0, byteCount);
                }
                newUpdate = checkedVersion;
                if(version+"\n" != checkedVersion) {
                    print("New version is available! " + newUpdate);
                    updateWindow=true;
                    clientMessage("Keep pushing the Update button until a dialog appears");
                }
                else if(version+"\n"==checkedVersion){
                print("No updates available");
                }
            }
            catch(err) {
                print("Update check failed ");
                if(err=="JavaException: java.net.UnknownHostException: raw.githubusercontent.com") {
                                print("No internet connection.");
                            }
                            else {
                                print("Error: \n" + err);
                            }
            }
        }
    }
    var threadt = new java.lang.Thread(r);
    threadt.start();
}
function updateVersion() {
    try {
        var upd = new android.app.AlertDialog.Builder(ctx);
        upd.setTitle("New version available!");
        upd.setMessage("An update to Mass Mob Spawner was found!\nWould you like to update it?\nYour version: " + version + "\nNew version: " + newUpdate + "\n\n");
        upd.setNegativeButton("Later", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
            dialog.dismiss();
   }
        });
        upd.setPositiveButton("Update", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
                var ru  = new java.lang.Runnable() {
                    run: function() {
                        try {
                            var urls = new java.net.URL("https://raw.githubusercontent.com/AndreyNazarchuk/ModPE-Scripts-by-andynazay153/master/ModPE/Mass%20Mob%20Spawner/MassMobSpawner.js");
                            var check = urls.openConnection();
                            check.setRequestMethod("GET");
                            check.setDoOutput(true);
                            check.connect();
                            check.getContentLength();
                            var script = check.getInputStream();
                            var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                            var byteCount = 0;
                            while((byteCount = script.read(typeb)) != -1) {
                                updateMod += new java.lang.String(typeb, 0, byteCount);
                            }
                            var modpeFolder = ctx.getDir("modscripts", 0);
                            var modpeFile = new java.io.File(modpeFolder, "MassMobSpawner.js");
                            var update = new java.io.PrintWriter(modpeFile);
                            update.write(updateMod);
                            update.flush();
                            update.close();

                            try {
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, false);
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, true);
                                print("Downloaded and enabled!");

                            }
                            catch(err) {
                                print("Error: \n" + err);
                            }
                        }
                        catch(err) {
                            print("Error: \n" + err);
                        }
                    }
                }
                var threadt = new java.lang.Thread(ru);
                threadt.start();
            }
        });
        var dialog = upd.create();
        dialog.show()
    }
    catch(err) {
        print("Error: \n" + err);
    }
}