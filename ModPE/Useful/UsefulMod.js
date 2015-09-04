/*
 * Useful mod v1.0
 * © 2015 by andynazay153
 * Auto-Update code used with permission from Bajan_Deadman0
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
*/

//GUI Code
var version = "0.8.9"; 
var checkForUpdate=false;
var updateWindow=false; 
var newUpdate;
var updateMod;
var Gui;
var GUI;
var switched = false; //Time
var switched1 = false; //Gamemode
var switched2 = false; //Infinite Health
var switched3 = false; //Sneak
var switched4 = false; //Flying
var switched5 = false; //Sprint
var switched6 = false; //Invisibility
var switched7 = false; //Ride an Animal
var sp = 0;
var speed = false;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function newLevel(){
usefulB();
Player.clearInventory = function() {
	for(var i = 0; i < 255; i++) Player.clearInventorySlot(i);
};
function dip2px(ctx, dips){
 return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
}

function usefulB(){
 
ctx.runOnUiThread(new java.lang.Runnable(){
 
run: function(){
 
try{
 
GUI = new android.widget.PopupWindow();

var layout = new android.widget.LinearLayout(ctx);
var ul = new android.widget.Button(ctx);
 

ul.setText("U");
ul.setTextSize(18);
ul.setBackgroundDrawable(new
android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.setGravity(android.view.Gravity.LEFT);
layout.addView(ul);

GUI.setContentView(layout);
GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER_VERTICAL, 0, 0);

ul.setOnClickListener(new android.view.View.OnClickListener(){

onClick: function(view){
usefulList()
}
 
});
 
} catch (e){
print ("Error: "+e)
}

}});
}

function usefulList(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var menu = new android.widget.LinearLayout(ctx);
var scroll = new android.widget.ScrollView(ctx);

menu.setOrientation(android.widget.LinearLayout.VERTICAL);

scroll.addView(menu);

var dialog = new android.app.Dialog(ctx); 
dialog.setContentView(scroll);

dialog.setTitle("      Useful Mod     ");

/*
var saveInvButton = new android.widget.Button(ctx);
saveInvButton.setText("Save Inventory");
saveInvButton.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
clientMessage("Inventory saved");
}
}));
saveInvButton.setTextSize(18)
menu.addView(saveInvButton);
*/
			
/*
var loadInvButton = new android.widget.Button(ctx);
loadInvButton.setText("Load Inventory");
loadInvButton.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
clientMessage("Inventory Loaded");
}
}));
loadInvButton.setTextSize(18)
menu.addView(loadInvButton);
*/

var dayButton = new android.widget.Switch(ctx); 
dayButton.setText(" Day/Night"); 
dayButton.setChecked(switched); 
dayButton.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(!switched){ 
switched = true; 
Level.setTime(1000); 
clientMessage("Time set to Day");
clientMessage("[BUG]If the ground is different than the sky, put brightness to full in MCPE settings");
}else{ 
switched = false; 
Level.setTime(14000);
clientMessage("Time set to Night");
clientMessage("[BUG]If the ground is different than the sky, put brightness to full in MCPE settings");
} 
} 
})); 
dayButton.setTextSize(18)
menu.addView(dayButton);

/*
var invisButton = new android.widget.Switch(ctx);
invisButton.setText(" Invisibility");
invisButton.setChecked(switched6);
invisButton.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!switched6){
            Entity.setRenderType(Player.getEntity(), 0);
            switched6 = true;
			clientMessage("You are now Invisible.");
        } 
		else{
            Entity.setRenderType(Player.getEntity(), 3);
            switched6 = false;
			clientMessage("You are no longer Invisible.")
        }
    }
}));
invisButton.setTextSize(18)
menu.addView(invisButton);
*/

var gamemodeButton = new android.widget.Switch(ctx); 
gamemodeButton.setText(" Creative/Survival"); 
gamemodeButton.setChecked(switched1); 
gamemodeButton.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(!switched1){ 
switched1 = true; 
Level.setGameMode(1);
clientMessage("Gamemode set to Creative");
}else{ 
switched1 = false; 
Level.setGameMode(0);
clientMessage("Gamemode set to Survival");
} 
} 
})); 
gamemodeButton.setTextSize(18)
menu.addView(gamemodeButton);
			
var infHealthButton = new android.widget.Switch(ctx); 
infHealthButton.setText(" Infinite Health"); 
infHealthButton.setChecked(switched2); 
infHealthButton.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(!switched2){ 
switched2 = true; 
Player.setHealth(99999999999);
clientMessage(ChatColor.RED + "WARNING:");
clientMessage(ChatColor.RED + "You will die and loose your items when you leave the game!");
clientMessage(ChatColor.GREEN + "Unless you use the Heal button when you are done with it.");
}else{ 
switched2 = false; 
Player.setHealth(20);
} 
} 
}));
infHealthButton.setTextSize(18)
menu.addView(infHealthButton);
			
var healButton = new android.widget.Button(ctx);
healButton.setText("Heal");
healButton.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        Player.setHealth(20);
    }
}));
healButton.setTextSize(18)
menu.addView(healButton);

