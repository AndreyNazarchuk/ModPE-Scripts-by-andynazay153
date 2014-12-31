var version="1.7";

var checkForUpdate=false;

var updateWindow=false;

var newUpdate;

var updateMod;

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

 

 function checkVersion() {

    var r = new java.lang.Runnable() {

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

                    print("§8[MH] §fNew version! " + newUpdate);

                    updateWindow=true;

                }

                else if(version+"\n"==checkedVersion){

                print("§8[TR] No updates available");

                }

            }

            catch(err) {

                print("§8[TR] Update check failed ");

                if(err=="JavaException: java.net.UnknownHostException: raw.githubusercontent.com") {

//problem may lie below
                            
print("§8[TR] No internet connection.");

                            }

                            else {

                                print("§8[TR] Error: \n" + err);

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

                var ru = new java.lang.Runnable() {

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

                                print("§3[TR] Update was downloaded and enabled!");

                                   

                            }

                            catch(err) {

                                print("§8[TR] Error: \n" + err);

                            }

                        }

                        catch(err) {

                            print("§8[TR] Error: \n" + err);

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

        print("§8[TR] Error: \n" + err);

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

                    print("§8[IS] Error: \n"+err);

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

                    print("§8[IS] Error: \n" + err);

                }

            }

        }}}));

        updateWindow=false;


//Lantern Code


	Block.defineBlock(250, "Lantern",[["redstone_lamp_on", 0],["redstone_lamp_on", 0],["redstone_lamp_on", 0],["redstone_lamp_on", 0],["redstone_lamp_on", 0],["redstone_lamp_on", 0]], 4, true, 0);

	Block.setDestroyTime(250,2);
	
	
	Block.setShape(250, 0, 0, 0, 2/4, 3/4, 2/4);

	Block.setLightLevel(250, 15);

	Item.setCategory(250,8,0);

	Item.addShapedRecipe(250, 4, 0, ["ipi","ptp","ipi"], ["t",50,0,"p",339,0]);

function newLevel(){

	clientMessage(ChatColor.GOLD + "Lantern " + ChatColor.WHITE + "by " + ChatColor.BLUE + "andynazay153 " + ChatColor.GREEN + "Loaded Successfully!");

	Player.addItemCreativeInv(250, 1, 0);

	}




function destroyBlock(x, y, z){

var blockId = Level.getTile(x, y, z);

if(blockId == 250){

preventDefault();

Level.destroyBlock(x, y, z, true);

}

}