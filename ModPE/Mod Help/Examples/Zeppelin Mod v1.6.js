//Zeppelin mod by DAW330073
//Fly your own ship!

var checkForUpdates=false;

var shipDefinerID=460; //ID of the Ship Definer
var speed=20; //Higher is slower

var version=1.6;

var activity=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var up,down,north,east,south,west=false;
var blocks=[];
var check=false;
var tickcounter=0;
var tickcounter2=0;
var versionCheck=CheckForUpdates();
var versionChecked=false;
if(version<versionCheck && !versionChecked){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			versionChecked=true;
			var alert=new android.app.AlertDialog.Builder(activity);
			alert.setTitle("New Version");
			alert.setMessage("Currently available version: "+versionCheck+"\nYour version: "+version); 
			alert.setPositiveButton("Update",new android.content.DialogInterface.OnClickListener(){
				onClick: function(dialog,whichButton){
					try{
						activity.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse("http://adf.ly/qERTr")));
						}
					catch(err){
						print(err);
						}
					}
				});
			alert.setNegativeButton("Later",new android.content.DialogInterface.OnClickListener(){
				onClick: function(dialog,whichButton){}
				});
			alert.show();
			}
		}));
	}
function CheckForUpdates(){
	var out=new java.io.ByteArrayOutputStream();
	if(checkForUpdates)
		var response=android.net.http.AndroidHttpClient.newInstance("CheckForUpdates()").execute(new org.apache.http.client.methods.HttpGet("https://dl.dropboxusercontent.com/u/82808924/MCPE/Zeppelin%20update.txt")).getEntity().writeTo(out);
	out.close();
	return Number(String(out.toString()));
	}
	
ModPE.setItem(shipDefinerID,"feather",0,"shipMaker",1);
ModPE.langEdit("item.shipMaker.name","Define Ship");
Item.addShapedRecipe(460,1,0,["gig","iri","brb"],["g",266,0,"i",265,0,"r",331,0,"b",42,0]);
Item.setCategory(460,ItemCategory.TOOL,0);

Block.defineBlock(254,"TNT Dropper",[["tnt",2],["redstone_block",0],["tnt",0],["tnt",0],["tnt",0],["tnt",0]],46,false,0);
Block.setDestroyTime(254,0.45);
Item.addShapedRecipe(254,1,0,["trt","ttt","ttt"],["t",46,0,"r",331,0]);
Item.setCategory(254,ItemCategory.MATERIAL,0);

function useItem(x,y,z,itemID,blockID,side){
	if(itemID==shipDefinerID){
		blocks=[];
		GetBlock(x,y,z);
		if(blocks.length>0)
			clientMessage("Ship defined");
		check=true;
		}
	if(blockID==254){
		preventDefault();
		Level.spawnMob(x,y,z,65,"tnt");
		}
	}
function newLevel(){
	blocks=[];
	}
function ChangeTo(cmd){
	if(cmd=="up" || cmd=="down" || cmd=="north" || cmd=="east" || cmd=="south" || cmd=="west" || cmd=="stop"){
		up=false;
		down=false;
		north=false;
		east=false;
		south=false;
		west=false;
		}
	if(cmd=="up")
		up=true;
	if(cmd=="down")
		down=true;
	if(cmd=="north")
		north=true;
	if(cmd=="east")
		east=true;
	if(cmd=="south")
		south=true;
	if(cmd=="west")
		west=true;
	HideControls();
	ShowControls1();
	ShowControls2();
	ShowControls3();
	}
