/*
Boxer Mod - by andynazay153
this mod makes fists hurt like any sword :D idea from: https://www.minecraftpvp.com/kits
This is my mod. Please do not copy or add it to anything without asking me ;). If edited and redistributed then all credit GOES TO ME.
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

var boxer = true

function procCmd(cmd)
{
var cmd = cmd.split (" ");
{
if (cmd[0] == "boxer" && cmd[1] == "off"){
	if(boxer = true){
		boxer = false
		clientMessage("Boxer Fists disabled.");
}
}
	else if(boxer = false){
		clientMessage("Boxer Fists already off");
}		boxer = true
		clientMessage("Boxer Fists enabled");
}
if (cmd[0] == "boxer" && cmd[1] == "on"){
  if(boxer = true){
		clientMessage("Boxer Fists already on");
}	else if (boxer = false){
}
}if (cmd[0] == ""){
  clientMessage("");
}if (cmd[0] == ""){
  clientMessage("");
}if (cmd[0] == "" && cmd[1] == ""){
  clientMessage("");
  clientMessage("");
}else if (cmd[0] == "" && cmd[1] == ""){
  clientMessage("");
}if (cmd[0] == "" && cmd[1] == ""){
  clientMessage("");
}else if (cmd[0] == "" && cmd[1] == ""){

}if (cmd[0] == "boxer"){
	clientMessage("Boxer Help:");
	clientMessage("");
	clientMessage("");
	clientMessage("");
	clientMessage("");
	clientMessage("");
	clientMessage("");
}
}