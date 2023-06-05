import '@ungap/custom-elements';
import * as fgui from "../../build/FairyGUI";

async function start() {
    //create groot before any UI creation
    fgui.GRoot.inst;

    await fgui.UIPackage.loadPackage("assets/Package1");

    let view = fgui.UIPackage.createObject("Package1", "Main");
    view.makeFullScreen();
    fgui.GRoot.inst.addChild(view);
}

start();