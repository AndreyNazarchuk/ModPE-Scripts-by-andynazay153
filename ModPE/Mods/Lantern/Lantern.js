/*
Made by andynazay153 and Mattgo007.
This is my mod. Please do not copy or add it to anything or make a video without asking me ;)
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
var version = "0.9"; 
var checkForUpdate=false;
var updateWindow=false; 
var newUpdate;
var updateMod;

 function dip2px(ctx, dips){
 return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
} 

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
        upd.setMessage("An update to Lantern was found!\nWould you like to update it?\nYour version: " + version + "\nNew version: " + newUpdate +" \n\nTo update later click [IS] --> Extra --> Check for Updates." );
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
                            var modpeFile = new java.io.File(modpeFolder, "Lantern.js");
                            var update = new java.io.PrintWriter(modpeFile);
                            update.write(updateMod);
                            update.flush();
                            update.close();
                            
                            try {
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, false);
                                net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(modpeFile, true);
								clientMessage("§3[IS] Downloaded and enabled!");
								  
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
//Lantern Code

	Block.defineBlock(250, "Lantern",[["stained_clay", 0],["stained_clay", 0],["stained_clay", 0],["stained_clay", 0],["stained_clay", 0],["stained_clay", 0]], 2, false, 0);
	Block.setDestroyTime(250,2);
	Block.setShape(250, .25, .25, 0, .75, .75, .50);
	Block.setLightLevel(250, 15);
	Item.setCategory(250,8,0);
	Item.addShapedRecipe(250, 4, 0, [
	" p ",
	"ptp",
	" p "], [
	"t",50,0,
	"p",339,0]);

function newLevel(){
	clientMessage(ChatColor.GOLD + "Lantern " + ChatColor.WHITE + "by " + ChatColor.BLUE + "andynazay153 and Mattgo007" + ChatColor.GREEN + "Loaded Successfully!");
	Player.addItemCreativeInv(250, 1, 0);
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
function destroyBlock(x, y, z){
	var blockId = Level.getTile(x, y, z);
	if(blockId == 250){
	preventDefault();
	Level.destroyBlock(x, y, z, true);
}
}
}