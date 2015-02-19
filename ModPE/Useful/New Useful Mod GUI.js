var version = "2.0"; 
var checkForUpdate=false;
var updateWindow=false; 
var newUpdate;
var updateMod;
var Gui;
var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var m = 0;

function newLevel(){
punchb();
restartb();
}

function punchb(){
 
ctx.runOnUiThread(new java.lang.Runnable(){
 
run: function(){
 
try{
 
GUI = new android.widget.PopupWindow();

var layout = new android.widget.LinearLayout(ctx);
var ul = new android.widget.Button(ctx);
 

ul.setText("U");

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

if(m == 0) {
usefullist()

}
}
 
});
 
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

dialog.setTitle("Useful Mod");

var  button= new android.widget.Button(ctx); 
ub1 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
throwpunch = 1;
clientMessage("Throw Punch Selected");
preventDefault();
on = true;
 
}
})
ub1.setText("  Throw Punch ")
ub1.setTextSize(20)
menu.addView(ub1); 

var  ub16= new android.widget.Button(ctx); 
ub16 .setOnClickListener(new android.view.View.OnClickListener(){
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
ub16.setText(" Update ")
ub16.setTextSize(20)
menu.addView(ub16); 


var  ub17= new android.widget.Button(ctx); 
ub17 .setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(){
dialog.dismiss();
}
})
ub17.setText(" Close ")
ub17.setTextSize(20)
menu.addView(ub17); 

dialog.show()

} catch (e){
print ("Error: "+e)
}
}});
}