function modTick(){
	if(!check && blocks.length>0 && !InArray(parseInt(Player.getX()),parseInt(Player.getY())-2,parseInt(Player.getZ()))){
		HideControls();
		ChangeTo("stop");
		check=true;
		HideControls();
		}
	else if(check && blocks.length>0 && InArray(parseInt(Player.getX()),parseInt(Player.getY())-2,parseInt(Player.getZ()))){
		ShowControls1();
		ShowControls2();
		ShowControls3();
		check=false;
		}
	if(blocks.length>0 && tickcounter==speed){
		for(var i=0;i<blocks.length;i++){
			var sides=[[blocks[i][0],blocks[i][1]-1,blocks[i][2]],[blocks[i][0],blocks[i][1]+1,blocks[i][2]],[blocks[i][0],blocks[i][1],blocks[i][2]-1],[blocks[i][0],blocks[i][1],blocks[i][2]+1],[blocks[i][0]-1,blocks[i][1],blocks[i][2]],[blocks[i][0]+1,blocks[i][1],blocks[i][2]]];
			for(var s=0;s<6;s++){
				if(Level.getTile(sides[s][0],sides[s][1],sides[s][2])!=0 && BlackList(Level.getTile(sides[s][0],sides[s][1],sides[s][2]))){
					if(sides[s][0]>blocks[i][0])
						west=false;
					if(sides[s][0]<blocks[i][0])
						east=false
					if(sides[s][1]>blocks[i][1])
						up=false;
					if(sides[s][1]<blocks[i][1])
						down=false
					if(sides[s][0]>blocks[i][0])
						north=false;
					if(sides[s][0]<blocks[i][0])
						south=false
					}
				}
			}
		if(up){
			var l=[blocks[blocks.length-1][0],blocks[blocks.length-1][1],blocks[blocks.length-1][2]];
			var chests={};
			for(var i=0;i<blocks.length;i++){
				if(blocks[i][3]==54){
					if(!chests[String(i)])
						chests[String(i)]=[];
					for(var s=0;s<27;s++){
						chests[String(i)].push([Level.getChestSlot(blocks[i][0],blocks[i][1],blocks[i][2],s),Level.getChestSlotData(blocks[i][0],blocks[i][1],blocks[i][2],s),Level.getChestSlotCount(blocks[i][0],blocks[i][1],blocks[i][2],s)]);
						Level.setChestSlot(blocks[i][0],blocks[i][1],blocks[i][2],s,0);
						}
					}
				Level.setTile(blocks[i][0],blocks[i][1],blocks[i][2],0);
				}
			for(var i=0;i<blocks.length;i++){
				Level.setTile(blocks[i][0],blocks[i][1]+1,blocks[i][2],blocks[i][3],blocks[i][4]);
				if(chests[String(i)]){
					for(var s=0;s<27;s++)
						Level.setChestSlot(blocks[i][0],blocks[i][1]+1,blocks[i][2],s,chests[String(i)][s][0],chests[String(i)][s][1],chests[String(i)][s][2]);
					}
				}
			Entity.setPosition(Player.getEntity(),Player.getX(),Player.getY()+1,Player.getZ());
			blocks=[];
			GetBlock(l[0],l[1]+1,l[2]);
			}
		if(down){
			var l=[blocks[blocks.length-1][0],blocks[blocks.length-1][1],blocks[blocks.length-1][2]];
			var chests={};
			for(var i=0;i<blocks.length;i++){
				if(blocks[i][3]==54){
					if(!chests[String(i)])
						chests[String(i)]=[];
					for(var s=0;s<27;s++){
						chests[String(i)].push([Level.getChestSlot(blocks[i][0],blocks[i][1],blocks[i][2],s),Level.getChestSlotData(blocks[i][0],blocks[i][1],blocks[i][2],s),Level.getChestSlotCount(blocks[i][0],blocks[i][1],blocks[i][2],s)]);
						Level.setChestSlot(blocks[i][0],blocks[i][1],blocks[i][2],s,0);
						}
					}
				Level.setTile(blocks[i][0],blocks[i][1],blocks[i][2],0);
				}
			for(var i=0;i<blocks.length;i++){
				Level.setTile(blocks[i][0],blocks[i][1]-1,blocks[i][2],blocks[i][3],blocks[i][4]);
				if(chests[String(i)]){
					for(var s=0;s<27;s++)
						Level.setChestSlot(blocks[i][0],blocks[i][1]-1,blocks[i][2],s,chests[String(i)][s][0],chests[String(i)][s][1],chests[String(i)][s][2]);
					}
				}
			Entity.setPosition(Player.getEntity(),Player.getX(),Player.getY()-1,Player.getZ());
			blocks=[];
			GetBlock(l[0],l[1]-1,l[2]);
			}
		if(north){
			var l=[blocks[blocks.length-1][0],blocks[blocks.length-1][1],blocks[blocks.length-1][2]];
			var chests={};
			for(var i=0;i<blocks.length;i++){
				if(blocks[i][3]==54){
					if(!chests[String(i)])
						chests[String(i)]=[];
					for(var s=0;s<27;s++){
						chests[String(i)].push([Level.getChestSlot(blocks[i][0],blocks[i][1],blocks[i][2],s),Level.getChestSlotData(blocks[i][0],blocks[i][1],blocks[i][2],s),Level.getChestSlotCount(blocks[i][0],blocks[i][1],blocks[i][2],s)]);
						Level.setChestSlot(blocks[i][0],blocks[i][1],blocks[i][2],s,0);
						}
					}
				Level.setTile(blocks[i][0],blocks[i][1],blocks[i][2],0);
				}
			for(var i=0;i<blocks.length;i++){
				Level.setTile(blocks[i][0],blocks[i][1],blocks[i][2]+1,blocks[i][3],blocks[i][4]);
				if(chests[String(i)]){
					for(var s=0;s<27;s++)
						Level.setChestSlot(blocks[i][0],blocks[i][1],blocks[i][2]+1,s,chests[String(i)][s][0],chests[String(i)][s][1],chests[String(i)][s][2]);
					}
				}
			Entity.setPosition(Player.getEntity(),Player.getX(),Player.getY(),Player.getZ()+1);
			blocks=[];
			GetBlock(l[0],l[1],l[2]+1);
			}
		if(south){
			var l=[blocks[blocks.length-1][0],blocks[blocks.length-1][1],blocks[blocks.length-1][2]];
			var chests={};
			for(var i=0;i<blocks.length;i++){
				if(blocks[i][3]==54){
					if(!chests[String(i)])
						chests[String(i)]=[];
					for(var s=0;s<27;s++){
						chests[String(i)].push([Level.getChestSlot(blocks[i][0],blocks[i][1],blocks[i][2],s),Level.getChestSlotData(blocks[i][0],blocks[i][1],blocks[i][2],s),Level.getChestSlotCount(blocks[i][0],blocks[i][1],blocks[i][2],s)]);
						Level.setChestSlot(blocks[i][0],blocks[i][1],blocks[i][2],s,0);
						}
					}
				Level.setTile(blocks[i][0],blocks[i][1],blocks[i][2],0);
				}
			for(var i=0;i<blocks.length;i++){
				Level.setTile(blocks[i][0],blocks[i][1],blocks[i][2]-1,blocks[i][3],blocks[i][4]);
				if(chests[String(i)]){
					for(var s=0;s<27;s++)
						Level.setChestSlot(blocks[i][0],blocks[i][1],blocks[i][2]-1,s,chests[String(i)][s][0],chests[String(i)][s][1],chests[String(i)][s][2]);
					}
				}
			Entity.setPosition(Player.getEntity(),Player.getX(),Player.getY(),Player.getZ()-1);
			blocks=[];
			GetBlock(l[0],l[1],l[2]-1);
			}
		if(east){
			var l=[blocks[blocks.length-1][0],blocks[blocks.length-1][1],blocks[blocks.length-1][2]];
			var chests={};
			for(var i=0;i<blocks.length;i++){
				if(blocks[i][3]==54){
					if(!chests[String(i)])
						chests[String(i)]=[];
					for(var s=0;s<27;s++){
						chests[String(i)].push([Level.getChestSlot(blocks[i][0],blocks[i][1],blocks[i][2],s),Level.getChestSlotData(blocks[i][0],blocks[i][1],blocks[i][2],s),Level.getChestSlotCount(blocks[i][0],blocks[i][1],blocks[i][2],s)]);
						Level.setChestSlot(blocks[i][0],blocks[i][1],blocks[i][2],s,0);
						}
					}
				Level.setTile(blocks[i][0],blocks[i][1],blocks[i][2],0);
				}
			for(var i=0;i<blocks.length;i++){
				Level.setTile(blocks[i][0]-1,blocks[i][1],blocks[i][2],blocks[i][3],blocks[i][4]);
				if(chests[String(i)]){
					for(var s=0;s<27;s++)
						Level.setChestSlot(blocks[i][0]-1,blocks[i][1],blocks[i][2],s,chests[String(i)][s][0],chests[String(i)][s][1],chests[String(i)][s][2]);
					}
				}
			Entity.setPosition(Player.getEntity(),Player.getX()-1,Player.getY(),Player.getZ());
			blocks=[];
			GetBlock(l[0]-1,l[1],l[2]);
			}
		if(west){
			var l=[blocks[blocks.length-1][0],blocks[blocks.length-1][1],blocks[blocks.length-1][2]];
			var chests={};
			for(var i=0;i<blocks.length;i++){
				if(blocks[i][3]==54){
					if(!chests[String(i)])
						chests[String(i)]=[];
					for(var s=0;s<27;s++){
						chests[String(i)].push([Level.getChestSlot(blocks[i][0],blocks[i][1],blocks[i][2],s),Level.getChestSlotData(blocks[i][0],blocks[i][1],blocks[i][2],s),Level.getChestSlotCount(blocks[i][0],blocks[i][1],blocks[i][2],s)]);
						Level.setChestSlot(blocks[i][0],blocks[i][1],blocks[i][2],s,0);
						}
					}
				Level.setTile(blocks[i][0],blocks[i][1],blocks[i][2],0);
				}
			for(var i=0;i<blocks.length;i++){
				Level.setTile(blocks[i][0]+1,blocks[i][1],blocks[i][2],blocks[i][3],blocks[i][4]);
				if(chests[String(i)]){
					for(var s=0;s<27;s++)
						Level.setChestSlot(blocks[i][0]+1,blocks[i][1],blocks[i][2],s,chests[String(i)][s][0],chests[String(i)][s][1],chests[String(i)][s][2]);
					}
				}
			Entity.setPosition(Player.getEntity(),Player.getX()+1,Player.getY(),Player.getZ());
			blocks=[];
			GetBlock(l[0]+1,l[1],l[2]);
			}
		}
	if(tickcounter==speed)
		tickcounter=0;
	if(tickcounter2==300){
		HideGUI();
		ShowGUI();
		tickcounter2=0;
		}
	//tickcounter2++;
	tickcounter++;
	}
