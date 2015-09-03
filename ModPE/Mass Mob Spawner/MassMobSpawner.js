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
TextName.setText("Select a type of mob, ammount to spawn, and location to spawn them at\n\n If you spawn too many mobs it may crash your device and break your world\n\n");
menu.addView(TextName);

var inputText = new android.widget.EditText(currentActivity);
inputText.setHint("Amount of mobs");
layoutName.addView(inputText);
//var text = inputText.getText().toString();                             
//int number = Integer.parseInt(inputText);

var UButton = new android.widget.Button(ctx);
UButton.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
on = false;
on = true;
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
clientMessage(ChatColor.GREEN + "Restart the game to activate the update");
        }
}
})
UButton.setText("Update")
UButton.setTextSize(20)
menu.addView(UButton);

var rB= new android.widget.Button(ctx);
rB.setOnClickListener(new android.view.View.OnClickListener(){
    onClick: function(){
        resetR();
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