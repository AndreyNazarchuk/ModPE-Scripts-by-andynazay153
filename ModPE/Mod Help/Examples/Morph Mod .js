/*Made by PEModder ;)*/

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var GUI;

function leaveGame(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
if(GUI!=null){
GUI.dismiss();
GUI = null;
}
}}));
}

function newLevel(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{

var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);

var button = new android.widget.Button(ctx);
button.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
morphMenu();
}}));
button.setText("M");

layout.addView(button);

GUI = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);

} catch(err){
print("Err: " + err);
}
}}));
}

function morphMenu(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{

var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
var scroll2 = new android.widget.ScrollView(ctx);
scroll2.addView(layout2);
var txt = new android.widget.TextView(ctx);
txt.setText("Change to 3rd Person View!");
var dialog = new android.app.Dialog(ctx);
dialog.setContentView(scroll2);
dialog.setTitle(" Morph Mod ");

layout2.addView(txt);

var steve = new android.widget.Button(ctx);
steve.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 3);
Entity.setMobSkin(Player.getEntity(), "mob/char.png");
}});
steve.setText("Steve (Normal)");
layout2.addView(steve);

var chicken = new android.widget.Button(ctx);
chicken.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 5);
Entity.setMobSkin(Player.getEntity(), "mob/chicken.png");
}});
chicken.setText("Chicken");
layout2.addView(chicken);

var cow = new android.widget.Button(ctx);
cow.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 6);
Entity.setMobSkin(Player.getEntity(), "mob/cow.png");
}});
cow.setText("Cow");
layout2.addView(cow);

var mooshroom = new android.widget.Button(ctx);
mooshroom.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 7);
Entity.setMobSkin(Player.getEntity(), "mob/mooshroom.png");
}});
mooshroom.setText("Mooshroom");
layout2.addView(mooshroom);

var pig = new android.widget.Button(ctx);
pig.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 8);
Entity.setMobSkin(Player.getEntity(), "mob/pig.png");
}});
pig.setText("Pig");
layout2.addView(pig);

var sheep = new android.widget.Button(ctx);
sheep.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
sheepMenu();
}});
sheep.setText("Sheep");
layout2.addView(sheep);

var villager = new android.widget.Button(ctx);
villager.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
villagerMenu();
}});
villager.setText("Villager");
layout2.addView(villager);

var zombie = new android.widget.Button(ctx);
zombie.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 13);
Entity.setMobSkin(Player.getEntity(), "mob/zombie.png");
}});
zombie.setText("Zombie");
layout2.addView(zombie);

var skeleton = new android.widget.Button(ctx);
skeleton.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 14);
Entity.setMobSkin(Player.getEntity(), "mob/skeleton.png");
}});
skeleton.setText("Skeleton");
layout2.addView(skeleton);

var spider = new android.widget.Button(ctx);
spider.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 15);
Entity.setMobSkin(Player.getEntity(), "mob/spider.png");
}});
spider.setText("Spider");
layout2.addView(spider);

var silverfish = new android.widget.Button(ctx);
silverfish.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 16);
Entity.setMobSkin(Player.getEntity(), "mob/silverfish.png");
}});
silverfish.setText("Silverfish");
layout2.addView(silverfish);

var creeper = new android.widget.Button(ctx);
creeper.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 17);
Entity.setMobSkin(Player.getEntity(), "mob/creeper.png");
}});
creeper.setText("Creeper");
layout2.addView(creeper);

var enderman = new android.widget.Button(ctx);
enderman.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 19);
Entity.setMobSkin(Player.getEntity(), "mob/enderman.png");
}});
enderman.setText("Enderman");
layout2.addView(enderman);

var pZombie = new android.widget.Button(ctx);
pZombie.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 21);
Entity.setMobSkin(Player.getEntity(), "mob/pigzombie.png");
}});
pZombie.setText("Zombie Pigman");
layout2.addView(pZombie);

dialog.show();

} catch(err){
print("Err: " + err);
}
}}));
}

function villagerMenu(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{

var layout4 = new android.widget.LinearLayout(ctx);
layout4.setOrientation(1);

var scroll4 = new android.widget.ScrollView(ctx);
scroll4.addView(layout4);

var dialog = new android.app.Dialog(ctx);
dialog.setContentView(scroll4);
dialog.setTitle(" Villager ");

var textview = new android.widget.TextView(ctx);
textview.setText("Choose your outfit!");

layout4.addView(textview);

var Nvillager = new android.widget.Button(ctx);
Nvillager.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 11);
Entity.setMobSkin(Player.getEntity(), "mob/villager/villager.png");
}});
Nvillager.setText("Villager");
layout4.addView(Nvillager);

