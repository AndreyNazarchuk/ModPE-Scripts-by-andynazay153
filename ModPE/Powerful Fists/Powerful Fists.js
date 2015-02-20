/*
 * © 2015 by andynazay153
 * Auto-Update code used with permission from Bajan_Deadman0
 * Original code by Metamorposis_2
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * He has given me permission to take over this mod COMPLETELY and update it to 0.10.5.
 * Edited and Improved by andynazay153
 * Improvements:
 - Better Grammar ;D
 - Improved Throw Punch.
 - Auto Update
 - Reset before enabling a punch.
*/

//Powerful Fists Code
var version = "2.0"; 
var checkForUpdate=false;
var updateWindow=false; 
var newUpdate;
var updateMod;
var Gui;
var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var on = false;
var m = 0;
var firepunch = 0;
var throwpunch = 0;
var killpunch = 0;
var explodingpunch = 0;
var regeneratingpunch = 0;
var destroyblockpunch = 0;
var ridepunch = 0;
var hardpunch = 0;
var webpunch = 0;
var waterpunch = 0;
var lavapunch = 0;
var diamondpunch = 0;
var extraweb = 0;
var tntpunch = 0;
var goldpunch = 0;
var ironpunch = 0;
var meteorpunch = 0;
var preventdefault = 0;
var ironpunch0 = 0;
var ironpunch1 = 0;
var brickcage = 0;
var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
var path2 = new java.io.File(path, "games/com.mojang/minecraftWorlds");

function newLevel(){
punchb();
resetP();
}

function punchb(){
 
ctx.runOnUiThread(new java.lang.Runnable(){
 
run: function(){
	
try{
 
GUI = new android.widget.PopupWindow();

var layout = new android.widget.LinearLayout(ctx);
var pl = new android.widget.Button(ctx);
 

pl.setText("PF");

layout.setOrientation(android.widget.LinearLayout.VERTICAL);
layout.setGravity(android.view.Gravity.LEFT);
layout.addView(pl);


GUI.setContentView(layout);
GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER_VERTICAL, 0, 0);

pl.setOnClickListener(new android.view.View.OnClickListener(){
 
onClick: function(view){

if(m == 0) {
punchlist()

}
}
 
});
 
} catch (e){
print ("Error: "+e)
}

}});
}
 
function resetP(){
 
ctx.runOnUiThread(new java.lang.Runnable(){
 
run: function(){
	
try{
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
} catch (e){
print ("Error: "+e)
}

}});
}

function punchlist(){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
try{
var menu = new android.widget.LinearLayout(ctx);
var scroll = new android.widget.ScrollView(ctx);

menu.setOrientation(android.widget.LinearLayout.VERTICAL);

scroll.addView(menu);

var dialog = new android.app.Dialog(ctx); 
dialog.setContentView(scroll);

dialog.setTitle("Powerful Fists");

var  fb= new android.widget.Button(ctx); 
fb .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
firepunch = 1;
clientMessage("Fire Punch Selected");
on = true;
}
})
fb.setText(" Fire Punch ")
fb.setTextSize(20)
menu.addView(fb); 


var  fb1= new android.widget.Button(ctx); 
fb1 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
throwpunch = 1;
clientMessage("Throw Punch Selected");
preventDefault();
on = true;
}
})
fb1.setText(" Throw Punch ")
fb1.setTextSize(20)
menu.addView(fb1); 


var  fb2= new android.widget.Button(ctx); 
fb2 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
killpunch = 1;
clientMessage("Kill Punch Selected");
on = true;
}
})
fb2.setText(" Kill Punch ")
fb2.setTextSize(20)
menu.addView(fb2); 


var  fb3= new android.widget.Button(ctx); 
fb3 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
explodingpunch = 1;
clientMessage("Exploding Punch Selected");
on = true;
}
})
fb3.setText(" Exploding Punch ")
fb3.setTextSize(20)
menu.addView(fb3); 


var  fb4= new android.widget.Button(ctx); 
fb4 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
regeneratingpunch = 1;
clientMessage("Regenerating Punch Selected");
on = true;
}
})
fb4.setText(" Regenerating Punch ")
fb4.setTextSize(20)
menu.addView(fb4); 


var  fb5= new android.widget.Button(ctx); 
fb5 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
destroyblockpunch = 1;
clientMessage("Destroy Block Punch Selected");
on = true;
}
})
fb5.setText(" Destroy Punch ")
fb5.setTextSize(20)
menu.addView(fb5); 


var  fb6= new android.widget.Button(ctx); 
fb6 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
ridepunch = 1;
clientMessage("Ride Punch Selected");
preventDefault();
on = true;
}
})
fb6.setText(" Ride Punch ")
fb6.setTextSize(20)
menu.addView(fb6); 


var  fb7= new android.widget.Button(ctx); 
fb7 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
hardpunch = 1;
clientMessage("Hard Punch Selected");
on = true;
 
}
})
fb7.setText(" Hard Punch ")
fb7.setTextSize(20)
menu.addView(fb7); 


var  fb8= new android.widget.Button(ctx); 
fb8 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
webpunch = 1;
clientMessage("Web Punch Selected");
on = true;
 
}
})
fb8.setText(" Web Punch ")
fb8.setTextSize(20)
menu.addView(fb8); 


