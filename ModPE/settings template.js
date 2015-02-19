/*
The MIT License (MIT)

Copyright (c) 2015 MxGoldo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

//create global variables
var curVersion = 0.1,
    settingsPath = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftpe/mods/",
    settingsFilename = "settings template.txt",
    
    settings = {},
    context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

//self invoking function that load the settings
(function () {
    var i, settingsString;
    settingsString = load(settingsPath, settingsFilename).split("\n");
    for (i = 0; i < settingsString.length; i += 1) {
        settings[settingsString[i].split(":")[0]] = parseFloat(settingsString[i].split(":")[1]);
    }
    
    //if the script version and the version of the settings is not equal use the default values
    if (curVersion !== settings.version) {
        settings = {trueFalseValueKey: 0,
                    otherCheckbox: 1,
                    multipleChoiceValueKey: 3,
                    dropdownChoiceValueKey: 0,
                    sliderValueKey: 80,
                    someOtherValues: 200,
                    version: curVersion}
    }
}());

// #####################################################
// hook functions
// #####################################################

function procCmd(cmd) {
    cmd = cmd.split(" ");
	if(cmd[0] === "set"){
    
        //the following code generates and shows the settings GUI
        //you can put it where you need it, for example into an onClicklistener of a button
        context.runOnUiThread(function() {
            settingsUI(
                ["Options Title", "Ok",
                ["sectionDivider", "SectionName"],
                    ["dropdownChoice", "dropdownChoiceValueKey", "dropdown option", ["first element", "second element", "third element", "and so on"]],
                    ["multipleChoice", "multipleChoiceValueKey", "multipleChoice option", ["first element", "second element", "and so on"]],
                    ["slider", "sliderValueKey", "slider option", /* min */ 10, /* max */ 100, /* step */ 1, /* unit */ "%"],
                    ["checkBox", "trueFalseValueKey", "checkBox option"],
                    ["text", "text to display", "text 2"],
                    ["text", "this is a longer text without a text 2. An empty string is used for text 2", ""],
                ["sectionDivider", "Another section"],
                    ["subScreen", "subscreen name ", ["subscreen Title", "Ok",
                        ["checkBox", "otherCheckbox", "checkbox text"],
                        ["text", "blabla", "text text text"]]],
                    ["subScreen", "Info ", ["Info", "Ok",
                        ["text", "Version ", curVersion],
                        ["text", "mod Made by", "creator Name"],
                        ["text", "settings GUI by", "MxGoldo"]]]]).show();
        });
        
	} else if (cmd[0] === "get") {
        
        //here you can see how you can access the settings in code
        //settings.key or settings[key]
        clientMessage(cmd[1] + " = " + settings[cmd[1]]);
        
    }
}

// #####################################################
// settings functions
// #####################################################

function saveSettings() {
    var settingsString = "", p;
    for (p in settings) {
        if (settings.hasOwnProperty(p)) {
            if (settingsString !== "") {settingsString += "\n"; }
            settingsString += p + ":" + settings[p];
        }
    }
    save(settingsPath, settingsFilename, settingsString);
}

//this function is called when a setting in the GUI is changed
function settingsChanged(key) {
    clientMessage("settingsChanged, key = " + key + " / new value = " + settings[key]);
    
    //insert code here that reacts on the changes
    
}

//this function is called whenever a settings window is closed
function settingsClosed() {
    saveSettings();
    
    //insert code here that reacts on the changes
    
}

