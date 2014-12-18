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

//Update  Code

var version= "1.7";
var checkForUpdate=false;
var updateWindow=false;
var newUpdate;
var updateMod;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
 
 function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
                var urls= new java.net.URL("https://raw.githubusercontent.com/AndreyNazarchuk/ModPE-Scripts-by-andynazay153/master/ModPE/Mods/Lantern/lanternversion.txt");
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
        upd.setMessage("An update to Lantern was found!\nWould you like to update it now?\nCurrent version: " + version + "\nNew version: " + newUpdate);
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
                            var urls = new java.net.URL("https://raw.githubusercontent.com/AndreyNazarchuk/ModPE-Scripts-by-andynazay153/master/ModPE/Mods/Lantern/Lantern.js");
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

//Lantern Code

function newLevel(){
	Block.defineBlock(499,"Lantern",[["redstone_lamp_on", 0],["redstone_lamp_on", 0],["redstone_lamp_on", 0],["redstone_lamp_on", 0],["redstone_lamp_on", 0],["redstone_lamp_on", 0]]);
	Block.setDestroyTime(499,2);
	Block.setShape(499,0.5,0,0.5,0.5,0.5,0.5);
	Block.setLightLevel(499,16);
	Item.setCategory(499,8,0);
	Item.addShapedRecipe(499, 4, 0, ["p","ptp","p"], ["t",50,0,"p",339,0]);
	Player.addItemCreativeInv(499, 1, 0);
	if(!ModPE.readData("lanternintro")){
		clientMessage(ChatColor.GOLD + "Lantern " + ChatColor.WHITE + "by " + ChatColor.BLUE + "andynazay153" + ChatColor.GREEN + "Loaded Successfully!");
		ModPE.saveData("lanternintro", "LanternIntro");
	}
}

function destroyBlock(x, y, z){
var blockId = Level.getTile(x, y, z);
if(blockId == 499){
preventDefault();
Level.destroyBlock(x, y, z, true);
}
}
/*
function leaveGame(){
ModPE.resetImages();
}
*/