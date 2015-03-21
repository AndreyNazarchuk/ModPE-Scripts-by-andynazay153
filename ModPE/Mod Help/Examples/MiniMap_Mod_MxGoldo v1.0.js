//MiniMap mod
//Copyright 2015 MxGoldo
var curVersion = 1.0,
    X,
    Z,
    YAW,
    redraw = false,
    settings = {},
    settingsLoaded = false,
    minZoom,
    bmpSrc,
    bmpSrcCopy,
    canvasBmpSrc = new android.graphics.Canvas(),
    canvasBmpSrcCopy = new android.graphics.Canvas(),
    matrixMap = new android.graphics.Matrix(),
    matrixPointer = new android.graphics.Matrix(),
    bmpSrcLock = new java.util.concurrent.Semaphore (1, true),
    pool,
    poolTick,
    context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
    mapWindow,
    density = context.getResources().getDisplayMetrics().density,
    displayHeight = (context.getResources().getDisplayMetrics().widthPixels < context.getResources().getDisplayMetrics().heightPixels) ? context.getResources().getDisplayMetrics().widthPixels : context.getResources().getDisplayMetrics().heightPixels;
(function () {
    var i, settingsString, d = Math.floor(new Date().getTime() / 1000);
    settingsString = load(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftpe/mods/", "minimap.txt").split("\n");
    if (checkFileExists(decode("YXBwX21vZHNjcmlwdHMvTWluaU1hcF9Nb2RfTXhHb2xkbyB2MS4wLmpz"))) {settingsLoaded = true}
    for (i = 0; i < settingsString.length; i += 1) {settings[settingsString[i].split(":")[0]] = parseFloat(settingsString[i].split(":")[1]); }
    if (settings.version !== curVersion && settingsLoaded) {
        settings = {radius : 4, map_on : 1, map_zoom : 80, window_rawSize : 1, window_size : displayHeight * 0.35, window_rawPosition : 0, window_gravity : 51, window_y : 0, style_border : 1, style_pointer : 1, show_info : 1, show_zoomBtn : 1, delay : 20, treadCount : 4, debug_mode : 0, updateCheck : 1, updateCheckTime : 0, updateVersion : curVersion, version : curVersion};
    }
    new java.lang.Thread(function () {
        android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_BACKGROUND);
        var newVersion;
        if (Math.floor(settings.updateCheckTime / 86400) < Math.floor(d / 86400) && settings.updateCheck) {
            newVersion = parseFloat(loadTxtFromUrl("https://raw.githubusercontent.com/MxGoldo/MCPE-mod-scripts/master/MiniMap_Mod_version"));
            if (newVersion !== NaN) {settings.updateCheckTime = d; }
            if (newVersion > curVersion) {settings.updateVersion = newVersion; }
        }
        if (settings.updateVersion > curVersion && settings.updateCheck) {
            context.runOnUiThread(function() {
                settingsUI(["MiniMap Mod", "Ok",
                           ["text", "New version available !\nYour version: " + curVersion.toFixed(1) + "\nLatest version: " + settings.updateVersion.toFixed(1), ""],
                           ["checkBox", "updateCheck", "Check for updates"]]).show();
            });
        }
    }).start();
}());
function newLevel() {
    if (settingsLoaded) {
        mapWindow = createMapWindow();
        if (settings.map_on) {settingsChanged("map_on", 1); } else {mapWindow.reset(); }
    } else {
        context.runOnUiThread(function() {
            android.widget.Toast.makeText(context, "MiniMap Mod Error: settings not found", android.widget.Toast.LENGTH_LONG).show();
        });
    }
}
function leaveGame() {
    if (settings.map_on) {settingsChanged("map_on", 0); }
    mapWindow.close();
}
function newDrawChunkRunnable(xChunk, zChunk, delay) {
    pool.schedule(new java.lang.Runnable(function () {
        try {
            android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_BACKGROUND);
            if (Math.abs(Math.floor((Z - zChunk)/ 16)) > settings.radius || Math.abs(Math.floor((X - xChunk) / 16)) > settings.radius) {return; }
            var ix = 16, iz = 16, x = xChunk + 16, z = zChunk - 1, mapDotArray = [], block = Level.getTile(x - 16, 0, z + 16);
            if (block === 95) {return; }
            if (!block) {newDrawChunkRunnable(xChunk, zChunk, 2); return; }
            do {
                do {
                    mapDotArray[mapDotArray.length] = mapDot( x - ix, z + iz);
                } while (iz -= 1);
                iz = 16;
            } while (ix -= 1);
            if (java.lang.Thread.interrupted()) {return; }
            try {
                bmpSrcLock.acquire();
                bmpSrc.setPixels(mapDotArray, 0, 16, ((Math.floor(Z / 16) + settings.radius + 1) * 16) - zChunk, xChunk - ((Math.floor(X / 16) - settings.radius - 1) * 16), 16, 16);
            } finally {bmpSrcLock.release(); }
            redraw = true;
        } catch (e) {
            //clientMessage("drawChunk Error: " + e);
        }
    }), delay, java.util.concurrent.TimeUnit.SECONDS);
}
function createMapWindow() {
    var imgMap = new android.widget.ImageView(context),
        imgPointer = new android.widget.ImageView(context),
        btnSet = new android.widget.Button(context),
        btnZoomIn = new android.widget.Button(context),
        btnZoomOut = new android.widget.Button(context),
        textInfo = new android.widget.TextView(context),
        mapLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT),
        btnZoomInLp = new android.widget.RelativeLayout.LayoutParams(40 * density, 40 * density),
        btnZoomOutLp = new android.widget.RelativeLayout.LayoutParams(40 * density, 40 * density),
        textInfoLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT),
        layout = new android.widget.RelativeLayout(context),
        mapWin = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT),
        bmpMapShow = android.graphics.Bitmap.createBitmap(settings.window_size, settings.window_size, android.graphics.Bitmap.Config.ARGB_8888),
        bmpPointerShow = android.graphics.Bitmap.createBitmap(settings.window_size, settings.window_size, android.graphics.Bitmap.Config.ARGB_8888),
        bmpPointer,
        bmpPaint = new android.graphics.Paint(),
        canvasBmpMapShow = new android.graphics.Canvas(bmpMapShow),
        canvasBmpPointerShow = new android.graphics.Canvas(bmpPointerShow),
        btnActions = {
        set : function () {
            settingsUI(
                ["MiniMap Mod Options", "Ok",
                ["sectionDivider", "Graphics"],
                ["slider", "radius", "Minimap render distance", 1, checkRenderDistance() + 4, 1, " chunks"],
                ["slider", "map_zoom", "Zoom", 10, 100, 1, "%"],
                ["sectionDivider", "View"],
                ["multipleChoice", "window_rawSize", "Size", ["small", "normal", "large"], "window_size", [displayHeight * 0.2, displayHeight * 0.35, displayHeight * 0.5]],
                ["multipleChoice", "window_rawPosition", "Position", ["top left", "top right", "bottom left", "bottom right"], "window_gravity", [51, 53, 83, 85], "window_y", [0, 40 * density, 0, 0]],
                ["checkBox", "show_info", "Coordinates visible"],
                ["checkBox", "show_zoomBtn", "Zoom Buttons visible"],
                ["sectionDivider", "Style"],
                ["multipleChoice", "style_pointer", "pointer style", ["crosshairs", "arrow", "minecraft", "none"]],
                ["multipleChoice", "style_border", "window style", ["colourful", "simple", "none"]],
                ["sectionDivider", "Other"],
                ["checkBox", "updateCheck", "Check for updates " + (settings.updateVersion > curVersion ? "(update available)" : "")],
                ["subScreen", "Advanced ", ["Advanced", "Ok",
                ["slider", "delay", "Minimap max frequency", 1, 40, 1, " fps"],
                ["slider", "treadCount", "Threads", 1, 12, 1, ""]]],
                ["subScreen", "MiniMap Mod info ", ["MiniMap Mod info", "Ok",
                ["text", "Version ", curVersion.toFixed(1)],
                ["text", "Made by", "MxGoldo"]]]]).show();
        },
        toggle : function () {
            settings.map_on = settings.map_on ? 0 : 1;
            settingsChanged("map_on");
            saveSettings();
        }};
    bmpPaint.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.SRC));
    imgMap.setId(1);
    imgMap.setBackgroundColor(-12303292);
    mapLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
    imgMap.setOnClickListener(function(v){
        btnActions.toggle();
    });
    imgMap.setOnLongClickListener(function(v) {
        btnActions.set();
        return true;
    });
    btnSet.setBackgroundResource(android.R.drawable.ic_menu_mylocation);
    btnSet.setLayoutParams(new android.widget.LinearLayout.LayoutParams(40 * density, 40 * density));
    btnSet.setOnClickListener(function(v) {
        btnActions.toggle();
    });
    btnSet.setOnLongClickListener(function(v) {
        btnActions.set();
        return true;
    });
    textInfo.setId(2);
    textInfoLp.addRule(android.widget.RelativeLayout.BELOW, 1);
    textInfoLp.addRule(android.widget.RelativeLayout.ALIGN_LEFT, 1);
    textInfoLp.addRule(android.widget.RelativeLayout.ALIGN_RIGHT, 1);
    textInfo.setTextSize(15);
    textInfo.setPadding(3 * density, 0, 0, 0);
    textInfo.setBackgroundColor(android.graphics.Color.argb(204, 136, 136, 136));
    textInfo.setTextColor(android.graphics.Color.WHITE);
    btnZoomOut.setId(3);
    btnZoomOutLp.addRule(android.widget.RelativeLayout.BELOW, 2);
    btnZoomOut.setText("-");
    btnZoomOut.setTextSize(15);
    btnZoomOut.setTextColor(android.graphics.Color.WHITE);
    btnZoomOut.setBackgroundDrawable(drawBtnBack(40 * density, 40 * density));
    btnZoomOut.setOnClickListener(function(v) {
        if (settings.map_zoom * 1.2 >= 100) {
            android.widget.Toast.makeText(context, "minimum zoom reached", android.widget.Toast.LENGTH_SHORT).show();
            settings.map_zoom = 100;
        } else {
            settings.map_zoom = Math.round(settings.map_zoom * 1.2);
        }
        redraw = true;
        saveSettings();
    });
    btnZoomIn.setId(4);
    btnZoomInLp.addRule(android.widget.RelativeLayout.BELOW, 2);
    btnZoomInLp.addRule(android.widget.RelativeLayout.RIGHT_OF, 3);
    btnZoomIn.setText("+");
    btnZoomIn.setTextSize(15);
    btnZoomIn.setTextColor(android.graphics.Color.WHITE);
    btnZoomIn.setBackgroundDrawable(drawBtnBack(40 * density, 40 * density));
    btnZoomIn.setOnClickListener(function(v) {
        if (settings.map_zoom * 0.8 <= 10) {
            android.widget.Toast.makeText(context, "maximum zoom reached", android.widget.Toast.LENGTH_SHORT).show();
            settings.map_zoom = 10;
        } else {
            settings.map_zoom = Math.round(settings.map_zoom * 0.8);
        }
        redraw = true;
        saveSettings();
    });
    layout.addView(btnSet);
    layout.addView(imgMap, mapLp);
    layout.addView(imgPointer, mapLp);
    layout.addView(btnZoomIn, btnZoomInLp);
    layout.addView(btnZoomOut, btnZoomOutLp);
    layout.addView(textInfo, textInfoLp);
    mapWin.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    return {
    reset : function () {
        context.runOnUiThread(function() {
            var visible = android.view.View.VISIBLE, gone = android.view.View.GONE, size = settings.window_size;
            bmpPointer = drawPointer();
            if (!settings.style_pointer) {imgPointer.setImageBitmap(bmpPointer); }
            bmpPointerShow = android.graphics.Bitmap.createBitmap(size, size, android.graphics.Bitmap.Config.ARGB_8888);
            bmpMapShow = android.graphics.Bitmap.createBitmap(size, size, android.graphics.Bitmap.Config.ARGB_8888);
            canvasBmpPointerShow.setBitmap(bmpPointerShow);
            canvasBmpMapShow.setBitmap(bmpMapShow);
            canvasBmpMapShow.clipRect(0, 0, size, size, android.graphics.Region.Op.REPLACE);
            canvasBmpMapShow.drawBitmap(drawForeground(), 0, 0, null);
            if (settings.style_border !== 2) {
                canvasBmpMapShow.clipRect(7 * density, 7 * density, size - (7 * density), size - (7 * density), android.graphics.Region.Op.REPLACE);
            }
            if (settings.map_on) {
                btnSet.setVisibility(gone);
                imgMap.setVisibility(visible);
                imgPointer.setVisibility(visible);
                btnZoomIn.setVisibility(settings.show_zoomBtn ? visible : gone);
                btnZoomOut.setVisibility(settings.show_zoomBtn ? visible : gone);
                textInfo.setVisibility(settings.show_info ? visible : gone);
            } else {
                btnSet.setVisibility(visible);
                imgMap.setVisibility(gone);
                imgPointer.setVisibility(gone);
                btnZoomIn.setVisibility(gone);
                btnZoomOut.setVisibility(gone);
                textInfo.setVisibility(gone);
            }
            mapWin.dismiss();
            mapWin.showAtLocation(context.getWindow().getDecorView(), settings.window_gravity, 0, settings.window_y);
        });
    },
    setMap : function () {
        canvasBmpMapShow.drawBitmap(bmpSrc, matrixMap, bmpPaint);
        context.runOnUiThread(function() {
            if (settings.show_info) {textInfo.setText("X:" + Math.floor(Player.getX()) + " Y:" + Math.floor(Player.getY() - 2) + " Z:" + Math.floor(Player.getZ())); }
            imgMap.setImageBitmap(bmpMapShow);
        });
    },
    setPointer : function () {
        canvasBmpPointerShow.drawBitmap(bmpPointer, matrixPointer, bmpPaint);
        context.runOnUiThread(function() {
            imgPointer.setImageBitmap(bmpPointerShow);
        });
    },
    close : function () {
        context.runOnUiThread(function() {
            mapWin.dismiss();
            mapWindow = null;
        });
    }};
}
function decode(string) {
    return new java.lang.String(android.util.Base64.decode(string, 0), "UTF-8");
}
function checkFileExists(path) {
    var context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
        ctx = new android.content.ContextWrapper(context);
    return java.io.File(ctx.getApplicationInfo().dataDir + "/" + path).exists()
}
function drawBtnBack(width, height) {
    var bmp = android.graphics.Bitmap.createBitmap(width, height, android.graphics.Bitmap.Config.ARGB_8888),
        canvas = new android.graphics.Canvas(bmp),
        paint = new android.graphics.Paint(),
        drawable;
    paint.setColor(android.graphics.Color.GRAY);
    paint.setMaskFilter(new android.graphics.EmbossMaskFilter([1, 1, 0.3], 0.7, 8, 4 * density));
    canvas.drawRect(0, 0, width, height, paint);
    drawable = new android.graphics.drawable.BitmapDrawable(bmp);
    drawable.setAlpha(204);
    return drawable;
}
function drawPointer() {
    var bmp = android.graphics.Bitmap.createBitmap(settings.window_size, settings.window_size, android.graphics.Bitmap.Config.ARGB_8888),
        canvas = new android.graphics.Canvas(bmp),
        paint = new android.graphics.Paint(),
        matrix = new android.graphics.Matrix(),
        temp;
    switch (settings.style_pointer) {
    case 1:
        temp = new android.graphics.Path();
        temp.lineTo(-displayHeight * 0.0125, displayHeight * 0.025);
        temp.lineTo(0, displayHeight * 0.015);
        temp.lineTo(displayHeight * 0.0125, displayHeight * 0.025);
        temp.close();
        temp.offset(settings.window_size * 0.5, settings.window_size * 0.5);
        paint.setColor(android.graphics.Color.RED);
        canvas.drawPath(temp, paint);
        paint.setColor(android.graphics.Color.BLACK);
        paint.setStyle(android.graphics.Paint.Style.STROKE);
        canvas.drawPath(temp, paint);
        break;
    case 2:
        temp = android.graphics.Bitmap.createBitmap([0, 0, -16777216, 0, 0, 0, -16777216, -6250336,  -16777216, 0, -16777216, -6250336, -2039584, -6250336, -16777216, -16777216, -2039584, -1, -2039584, -16777216, -16777216, -2039584, -1, -2039584, -16777216, -16777216, -6250336, -2039584, -6250336, -16777216, 0, -16777216, -16777216, -16777216, 0], 5, 7, android.graphics.Bitmap.Config.ARGB_8888);
        matrix.postScale(displayHeight * 0.005, displayHeight * 0.005, 2.5, 5.5);
        matrix.postTranslate(settings.window_size * 0.5 - 2.5, settings.window_size * 0.5 - 4.5);
        canvas.drawBitmap(temp, matrix, null);
        break;
    case 3:
        break;
    default:
        paint.setColor(android.graphics.Color.BLACK);
        canvas.drawLines([settings.window_size * 0.2, settings.window_size * 0.5, settings.window_size * 0.8, settings.window_size * 0.5, settings.window_size * 0.5, settings.window_size * 0.2, settings.window_size * 0.5, settings.window_size * 0.8], paint);
    }
    return bmp;
}
function drawForeground() {
    var bmp = android.graphics.Bitmap.createBitmap(settings.window_size, settings.window_size, android.graphics.Bitmap.Config.ARGB_8888),
        canvas = new android.graphics.Canvas(bmp),
        paint = new android.graphics.Paint(),
        temp;
    paint.setMaskFilter(new android.graphics.EmbossMaskFilter([1, 1, 0.3], 0.7, 8, 3 * density));
    temp = new android.graphics.Path();
    temp.addRect(0, 0, settings.window_size, settings.window_size, android.graphics.Path.Direction.CW);
    temp.addRect(7 * density, 7 * density, settings.window_size - (7 * density), settings.window_size - (7 * density), android.graphics.Path.Direction.CW);
    temp.setFillType(android.graphics.Path.FillType.EVEN_ODD);
    switch (settings.style_border) {
    case 1:
        paint.setColor(android.graphics.Color.rgb(153, 135, 108));
        break;
    case 2:
        paint.setColor(0);
        break;
    default:
        paint.setShader(new android.graphics.LinearGradient(0, 0, settings.window_size * 0.5, settings.window_size, [android.graphics.Color.GREEN, android.graphics.Color.YELLOW, android.graphics.Color.GREEN], null, android.graphics.Shader.TileMode.REPEAT));
    }
    canvas.drawColor(android.graphics.Color.DKGRAY);
    canvas.drawPath(temp, paint);
    return bmp;
}
function mapDot(ix, iz) {
    var iy = 130, deltaY = 10, colors = {1: -8487298, 3: -7970749, 4: -8487298, 8: -14000385, 9: -14000385, 10: -637952, 11: -637952, 12: -2370656, 13: -8618884, 17: -10005725, 18: -13534192, 48: -10193052, 78: -984069, 79: -5255937, 82: -6314831, 99: -7509421, 100: -4774107, 110: -9542807, 159: -2968927, 161: -8028101, 162: -13293288, 172: -6857405, 174: -5255937, 243: -10797283};
    do {
        if (Level.getTile(ix, iy - 10, iz)) {
            if (deltaY === 10) {
                deltaY = 1;
                iy += 10;
            } else {
                return colors[Level.getTile(ix, iy - 10, iz)] || -8540361;
            }
        }
    } while (iy -= deltaY);
    return 0;
}
function checkRenderDistance() {
    var options = load(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftpe/", "options.txt").split("\n"), i;
    if (options != "") {   //not !==
        for (i = 0; i < options.length; i += 1) {
            options[i] = options[i].split(":");
            if (options[i][0] === "gfx_renderdistance_new") {
                return Math.round(parseInt(options[i][1], 10) / 16);
                break;
            }
        }
    }
}
function saveSettings() {
    var settingsString = "", p;
    for (p in settings) {
        if (settings.hasOwnProperty(p)) {
            if (settingsString !== "") {settingsString += "\n"; }
            settingsString += p + ":" + settings[p];
        }
    }
    save(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftpe/mods/", "minimap.txt", settingsString);
}
function mapOn() {
    var xChunk, zChunk, i, ix;
    bmpSrc = android.graphics.Bitmap.createBitmap(((settings.radius + 1) * 2 + 1) * 16, ((settings.radius + 1) * 2 + 1) * 16, android.graphics.Bitmap.Config.ARGB_8888);
    bmpSrcCopy = android.graphics.Bitmap.createBitmap(bmpSrc.getWidth(), bmpSrc.getHeight(), android.graphics.Bitmap.Config.ARGB_8888);
    canvasBmpSrc.setBitmap(bmpSrc);
    canvasBmpSrcCopy.setBitmap(bmpSrcCopy);
    minZoom = settings.window_size / (settings.radius * 2 * 16);
    pool =  java.util.concurrent.Executors.newScheduledThreadPool(settings.treadCount);
    poolTick = java.util.concurrent.Executors.newSingleThreadScheduledExecutor();
    mapWindow.reset();
    X = Player.getX();
    Z = Player.getZ();
    xChunk = Math.floor(X / 16) * 16;
    zChunk = Math.floor(Z / 16) * 16;
    newDrawChunkRunnable(xChunk, zChunk, 0);
    for (i = 16; i <= settings.radius * 16; i += 16) {
        for (ix = 0; ix < i; ix += 16) {
            newDrawChunkRunnable(xChunk + ix + 16, zChunk + i, 0);
            newDrawChunkRunnable(xChunk + ix, zChunk - i, 0);
            newDrawChunkRunnable(xChunk - ix, zChunk + i, 0);
            newDrawChunkRunnable(xChunk - ix - 16, zChunk - i, 0);
            newDrawChunkRunnable(xChunk + i, zChunk + ix, 0);
            newDrawChunkRunnable(xChunk + i, zChunk - ix - 16, 0);
            newDrawChunkRunnable(xChunk - i, zChunk + ix + 16, 0);
            newDrawChunkRunnable(xChunk - i, zChunk - ix, 0);
        }
    }
    poolTick.scheduleWithFixedDelay(new java.lang.Runnable(function () {
        try {
            android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_BACKGROUND);
            if (java.lang.Thread.interrupted()) {return; }
            var xNew = Player.getX(),
                zNew = Player.getZ(),
                yawNew = getYaw(),
                xChunkNew,
                zChunkNew,
                xChunkOld,
                zChunkOld,
                i,
                ix,
                radius = settings.radius * 16,
                radius2 = 1 * 16 + radius;
            if (xNew !== X || zNew !== Z || redraw) {
                redraw = false;
                xChunkNew = Math.floor(xNew / 16) * 16;
                zChunkNew = Math.floor(zNew / 16) * 16;
                xChunkOld = Math.floor(X / 16) * 16;
                zChunkOld = Math.floor(Z / 16) * 16;
                if (xChunkNew !== xChunkOld || zChunkNew !== zChunkOld) {
                    bmpSrcLock.acquire();
                    bmpSrcCopy.eraseColor(0);
                    canvasBmpSrcCopy.drawBitmap(bmpSrc, zChunkNew - zChunkOld, xChunkOld - xChunkNew, null);
                    bmpSrc.eraseColor(0);
                    canvasBmpSrc.drawBitmap(bmpSrcCopy, 0, 0, null);
                    X = xNew;
                    Z = zNew;
                    bmpSrcLock.release();
                    if (xChunkNew > xChunkOld) {
                        for (i = radius + 16 - (xChunkNew - xChunkOld); i <= radius; i += 16) {
                            if (!bmpSrc.getPixel(radius2, radius2 + i)) {newDrawChunkRunnable(xChunkNew + i, zChunkNew, 0); }
                            for (ix = 16; ix <= radius; ix += 16) {
                                if (!bmpSrc.getPixel(radius2 - ix, radius2 + i)) {newDrawChunkRunnable(xChunkNew + i, zChunkNew + ix, 0); }
                                if (!bmpSrc.getPixel(radius2 + ix, radius2 + i)) {newDrawChunkRunnable(xChunkNew + i, zChunkNew - ix, 0); }
                            }
                        }
                    } else if (xChunkOld > xChunkNew) {
                        for (i = radius + 16 - (xChunkOld - xChunkNew); i <= radius; i += 16) {
                            if (!bmpSrc.getPixel(radius2, radius2 - i)) {newDrawChunkRunnable(xChunkNew - i, zChunkNew, 0); }
                            for (ix = 16; ix <= radius; ix += 16) {
                                if (!bmpSrc.getPixel(radius2 - ix, radius2 - i)) {newDrawChunkRunnable(xChunkNew - i, zChunkNew + ix, 0); }
                                if (!bmpSrc.getPixel(radius2 + ix, radius2 - i)) {newDrawChunkRunnable(xChunkNew - i, zChunkNew - ix, 0); }
                            }
                        }
                    }
                    if (zChunkNew > zChunkOld) {
                        for (i = radius + 16 - (zChunkNew - zChunkOld); i <= radius; i += 16) {
                            if (!bmpSrc.getPixel(radius2 - i, radius2)) {newDrawChunkRunnable(xChunkNew, zChunkNew + i, 0); }
                            for (ix = 16; ix <= radius; ix += 16) {
                                if (!bmpSrc.getPixel(radius2 - i, radius2 + ix)) {newDrawChunkRunnable(xChunkNew + ix, zChunkNew + i, 0); }
                                if (!bmpSrc.getPixel(radius2 - i, radius2 - ix)) {newDrawChunkRunnable(xChunkNew - ix, zChunkNew + i, 0); }
                            }
                        }
                    } else if (zChunkOld > zChunkNew) {
                        for (i = radius + 16 - (zChunkOld - zChunkNew); i <= radius; i += 16) {
                            if (!bmpSrc.getPixel(radius2 + i, radius2)) {newDrawChunkRunnable(xChunkNew, zChunkNew - i, 0); }
                            for (ix = 16; ix <= radius; ix += 16) {
                                if (!bmpSrc.getPixel(radius2 + i, radius2 + ix)) {newDrawChunkRunnable(xChunkNew + ix, zChunkNew - i, 0); }
                                if (!bmpSrc.getPixel(radius2 + i, radius2 + ix)) {newDrawChunkRunnable(xChunkNew - ix, zChunkNew - i, 0); }
                            }
                        }
                    }
                } else {
                    X = xNew;
                    Z = zNew;
                }
                matrixMap.setTranslate(settings.window_size * 0.5 - (bmpSrc.getWidth() * 0.5) - 8 + zNew - zChunkNew, settings.window_size * 0.5 - (bmpSrc.getHeight() * 0.5) + 8 - xNew + xChunkNew);
                matrixMap.postScale((100 / settings.map_zoom) * minZoom, (100 / settings.map_zoom) * minZoom, settings.window_size * 0.5, settings.window_size * 0.5);
                mapWindow.setMap();
            }
            if (yawNew !== YAW) {
                if (settings.style_pointer) {
                    matrixPointer.setRotate(yawNew - 90, settings.window_size * 0.5, settings.window_size * 0.5);
                    mapWindow.setPointer();
                }
                YAW = yawNew;
            }
        } catch(e) {
            //clientMessage("poolTick Error: " + e);
        }
    }), 0, Math.round(1000 / settings.delay), java.util.concurrent.TimeUnit.MILLISECONDS);
}
function mapOff() {
    mapWindow.reset();
    pool.shutdownNow();
    poolTick.shutdownNow();
}
function settingsChanged(key, newValue) {
    newValue = newValue === undefined ? settings[key] : newValue;
    switch (key) {
    case "window_rawSize":
        bmpShow = android.graphics.Bitmap.createBitmap(settings.window_size, settings.window_size, android.graphics.Bitmap.Config.ARGB_8888);
        minZoom = settings.window_size / (settings.radius * 2 * 16);
        mapWindow.reset();
        redraw = true;
        YAW = undefined;
        break;
    case "map_on":
        if (newValue) {mapOn(); } else {mapOff(); }
        break;
    case "delay":
    case "treadCount":
    case "radius":
    case "map_type":
        if (settings.map_on) {
            mapOff();
            mapOn();
        }
        break;
    case "updateCheck":
        break;
    default:
        mapWindow.reset();
        redraw = true;
        YAW = undefined;
    }
}
function settingsClosed() {
    saveSettings();
}
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
            spinnerAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
            spinner.setAdapter(spinnerAdapter);
            spinner.setId(1);
            if (args[3].length <= settings[args[1]]) {settings[args[1]] = 0}
            spinner.setSelection(settings[args[1]]);
            spinner.post(function () {
                spinner.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
                    onItemSelected: function(parent, view, pos, id) {
                        settings[args[1]] = pos;
                        for (var i = 4; i < args.length; i += 2) {settings[args[i]] = args[i + 1][pos]; }
                        settingsChanged(args[1]);
                    }
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
function saveBmp(path, filename, bmp) {
    try {
        java.io.File(path).mkdirs();
        var newFile = new java.io.File(path, filename);
        newFile.createNewFile();
        var out = new java.io.FileOutputStream(newFile);
        bmp.compress(android.graphics.Bitmap.CompressFormat.PNG, 90, out);
        out.close();
    } catch (e) {
        clientMessage("saveBmp Error: " + e);
    }
}
function save(path, filename, content) {
    try {
        java.io.File(path).mkdirs();
        var newFile = new java.io.File(path, filename);
        newFile.createNewFile();
        var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
        outWrite.append(content);
        outWrite.close();
    } catch (e) {
        clientMessage("save Error: " + e);
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
function loadTxtFromUrl(url) {
    try {
        var content = new java.io.ByteArrayOutputStream();
        android.net.http.AndroidHttpClient.newInstance("userAgent").execute(new org.apache.http.client.methods.HttpGet(url)).getEntity().writeTo(content);
        content.close();
        return String(content.toString());
    } catch (e) {
        //clientMessage("loadTxtFromUrl Error: " + e);
        return "";
    }
}