var butcher = new android.widget.Button(ctx);
butcher.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 11);
Entity.setMobSkin(Player.getEntity(), "mob/villager/butcher.png");
}});
butcher.setText("Butcher");
layout4.addView(butcher);

var farmer = new android.widget.Button(ctx);
farmer.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 11);
Entity.setMobSkin(Player.getEntity(), "mob/villager/farmer.png");
}});
farmer.setText("Farmer");
layout4.addView(farmer);

var librarian = new android.widget.Button(ctx);
librarian.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 11);
Entity.setMobSkin(Player.getEntity(), "mob/villager/librarian.png");
}});
librarian.setText("Librarian");
layout4.addView(librarian);

var priest = new android.widget.Button(ctx);
priest.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 11);
Entity.setMobSkin(Player.getEntity(), "mob/villager/priest.png");
}});
priest.setText("Priest");
layout4.addView(priest);

var smith = new android.widget.Button(ctx);
smith.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 11);
Entity.setMobSkin(Player.getEntity(), "mob/villager/smith.png");
}});
smith.setText("Smith");
layout4.addView(smith);

dialog.show();

} catch(err){
print("Err: " + err);
}
}}));
}

function sheepMenu(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{

var layout3 = new android.widget.LinearLayout(ctx);
layout3.setOrientation(1);

var scroll3 = new android.widget.ScrollView(ctx);
scroll3.addView(layout3);

var dialog = new android.app.Dialog(ctx);
dialog.setContentView(scroll3);
dialog.setTitle(" Sheep ");

var text = new android.widget.TextView(ctx);
text.setText("Choose the color you want!");

layout3.addView(text);

var white = new android.widget.Button(ctx);
white.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_0.png");
}});
white.setText("White");
layout3.addView(white);

var orange = new android.widget.Button(ctx);
orange.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_1.png");
}});
orange.setText("Orange");
layout3.addView(orange);

var magenta = new android.widget.Button(ctx);
magenta.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_2.png");
}});
magenta.setText("Magenta");
layout3.addView(magenta);

var Lblue = new android.widget.Button(ctx);
Lblue.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_3.png");
}});
Lblue.setText("Light Blue");
layout3.addView(Lblue);

var yellow = new android.widget.Button(ctx);
yellow.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_4.png");
}});
yellow.setText("Yellow");
layout3.addView(yellow);

var LGreen = new android.widget.Button(ctx);
LGreen.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_5.png");
}});
LGreen.setText("Light Green");
layout3.addView(LGreen);

var pink = new android.widget.Button(ctx);
pink.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_6.png");
}});
pink.setText("Pink");
layout3.addView(pink);

var DGray = new android.widget.Button(ctx);
DGray.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_7.png");
}});
DGray.setText("Dark Gray");
layout3.addView(DGray);

var LGray = new android.widget.Button(ctx);
LGray.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_8.png");
}});
LGray.setText("Light Gray");
layout3.addView(LGray);

var cyan = new android.widget.Button(ctx);
cyan.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_9.png");
}});
cyan.setText("Cyan");
layout3.addView(cyan);

var purple = new android.widget.Button(ctx);
purple.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_10.png");
}});
purple.setText("Purple");
layout3.addView(purple);

var Dblue = new android.widget.Button(ctx);
Dblue.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_11.png");
}});
Dblue.setText("Dark Blue");
layout3.addView(Dblue);

var brown = new android.widget.Button(ctx);
brown.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_12.png");
}});
brown.setText("Brown");
layout3.addView(brown);

var DGreen = new android.widget.Button(ctx);
DGreen.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_13.png");
}});
DGreen.setText("Dark Green");
layout3.addView(DGreen);

var red = new android.widget.Button(ctx);
red.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_14.png");
}});
red.setText("Red");
layout3.addView(red)

var black = new android.widget.Button(ctx);
black.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
dialog.dismiss();
Entity.setRenderType(Player.getEntity(), 9);
Entity.setMobSkin(Player.getEntity(), "mob/sheep_15.png");
}});
black.setText("Black");
layout3.addView(black);

dialog.show();

} catch(err){
print("Err: " + err);
}
}}));
}