var sprintButton = new android.widget.Switch(ctx); 
sprintButton.setText(" Sprint"); 
sprintButton.setChecked(switched5); 
sprintButton.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(!switched5){ 
switched5 = true; 
speed = true;
}else{ 
switched5 = false;
} 
} 
}));
sprintButton.setTextSize(18)
menu.addView(sprintButton);

var sneakButton = new android.widget.Switch(ctx); 
sneakButton.setText(" Sneak"); 
sneakButton.setChecked(switched3); 
sneakButton.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(!switched3){ 
switched3 = true; 
Entity.setSneaking(getPlayerEnt(), true);
}else{ 
switched3 = false; 
Entity.setSneaking(getPlayerEnt(), false);
} 
} 
}));
sneakButton.setTextSize(18)
menu.addView(sneakButton);
			
var flyButton = new android.widget.Switch(ctx); 
flyButton.setText(" Fly"); 
flyButton.setChecked(switched4); 
flyButton.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(!switched4){ 
switched4 = true; 
Player.setCanFly(true);
Player.setFlying(true);
}else{ 
switched4 = false; 
Player.setCanFly(false);
Player.setFlying(false);
}
} 
}));
flyButton.setTextSize(18)
menu.addView(flyButton);

var rideButton = new android.widget.Switch(ctx); 
rideButton.setText(" Ride an Animal"); 
rideButton.setChecked(switched7); 
rideButton.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg){ 
if(!switched7){
switched7 = true;
clientMessage(ChatColor.GREEN + "Punch an animal to ride it"); 
}else{ 
switched7 = false;
} 
} 
}));
rideButton.setTextSize(18)
menu.addView(rideButton);

var clearInvButton = new android.widget.Button(ctx);
clearInvButton.setText("Clear Inventory");
clearInvButton.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
Player.clearInventory();
clientMessage("Inventory Cleared.");
}
}));
clearInvButton.setTextSize(18)
menu.addView(clearInvButton);
			
/*
var tpButton = new android.widget.Button(ctx);
tpButton.setText("Teleport");
tpButton.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
var scroll = new android.widget.ScrollView(ctx); 
var teleButton = new android.app.AlertDialog.Builder(ctx); 
teleButton.setTitle("Teleport");
var note = new android.widget.TextView(ctx); 
note.setText("Teleport anywhere you would like!"); 
note.setTextColor(android.graphics.Color.WHITE); 
note.setTextSize(18); 
var setx = new android.widget.EditText(ctx);
var sety = new android.widget.EditText(ctx);
var setz = new android.widget.EditText(ctx);
setx.setHint("X"); 
sety.setHint("Y");
setz.setHint("Z");
var params = new android.view.ViewGroup.LayoutParams(-2,-2); 
menu.addView(note,params); 
menu.addView(setx,params); 
menu.addView(sety,params);
menu.addView(setz,params);
teleButton.setView(menu); 
teleButton.setPositiveButton("OK", new android.content.DialogInterface.OnClickListener(){ onClick: function(viewarg){ 
Entity.setPosition(getPlayerEnt(), setx.getText().toString(), sety.getText().toString(), setz.getText().toString()); 
}}); 
teleButton.setNegativeButton("Cancel", new android.content.DialogInterface.OnClickListener(){ onClick: function(viewarg){ 
}});
var dialog = teleButton.create(); dialog.show();
}
}));
tpButton.setTextSize(18)
tpButton.setTextColor(android.graphics.Color.RED)
menu.addView(tpButton);
*/
	
var suicideButton = new android.widget.Button(ctx);
suicideButton.setText("Commit Suicide");
suicideButton.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
    Player.setHealth(0);
}
}));
suicideButton.setTextSize(18)
menu.addView(suicideButton);
			
			var updateButton = new android.widget.Button(ctx);
            updateButton.setText("Update");
            updateButton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
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
						clientMessage(ChatColor.GREEN + "Restart the game to activate update");
					}
                }
            }));
			updateButton.setTextSize(18)
            menu.addView(updateButton);
dialog.show()
}

catch (e){
print ("Error: "+e)
}
}});
}

//Auto-Update Code
 function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
                var urls= new java.net.URL("https://raw.githubusercontent.com/AndreyNazarchuk/ModPE-Scripts-by-andynazay153/master/ModPE/Useful/UsefulModVersion.txt");
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
        upd.setMessage("An update to Useful Mod was found!\nWould you like to update it?\nYour version: " + version + "\nNew version: " + newUpdate);
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
                            var urls = new java.net.URL("https://raw.githubusercontent.com/AndreyNazarchuk/ModPE-Scripts-by-andynazay153/master/ModPE/Useful/UsefulMod.js");
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
                            var modpeFile = new java.io.File(modpeFolder, "UsefulMod.js");
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

function modTick()
{
if(switched5==true)
{
if(speed)
{
if(sp==1)
{

x = Player.getX();
z = Player.getZ();
sp++;

}else if(sp==3){

sp = 1;
Xx = Player.getX() - x;
Zz = Player.getZ() - z;
Entity.setVelX(getPlayerEnt(), Xx);
Entity.setVelZ(getPlayerEnt(), Zz);
Xx = 0;
Zz = 0;

}
if(sp!=1)
{

sp++;

}
}else if(!speed){

return null;

  }
 }
}

function attackHook(attacker, victim){
if(switched7 == true){
Entity.rideAnimal(attacker, victim);
preventDefault();
}
}