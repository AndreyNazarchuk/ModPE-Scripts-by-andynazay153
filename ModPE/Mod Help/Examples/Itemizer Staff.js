//Itemizer Staff v3.5
//Made by Bajan_Deadman0
//2014 Bajan_Deadman0
//Please do not redistribute or say this is your mod! 

var version = "3.5"; 
var initialized=false;
var uses=100;
var t=1200;
var blocks=0;
var mobs=0;
var time=0;
var seconds=0;
var minutes=0;
var hours=0;
var days=0;
var num1=0;
var hminutes=0;
var hoursd=0;
var bs;
var ms;
var bsl;
var msl;
var bco=0; 
var bcz=0;
var mco=0;
var mcz=0;

//GUI 

var T_T=null;
var T_D=null;
var S_BI=null;
var S_MI=null; 
var S_C=null;
var S_D=null; 
var tdWindow=null;
var stWindow=null;
var openWindow=null;
var mainWindow=null; 
var debugWindow=null;
var extraWindow=null; 
var option_td=false; 
var option_st=false; 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 

//Auto update 

var checkForUpdate=false;
var updateWindow=false; 
var newUpdate;
var updateMod;

//Chest grab

var chest=[]; 
var chh=0; 
var chx=0;
var chy=0;
var chz=0;
var filled=false; 
var emptyI=0;

 
 function dip2px(ctx, dips){
 return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
} 

 function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
                var urls= new java.net.URL("https://raw.githubusercontent.com/bajandeadman0/ModPE/master/version");
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
                    clientMessage("§8[IS] §fNew version! " + newUpdate);
                    updateWindow=true;
                }
                else if(version+"\n"==checkedVersion){
                clientMessage("§8[IS] No updates available");
                }
            }
            catch(err) {
                clientMessage("§8[IS] Update check failed ");
                if(err=="JavaException: java.net.UnknownHostException: raw.githubusercontent.com") {
                                clientMessage("§8[IS] No internet connection.");
                            }
                            else {
                                clientMessage("§8Error: \n" + err);
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
        upd.setMessage("An update to Itemizer Staff was found!\nWould you like to update it now?\nCurrent version: " + version + "\nNew version: " + newUpdate +" \n\nTo update later click [IS] --> Extra --> Check for Updates." );
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
                            var urls = new java.net.URL("https://raw.githubusercontent.com/bajandeadman0/ModPE/master/Itemizer%20Staff");
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
                            var modpeFile = new java.io.File(modpeFolder, "Itemizer.js");
                            var update = new java.io.PrintWriter(modpeFile);
                            update.write(updateMod);
                            update.flush();
                            update.close();
                            
                            try {
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, false);
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, true);
								clientMessage("§3[IS] Downloaded and enabled!. Check the changelog");
								  
                            }
                            catch(err) {
                                clientMessage("§8[IS] Error: \n" + err);
                            }
                        }
                        catch(err) {
                            clientMessage("§8[IS] Error: \n" + err);
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
        clientMessage("§8[IS] Error: \n" + err);
    }
}


 function menu_Main(){
	try{
		var layout = new android.widget.LinearLayout(ctx);
		layout.setOrientation(1);
		
		var T_title = new android.widget.TextView(ctx);
		T_title.setGravity(android.view.Gravity.CENTER);
		T_title.setText("Itemizer Staff GUI v"+version+"\nBy Bajan_Deadman0");
		T_title.setTextSize(15);
		layout.addView(T_title);
		
		 var C_td = new android.widget.CheckBox(ctx);
		C_td.setText("View Time & Day");
		C_td.setChecked(option_td);
		C_td.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
				option_td = isChecked;
				show_TD(isChecked);
			}
		});
		layout.addView(C_td); 
		
		 var C_st = new android.widget.CheckBox(ctx);
		C_st.setText("View Stats");
		C_st.setChecked(option_st);
		C_st.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
				option_st = isChecked;
				show_ST(isChecked);
			}
		});
		layout.addView(C_st); 
		
		 var B_debug = new android.widget.Button(ctx);
		B_debug.setText("Debug");
		B_debug.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				menu_Debug();
			}
		});
		layout.addView(B_debug); 
		
		 var B_info = new android.widget.Button(ctx);
		B_info.setText("Information");
		B_info.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				menu_Extra();
			}
		});
		layout.addView(B_info); 
			
		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Exit");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				mainWindow.dismiss();
				mainWindow = null;
			}
		});
		layout.addView(B_exit);
		
		mainWindow = new android.widget.PopupWindow(layout, ctx.getWindowManager().getDefaultDisplay().getWidth()/4, ctx.getWindowManager().getDefaultDisplay().getHeight(), true);
		mainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
		mainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT, 0, 0);
	}catch(err){
		print("[IS] Error\n"+err);
	}
}
 
 function menu_Debug(){
	try{
		var layout = new android.widget.LinearLayout(ctx);
		layout.setOrientation(1);
		
		var T_title = new android.widget.TextView(ctx);
		T_title.setGravity(android.view.Gravity.CENTER);
		T_title.setText("- Debug -");
		T_title.setTextSize(20);
		layout.addView(T_title);
		
		 	var B_itemizer = new android.widget.Button(ctx);
		B_itemizer.setText("Itemizer");
		B_itemizer.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
			restoreItemizer();
			}
		});
		layout.addView(B_itemizer);
		
		 	var B_stats = new android.widget.Button(ctx);
		B_stats.setText("Stats");
		B_stats.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				restoreStats();
			}
		});
		layout.addView(B_stats); 
		
		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Back");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				debugWindow.dismiss();
				debugWindow = null;
			}
		});
		layout.addView(B_exit);
		
		debugWindow = new android.widget.PopupWindow(layout, ctx.getWindowManager().getDefaultDisplay().getWidth()/4, ctx.getWindowManager().getDefaultDisplay().getHeight(), true);
		debugWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
		debugWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT, 0, 0);
	}catch(err){
		print("[IS] Error\n"+err);
	}
}

 
  
 function show_TD(show){
	if(show){
		try{
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(1);
			
			T_D = new android.widget.TextView(ctx);
			T_D.setTextSize(20);
			T_D.setTextColor(android.graphics.Color.BLACK);
			layout.addView(T_D);
			
			T_T = new android.widget.TextView(ctx);
			T_T.setTextSize(20);
			T_T.setTextColor(android.graphics.Color.BLACK);
			layout.addView(T_T);
			
			tdWindow = new android.widget.PopupWindow(layout, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()/1.1);
			tdWindow.setTouchable(false);
			tdWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.LEFT, 0, 0);
		}catch(err){
			print("[IS] Error\n"+err);
		}
	}else if(tdWindow != null){
		tdWindow.dismiss();
		tdWindow = null;
	}
} 

 function show_ST(show){
	if(show){
		try{
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(1);
			
			S_BI = new android.widget.TextView(ctx);
			S_BI.setTextSize(20);
			S_BI.setTextColor(android.graphics.Color.BLACK);
			layout.addView(S_BI);
			
			S_MI = new android.widget.TextView(ctx);
			S_MI.setTextSize(20);
			S_MI.setTextColor(android.graphics.Color.BLACK);
			layout.addView(S_MI);
			
			 	 S_D = new android.widget.TextView(ctx);
			S_D.setTextSize(20);
			S_D.setTextColor(android.graphics.Color.BLACK);
			layout.addView(S_D); 
			
			 S_C = new android.widget.TextView(ctx);
			S_C.setTextSize(20);
			S_C.setTextColor(android.graphics.Color.BLACK);
			layout.addView(S_C);
			
			stWindow = new android.widget.PopupWindow(layout, ctx.getWindowManager().getDefaultDisplay().getWidth()/2.2, dip2px(ctx, 150));
			stWindow.setTouchable(false);
			stWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT, 0, 0);
		}catch(err){
			print("[IS] Error\n"+err);
		}
	}else if(stWindow != null){
		stWindow.dismiss();
		stWindow = null;
	}
} 

 function restoreItemizer(){
	var alert=new android.app.AlertDialog.Builder(ctx);
	alert.setTitle("Are you sure?");
	 alert.setMessage("Durability will go to 100 if it's more than 100. Same with the cooldown if it's more than 60 seconds"); 
	alert.setPositiveButton("Ok",new android.content.DialogInterface.OnClickListener(){
		onClick: function(dialog){
			 if(uses>=101){
			uses=100;
			clientMessage("§8[IS] §fSuccessfully debugged durability");
			}
			if(t>=1201){
			t=1200;	 
			 clientMessage("§8[IS] §fSuccessfully debugged charging cooldown"); 
			}
			} 
			
		});

	alert.setNegativeButton("Cancel",new android.content.DialogInterface.OnClickListener(){
		onClick: function(dialog){}
		});
	alert.show();
	}
	
	 function restoreStats(){
	var alert=new android.app.AlertDialog.Builder(ctx);
	alert.setTitle("Are you sure?");
	 alert.setMessage("Blocks Itemized will go to zero, as well as Mobs Itemized."); 
	alert.setPositiveButton("Ok",new android.content.DialogInterface.OnClickListener(){
		onClick: function(dialog){
			
			 rstats();
			} 
		});

	alert.setNegativeButton("Cancel",new android.content.DialogInterface.OnClickListener(){
		onClick: function(dialog){}
		});
	alert.show();
	} 
 
 function show_Info() {
    var alert = new android.app.AlertDialog.Builder(ctx);
    alert.setTitle("Information");
    alert.setMessage("Itemizer Staff Version " + version + "\nCreated by Bajan_Deadman0.\n\nThanks to:\nConnor 4898 for making the auto update code which I imported.\n\nIf you experience any bugs or have any suggestion just post them in the original forum thread.\n\n To access the forum thread press [IS] --> Extra --> Forum Thread");
    alert.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener() {
        onClick: function(dialog){}
    });
    alert.show();
}

 function showChangelog() {
    var change = new android.app.AlertDialog.Builder(ctx);
    change.setTitle("Changelog");
    change.setMessage("Itemizer Staff Version " + version + "\nThe changes in Version "+version+" are :\n\nAdded a better stats debug system.\nAdded the Chestimizer an item that can pickup the items from a chest(Like a backpack). The crafting recipe is 3 sticks, 1 chest and 1 Itemizer. The items save when you leave\ if you haven't deposit them\nChanged some script methods.");
    change.setNegativeButton("Ok", new android.content.DialogInterface.OnClickListener() {
        onClick: function(dialog){}
    });
    change.show();
} 
 
 function menu_Extra(){
	try{
		var layout = new android.widget.LinearLayout(ctx);
		layout.setOrientation(1);
		
		var T_title = new android.widget.TextView(ctx);
		T_title.setGravity(android.view.Gravity.CENTER);
		T_title.setText("- Extra -");
		T_title.setTextSize(20);
		layout.addView(T_title);
		
		 	var B_infor = new android.widget.Button(ctx);
		B_infor.setText("Information");
		B_infor.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
			show_Info();
			}
		});
		layout.addView(B_infor);
		
		 	var B_check = new android.widget.Button(ctx);
		B_check.setText("Check For Updates");
		B_check.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				checkForUpdate=false;
			}
		});
		layout.addView(B_check); 
		
		var B_thread=new android.widget.Button(ctx);
				B_thread.setText("Forum Thread");
				B_thread.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						try{
							ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse("http://www.minecraftforum.net/forums/minecraft-pocket-edition/mcpe-mods-tools/2137323-itemizer-staff-an-item-that-a-turns-blocks-and")));
							}
						catch(err){
							print("[IS] Error : \n"+err);
							}
						}
					}));
				layout.addView(B_thread);
				
				 var B_change=new android.widget.Button(ctx);
				B_change.setText("Changelog");
				B_change.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(v){
						showChangelog();
						}
					}));
				layout.addView(B_change); 
				 
		var B_exit = new android.widget.Button(ctx);
		B_exit.setText("Back");
		B_exit.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
				extraWindow.dismiss();
				extraWindow = null;
			}
		});
		layout.addView(B_exit);
		
		extraWindow = new android.widget.PopupWindow(layout, ctx.getWindowManager().getDefaultDisplay().getWidth()/4, ctx.getWindowManager().getDefaultDisplay().getHeight(), true);
		extraWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
		extraWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT, 0, 0);
	}catch(err){
		print("[IS] Error\n"+err);
	}
}
 
	 
 function selectLevelHook() {
if(initialized==false) {
 ModPE.setItem(479, "fireball", 0, "Itemizer"); 
 ModPE.setItem(480,"blaze_rod",0,"Itemizer Battery");
 ModPE.setItem(481,"hopper",0,"Chestimizer"); 
 Item.addShapedRecipe(479, 1, 0, ["GDG", " G ", " G "], ["S",0,0, "G", 266, 0, "D", 264, 0]); 
	    Item.setCategory(479,2,1);
	    Item.addShapedRecipe(480, 1, 0, ["CCC", "CLC", "CCC"], ["C", 4, 0, "L", 351, 4]); 
	    Item.addShapedRecipe(481, 1, 0, ["SCS", " I ", " S "], ["I", 479, 0, "S", 280, 0, "C", 54,0]); 
	    ModPE.setItems("http://i.imgur.com/94a1euT.png");
initialized=true;
} 
} 
	 
 function procCmd(c) {
   var p = c.split(" ");
   var command = p[0];
   switch(command){
   default: {
			clientMessage("§8[IS] §fType /help.");
			break;
		} 
		case'ri':{
		clientMessage("§8[IS] §fItemizer repaired");
		uses=130;
		t=10000;
		break;
		}
		case'help':{
		clientMessage("§8[IS] §fCommands available \n§8[IS] §f/help \n§8[IS] §fSince the update v3.0 commands are no longer used");
		 break; 
		}
		}
		}
		

 function leaveGame(){
     T_T = null;
	T_D = null;
	var S_BI=null;
     var S_MI=null; 
     var S_C=null;
     var S_I=null; 
	
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			if(tdWindow != null){
				tdWindow.dismiss();
				tdWindow = null;
			}
			 if(stWindow != null){
				stWindow.dismiss();
				stWindow = null;
			}
			 if(mainWindow != null){
				mainWindow.dismiss();
				mainWindow = null;
			} 
			 if(openWindow != null){
				openWindow.dismiss();
				openWindow = null;
			} 
			 if(debugWindow != null){
				debugWindow.dismiss();
				debugWindow = null;
			} 
			 if(extraWindow != null){
				extraWindow.dismiss();
				extraWindow = null;
			} 
		}
	})); 
	saveChest();
 } 

 function newLevel(){


 clientMessage("§8[IS] §fItemizer Staff §3v"+version+"§f \n§8[IS] §fBy Bajan_Deadman0 \n§8[IS] §fDo not distribute \n§8[IS] §fPress [IS] to continue \n§8[IS] §fIf you don't know what changed in this version \n§8[IS] §fcheck the changelog at the extra menu"); 

	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				var layout = new android.widget.LinearLayout(ctx);
				
				var B_td = new android.widget.Button(ctx);
				B_td.setText("[IS]");
				B_td.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v){
						menu_Main();
					}
				});
				layout.addView(B_td);
				
				openWindow = new android.widget.PopupWindow(layout, dip2px(ctx, 55), dip2px(ctx, 34));
				openWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 40, 10);
			}catch(err){
				print("[IS] Error\n"+err);
			}
		}
	})); 
	 
	 rstats();
			 
			 if(uses>=101){
			uses=100;
			clientMessage("§8[IS] §fDebugged durability");
			}
			if(t>=1201){
			t=1200;	 
			 clientMessage("§8[IS] §fDebugged charging cooldown"); 
			}
			loadChest();
			
			} 
 
 
 function useItem(x, y, z, itemId, blockId, side)  
{  
if(itemId==479){
if(uses>=1&&uses<=100){
tile=Level.getTile(x,y,z);
data=Level.getData(x,y,z);
Player.addItemInventory(tile,1,data);
uses--;
blocks++;
Level.setTile(x,y,z,0);
Level.playSound(x,y,z,"random.pop",1,1);ModPE.showTipMessage("§8[IS] §f"+uses+" % charge left.");
}
else if(uses==0){
ModPE.showTipMessage("§8[IS] §fItemizer at 0 % . Wait to recharge.");
}
else if(uses>=101){
clientMessage("§8[IS] §fSomething is wrong! Go to the debug menu and select Itemizer.");
}
}

if(itemId==481){
 if(blockId==54){ 
 chx=x;
 chy=y;
 chz=z;
 checkChest();
 if(chh==0){ 
 if(filled==true){ 
 preventDefault();
for(var i=0; i<27; i++){
chest[i]= [Level.getChestSlot(chx, chy, chz, i), Level.getChestSlotCount(chx, chy, chz, i), Level.getChestSlotData(chx, chy, chz, i)]; 
Level.playSound(x,y,z,"random.pop",1,1);
Level.setChestSlot(chx, chy, chz, i, 0, 0, 0); 
saveChest();
}
clientMessage("§8[IS] §fCarrying a chest");
chh=1;
}
else if(filled==false){
 clientMessage("§8[IS] §fChest is empty."); 
}
}
 else if(chh==1){ 
 if(filled==true){
clientMessage("§8[IS] §fYou are already carrying a chest."); 
} 
 else if(filled==false){
 for(var i=0; i<27; i++){ 
Level.setChestSlot(x, y, z, i, chest[i][0], chest[i][2], chest[i][1]); 
 Level.playSound(x,y,z,"random.pop",1,1); 
 } 
clientMessage("§8[IS] §fFilled the chest."); 
chh=0; 
}
}
}
}

if(itemId==480){
if(uses>=75){
uses=100;
 Player.addItemInventory(480,-1); 
 ModPE.showTipMessage("§8[IS] §fItemizer charged at "+uses+" % .");
}
else if(uses<=74){
uses=uses+25;
Player.addItemInventory(480,-1);
ModPE.showTipMessage("§8[IS] §fItemizer charged at "+uses+" % .");
}
 }
 }


 function modTick() {
 t--;
 time=t/20;
 seconds=parseInt(Level.getTime()+3600);
 minutes=parseInt(seconds/10);
 hours=parseInt(minutes/60);
 num1=parseInt(hours);
 hminutes=minutes-(num1*60);
 days=parseInt(num1/24);
 hoursd=parseInt(hours-(days*24));
 bs=blocks.toString();
 bsl=bs.length;
 ms=mobs.toString();
 msl=ms.length;
 if(option_td){
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				T_D.setText("Days Passed: "+days+"");
				T_T.setText("Time: "+hoursd+" : "+hminutes+"");
			}
		}));
	} 
	 if(option_st){
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				S_BI.setText("Blocks Itemized : "+blocks+"");
				S_MI.setText("Mobs Itemized: "+mobs+"");
				 S_C.setText("Charging Cooldown: "+parseInt(time)+"");
				 S_D.setText("Durability: "+uses+""); 
			}
		}));
	} 
 if(t<=0){
 if(uses<=99){
 uses++;
 ModPE.showTipMessage("§8[IS] §fCharged to "+uses+" % .");
 t=1200;
 }
 else if(uses>=100){
 ModPE.showTipMessage("§8[IS] §fItemizer is at 100 % charge.");
 t=1200;
 uses=100;
 }
 }
 else if(t>=1201){
 t=1;
 }
 if(checkForUpdate==false) {
        print("Checking for updates");
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    checkVersion();
                }
                catch(err) {
                    clientMessage("§8[IS] Error: \n"+err);
                }
            }
        }));
        checkForUpdate=true;
    }
    if(updateWindow) {
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    updateVersion();
                }
                catch(err) {
                    clientMessage("§8[IS] Error: \n" + err);
                }
            }
        }));
        updateWindow=false;
    } 
 }
 
 function attackHook(attacker, victim){ 

if(getCarriedItem()==479){
 if(uses>=1&&uses<=100){ 
 x=Player.getX();
 y=Player.getY();
 z=Player.getZ();
 
Player.addItemInventory(383,1, (Entity.getEntityTypeId(victim) ));
Level.playSound(x,y,z,"random.pop",1,1);
 uses--;
 mobs++;
ModPE.showTipMessage("§8[IS] §f"+uses+" % charge left."); 
Entity.remove(victim);

}

else if(uses==0){
ModPE.showTipMessage("§8[IS] §fItemizer at 0 % . Wait to recharge.");
}
 else if(uses>=101){
clientMessage("§8[IS] §fSomething is wrong! Go to the debug menu and select Itemizer.");
} 
}
}

 function checkChest(){
 for(var i = 0; i < 27; i++) {
 if(Level.getChestSlot(chx, chy ,chz,i)==0){
 emptyI++;
 }
 }
 if(emptyI==27){
 filled=false; 
 emptyI=0;
 }
 else if(emptyI!=27){
 filled=true; 
 emptyI=0;
 }
 }
 
