import '@ungap/custom-elements';
import * as fgui from "../../build/FairyGUI";

async function start() {
    await fgui.UIPackage.loadPackage("assets/Package1");

    let view = fgui.UIPackage.createObject("Package1", "Main");
    view.makeFullScreen();
    fgui.GRoot.inst.addChild(view);
}

start();