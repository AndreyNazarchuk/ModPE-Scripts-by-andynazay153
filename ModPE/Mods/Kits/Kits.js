/*
Made by andynazay153.
This is my mod. Please do not copy or add it to anything or make a video without giving me credit ;)
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

//Update Code 
 
var version="6.2";
var checkForUpdate=false;
var updateWindow=false; 
var newUpdate;
var updateMod;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 

if(!ModPE.readData("KitsGUI")){
function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
                var urls= new java.net.URL("https://raw.githubusercontent.com/AndreyNazarchuk/ModPE-Scripts-by-andynazay153/master/ModPE/Mods/Kits/KitsVersion.txt");
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
                    clientMessage("§8[MH] §fNew version! " + newUpdate);
                    updateWindow=true;
                }
                else if(version+"\n"==checkedVersion){
                clientMessage("§8[TR] No updates available");
                }
            }
            catch(err) {
                clientMessage("§8[TR] Update check failed ");
                if(err=="JavaException: java.net.UnknownHostException: raw.githubusercontent.com") {
                                clientMessage("§8[TR] No internet connection.");
                            }
                            else {
                                clientMessage("§8[TR]   Error: \n" + err);
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
        upd.setMessage("An update to Kits was found!\nWould you like to update it now?\nCurrent version: " + version + "\nNew version: " + newUpdate);
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
                            var urls = new java.net.URL("https://raw.githubusercontent.com/AndreyNazarchuk/ModPE-Scripts-by-andynazay153/master/ModPE/Mods/Kits/Kits.js");
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
                            var modpeFile = new java.io.File(modpeFolder, "Kits.js");
                            var update = new java.io.PrintWriter(modpeFile);
                            update.write(updateMod);
                            update.flush();
                            update.close();
                             
                            try {
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, false);
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, true);
                                clientMessage("§3[TR] Downloaded and enabled!");
                                   
                            }
                            catch(err) {
                                clientMessage("§8[TR] Error: \n" + err);
                            }
                        }
                        catch(err) {
                            clientMessage("§8[TR] Error: \n" + err);
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
        clientMessage("§8[TR] Error: \n" + err);
    }
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

//Kits Code
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
	if(!ModPE.readData("kitsintro")){
	clientMessage(ChatColor.BLUE + "Kits " + ChatColor.WHITE + "by " + ChatColor.GOLD + "andynazay153" + ChatColor.GREEN + "Loaded Successfully!");
	ModPE.saveData("kitsintro", "KitsIntro");
	}
function procCmd(cmd) {
 if(cmd == "kits off"){
 ModPE.saveData(KitsGUI, off);
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
 else if(cmd == "kits on"){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);

            var menuBtn = new android.widget.Button(ctx);
            menuBtn.setText("Kits");
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    mainMenu();
                }
            }));
            layout.addView(menuBtn);

            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
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
			var buttonClearInv = new android.widget.Button(ctx);
            button1.setText("Clear Inventory");
            button1.setOnClickListener(new android.view.View.OnClickListener({
             onClick: function(viewarg){
			  Player.clearInventory();
			   }
            }));
            menuLayout.addView(buttonClearInv);
			
			var button1 = new android.widget.Button(ctx);
            button1.setText("Starter");
            button1.setOnClickListener(new android.view.View.OnClickListener({
             onClick: function(viewarg){
              Player.addItemInventory(298,1);
			  Player.addItemInventory(299,1);
			  Player.addItemInventory(300,1);
			  Player.addItemInventory(301,1);
			  Player.addItemInventory(364,10);
			  Player.addItemInventory(392,5);
			  Player.addItemInventory(393,20);
			  Player.addItemInventory(295,5);
			  Player.addItemInventory(362,5);
			  Player.addItemInventory(355,1);
			  Player.addItemInventory(273,1);
			  Player.addItemInventory(274,1);
			  Player.addItemInventory(275,1);
			  Player.addItemInventory(272,1);
			  Player.addItemInventory(291,1);
			  Player.addItemInventory(17,64);
			  Player.addItemInventory(54,1);
			  Player.addItemInventory(58,1);
			  Player.addItemInventory(61,1);
			  Player.addItemInventory(345,1);
			  Player.addItemInventory(297,20);
			  Player.addItemInventory(50,64);
			  clientMessage(ChatColor.GREEN + "Have Fun!");
                }
            }));
            menuLayout.addView(button1);
			var button34 = new android.widget.Button(ctx); 
			button34.setText("Food");
			button34.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(320,16);
				Player.addItemInventory(364,16);
				Player.addItemInventory(393,16);
				Player.addItemInventory(366,16);
				Player.addItemInventory(459,16);
				Player.addItemInventory(282,16);
				Player.addItemInventory(297,16);
				Player.addItemInventory(391,16);
				Player.addItemInventory(400,16);
				Player.addItemInventory(260,16);
				Player.addItemInventory(360,16);
				Player.addItemInventory(354,16);
				Player.addItemInventory(357,16);
				clientMessage("All MCPE foods have been added to your inventory");
			 } }));
			 menuLayout.addView(button34);
			var button2 = new android.widget.Button(ctx); 
			button2.setText("Sniper");
			button2.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
			  Player.addItemInventory(261,1);
			  Player.addItemInventory(262,64);
			  Player.addItemInventory(298,1);
			  Player.addItemInventory(299,1);
			  Player.addItemInventory(300,1);
			  Player.addItemInventory(301,1);
			  Player.addItemInventory(260,25)
			  clientMessage("Sniper kit has been added to your inventory!");
			 } }));
			menuLayout.addView(button2);
			var button3 = new android.widget.Button(ctx); 
			button3.setText("Heavy");
			button3.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
			  Player.addItemInventory(314,1);
			  Player.addItemInventory(315,1);
			  Player.addItemInventory(316,1);
			  Player.addItemInventory(317,1);
			  Player.addItemInventory(268,1);
			  Player.addItemInventory(364,32);
			  clientMessage("Heavy Kit Has Been Added To Your Inventory!");
			 } }));
			 menuLayout.addView(button3);
			var button4 = new android.widget.Button(ctx); 
			button4.setText("Miner");
			button4.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(257,1);
				Player.addItemInventory(50,64);
				clientMessage("Miner Kit Has Been Added To Your Inventory!");
			 } }));
			 menuLayout.addView(button4);
			var button5 = new android.widget.Button(ctx); 
			button5.setText("Farmer");
			button5.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(292,1);
				Player.addItemInventory(325,5);
				Player.addItemInventory(391,5);
				Player.addItemInventory(392,5);
				Player.addItemInventory(458,5);
				Player.addItemInventory(295,5);
				Player.addItemInventory(361,5);
				Player.addItemInventory(362,5);
				clientMessage("Farmer Kit Has Been Added to Your Inventory!");
			 } }));
			 menuLayout.addView(button5);
			var button6 = new android.widget.Button(ctx); 
			button6.setText("LumberJack");
			button6.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(258,1);
				Player.addItemInventory(298,1);
				Player.addItemInventory(299,1);
				Player.addItemInventory(300,1);
				Player.addItemInventory(301,1);
				clientMessage("Lumberjack Kit Has Been Added To Your Inventory!");
			 } }));
			 menuLayout.addView(button6);
			var button7 = new android.widget.Button(ctx); 
			button7.setText("Smelter");
			button7.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(61,1);
				Player.addItemInventory(263,64);
				Player.addItemInventory(15,10);
				Player.addItemInventory(14,10);
				clientMessage("Smelter Kit Has Been Added To Your Inventory!");
			 } }));
			 menuLayout.addView(button7);
			var button8 = new android.widget.Button(ctx); 
			button8.setText("Warrior");
			button8.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(306,1);
				Player.addItemInventory(307,1);
				Player.addItemInventory(308,1);
				Player.addItemInventory(309,1);
				Player.addItemInventory(267,1);
				clientMessage("Warrior kit has been added to your inventory!");
			 } }));
			 menuLayout.addView(button8);
			var button9 = new android.widget.Button(ctx); 
			button9.setText("Demolisher");
			button9.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(46,64);
				Player.addItemInventory(259,1);
				Player.addItemInventory(10,64);
				Player.addItemInventory(272,1);
				clientMessage("Thinking of greifing?");
			 } }));
			 menuLayout.addView(button9);
			var button10 = new android.widget.Button(ctx); 
			button10.setText("Light Scout");
			button10.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(261,1);
				Player.addItemInventory(262,16);
				Player.addItemInventory(272,1);
				Player.addItemInventory(301,1);
				clientMessage("Going Scouting?");
			 } }));
			 menuLayout.addView(button10);
			var button11 = new android.widget.Button(ctx); 
			button11.setText("Heavy Scout");
			button11.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(276,1);
				Player.addItemInventory(262,64);
				Player.addItemInventory(261,1);
				clientMessage("Heavy Scout kit has been added to your inventory!");
			 } }));
			 menuLayout.addView(button11);
			var button12 = new android.widget.Button(ctx); 
			button12.setText("Knight");
			button12.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(267,1);
				Player.addItemInventory(302,1);
				Player.addItemInventory(303,1);
				Player.addItemInventory(304,1);
				Player.addItemInventory(305,1);
				clientMessage("Knight kit has been added to your inventory!");
			 } }));
			 menuLayout.addView(button12);
			var button13 = new android.widget.Button(ctx); 
			button13.setText("King");
			button13.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(314,1);
				Player.addItemInventory(299,1);
				Player.addItemInventory(300,1);
				Player.addItemInventory(301,1);
				Player.addItemInventory(282,5);
				Player.addItemInventory(256,1);
				Player.addItemInventory(257,1);
				Player.addItemInventory(258,1);
				Player.addItemInventory(267,1);
				Player.addItemInventory(292,1);
				clientMessage("Long live the King!");
			 } }));
			 menuLayout.addView(button13);
			var button14 = new android.widget.Button(ctx); 
			button14.setText("Thief");
			button14.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(298,1);
				Player.addItemInventory(300,1);
				Player.addItemInventory(391,1);
				Player.addItemInventory(257,1);
				Player.addItemInventory(258,1);
				Player.addItemInventory(8,1);
				Player.addItemInventory(325,1);
				clientMessage("Don't get caught!");
			 } }));
			 menuLayout.addView(button14);
			var button15 = new android.widget.Button(ctx); 
			button15.setText("Sheriff");
			button15.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(267,1);
				Player.addItemInventory(306,1);
				Player.addItemInventory(307,1);
				Player.addItemInventory(308,1);
				Player.addItemInventory(309,1);
				Player.addItemInventory(259,1);
				Player.addItemInventory(364,64);
				clientMessage("Does not include donuts and coffee");
			 } }));
			 menuLayout.addView(button15);
			var button16 = new android.widget.Button(ctx); 
			button16.setText("Trooper");
			button16.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(276,1);
				Player.addItemInventory(302,1);
				Player.addItemInventory(303,1);
				Player.addItemInventory(304,1);
				Player.addItemInventory(305,1);
				Player.addItemInventory(261,1);
				Player.addItemInventory(262,64);
				Player.addItemInventory(259,1);
				Player.addItemInventory(46,10);
				clientMessage("Trooper kit has been added to your inventory");
			 } }));
			 menuLayout.addView(button16);
			var button17 = new android.widget.Button(ctx); 
			button17.setText("Gamer");
			button17.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(267,1);
				Player.addItemInventory(306,1);
				Player.addItemInventory(307,1);
				Player.addItemInventory(308,1);
				Player.addItemInventory(309,1);
				Player.addItemInventory(393,64);
				Player.addItemInventory(276,1);
				Player.addItemInventory(277,1);
				Player.addItemInventory(278,1);
				Player.addItemInventory(279,1);
				Player.addItemInventory(293,1);
				Player.addItemInventory(46,12);
				Player.addItemInventory(259,1);
				clientMessage("Game on!!!");
			 } }));
			 menuLayout.addView(button17);
			var button18 = new android.widget.Button(ctx); 
			button18.setText("Pirate");
			button18.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(261,1);
				Player.addItemInventory(262,10);
				Player.addItemInventory(46,10);
				Player.addItemInventory(272,1);
				clientMessage("Arrrgh!");
			 } }));
			 menuLayout.addView(button18);
			/*var button19 = new android.widget.Button(ctx); 
			button19.setText("Tamer");
			button19.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Level.spawnMob(x-1,y+2,z,15,"image");
				Level.spawnMob(x-2,y+2,z,15,"image");
				Level.spawnMob(x,y+2,z,15,"image");
				Level.spawnMob(x+1,y+2,z,15,"image");
				Level.spawnMob(x+2,y+2,z,15,"image");
				Player.addItemInventory(352,64);
				Player.addItemInventory(364,64);
				Player.addItemInventory(267,1);
				clientMessage("Tamer kit has been added to your inventory");
			 } }));
			 menuLayout.addView(button19);*/
			var button20 = new android.widget.Button(ctx); 
			button20.setText("Hunter");
			button20.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(276,1);
				Player.addItemInventory(298,1);
				Player.addItemInventory(299,1);
				Player.addItemInventory(300,1);
				Player.addItemInventory(301,1);
				Player.addItemInventory(261,1);
				Player.addItemInventory(262,64);
				Player.addItemInventory(260,16);
				clientMessage("Happy Hunting!");
			 } }));
			 menuLayout.addView(button20);
			var button21 = new android.widget.Button(ctx); 
			button21.setText("Scientist");
			button21.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(267,1);
				Player.addItemInventory(393,1);
				Player.addItemInventory(293,1);
				Player.addItemInventory(277,1);
				clientMessage("Happy Inventing!");
			 } }));
			 menuLayout.addView(button21);
			var button22 = new android.widget.Button(ctx); 
			button22.setText("Executioner");
			button22.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				clientMessage("This better be for a good reason");
				Player.addItemInventory(298,1);
				Player.addItemInventory(307,1);
				Player.addItemInventory(300,1);
				Player.addItemInventory(301,1);
				Player.addItemInventory(258,1);
				Player.addItemInventory(391,10);
			 } }));
			 menuLayout.addView(button22);
			var button23 = new android.widget.Button(ctx); 
			button23.setText("Adventurer");
			button23.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(302,1);
				Player.addItemInventory(303,1);
				Player.addItemInventory(304,1);
				Player.addItemInventory(305,1);
				Player.addItemInventory(272,1);
				Player.addItemInventory(273,1);
				Player.addItemInventory(274,1);
				Player.addItemInventory(275,1);
				Player.addItemInventory(345,1);
				Player.addItemInventory(347,1);
				Player.addItemInventory(364,64);
				clientMessage("Adventure is out there!");
			 } }));
			 menuLayout.addView(button23);
			var button24 = new android.widget.Button(ctx); 
			button24.setText("Baker");
			button24.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(297,16);
				Player.addItemInventory(354,5);
				Player.addItemInventory(367,16);
				Player.addItemInventory(61,1);
				Player.addItemInventory(263,10);
				clientMessage("Baker kit has been added to your inventory");
			 } }));
			 menuLayout.addView(button24);
			var button28 = new android.widget.Button(ctx); 
			button28.setText("Admin");
			button28.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(276,1);
				Player.addItemInventory(277,1);
				Player.addItemInventory(278,1);
				Player.addItemInventory(279,1);
				Player.addItemInventory(310,1);
				Player.addItemInventory(311,1);
				Player.addItemInventory(312,1);
				Player.addItemInventory(313,1);
				Player.addItemInventory(4,64);
				clientMessage("Admin kit has been added to your inventory");
			 } }));
			 menuLayout.addView(button28);
			var button29 = new android.widget.Button(ctx); 
			button29.setText("VIP");
			button29.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(306,1);
				Player.addItemInventory(307,1);
				Player.addItemInventory(308,1);
				Player.addItemInventory(309,1);
				Player.addItemInventory(257,1);
				Player.addItemInventory(258,1);
				Player.addItemInventory(267,1);
				Player.addItemInventory(256,1);
				Player.addItemInventory(5,64);
				clientMessage("VIP kit has been added to your inventory");
			 } }));
			 menuLayout.addView(button29);
			var button30 = new android.widget.Button(ctx); 
			button30.setText("Super VIP");
			button30.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(306,1);
				Player.addItemInventory(307,1);
				Player.addItemInventory(308,1);
				Player.addItemInventory(309,1);
				Player.addItemInventory(276,1);
				Player.addItemInventory(277,1);
				Player.addItemInventory(278,1);
				Player.addItemInventory(279,1);
				clientMessage("Super VIP kit has been added to your inventory");
			 } }));
			 menuLayout.addView(button30);
			var button31 = new android.widget.Button(ctx); 
			button31.setText("Trapper");
			button31.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(261,1);
				Player.addItemInventory(262,64);
				Player.addItemInventory(301,1);
				Player.addItemInventory(299,1);
				Player.addItemInventory(17,1);
				Player.addItemInventory(363,1);
				clientMessage("Trapper kit has been added to your inventory");
			 } }));
			 menuLayout.addView(button31);
			var button32 = new android.widget.Button(ctx); 
			button32.setText("Guardian");
			button32.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(314,1);
				Player.addItemInventory(315,1);
				Player.addItemInventory(316,1);
				Player.addItemInventory(317,1);
				Player.addItemInventory(276,1);
				Player.addItemInventory(54,1);
				Player.addItemInventory(354,1);
				Player.addItemInventory(10,1);
				Player.addItemInventory(325,1);
				clientMessage("Guardian kit has been added to your inventory");
			 } }));
			 menuLayout.addView(button32);
			var button33 = new android.widget.Button(ctx); 
			button33.setText("FrogMan");
			button33.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(298,1);
				Player.addItemInventory(299,1);
				Player.addItemInventory(300,1);
				Player.addItemInventory(301,1);
				Player.addItemInventory(46,64);
				Player.addItemInventory(259,1);
				Player.addItemInventory(65,64);
				clientMessage("Frogman kit has been added to your inventory");
			 } }));
			 menuLayout.addView(button33);
						var button25 = new android.widget.Button(ctx); 
			button25.setText("Mine Manager");
			button25.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(278,1);
				Player.addItemInventory(354,1);
				Player.addItemInventory(66,64);
				Player.addItemInventory(27,64);
				Player.addItemInventory(328,1);
				Player.addItemInventory(306,1);
				clientMessage("Mine manager kit has been added to your inventory");
			 } }));
			 menuLayout.addView(button25);
			var button26 = new android.widget.Button(ctx); 
			button26.setText("Construction Worker");
			button26.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(306,1);
				Player.addItemInventory(257,1);
				Player.addItemInventory(5,64);
				Player.addItemInventory(4,64);
				Player.addItemInventory(366,32);
				clientMessage("Happy building!");
			 } }));
			 menuLayout.addView(button26);
			var button27 = new android.widget.Button(ctx); 
			button27.setText("Construction Manager");
			button27.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(278,1);
				Player.addItemInventory(354,1);
				Player.addItemInventory(27,64);
				Player.addItemInventory(66,64);
				Player.addItemInventory(328,1);
				Player.addItemInventory(306,1);
				Player.addItemInventory(4,64);
				Player.addItemInventory(5,64);
				Player.addItemInventory(366,32);
				Player.addItemInventory(299,1);
				Player.addItemInventory(300,1);
				Player.addItemInventory(301,1);
				clientMessage("Construction manager kit has been added to your inventory");
			 } }));
			 menuLayout.addView(button27);
			var button35 = new android.widget.Button(ctx); 
			button35.setText("EPIC");
			button35.setOnClickListener(new android.view.View.OnClickListener({
			 onClick: function(viewarg){
				Player.addItemInventory(310,1);
				Player.addItemInventory(311,1);
				Player.addItemInventory(312,1);
				Player.addItemInventory(313,1);
				Player.addItemInventory(276,1);
				Player.setHealth(1);
				clientMessage(ChatColor.AQUA + "CHEATER!!!");
			 } }));
			  menuLayout.addView(button35);
			  
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

            menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight());
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
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
}
}
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