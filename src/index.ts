import {TimelineMax} from "gsap";

import "normalize.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "@/styles/app.scss";
import "devicon/devicon.min.css";
import "ionicons/dist/css/ionicons.min.css";

import {finishAnim} from "@/animations/finishAnim";
import {pageLoadAnim} from "@/animations/pageLoadAnim";

document.addEventListener("DOMContentLoaded", () => {
  const pageLoadAnimContext = {
    tl: new TimelineMax(),
  };

  pageLoadAnim(pageLoadAnimContext.tl);

  document.addEventListener("keyup", finishAnim.bind(pageLoadAnimContext));
});
