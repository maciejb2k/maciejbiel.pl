import { TimelineMax } from "gsap";

interface PageLoadAnimation {
  tl: TimelineMax;
}

export function finishAnim(this: PageLoadAnimation, e: KeyboardEvent): void {
  if (
    this.tl.isActive() &&
    (e.code === "Space" ||
      e.keyCode === 32 ||
      e.code === "Escape" ||
      e.keyCode === 27)
  ) {
    this.tl.totalProgress(1).kill();
  }
}
