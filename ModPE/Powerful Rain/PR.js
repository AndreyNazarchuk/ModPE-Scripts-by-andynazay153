/*
 * © 2015 by andynazay153
 * Auto-Update code used with permission from Bajan_Deadman0
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
*/
var version = "1.2"; 
var checkForUpdate=false;
var updateWindow=false; 
var newUpdate;
var updateMod;
var Gui;
var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var m = 0;
var fAR = false;
var tntR = false;
var gR = false;
var eCR = false;
var eR = false;

function newLevel(){
Rainb();
resetR();
}

function Rainb(){
 
ctx.runOnUiThread(new java.lang.Runnable(){
 
run: function(){
 
try{
 
GUI = new android.widget.PopupWindow();

var layout = new android.widget.LinearLayout(ctx);
var prl = new android.widget.Button(ctx);
 

prl.setText("PR");

layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.setGravity(android.view.Gravity.LEFT);
layout.addView(prl);

GUI.setContentView(layout);
GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER_VERTICAL, 0, 0);

prl.setOnClickListener(new android.view.View.OnClickListener(){

onClick: function(view){

if(m == 0) {
powerfulRainList()
}
}
 
});
 
} catch (e){
print ("Error: "+e)
}

}});
}

function resetR(){
 
ctx.runOnUiThread(new java.lang.Runnable(){
 
run: function(){
	
try{
fAR = false;
tntR = false;
gR = false;
sR = false;
eR = false;
eCR = false;
} catch (e){
print ("Error: "+e)
}

}});
}

function powerfulRainList(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var menu = new android.widget.LinearLayout(ctx);
var scroll = new android.widget.ScrollView(ctx);

menu.setOrientation(android.widget.LinearLayout.VERTICAL);

scroll.addView(menu);

var dialog = new android.app.Dialog(ctx); 
dialog.setContentView(scroll);

dialog.setTitle("Powerful Rain");

var rB= new android.widget.Button(ctx); 
rB.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
	resetR();
	clientMessage(ChatColor.GREEN + "You are now powerless");
}
})
rB.setText("Reset")
rB.setTextSize(20)
menu.addView(rB);

var rb= new android.widget.Button(ctx); 
rb.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
	resetR();
	fAR = true;
	clientMessage(ChatColor.BLUE + "EPIC!!!");
	clientMessage("Please hit anything alive, your punch won't hurt it, but the Rain might :)");
}
})
rb.setText("Flaming Arrow Rain")
rb.setTextSize(20)
menu.addView(rb);

var rb2= new android.widget.Button(ctx); 
rb2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
	resetR();
	tntR = true;
	clientMessage(ChatColor.RED + "RUN!!!");
	clientMessage("Please hit anything alive, your punch won't hurt it, but the Rain might :)");
}
})
rb2.setText("TNT Rain")
rb2.setTextSize(20)
menu.addView(rb2);

var rb3= new android.widget.Button(ctx); 
rb3.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
	resetR();
	gR = true;
	clientMessage(ChatColor.RED + "COMING SOON!!!");
	clientMessage("Please hit anything alive, your punch won't hurt it, but the Rain might :)");
}
})
rb3.setText("Guardian Rain")
rb3.setTextColor(android.graphics.Color.RED)
rb3.setTextSize(20)
menu.addView(rb3);

var rb4= new android.widget.Button(ctx); 
rb4.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
	resetR();
	eR = true;
	clientMessage(ChatColor.RED + "WARNING: MANY chickens can be spawned");
	clientMessage("Please hit anything alive, your punch won't hurt it, but the Rain might :)");
}
})
rb4.setText("Egg Rain")
rb4.setTextSize(20)
menu.addView(rb4);

var rb5= new android.widget.Button(ctx); 
rb5.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
	resetR();
	eCR = true;
	clientMessage("PRANK AWAY!");
	clientMessage("Please hit anything alive, your punch won't hurt it, but the Rain might :)");
}
})
rb5.setText("Exploding Confetti")
rb5.setTextSize(20)
menu.addView(rb5);