function rstats(){
 for(var i=0; i<bsl; i++){
			 if(bs.charAt(i)=="1"){
			 bco++;
			 }
			 else if(bs.charAt(i)=="0"){
			 bcz++;
			 }
			 }
			 if(bco==(bsl-1)||bco==bsl){
			 blocks=bco;
			 clientMessage("§8[IS] §fDebugged itemized blocks"); 
			 }
			 
			 for(var h=0; h<msl; h++){
			 if(ms.charAt(i)=="1"){
			 mco++;
			 }
			 else if(ms.charAt(i)=="0"){
			 mcz++;
			 }
			 }
			 if(mco==(msl-1)||mco==msl){
			 mobs=mco;
			 clientMessage("§8[IS] §fDebugged itemized mobs"); 
			 } 
}


 function saveChest() {
        var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/deadCraftWorlds/"+Level.getWorldDir()+"/Itemizer/", "Itemizer.txt");
        var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/deadCraftWorlds/"+Level.getWorldDir()+"/Itemizer/"; 
  java.io.File(path).mkdirs(); 
        file.createNewFile();
        var write = new java.io.OutputStreamWriter(new java.io.FileOutputStream(file));
        var string = "";
        for(var i in chest) if(chest[i][0] !== undefined && chest[i][1] !== undefined && chest[i][2] !== undefined) string += chest[i][0].toString() + "~" + chest[i][1].toString() + "~" + chest[i][2].toString() + "|";
        write.append(string);
        write.append(","+ chh.toString());
        write.append(","+ blocks.toString()); 
        write.append(","+ mobs.toString()); 
        write.append(","+ uses.toString()); 
        write.append(","+ t.toString()); 
        write.close();
    } 

function loadChest(){
 var line, string = "";
    var file = new java.io.File( android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/deadCraftWorlds/"+Level.getWorldDir()+"/Itemizer/", "Itemizer.txt");
    var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/deadCraftWorlds/"+Level.getWorldDir()+"/Itemizer/"; 
    if(!file.exists()){
  java.io.File(path).mkdirs(); 
    }
    else { 
    var readfile = new java.io.BufferedReader(new java.io.FileReader(file));
    while((line = readfile.readLine()) != null) {
        var t1 = line + java.lang.System.getProperty("line.seperator");
        string += t1.substring(0, t1.length - 4);
        var t2 = line;
        if((line = readfile.readLine()) != null) string += "\n";
        line = t2;
    }
    var chestSlots= string.split("|");
    for(var i in chestSlots) {
        var chestData = chestSlots[i].split("~");
        if(chestData.length < 1) continue;
        chest[i] = [chestData[0], chestData[1], chestData[2]];
    }
    chh= parseInt(string.split(",")[1]);
    blocks= parseInt(string.split(",")[2]);
    mobs= parseInt(string.split(",")[3]);
    uses= parseInt(string.split(",")[4]);
    t= parseInt(string.split(",")[5]); 
    
     }
    }

 
 