function GetBlock(x,y,z){
	if(InArray(x,y,z) || BlackList(Level.getTile(x,y,z)))
		return;
	blocks.push([x,y,z,Level.getTile(x,y,z),Level.getData(x,y,z)]);
	var sides=[[x,y-1,z],[x,y+1,z],[x,y,z-1],[x,y,z+1],[x-1,y,z],[x+1,y,z]];
	for(var i=0;i<6;i++){
		if(!InArray(sides[i][0],sides[i][1],sides[i][2]))
			GetBlock(sides[i][0],sides[i][1],sides[i][2]);
		}
	}
function InArray(x,y,z){
	for(var i=0;i<blocks.length;i++){
		if(blocks[i][0]==x && blocks[i][1]==y && blocks[i][2]==z)
			return true;
		}
	return false;
	}
function BlackList(id){
	var blacklist=[0,1,2,3,4,8,9,10,11,12,13,18,63,61,62];
	for(var i=0;i<blacklist.length;i++){
		if(id==blacklist[i])
			return true;
		}
	return false;
	}
var controlsWindow1=null;
var controlsWindow2=null;
var controlsWindow3=null;
function ShowControls1(){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				controlsWindow1=new android.widget.PopupWindow();
				var layout=new android.widget.LinearLayout(activity);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				var btnup=new android.widget.Button(activity);
				btnup.setText("Up");
				btnup.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						ChangeTo("up");
						}
					}));
				var btndown=new android.widget.Button(activity);
				btndown.setText("Down");
				btndown.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						ChangeTo("down");
						}
					}));
				var btnstop=new android.widget.Button(activity);
				btnstop.setText("Stop");
				btnstop.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						ChangeTo("stop");
						}
					}));
				layout.addView(btnup);
				layout.addView(btndown);
				layout.addView(btnstop);
				if(up)
					btnup.getBackground().setColorFilter(android.graphics.Color.BLUE,android.graphics.PorterDuff.Mode.MULTIPLY);
				if(down)
					btndown.getBackground().setColorFilter(android.graphics.Color.BLUE,android.graphics.PorterDuff.Mode.MULTIPLY);
				controlsWindow1.setContentView(layout);
				controlsWindow1.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				controlsWindow1.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				controlsWindow1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				controlsWindow1.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.LEFT,0,0);
				}
			catch(err){
				clientMessage(err);
				}
			}
		}));
	}