var  fb9= new android.widget.Button(ctx); 
fb9 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
waterpunch = 1;
clientMessage("Water Punch Selected");
on = true;
 
}
})
fb9.setText(" Water Punch ")
fb9.setTextSize(20)
menu.addView(fb9);


var  fb10= new android.widget.Button(ctx); 
fb10 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
lavapunch = 1;
clientMessage("Lava Punch Selected");
on = true;
 
}
})
fb10.setText(" Lava Punch ")
fb10.setTextSize(20)
menu.addView(fb10); 


var  fb11= new android.widget.Button(ctx); 
fb11 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
diamondpunch = 1;
clientMessage("Diamond Punch Selected");
on = true;
 
}
})
fb11.setText(" Diamond Punch ")
fb11.setTextSize(20)
menu.addView(fb11); 


var  fb12= new android.widget.Button(ctx); 
fb12 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
goldpunch = 1;
clientMessage("Gold Punch Selected");
on = true;
 
}
})
fb12.setText(" Gold Punch ")
fb12.setTextSize(20)
menu.addView(fb12); 


var  fb13= new android.widget.Button(ctx); 
fb13 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
ironpunch = 1;
clientMessage("Iron Punch Selected");
on = true;
 
}
})
fb13.setText(" Iron Punch ")
fb13.setTextSize(20)
menu.addView(fb13); 


var  fb14= new android.widget.Button(ctx); 
fb14 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
meteorpunch = 1;
clientMessage("Meteor Punch Selected");
on = true;
 
}
})
fb14.setText(" Meteor Punch ")
fb14.setTextSize(20)
menu.addView(fb14); 


var  fb15= new android.widget.Button(ctx); 
fb15 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
resetP();
ironpunch0 = 1;
clientMessage("Ironman Punch Selected");
on = true;
 
}
})
fb15.setText(" Ironman Punch ")
fb15.setTextSize(20)
menu.addView(fb15);

var  fb16= new android.widget.Button(ctx); 
fb16 .setOnClickListener(new android.view.View.OnClickListener(){
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
clientMessage(ChatColor.GREEN + "Restart the game to activate update");
		}
}
})
fb16.setText(" Update ")
fb16.setTextSize(20)
menu.addView(fb16); 


var  fb17= new android.widget.Button(ctx); 
fb17 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
dialog.dismiss();
 
}
})
fb17.setText(" Close ")
fb17.setTextSize(20)
menu.addView(fb17); 

dialog.show()

} catch (e){
print ("Error: "+e)
}
}});
}

function useItem(x, y, z, itemId, blockId, side)
{
if(destroyblockpunch == 1)
Level.destroyBlock (x, y, z, true)

}

function procCmd(cmd){
if (cmd=="fire punch"){
firepunch = 1;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§cFire Punch Selected");}
else if (cmd=="throw punch"){
firepunch = 0;
throwpunch = 1;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 1;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§aThrow Punch Selected");}
else if (cmd=="kill punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 1;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§1Kill Punch Selected");}
else if (cmd=="exploding punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 1;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§2Exploding Punch Selected");}
else if (cmd=="restart"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = false;
clientMessage("§aPowerfull Fist Has Restart Punches");}
else if (cmd=="regenerating punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 1;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§3Regenerating Punch Selected");}
else if (cmd=="fun punch"){
firepunch = 1;
throwpunch = 1;
killpunch = 1;
explodingpunch = 1;
regeneratingpunch = 1;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 1;
ironpunch1 = 1;
on = true;
clientMessage("§4Every punch selected");}
else if (cmd=="destroy punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 1;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§5Destroy Block Punch Selected");}
else if (cmd=="ride punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 1;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 1;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§6Ride Punch Selected");}
else if (cmd=="hard punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 1;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§7Hard Punch Selected");}
else if (cmd=="help punch"){
clientMessage("List Of Punches");
clientMessage(" /fire punch");
clientMessage(" /throw punch");
clientMessage(" /exploding punch");
clientMessage(" /diamond punch");
clientMessage(" /gold punch");
clientMessage(" /iron punch");
clientMessage(" /regenerating punch");}
else if (cmd=="help punch 2"){
clientMessage(" /fun punch");

clientMessage(" /destroy punch");
clientMessage(" /ride punch");
clientMessage(" /hard punch");
clientMessage(" /water punch");
clientMessage(" /lava punch");
clientMessage(" /meteor punch");
clientMessage(" /ironman punch");
clientMessage(" /web punch");}
else if (cmd=="web punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 1;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 1;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§8Web Punch Selected");}
else if (cmd=="water punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 1;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§9Water Punch Selected");}
else if (cmd=="lava punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 1;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§bLava Punch Selected");}
else if (cmd=="diamond punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 1;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§dDiamond Punch Selected");}
else if (cmd=="tnt punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 1;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 1;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§eTnT Punch Selected");}
else if (cmd=="gold punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 1;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§fGold Punch Selected");}
else if (cmd=="iron punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 1;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§gIron Punch Selected");}
else if (cmd=="meteor punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 1;
preventdefault = 0;
ironpunch0 = 0;
ironpunch1 = 0;
on = true;
clientMessage("§hMeteor Punch Selected");}
else if (cmd=="ironman punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 1;
on = true;
clientMessage("§iIronman Punch Selected");}
else if (cmd=="brickcage punch"){
firepunch = 0;
throwpunch = 0;
killpunch = 0;
explodingpunch = 0;
regeneratingpunch = 0;
destroyblockpunch = 0;
ridepunch = 0;
hardpunch = 0;
webpunch = 0;
waterpunch = 0;
lavapunch = 0;
diamondpunch = 0;
extraweb = 0;
tntpunch = 0;
goldpunch = 0;
ironpunch = 0;
meteorpunch = 0;
preventdefault = 0;
ironpunch0 = 0;
brickcage = 1;
on = true;
clientMessage("Brick Cage Punch Selected");}
else if (cmd=="plist"){
punchlist()
}
}


