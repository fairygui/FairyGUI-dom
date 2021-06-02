# FairyGUI-dom

#### A GUI Editor&amp;framework for HTML DOM ####

Official website: [www.fairygui.com](https://www.fairygui.com)

### Usage ###

Step 1, we use the editor to create the UI.

![](images/20200610-084916.png)

Step 2, we only need a little code to display it.

```javascript
import * as fgui from "fairygui-dom";

async function start() {
    await fgui.UIPackage.loadPackage("assets/Package1");

    let view = fgui.UIPackage.createObject("Package1", "Main");
    view.makeFullScreen();
    fgui.GRoot.inst.addChild(view);
}

start();
```