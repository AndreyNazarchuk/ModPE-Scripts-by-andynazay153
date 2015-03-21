var checkForUpdates=false;
var version=1.6;
var versionCheck=CheckForUpdates();
var check=false;
var activity=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
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
	