function ShowControls2(){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				controlsWindow2=new android.widget.PopupWindow();
				var layout=new android.widget.LinearLayout(activity);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				var btnnorth=new android.widget.Button(activity);
				btnnorth.setText("North");
				btnnorth.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						ChangeTo("north");
						}
					}));
				var we=new android.widget.LinearLayout(activity);
				we.setOrientation(android.widget.LinearLayout.HORIZONTAL);
				var btnwest=new android.widget.Button(activity);
				btnwest.setText("West");
				btnwest.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						ChangeTo("west");
						}
					}));
				var btneast=new android.widget.Button(activity);
				btneast.setText("East");
				btneast.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						ChangeTo("east");
						}
					}));
				we.addView(btnwest);
				we.addView(btneast);
				var btnsouth=new android.widget.Button(activity);
				btnsouth.setText("South");
				btnsouth.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						ChangeTo("south");
						}
					}));
				layout.addView(btnnorth);
				layout.addView(we);
				layout.addView(btnsouth);
				if(north)
					btnnorth.getBackground().setColorFilter(android.graphics.Color.BLUE,android.graphics.PorterDuff.Mode.MULTIPLY);
				if(south)
					btnsouth.getBackground().setColorFilter(android.graphics.Color.BLUE,android.graphics.PorterDuff.Mode.MULTIPLY);
				if(east)
					btneast.getBackground().setColorFilter(android.graphics.Color.BLUE,android.graphics.PorterDuff.Mode.MULTIPLY);
				if(west)
					btnwest.getBackground().setColorFilter(android.graphics.Color.BLUE,android.graphics.PorterDuff.Mode.MULTIPLY);
				controlsWindow2.setContentView(layout);
				controlsWindow2.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				controlsWindow2.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				controlsWindow2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				controlsWindow2.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,0,0);
				}
			catch(err){
				clientMessage(err);
				}
			}
		}));
	}