function leaveGame(){
hidep();
hider();

}

function hidep() {

ctx.runOnUiThread(new java.lang.Runnable(){
 
run: function(){
 
if(GUI != null){
 
GUI.dismiss();
 
}


}
 
});
 
}

function hider() {

ctx.runOnUiThread(new java.lang.Runnable(){
 
run: function(){
 
if(Gui != null){
 
Gui.dismiss();
 
}


}
 
});
 
}

function attackHook(attacker, victim)
{
var x = Entity.getX(victim);
var y = Entity.getY(victim);
var z = Entity.getZ(victim);

if(firepunch == 1){
Entity.setFireTicks(victim,2000);
}

if(throwpunch == 1){
preventDefault();
var velX;
var velY;
var velZ;
var power = 2;

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

if(killpunch == 1){
Entity.setHealth(victim, 0);
}

if(explodingpunch == 1){
Level.explode(x, y, z, 1);
}

if(regeneratingpunch == 1){
Entity.setHealth(attacker, 20);
}

if(ridepunch == 1){
preventDefault();
rideAnimal(attacker, victim);
}

if(hardpunch == 1){
Entity.setHealth(victim, 20);
}

if(webpunch == 1){
setTile(x,y,z, 30);
}

if(waterpunch == 1){
setTile(x,y,z, 9);
}

if(lavapunch == 1){
setTile(x,y,z, 11);
}

if(diamondpunch == 1){
Level.dropItem(x,y,z,0,264,1);
}

if(extraweb == 1){
setTile(x,y+1,z, 30);
}

if(tntpunch == 1){
Level.spawnMob(x+1,y,z,65);
}

if(preventdefault ==1){
preventDefault();
}

if(goldpunch == 1){
Level.dropItem(x,y,z,0,266,1);
}

if(ironpunch == 1){
Level.dropItem(x,y,z,0,265,1);
}

if(meteorpunch == 1){
Level.explode(x, y, z, 40);
}

if(ironpunch0 == 1){
preventDefault();
if(getYaw() < 0)
{
var temp = getYaw()+90;
for(i=0; temp<0; i++)
{
temp += 360;
}
x = Math.cos(temp*(Math.PI/180));
z = Math.sin(temp*(Math.PI/180));
setVelX(victim, x*10);
setVelY(victim, 1.55);
setVelZ(victim, z*10);
}
else if(getYaw() > 0 && getYaw() < 360){
var temp = getYaw()+90;
x = Math.cos(temp*(Math.PI/180));
z = Math.sin(temp*(Math.PI/180));
setVelX(victim, x*10);
setVelY(victim, 1.55);
setVelZ(victim, z*10);
Level.playSoundEnt(attacker, "random.break", 100, 100);
}
else if(getYaw() >= 360){
var temp = getYaw()+90;
for(i=0; temp>=360; i++)
{
temp -= 360;
}
x = Math.cos(temp*(Math.PI/180));
z = Math.sin(temp*(Math.PI/180));
setVelX(victim, x*10);
setVelY(victim, 1.55);
setVelZ(victim, z*10);
Level.playSoundEnt(attacker, "random.break", 100, 100);
}

}

function entityRemovedHook(entity)
{
x = Entity.getX(entity)
y = Entity.getY(entity)
z = Entity.getZ(entity)

if(Entity.getEntityTypeId(entity)==65 && tntpunch == 1)
{
Level.spawnMob(x,y,z,65);
}
}}

 function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
                var urls= new java.net.URL("https://raw.githubusercontent.com/AndreyNazarchuk/ModPE-Scripts-by-andynazay153/master/ModPE/Powerful%20Fists/PFVersion.txt");
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
					clientMessage("Push Update button 2 times");
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
        upd.setMessage("An update to Powerful Fists was found!\nWould you like to update it?\nYour version: " + version + "\nNew version: " + newUpdate);
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
                            var urls = new java.net.URL("https://raw.githubusercontent.com/AndreyNazarchuk/ModPE-Scripts-by-andynazay153/master/ModPE/Powerful%20Fists/Powerful%20Fists.js");
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
                            var modpeFile = new java.io.File(modpeFolder, "Powerful Fists.js");
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