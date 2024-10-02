/*
 * NOTE:
 *   This file is plugin stub for main.js
 */

import { VPlugin } from "./index";
const { Quill, version } = VPlugin;

console.log("TCL: plugin", VPlugin);
console.log("TCL: version", version);
console.log("TCL: Quill", Quill);

export const install = (app: any) => {
  app.use(VPlugin);
};

/*
 * NOTE:
 *   If you want Vue instance of main.js to import something in your plugin as a Vue option,
 *   you need to export it here.
 */
// export default plugin