var webWindow=null;
function ShowGUI(){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			webWindow=new android.widget.PopupWindow();
			var webView=new android.webkit.WebView(activity);
			webView.getSettings().setJavaScriptEnabled(true);
			webView.loadUrl("https://www.google.com");
			webWindow.setContentView(webView);
			webWindow.setWidth(0);
			webWindow.setHeight(0);
			webWindow.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.TOP | android.view.Gravity.LEFT,-100,-100);
			}
		}));
	}
function HideGUI(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			if(webWindow!=null) { 
				webWindow.dismiss();
				webWindow=null;
				}
			}
		}));
	}
var speedView=null;
function ShowControls3(){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				controlsWindow3=new android.widget.PopupWindow();
				var layout=new android.widget.LinearLayout(activity);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				if(speedView && speedView.getParent()!=null)
					speedView.getParent().removeView(speedView);
				speedView=new android.widget.TextView(activity);
				speedView.setText(String(Number(100-speed)));
				var btnup=new android.widget.Button(activity);
				btnup.setText("Faster");
				btnup.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(speed>10){
							speed--;
							tickcounter=0;
							}
						speedView.setText(String(Number(100-speed)));
						}
					}));
				var btndown=new android.widget.Button(activity);
				btndown.setText("Slower");
				btndown.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(speed<40){
							speed++;
							tickcounter=0;
							}
						speedView.setText(String(Number(100-speed)));
						}
					}));
				layout.addView(speedView);
				layout.addView(btnup);
				layout.addView(btndown);
				controlsWindow3.setContentView(layout);
				controlsWindow3.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				controlsWindow3.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				controlsWindow3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				controlsWindow3.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.RIGHT,0,0);
				}
			catch(err){
				clientMessage(err);
				}
			}
		}));
	}
function leaveGame(){
	HideControls();
	}
function HideControls(){
	activity.runOnUiThread(new java.lang.Runnable({ 
		run: function(){
			if(controlsWindow1!=null){ 
				controlsWindow1.dismiss();
				controlsWindow1=null;
				}
			if(controlsWindow2!=null){ 
				controlsWindow2.dismiss();
				controlsWindow2=null;
				}
			if(controlsWindow3!=null){ 
				controlsWindow3.dismiss();
				controlsWindow3=null;
				}
			}
		}));
	}