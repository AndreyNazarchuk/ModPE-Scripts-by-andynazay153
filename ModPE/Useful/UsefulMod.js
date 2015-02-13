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
var version = "0.3"; 
var checkForUpdate=false;
var updateWindow=false; 
var newUpdate;
var updateMod;
var GUI;
var menu;
var exitUI;

function dip2px(dips){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function newLevel(){
    Player.clearInventory = function() {
		for(var i = 0; i < 255; i++) Player.clearInventorySlot(i);
	};
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);

            var menuBtn = new android.widget.Button(ctx);
            menuBtn.setText("U");
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    mainMenu();
                }
            }));
            layout.addView(menuBtn);

            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER_VERTICAL, 0, 0);
        }catch(err){
            print("An error occurred: " + err);
        }
    }}));

function mainMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var menuLayout = new android.widget.LinearLayout(ctx);
            var menuScroll = new android.widget.ScrollView(ctx);
            var menuLayout1 = new android.widget.LinearLayout(ctx);
            menuLayout.setOrientation(1);
            menuLayout1.setOrientation(1);

            menuScroll.addView(menuLayout);
            menuLayout1.addView(menuScroll);

			var closebutton = new android.widget.Button(ctx);
			closebutton.setText("Close Menu");
			closebutton.setOnClickListener(new android.view.View.OnClickListener({
			onClick: function(viewarg){
				if(menu != null){
				menu.dismiss();
				menu = null;
			}
			}}));
			menuLayout.addView(closebutton);
			
            /*
			var button = new android.widget.Button(ctx);
            button.setText("Save Inventory");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
					
					
                }
            }));
            menuLayout.addView(button);
			*/
			
			var button2 = new android.widget.Button(ctx);
            button2.setText("Clear Inventory");
            button2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Player.clearInventory();
                }
            }));
            menuLayout.addView(button2);
			
			/*
			var button3 = new android.widget.Button(ctx);
            button3.setText("Load Inventory");
            button3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    //Your Code
                }
            }));
            menuLayout.addView(button3);
			*/
            
            var button4 = new android.widget.Button(ctx);
            button4.setText("Set time to Day");
            button4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Level.setTime(1000);
                }
            }));
            menuLayout.addView(button4);
			
			var button5 = new android.widget.Button(ctx);
            button5.setText("Set time to Night");
            button5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Level.setTime(14000);
                }
            }));
            menuLayout.addView(button5);
			
			var button6 = new android.widget.Button(ctx);
            button6.setText("Creative");
            button6.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(1);
                }
            }));
            menuLayout.addView(button6);
			
			var button7 = new android.widget.Button(ctx);
            button7.setText("Survival");
            button7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Level.setGameMode(0);
                }
            }));
            menuLayout.addView(button7);
			
			var button8 = new android.widget.Button(ctx);
            button8.setText("Flying On");
            button8.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Player.setCanFly(true);
                    Player.setFlying(true);
                }
            }));
            menuLayout.addView(button8);
            
            var button9 = new android.widget.Button(ctx);
            button9.setText("Flying Off");
            button9.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Player.setCanFly(false);
                    Player.setFlying(false);
                }
            }));
            menuLayout.addView(button9);
			
			var button10 = new android.widget.Button(ctx);
            button10.setText("Infinite Health ON");
            button10.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
						Player.setHealth(99999999999);
						clientMessage(ChatColor.RED + "WARNING:");
						clientMessage(ChatColor.WHITE + "You will die and loose your items when you leave the game!");
						clientMessage(ChatColor.GREEN + "Unless you turn off Infinite Health when you are done with it.");
                }
            }));
            menuLayout.addView(button10);
			
			var button11 = new android.widget.Button(ctx);
            button11.setText("Infinite Health OFF");
            button11.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
						Player.setHealth(20);
                }
            }));
            menuLayout.addView(button11);
			
			/*
			var button12 = new android.widget.Button(ctx);
            button12.setText("Ride an Animal");
            button12.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
					clientMessage(ChatColor.GREEN + "Punch an animal to ride it");
					Entity.rideAnimal(attacker, victim);
					rideAnimal(attacker, victim);
					preventDefault();
                }
            }));
            menuLayout.addView(button12);
			*/
			
			/*
			var button13 = new android.widget.Button(ctx);
            button13.setText("Teleport");
            button13.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    
                }
            }));
            menuLayout.addView(button13);
			*/
			
			var button14 = new android.widget.Button(ctx);
            button14.setText("Commit Suicide");
            button14.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Player.setHealth(0);
                }
            }));
            menuLayout.addView(button14);
			
			var button15 = new android.widget.Button(ctx);
            button15.setText("Update");
            button15.setOnClickListener(new android.view.View.OnClickListener({
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
					}
                }
            }));
            menuLayout.addView(button15);
			
			
			var closebutton1 = new android.widget.Button(ctx);
			closebutton1.setText("Close Menu");
			closebutton1.setOnClickListener(new android.view.View.OnClickListener({
			onClick: function(viewarg){
				if(menu != null){
				menu.dismiss();
				menu = null;
			}
			}}));
			menuLayout.addView(closebutton1);
			
			/* Entity.setSneaking(entity, setSneaking);*/
			
            menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
        }catch(error){
            print("An error occurred: " + error);
        }
    }}));
}

function exit(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var xLayout = new android.widget.LinearLayout(ctx);

            var xButton = new android.widget.Button(ctx);
            xButton.setText("x");
            xButton.setTextColor(android.graphics.Color.WHITE);
            xButton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    exitUI.dismiss();
                    menu.dismiss();
                }
            }));
            xLayout.addView(xButton);

            exitUI = new android.widget.PopupWindow(xLayout, dip2px(40), dip2px(40));
            exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            exitUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(exception){
            print(exception);
        }
    }}));
}

//Auto-Update Code

 function dip2px(ctx, dips){
 return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

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

function leaveGame(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        if(GUI != null){
            GUI.dismiss();
            GUI = null;
        }
        if(menu != null){
            menu.dismiss();
            menu = null;
        }
        if(exitUI != null){
            exitUI.dismiss();
            exitUI = null;
        }
    }}));
}
}