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
			
            /*
			var button = new android.widget.Button(ctx);
            button.setText("Save Inventory");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
					
					
                }
            }));
            menuLayout.addView(button);
			*/
			
			var button2 = new android.widget.Button(ctx);
            button2.setText("Clear Inventory");
            button2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Player.clearInventory();
                }
            }));
            menuLayout.addView(button2);
			
			/*
			var button3 = new android.widget.Button(ctx);
            button3.setText("Load Inventory");
            button3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    //Your Code
                }
            }));
            menuLayout.addView(button3);
			*/
            
            var button10 = new android.widget.Button(ctx);
            button10.setText("Set time to Day");
            button10.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Level.setTime(1000);
                }
            }));
            menuLayout.addView(button10);
			
			var button100 = new android.widget.Button(ctx);
            button100.setText("Set time to Night");
            button100.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Level.setTime(14000);
                }
            }));
            menuLayout.addView(button100);
			
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
            button6.setText("Infinite Health ON");
            button6.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
						Player.setHealth(99999999999);
                }
            }));
            menuLayout.addView(button6);
			
			var buttonInfHO = new android.widget.Button(ctx);
            buttonInfHO.setText("Infinite Health OFF");
            buttonInfHO.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
						Player.setHealth(20);
                }
            }));
            menuLayout.addView(buttonInfHO);
			
			var button7 = new android.widget.Button(ctx);
            button7.setText("Ride an entity");
            button7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
					preventDefault();
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
}