var rb6= new android.widget.Button(ctx); 
rb6.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
	clientMessage(ChatColor.GREEN + "Upcoming Features:");
	clientMessage(ChatColor.GREEN + "*" + ChatColor.WHITE + " Guardians: They spawn and protect you with their Flaming Arrow Bows.");
	clientMessage(ChatColor.GREEN + "*" + ChatColor.WHITE + " Mass Mob Spawning buttons, they spawn mobs for you to fight.");
	clientMessage(ChatColor.GREEN + "*" + ChatColor.WHITE + " Rain that falls on you and people around you, healing all of you.");
	clientMessage(ChatColor.RED + "Please give me more ideas on the forums :)");
}
})
rb6.setText("Upcoming Features")
rb6.setTextSize(20)
menu.addView(rb6);

var rb16= new android.widget.Button(ctx); 
rb16.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
on = false;
on = true;
if(checkForUpdate==false) {
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
if(updateWindow) {
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
updateWindow=false;
checkForUpdate=true;
clientMessage(ChatColor.GREEN + "Restart the game to activate the update");
		}
}
})
rb16.setText("Update")
rb16.setTextSize(20)
menu.addView(rb16);

dialog.show()

} catch (e){
print ("Error: "+e)
}
}});
}

function attackHook(attacker, victim){

if(fAR == true){
preventDefault();
xa = Entity.getX(attacker);
ya = Entity.getY(attacker) + 20;
za = Entity.getZ(attacker);

var arrow2 = Level.spawnMob(xa+ 1, ya, za, 80);
Entity.setFireTicks(arrow2,5);
Entity.setVelY(arrow2, -4.5);

var arrow3 = Level.spawnMob(xa, ya, za + 1, 80);
Entity.setFireTicks(arrow3,5);
Entity.setVelY(arrow3, -4.5);

var arrow4 = Level.spawnMob(xa - 1, ya, za, 80);
Entity.setFireTicks(arrow4,5);
Entity.setVelY(arrow4, -4.5);

var arrow5 = Level.spawnMob(xa, ya, za - 1, 80);
Entity.setFireTicks(arrow5,5);
Entity.setVelY(arrow5, -4.5);

var arrow6 = Level.spawnMob(xa - 1, ya, za - 1, 80);
Entity.setFireTicks(arrow6,5);
Entity.setVelY(arrow6, -4.5);

var arrow7 = Level.spawnMob(xa + 1, ya, za + 1, 80);
Entity.setFireTicks(arrow7,5);
Entity.setVelY(arrow7, -4.5);

var arrow8 = Level.spawnMob(xa - 1, ya, za + 1, 80);
Entity.setFireTicks(arrow8,5);
Entity.setVelY(arrow8, -4.5);

var arrow9 = Level.spawnMob(xa + 1, ya, za - 1, 80);
Entity.setFireTicks(arrow9,5);
Entity.setVelY(arrow9, -4.5);

var arrow10 = Level.spawnMob(xa + 2, ya, za, 80);
Entity.setFireTicks(arrow10,5);
Entity.setVelY(arrow10, -4.5);

var arrow11 = Level.spawnMob(xa - 2, ya, za, 80);
Entity.setFireTicks(arrow11,5);
Entity.setVelY(arrow11, -4.5);

var arrow12 = Level.spawnMob(xa, ya, za + 2, 80);
Entity.setFireTicks(arrow12,5);
Entity.setVelY(arrow12, -4.5);

var arrow13 = Level.spawnMob(xa, ya, za - 2, 80);
Entity.setFireTicks(arrow13,5);
Entity.setVelY(arrow13, -4.5);

var arrow14 = Level.spawnMob(xa - 2, ya, za - 2, 80);
Entity.setFireTicks(arrow14,5);
Entity.setVelY(arrow14, -4.5);

var arrow15 = Level.spawnMob(xa + 2, ya, za + 2, 80);
Entity.setFireTicks(arrow15,5);
Entity.setVelY(arrow15, -4.5);

var arrow16 = Level.spawnMob(xa - 2, ya, za + 2, 80);
Entity.setFireTicks(arrow16,5);
Entity.setVelY(arrow16, -4.5);

var arrow17 = Level.spawnMob(xa + 2, ya, za - 2, 80);
Entity.setFireTicks(arrow17,5);
Entity.setVelY(arrow17, -4.5);

var arrow18 = Level.spawnMob(xa + 3, ya, za, 80);
Entity.setFireTicks(arrow18,5);
Entity.setVelY(arrow18, -4.5);

var arrow19 = Level.spawnMob(xa, ya, za + 3, 80);
Entity.setFireTicks(arrow19,5);
Entity.setVelY(arrow19, -4.5);

var arrow21 = Level.spawnMob(xa - 3, ya, za, 80);
Entity.setFireTicks(arrow21,5);
Entity.setVelY(arrow21, -4.5);

var arrow22 = Level.spawnMob(xa, ya, za - 3, 80);
Entity.setFireTicks(arrow22,5);
Entity.setVelY(arrow22, -4.5);

var arrow23 = Level.spawnMob(xa - 3, ya, za - 3, 80);
Entity.setFireTicks(arrow23,5);
Entity.setVelY(arrow23, -4.5);

var arrow24 = Level.spawnMob(xa + 3, ya, za + 3, 80);
Entity.setFireTicks(arrow24,5);
Entity.setVelY(arrow24, -4.5);

var arrow25 = Level.spawnMob(xa - 3, ya, za + 3, 80);
Entity.setFireTicks(arrow25,5);
Entity.setVelY(arrow25, -4.5);

var arrow26 = Level.spawnMob(xa + 3, ya, za - 3, 80);
Entity.setFireTicks(arrow26,5);
Entity.setVelY(arrow26, -4.5);

}

if(tntR == true){
preventDefault();
xa = Entity.getX(attacker);
ya = Entity.getY(attacker) + 10;
za = Entity.getZ(attacker);

var tnt2 = Level.spawnMob(xa+ 1, ya, za, 65);

var tnt3 = Level.spawnMob(xa, ya, za + 1, 65);

var tnt4 = Level.spawnMob(xa - 1, ya, za, 65);

var tnt5 = Level.spawnMob(xa, ya, za - 1, 65);

var tnt6 = Level.spawnMob(xa - 1, ya, za - 1, 65);

var tnt7 = Level.spawnMob(xa + 1, ya, za + 1, 65);

var tnt8 = Level.spawnMob(xa - 1, ya, za + 1, 65);

var tnt9 = Level.spawnMob(xa + 1, ya, za - 1, 65);

var tnt10 = Level.spawnMob(xa + 2, ya, za, 65);

var tnt11 = Level.spawnMob(xa - 2, ya, za, 65);

var tnt12 = Level.spawnMob(xa, ya, za + 2, 65);

var tnt13 = Level.spawnMob(xa, ya, za - 2, 65);

var tnt14 = Level.spawnMob(xa - 2, ya, za - 2, 65);

var tnt15 = Level.spawnMob(xa + 2, ya, za + 2, 65);

var tnt16 = Level.spawnMob(xa - 2, ya, za + 2, 65);

var tnt17 = Level.spawnMob(xa + 2, ya, za - 2, 65);

var tnt18 = Level.spawnMob(xa + 3, ya, za, 65);

var tnt19 = Level.spawnMob(xa, ya, za + 3, 65);

var tnt21 = Level.spawnMob(xa - 3, ya, za, 65);

var tnt22 = Level.spawnMob(xa, ya, za - 3, 65);

var tnt23 = Level.spawnMob(xa - 3, ya, za - 3, 65);

var tnt24 = Level.spawnMob(xa + 3, ya, za + 3, 65);

var tnt25 = Level.spawnMob(xa - 3, ya, za + 3, 65);

var tnt26 = Level.spawnMob(xa + 3, ya, za - 3, 65);
}

if(eR == true){
preventDefault();
xa = Entity.getX(attacker);
ya = Entity.getY(attacker) + 20;
za = Entity.getZ(attacker);

var egg2 = Level.spawnMob(xa+ 1, ya, za, 82);
Entity.setVelY(egg2, -4.5);

var egg3 = Level.spawnMob(xa, ya, za + 1, 82);
Entity.setVelY(egg3, -4.5);

var egg4 = Level.spawnMob(xa - 1, ya, za, 82);
Entity.setVelY(egg4, -4.5);

var egg5 = Level.spawnMob(xa, ya, za - 1, 82);
Entity.setVelY(egg5, -4.5);

var egg6 = Level.spawnMob(xa - 1, ya, za - 1, 82);
Entity.setVelY(egg6, -4.5);

var egg7 = Level.spawnMob(xa + 1, ya, za + 1, 82);
Entity.setVelY(egg7, -4.5);

var egg8 = Level.spawnMob(xa - 1, ya, za + 1, 82);
Entity.setVelY(egg8, -4.5);

var egg9 = Level.spawnMob(xa + 1, ya, za - 1, 82);
Entity.setVelY(egg9, -4.5);

var egg10 = Level.spawnMob(xa + 2, ya, za, 82);
Entity.setVelY(egg10, -4.5);

var egg11 = Level.spawnMob(xa - 2, ya, za, 82);
Entity.setVelY(egg11, -4.5);

var egg12 = Level.spawnMob(xa, ya, za + 2, 82);
Entity.setVelY(egg12, -4.5);

var egg13 = Level.spawnMob(xa, ya, za - 2, 82);
Entity.setVelY(egg13, -4.5);

var egg14 = Level.spawnMob(xa - 2, ya, za - 2, 82);
Entity.setVelY(egg14, -4.5);

var egg15 = Level.spawnMob(xa + 2, ya, za + 2, 82);
Entity.setVelY(egg15, -4.5);

var egg16 = Level.spawnMob(xa - 2, ya, za + 2, 82);
Entity.setVelY(egg16, -4.5);

var egg17 = Level.spawnMob(xa + 2, ya, za - 2, 82);
Entity.setVelY(egg17, -4.5);

var egg18 = Level.spawnMob(xa + 3, ya, za, 82);
Entity.setVelY(egg18, -4.5);

var egg19 = Level.spawnMob(xa, ya, za + 3, 82);
Entity.setVelY(egg19, -4.5);

var egg21 = Level.spawnMob(xa - 3, ya, za, 82);
Entity.setVelY(egg21, -4.5);

var egg22 = Level.spawnMob(xa, ya, za - 3, 82);
Entity.setVelY(egg22, -4.5);

var egg23 = Level.spawnMob(xa - 3, ya, za - 3, 82);
Entity.setVelY(egg23, -4.5);

var egg24 = Level.spawnMob(xa + 3, ya, za + 3, 82);
Entity.setVelY(egg24, -4.5);

var egg25 = Level.spawnMob(xa - 3, ya, za + 3, 82);
Entity.setVelY(egg25, -4.5);

var egg26 = Level.spawnMob(xa + 3, ya, za - 3, 82);
Entity.setVelY(egg26, -4.5);
}

if(eCR == true){
preventDefault();
xa = Entity.getX(attacker);
ya = Entity.getY(attacker) + 20;
za = Entity.getZ(attacker);
xx = Entity.getX(victim);
yx = Entity.getY(victim);
zx = Entity.getZ(victim);

var explodeC = Level.explode(xx, yx, zx, 1);

var snowball2 = Level.spawnMob(xa+ 1, ya, za, 81);
Entity.setVelY(snowball2, -4.5);

var snowball3 = Level.spawnMob(xa, ya, za + 1, 81);
Entity.setVelY(snowball3, -4.5);

var snowball4 = Level.spawnMob(xa - 1, ya, za, 81);
Entity.setVelY(snowball4, -4.5);

var snowball5 = Level.spawnMob(xa, ya, za - 1, 81);
Entity.setVelY(snowball5, -4.5);

var snowball6 = Level.spawnMob(xa - 1, ya, za - 1, 81);
Entity.setVelY(snowball6, -4.5);

var snowball7 = Level.spawnMob(xa + 1, ya, za + 1, 81);
Entity.setVelY(snowball7, -4.5);

var snowball8 = Level.spawnMob(xa - 1, ya, za + 1, 81);
Entity.setVelY(snowball8, -4.5);

var snowball9 = Level.spawnMob(xa + 1, ya, za - 1, 81);
Entity.setVelY(snowball9, -4.5);

var snowball10 = Level.spawnMob(xa + 2, ya, za, 81);
Entity.setVelY(snowball10, -4.5);

var snowball11 = Level.spawnMob(xa - 2, ya, za, 81);
Entity.setVelY(snowball11, -4.5);

var snowball12 = Level.spawnMob(xa, ya, za + 2, 81);
Entity.setVelY(snowball12, -4.5);

var snowball13 = Level.spawnMob(xa, ya, za - 2, 81);
Entity.setVelY(snowball13, -4.5);

var snowball14 = Level.spawnMob(xa - 2, ya, za - 2, 81);
Entity.setVelY(snowball14, -4.5);

var snowball15 = Level.spawnMob(xa + 2, ya, za + 2, 81);
Entity.setVelY(snowball15, -4.5);

var snowball16 = Level.spawnMob(xa - 2, ya, za + 2, 81);
Entity.setVelY(snowball16, -4.5);

var snowball17 = Level.spawnMob(xa + 2, ya, za - 2, 81);
Entity.setVelY(snowball17, -4.5);

var snowball18 = Level.spawnMob(xa + 3, ya, za, 81);
Entity.setVelY(snowball18, -4.5);

var snowball19 = Level.spawnMob(xa, ya, za + 3, 81);
Entity.setVelY(snowball19, -4.5);

var snowball21 = Level.spawnMob(xa - 3, ya, za, 81);
Entity.setVelY(snowball21, -4.5);

var snowball22 = Level.spawnMob(xa, ya, za - 3, 81);
Entity.setVelY(snowball22, -4.5);

var snowball23 = Level.spawnMob(xa - 3, ya, za - 3, 81);
Entity.setVelY(snowball23, -4.5);

var snowball24 = Level.spawnMob(xa + 3, ya, za + 3, 81);
Entity.setVelY(snowball24, -4.5);

var snowball25 = Level.spawnMob(xa - 3, ya, za + 3, 81);
Entity.setVelY(snowball25, -4.5);

var snowball26 = Level.spawnMob(xa + 3, ya, za - 3, 81);
Entity.setVelY(snowball26, -4.5);
}

}

 function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
                var urls= new java.net.URL("https://raw.githubusercontent.com/AndreyNazarchuk/ModPE-Scripts-by-andynazay153/master/ModPE/Powerful%20Rain/PRVersion.txt");
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
					clientMessage("Push the Update button until a dialog appears");
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
        upd.setMessage("An update to Powerful Rain was found!\nWould you like to update it?\nYour version: " + version + "\nNew version: " + newUpdate);
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
                            var urls = new java.net.URL("https://raw.githubusercontent.com/AndreyNazarchuk/ModPE-Scripts-by-andynazay153/master/ModPE/Powerful%20Rain/PR.js");
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
                            var modpeFile = new java.io.File(modpeFolder, "PR.js");
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