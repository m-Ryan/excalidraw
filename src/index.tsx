import ReactDOM from "react-dom";
import ExcalidrawApp from "./excalidraw-app";

import "./excalidraw-app/pwa";
import "./excalidraw-app/sentry";
window.__EXCALIDRAW_SHA__ = process.env.REACT_APP_GIT_SHA;

async function run() {
  if (location.pathname.startsWith("/new")) {
    const link = await (window as any).getRandRoom();
    document.body.innerHTML = `<div style="padding: 200px;"><a href="${link}">${link}</a></div>`;
  } else {
    ReactDOM.render(<ExcalidrawApp />, document.getElementById("root"));
  }
}

run();
