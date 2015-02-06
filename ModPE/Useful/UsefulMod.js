/*
Made by andynazay153.
This is my mod. Please do not copy or add it to anything or make a video without Asking me ;)
This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
You are free to:
Share - copy and redistribute the material in any medium or format
Adapt - remix, transform, and build upon the material for any purpose, even commercially, But with credit to the original author.
The licensor cannot revoke these freedoms as long as you follow the license terms.
Under the following terms:
Attribution - You must give appropriate credit, provide a link to the license, and indicate if changes were made. 
You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
ShareAlike - If you remix, transform, or build upon the material, you must ask the Owner of this mod if you can release it to the public.
No additional restrictions - You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.
*/

//Auto update 
 
var version="0.1";
var checkForUpdate=false;
var updateWindow=false; 
var newUpdate;
var updateMod; 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
 
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
                    clientMessage("New version! " + newUpdate);
                    updateWindow=true;
                }
                else if(version+"\n"==checkedVersion){
                clientMessage("No updates available");
                }
            }
            catch(err) {
                clientMessage("Update check failed ");
                if(err=="JavaException: java.net.UnknownHostException: raw.githubusercontent.com") {
                                clientMessage("No internet connection.");
                            }
                            else {
                                clientMessage("Error: \n" + err);
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
        upd.setMessage("An update to Useful Mod was found!\nWould you like to update it now?\nCurrent version: " + version + "\nNew version: " + newUpdate);
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
                                clientMessage("Downloaded and enabled!");
                                   
                            }
                            catch(err) {
                                clientMessage("Error: \n" + err);
                            }
                        }
                        catch(err) {
                            clientMessage("Error: \n" + err);
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
        clientMessage("Error: \n" + err);
    }
}

//GUI Code

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
			
            var button = new android.widget.Button(ctx);
            button.setText("Save Inventory");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
					
					function saveFile (directory, inventory) {
				try {
					directory = android.os.Environment.getExternalStorageDirectory ().getPath () + "/games/com.mojang/minecraftworlds" + getWorldDir () + "/" + directory; // The file should be saved into the world directory.
					var newFile = new java.io.File (directory,inventory);
					var directory = new java.io.File (directory);
					var success = directory.mkdirs (); // creates the directory if not already created
					if (!success){ // if not succeeded
						throw new java.io.IOException("Directory "+directory+ "cannot be created"); // throws an IOException. new java.io.IOException(String) has a string parameter as a message.
					}
					
					newFile.delete();
					/*newFile.createNewFile (); // creates a blank new file*/
					var outWrite = new java.io.OutputStreamWriter (new java.io.FileOutputStream (newFile)); // creates the output writer
					outWrite.append (Player.getInventorySlot(i));
					outWrite.close(); // closes the writer; not necessary to close, but better do it
					return false; // tells that it succeeds; not necessary to catch, but better do it
				}
				catch(thrown){ // catches the error in the try block
					return thrown.toString(); // returns a human-readable description of the error. The most common one is java.io.IOException that there is no such file
				}
			}

			function readFile (directory, inventory, wantBytes) { // wantBytes: true or false
				try{
					directory = android.os.Environment.getExternalStorageDirectory ().getPath () + "/games/com.mojang/minecraftworlds" + getWorldDir () + "/" + directory;
					var inFile = new java.io.File(directory,filename);
					if (!inFile.isFile()) return "notfile"; // check if it is a file
					var inStream = new java.io.FileReader (inFile);
					if (wantBytes) {
						inStream.read (bytes); // stores the contents into bytes
						var bytes = new Array();
						return bytes;
					}
					var inBuffer = new java.io.BufferedReader (inStream);
					var line = "",var returner = "";
					while ((line = inBuffer.readLine ()) != null) { // read http://docs.oracle.com/javase/7/docs/api/java/io/BufferedReader.html#readLine()
						returner = returner + line + java.lang.System.getProperty ("line.seperator");
					}
					return returner;
				}
				catch(error){
					return error.toString();
				}
			}
                }
            }));
            menuLayout.addView(button);
			
			var button2 = new android.widget.Button(ctx);
            button2.setText("Clear Inventory");
            button2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Player.clearInventory();
                }
            }));
            menuLayout.addView(button2);
			
			var button3 = new android.widget.Button(ctx);
            button3.setText("Load Inventory");
            button3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    //Your Code
                }
            }));
            menuLayout.addView(button3);
            
            var button10 = new android.widget.Button(ctx);
            button10.setText("Time");
            button10.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    //Your Code
                }
            }));
            menuLayout.addView(button10);
			
			var button4 = new android.widget.Button(ctx);
            button4.setText("Gamemode");
            button4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    
                }
            }));
            menuLayout.addView(button4);
			
			var button5 = new android.widget.Button(ctx);
            button5.setText("Flying On");
            button5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Player.setCanFly(true);
                    Player.setFlying(true);
                }
            }));
            menuLayout.addView(button5);
            
            var flyOff = new android.widget.Button(ctx);
            flyOff.setText("Flying Off");
            flyOff.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Player.setCanFly(false);
                    Player.setFlying(false);
                }
            }));
            menuLayout.addView(flyOff);
			
			var button6 = new android.widget.Button(ctx);
            button6.setText("Invulnerable Mode");
            button6.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    //Your Code
                }
            }));
            menuLayout.addView(button6);
			
			var button7 = new android.widget.Button(ctx);
            button7.setText("Ride an entity");
            button7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
					function attackHook(attacker, victim){
					rideAnimal(attacker, victim);
					clientMessage("Punch an animal to ride it");
					}
                }
            }));
            menuLayout.addView(button7);
			
			var button8 = new android.widget.Button(ctx);
            button8.setText("Teleport");
            button8.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    //Your Code
                }
            }));
            menuLayout.addView(button8);
			
			var button9 = new android.widget.Button(ctx);
            button9.setText("Commit Suicide");
            button9.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Player.setHealth(0);
                }
            }));
            menuLayout.addView(button9);
            
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

 if(checkForUpdate==false) {
        print("Checking for updates");
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    checkVersion();
                }
                catch(err) {
                    clientMessage("Error: \n"+err);
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
                    clientMessage("Error: \n" + err);
                }
            }
        }));
        updateWindow=false;
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