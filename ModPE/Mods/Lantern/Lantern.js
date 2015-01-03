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
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 

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
                    print("New version is avalible! " + newUpdate);
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
//Lantern Code
//                                    bottom?        top?

function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage) 
{
if(itemId==259&&blockId==250)
{
preventDefault()
Level.setTile(x, y, z, 251)
}
if(itemId==50&&blockId==250)
{
preventDefault()
Level.setTile(x, y, z, 252)
}
if(itemId==354&&blockId==250)
{
preventDefault()
Level.setTile(x, y, z, 253)
}
if(itemId==4&&blockId==250)
{
preventDefault()
Level.setTile(x, y, z, 254)
}
if(itemId==12&&blockId==250)
{
preventDefault()
Level.setTile(x, y, z, 249)
}
if(itemId==(1,12)&&blockId==250)
{
preventDefault()
Level.setTile(x, y, z, 248)
}
if(itemId==(8,325)&&blockId==250)
{
preventDefault()
Level.setTile(x, y, z, 247)
}
if(itemId==[10,325]&&blockId==250)
{
preventDefault()
Level.setTile(x, y, z, 246)
}}

	Block.defineBlock(250, "Lantern",[["cactus", 2],["cactus", 2],["cake_bottom", 0],["cake_bottom", 0],["cake_bottom", 0],["cake_bottom", 0]], 2, false, 0);
	Block.setDestroyTime(250,1);
	Block.setShape(250, 1/4, 0, 1/4, 3/4, 3/4, 3/4);
	Block.setLightLevel(250, 15);
	Item.setCategory(250,4,0);
	Item.addShapedRecipe(250, 4, 0, [
	" p ",
	"ptp",
	" p "], 
	["t",50,0,"p",339,0]);
	
	 	Block.defineBlock(251, "Lantern",[["cactus", 2],["cactus", 2],["fire", 0],["fire", 0],["fire", 0],["fire", 0]], 2, false, 0);
	Block.setDestroyTime(251,1);
	Block.setShape(251, 1/4, 0, 1/4, 3/4, 3/4, 3/4);
	Block.setLightLevel(251, 15);	
	
	
	 	 	Block.defineBlock(252, "Lantern",[["cactus", 2],["cactus", 2],["torch_on", 0],["torch_on", 0],["torch_on", 0],["torch_on", 0]], 2, false, 0);
	 	
Block.setDestroyTime(252,1);
Block.setShape(252, 1/4, 0, 1/4, 3/4, 3/4, 3/4);
	Block.setLightLevel(252, 15); 	
	
	 	Block.defineBlock(253, "Lantern",[["cactus", 2],["cactus", 2],["cake_top", 0],["cake_top", 0],["cake_top", 0],["cake_top", 0]], 2, false, 0);
	Block.setDestroyTime(253,1);
	Block.setShape(253, 1/4, 0, 1/4, 3/4, 3/4, 3/4);
	Block.setLightLevel(253, 15);
	
	 	Block.defineBlock(254, "Lantern",[["cactus", 2],["cactus", 2],["cobblestone", 0],["cobblestone", 0],["cobblestone", 0],["cobblestone", 0]], 2, false, 0);
	 	Block.setDestroyTime(254,1);
	Block.setShape(254, 1/4, 0, 1/4, 3/4, 3/4, 3/4);
	Block.setLightLevel(254, 15); 
	
		Block.defineBlock(249, "Lantern",[["cactus", 2],["cactus", 2],["sand", 0],["sand", 0],["sand", 0],["sand", 0]], 2, false, 0);
	Block.setDestroyTime(249,1);
	Block.setShape(249, 1/4, 0, 1/4, 3/4, 3/4, 3/4);
	Block.setLightLevel(249, 15);
	
		Block.defineBlock(248, "Lantern",[["cactus", 2],["cactus", 2],["sand", 1],["sand", 1],["sand", 1],["sand", 1]], 2, false, 0);
	Block.setDestroyTime(248,1);
	Block.setShape(248, 1/4, 0, 1/4, 3/4, 3/4, 3/4);
	Block.setLightLevel(248, 15);
	
	 		Block.defineBlock(247, "Lantern",[["cactus", 2],["cactus", 2],["flowing_water", 0],["flowing_water", 0],["flowing_water", 0],["flowing_water", 0]], 2, false, 0);
	Block.setDestroyTime(247,1);
	Block.setShape(247, 1/4, 0, 1/4, 3/4, 3/4, 3/4);
	Block.setLightLevel(247, 15);
	
	 		Block.defineBlock(246, "Lantern",[["cactus", 2],["cactus", 2],["flowing_lava", 0],["flowing_lava", 0],["flowing_lava", 0],["flowing_lava", 0]], 2, false, 0);
	Block.setDestroyTime(246,1);
	Block.setShape(246, 1/4, 0, 1/4, 3/4, 3/4, 3/4);
	Block.setLightLevel(246, 15);
	
function newLevel(){
	clientMessage(ChatColor.GOLD + "Lantern " + ChatColor.WHITE + "by " + ChatColor.BLUE + "Mattgo007 " + ChatColor.WHITE + "and " + ChatColor.RED + "andynazay153 " + ChatColor.GREEN + "Loaded Successfully!");
	Player.addItemCreativeInv(250, 1, 0);
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
        checkForUpdate=true;
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
 function procCmd(cmd) {
 if(cmd == "debuglantern"){
Player.addItemInventory(339,10);
Player.addItemInventory(50,10);
}
}
}
function destroyBlock(x, y, z){
	var blockId = Level.getTile(x, y, z);
	if(blockId == 250){
	preventDefault();
	Level.destroyBlock(x, y, z, true);
}
}
}