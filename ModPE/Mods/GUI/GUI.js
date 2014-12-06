https://github.com/BeATz-UnKNoWN/ModPE_Scripts/wiki/ModPE-Script-Templates

var button = new android.widget.Button(ctx);
button.setText("Button");
button.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
//Your Code
}
}));
menuLayout.addView(button);

This is your first button. To make another one you would "clone" it with another variable name. Let's call it button2.

var button2 = new android.widget.Button(ctx);
button2.setText("Button");
button2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg){
//Your Code
}
}));
menuLayout.addView(button2);