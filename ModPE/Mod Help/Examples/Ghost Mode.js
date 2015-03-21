/*Ghost Mode*/

/*
Version : 1.0
Created by MehrzadR
===========================
Hide yourself! You are a Ghost now! No one can Hit you!
*Don't use this in SinglePlayer! This is an Server Special Mod!*

I'm a terrible person!
===========================
License Type : Custom

You can use this mod for 0 cost! You can't upload it without Creator's name or try to modify it. If you want to share it ask permission first then you must share the DIRECT link or OWNER'S shorten link.
Please ask permission before modifying or copying this ModPE Script.
===========================
*/

var HideBTN;
var MoveBTN;
var Speed = 0.1;
var Hidden = false;
var Moving = false;
var Ghost;
var Pitch;
var Yaw;
var VelX;
var VelZ;
var PX;
var PY;
var PZ;

function ShowGUI(){
  var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

  activity.runOnUiThread(new java.lang.Runnable({ run: function() {
        try {

HideBTN = new android.widget.PopupWindow();

MoveBTN = new android.widget.PopupWindow();

var HideLayout = new android.widget.RelativeLayout(activity);

var MoveLayout = new android.widget.RelativeLayout(activity);

var HideBT = new android.widget.Button(activity);

var MoveBT = new android.widget.Button(activity);

HideBT.setText("Hide");

MoveBT.setText("Move");

HideBT.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
if (Hidden == false){
Hidden = true;
HideBT.setText("Hidden!");

PX = getPlayerX();
PY = getPlayerY();
PZ = getPlayerZ();

Ghost = Level.spawnMob(PX, PY+1, PZ, 15, null);

setRot(Ghost, getYaw(), getPitch());
Entity.setRenderType(Ghost, 0);
ModPE.setCamera(Ghost);

} else if (Hidden == true){
Hidden = false;
Moving = false;
MoveBT.setText("Move");
ModPE.setCamera(getPlayerEnt());
HideBT.setText("Hide");
setPosition(getPlayerEnt(),PX, PY, PZ);
Entity.remove(Ghost);
}
}
}));

MoveBT.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
if (Moving == false && Hidden == true){
Moving = true;
MoveBT.setText("Moving");
}else if (Moving == true){
Moving = false;
MoveBT.setText("Move");
}
}
}));

HideLayout.addView(HideBT);

MoveLayout.addView(MoveBT);

HideBTN.setContentView(HideLayout);

MoveBTN.setContentView(MoveLayout);

HideBTN.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
HideBTN.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);

MoveBTN.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
MoveBTN.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);

HideBTN.setBackgroundDrawable(new
android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

MoveBTN.setBackgroundDrawable(new
android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

HideBTN .showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 0, 0);

MoveBTN .showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);

}catch(err){
clientMessage("Buttons could not be displayed: \n "+err);
}
} }));

}

function HideGUI(){

var activity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	activity.runOnUiThread(new java.lang.Runnable({ run: function() {

		if(HideBTN != null){
			HideBTN.dismiss();
		}
		if(MoveBTN != null){
			MoveBTN.dismiss();
		}

}
}));
}


function useItem(x, y, z, itemId, blockId, side)
{

}

function attackHook(attacker, victim)
{

}

function modTick()
{
Pitch = getPitch(getPlayerEnt());
Yaw = getYaw(getPlayerEnt());

if (Hidden == true){
setPosition(getPlayerEnt(),PX, 200, PY);
}
if (Moving == true){
setRot(Ghost, Yaw, 0);

VelX = -1 * Math.sin(Yaw / 180 * Math.PI) * Speed; 
VelZ = Math.cos(Yaw / 180 * Math.PI) * Speed;

setVelX (Ghost, VelX);
setVelZ (Ghost, VelZ);
} else {
setVelX (Ghost, 0);
setVelZ (Ghost, 0);
}

}

function procCmd(command)
{
var cmd = command.split(" ");
if(cmd[0] == "ghost" && cmd[1] == "on")
{
ShowGUI();
}

if(cmd[0] == "ghost" && cmd[1] == "off")
{
HideGUI();
ModPE.setCamera(getPlayerEnt());
Moving = false;
Hidden = false;
Ghost = null;
}

}

function newLevel()
{
clientMessage("§6Ghost Mode - Created by MehrzadR" + "\n Don't use this in Single Player!" );

}

function leaveGame()
{
HideGUI();
Moving = false;
Hidden = false;
Ghost = null;

}

