//Look for text like this with // at the beginning to see what to change.
//Also, change all parts where it says [Mini Blocks] to your mods name


var version="v1.4"; //Change v1.4 to whatever version your mod is updating to.
var checkForUpdate=false;
var updateWindow=false; 
var newUpdate;
var updateMod; 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
 
 function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
                var urls= new java.net.URL("https://raw.githubusercontent.com/thejaustin/ModPE/master/MiniBlocksVersion"); //Change this to whatever site you're using to post the update on. View this link to see what it does. I prefer GitHub, but that's just me.
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
                    clientMessage("§8[Mini Blocks] §fMini Blocks Mod has an update! " + newUpdate);
                    updateWindow=true; //Change "Mini Blocks Mod has an update" by removing 'Mini Blocks Mod' and changing it to the name of your mod.
                }
                else if(version+"\n"==checkedVersion){
                clientMessage("§8[Mini Blocks] There aren't any updates right now");
                }
            }
            catch(err) {
                clientMessage("§8[Mini Blocks] Update check failed ");
                if(err=="JavaException: java.net.UnknownHostException: raw.githubusercontent.com") {
                                clientMessage("§8[Mini Blocks] Cannot connect to internet.");
                            }
                            else {
                                clientMessage("§8[Mini Blocks]   Error: \n" + err);
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
        upd.setTitle("Mini Blocks Mod has an update!"); //Change to name of your mod
        upd.setMessage("thejaustin's Mini Blocks Mod has an update!\nDo you want to update it now?\nCurrent version: " + version + "\nNew version: " + newUpdate); //Change Mini Blocks to whatever your mod is called
        upd.setNegativeButton("Maybe Later", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
            dialog.dismiss(); 
   }
        });
        upd.setPositiveButton("Update it!", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
                var ru  = new java.lang.Runnable() {
                    run: function() {
                        try {
                            var urls = new java.net.URL("https://raw.githubusercontent.com/thejaustin/ModPE/master/Mini%20Blocks%20Mod%20v1.4"); //Change this to a link to a .js file. It'll work good with dropbox too.
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
                            var modpeFile = new java.io.File(modpeFolder, "Mini Blocks Mod v1.4.js"); //Change this to what you want the mod to be called when downloaded
                            var update = new java.io.PrintWriter(modpeFile);
                            update.write(updateMod);
                            update.flush();
                            update.close();
                             
                            try {
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, false);
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, true);
                                clientMessage("§3[Mini Blocks] thejaustin's Mini Blocks Mod has been downloaded and is enabled!"); //Change this to name of your mod
                                   
                            }
                            catch(err) {
                                clientMessage("§8[Mini Blocks] Error: \n" + err);
                            }
                        }
                        catch(err) {
                            clientMessage("§8[Mini Blocks] Error: \n" + err);
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
        clientMessage("§8[Mini Blocks] Error: \n" + err);
    }
}
  
 function modTick(){
 if(checkForUpdate==false) {
        print("Checking for an update");
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    checkVersion();
                }
                catch(err) {
                    clientMessage("§8[Mini Blocks] Error: \n"+err);
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
                    clientMessage("§8[Mini Blocks] Error: \n" + err);
                }
            }
        }));
        updateWindow=false;
    } 
 } 