//this function creates the settings GUI
function settingsUI() {
    var textSize = 17,  //sp: scaled pixels
        padding = 10,   //dp: density pixels
        context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
        alert = new android.app.AlertDialog.Builder(context),
        scroll = new android.widget.ScrollView(context),
        layout = new android.widget.LinearLayout(context),
        i,
        len = arguments[0].length,
        ruler,
        rulerLp = new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, 2),
        addOption = {
        checkBox : function (args) {
            var layoutElement = new android.widget.RelativeLayout(context),
                checkBtn = new android.widget.CheckBox(context),
                checkBtnLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT),
                text = new android.widget.TextView(context),
                textLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            text.setTextSize(textSize);
            text.setText(args[2]);
            checkBtn.setId(1);
            checkBtn.setChecked(Boolean(settings[args[1]]));
            checkBtn.setOnCheckedChangeListener(function(buttonView, isChecked) {
                if (isChecked) {settings[args[1]] = 1; } else {settings[args[1]] = 0; }
                settingsChanged(args[1]);
			});
            checkBtnLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
            checkBtnLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
            textLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_LEFT);
            textLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
            textLp.addRule(android.widget.RelativeLayout.LEFT_OF, 1);
            layoutElement.addView(checkBtn, checkBtnLp);
            layoutElement.addView(text, textLp);
            layoutElement.setPadding(padding, padding * 0.5, padding, padding * 0.5);
            return layoutElement;
        },
        dropdownChoice : function (args) {
            var layoutElement = new android.widget.RelativeLayout(context),
                spinnerAdapter = new android.widget.ArrayAdapter(context, android.R.layout.simple_spinner_item, args[3]),
                spinner = new  android.widget.Spinner(context),
                spinnerLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT),
                text = new android.widget.TextView(context),
                textLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            text.setTextSize(textSize);
            text.setText(args[2]);
            spinnerAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item); // The drop down view
            spinner.setAdapter(spinnerAdapter);
            spinner.setId(1);
            if (args[3].length <= settings[args[1]]) {settings[args[1]] = 0}
            spinner.setSelection(settings[args[1]]);
            spinner.post(function () {
                spinner.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
                    onItemSelected: function(parent, view, pos, id) {
                        //parent.getChildAt(0).setTextSize(textSize);
                        settings[args[1]] = pos;
                        for (var i = 4; i < args.length; i += 2) {settings[args[i]] = args[i + 1][pos]; }
                        settingsChanged(args[1]);
                    }/* , onNothingSelected: function(parent) {} */
                }));
            });
            spinnerLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
            spinnerLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
            textLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_LEFT);
            textLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
            textLp.addRule(android.widget.RelativeLayout.LEFT_OF, 1);
            layoutElement.addView(spinner, spinnerLp);
            layoutElement.addView(text, textLp);
            layoutElement.setPadding(padding, padding * 0.5, padding, padding * 0.5);
            return layoutElement;
        },
        subScreen : function (args) {
            var text = new android.widget.TextView(context);
            text.setTextSize(textSize);
            text.setText(args[1] + " >");
            text.setPadding(padding, padding, padding, padding);
            text.setOnClickListener(function(v){
                settingsUI(args[2]).show();
			});
            return text;
        },
        sectionDivider : function (args) {
            var text = new android.widget.TextView(context);
            text.setTextSize(textSize * 0.9);
            text.setText(args[1]);
            text.setTextColor(android.graphics.Color.WHITE)
            text.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT , [android.graphics.Color.rgb(0, 127, 0), android.graphics.Color.rgb(63, 95, 0), android.graphics.Color.rgb(0, 63, 0)]));
            text.setPadding(padding, 0, padding, 0);
            return text;
        },
        multipleChoice : function (args) {
            var layoutElement = new android.widget.RelativeLayout(context),
                text = new android.widget.TextView(context),
                textLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT),
                text2 = new android.widget.TextView(context),
                text2Lp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            text.setTextSize(textSize);
            text.setText(args[2]);
            if (args[3].length <= settings[args[1]]) {settings[args[1]] = 0}
            text2.setTextSize(textSize);
            text2.setText(args[3][settings[args[1]]]);
            text2.setTextColor(android.graphics.Color.rgb(100, 255, 0));
            text2.setId(1);
            text2.setOnClickListener(function(v){
                var alert = new android.app.AlertDialog.Builder(context),
                    listView = new android.widget.ListView(context),
                    adapter = new android.widget.ArrayAdapter(context, android.R.layout.simple_list_item_single_choice, args[3]);
                listView.setAdapter(adapter);
                listView.setChoiceMode(android.widget.ListView.CHOICE_MODE_SINGLE);
                listView.setItemChecked(settings[args[1]], true);
                listView.setDivider(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.GREEN, android.graphics.Color.YELLOW, android.graphics.Color.GREEN]));
                listView.setDividerHeight(2);
                listView.setPadding(padding, padding, padding, padding);
                listView.setOnItemClickListener(function(parent, view, position, id) {
                    settings[args[1]] = position;
                    for (var i = 4; i < args.length; i += 2) {settings[args[i]] = args[i + 1][position]; }
                    text2.setText(args[3][settings[args[1]]]);
                    settingsChanged(args[1]);
                    alert.dismiss();
                });
                alert.setView(listView);
                alert.setTitle(args[2]);
                alert.setNegativeButton("Cancel", function(dialog, whichButton) {
                    alert.dismiss();
                });
                alert = alert.show();
			});
            textLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_LEFT);
            textLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
            textLp.addRule(android.widget.RelativeLayout.LEFT_OF, 1);
            text2Lp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
            text2Lp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
            layoutElement.addView(text2, text2Lp);
            layoutElement.addView(text, textLp);
            layoutElement.setPadding(padding, padding, padding, padding);
            return layoutElement;
        },
        slider : function (args) {
            var layoutElement = new android.widget.RelativeLayout(context),
                text = new android.widget.TextView(context),
                textLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT),
                text2 = new android.widget.TextView(context),
                text2Lp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            text.setTextSize(textSize);
            text.setText(args[2]);
            text2.setTextSize(textSize);
            text2.setText(settings[args[1]] + args[6]);
            text2.setTextColor(android.graphics.Color.rgb(100, 255, 0));
            text2.setId(1);
            text2.setOnClickListener(function(v){
                var alert = new android.app.AlertDialog.Builder(context),
                    seekBar = new android.widget.SeekBar(context);
                seekBar.setMax((args[4] - args[3]) / args[5]);
                seekBar.setProgress((settings[args[1]] - args[3]) / args[5]);
                seekBar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
                        onProgressChanged: function(seekBar, progress, fromUser) {
                            alert.setTitle(args[2] + "  " + (progress * args[5] + args[3]) + args[6]);
                        }
                }));
                alert.setView(seekBar);
                alert.setTitle(args[2] + "  " + settings[args[1]] + args[6]);
                alert.setPositiveButton("Ok", function(dialog, whichButton) {
                    settings[args[1]] = seekBar.getProgress() * args[5] + args[3];
                    text2.setText(settings[args[1]] + args[6]);
                    settingsChanged(args[1]);
                    alert.dismiss();
                });
                alert.setNegativeButton("Cancel", function(dialog, whichButton) {
                    alert.dismiss();
                });
                alert = alert.show();
			});
            textLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_LEFT);
            textLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
            textLp.addRule(android.widget.RelativeLayout.LEFT_OF, 1);
            text2Lp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
            text2Lp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
            layoutElement.addView(text2, text2Lp);
            layoutElement.addView(text, textLp);
            layoutElement.setPadding(padding, padding, padding, padding);
            return layoutElement;
        },
        text : function (args) {
            var layoutElement = new android.widget.RelativeLayout(context),
                text = new android.widget.TextView(context),
                textLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT),
                text2 = new android.widget.TextView(context),
                text2Lp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            text.setTextSize(textSize);
            text.setText(String(args[1]));
            text2.setTextSize(textSize);
            text2.setText(String(args[2]));
            text2.setTextColor(android.graphics.Color.rgb(100, 255, 0));
            text2.setId(1);
            textLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_LEFT);
            textLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
            textLp.addRule(android.widget.RelativeLayout.LEFT_OF, 1);
            text2Lp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
            text2Lp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
            layoutElement.addView(text2, text2Lp);
            layoutElement.addView(text, textLp);
            layoutElement.setPadding(padding, padding, padding, padding);
            return layoutElement;
        }};
    padding = padding * context.getResources().getDisplayMetrics().density;
    layout.setOrientation(android.widget.LinearLayout.VERTICAL);
    layout.setPadding(padding, 0, padding, 0);
    for (i = 2; i < len; i += 1) {
        layout.addView(addOption[arguments[0][i][0]](arguments[0][i]));
        if (i + 1 < len) {
            ruler = new android.view.View(context);
            ruler.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.GREEN, android.graphics.Color.YELLOW, android.graphics.Color.GREEN]));
            layout.addView(ruler, rulerLp);
        }
    }
    scroll.addView(layout);
    alert.setView(scroll);
    alert.setTitle(arguments[0][0]);
    alert.setPositiveButton(arguments[0][1], function(dialog,whichButton){
        settingsClosed();
    });
    return alert;
}

// #####################################################
// load and save functions
// #####################################################

function save(path, filename, content) {
    try {
        java.io.File(path).mkdirs();
        var newFile = new java.io.File(path, filename);
        newFile.createNewFile();
        var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
        outWrite.append(content);
        outWrite.close();
    } catch (err) {
        clientMessage(err);
    }
}

function load(path, filename) {
    var content = "";
    if (java.io.File(path + filename).exists()) {
        var file = new java.io.File(path + filename),
            fos = new java.io.FileInputStream(file),
            str = new java.lang.StringBuilder(),
            ch;
        while ((ch = fos.read()) != -1) {str.append(java.lang.Character(ch)); }
        content = String(str.toString());
        fos.close();
    }
    return content;
}