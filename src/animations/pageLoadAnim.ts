import {Power0, Power1, Power4, TimelineMax} from "gsap";

export const pageLoadAnim = (tl: TimelineMax): void => {
  const border = document.querySelector(".Border");
  const topLine = document.querySelector(".Border-line--top");
  const rightLine = document.querySelector(".Border-line--right");
  const bottomLine = document.querySelector(".Border-line--bottom");
  const leftLine = document.querySelector(".Border-line--left");
  const borderPhoto = document.querySelector(".Border-photo");
  const pageMain = document.querySelector(".PageMain");
  const backgroundPhoto = document.querySelector(".PageMain-bg");
  const pageLogo = document.querySelector(".PageLogo");
  const pageTitle = document.querySelector(".PageHeader-title");
  const devIcons = document.querySelectorAll(".Icon");
  const links = document.querySelectorAll(".ExternalLinks-link");
  const linksTitle = document.querySelector(".ExternalLinks-title");
  const iconsDesc = document.querySelector(".PageFooter-iconsDesc");

  if (topLine &&
    rightLine &&
    bottomLine &&
    leftLine &&
    border &&
    borderPhoto &&
    pageMain &&
    backgroundPhoto &&
    pageLogo &&
    devIcons &&
    links &&
    iconsDesc &&
    linksTitle &&
    pageTitle) {
    tl
      .to(borderPhoto, .7, {opacity: 1, ease: Power1.easeIn})
      .to(rightLine, .5, {height: "100%", ease: Power1.easeIn})
      .to(bottomLine, .2, {width: "100%", ease: Power0.easeNone})
      .to(leftLine, .2, {height: "100%", ease: Power0.easeNone})
      .to(topLine, .4, {width: "100%", ease: Power1.easeOut})
      .to(borderPhoto, .2, {opacity: 0, display: "none"})
      .to(border, .3, {
        width: "calc(100vw - 70px)",
        transition: "width .3s",
      })
      .to(border, .3, {
        height: "calc(100vh - 70px)",
        transition: "height .3s",
      })
      .to(pageMain, 1.5, {
        height: "100vh",
        ease: Power4.easeInOut,
      })
      .to([topLine, bottomLine, leftLine, rightLine], .5, {
        background: "#ffffff",
      })
      .to(backgroundPhoto, 1.5, {
        opacity: 1,
        ease: Power4.easeInOut,
      })
      .to(pageTitle, .5, {
        opacity: 1,
        ease: Power1.easeInOut,
      })
      .to(iconsDesc, 1, {
        opacity: 1,
        ease: Power1.easeInOut,
      });

    Array.from(devIcons).reverse().forEach((el) => {
      tl.to(el, .09, {opacity: 1});
    });

    tl.to(linksTitle, .5, {
      opacity: 1,
      ease: Power1.easeInOut,
    });

    Array.from(links).forEach((el) => {
      tl.to(el, .09, {opacity: 1});
    });

    tl.to(pageLogo, 1, {
      opacity: 1,
      ease: Power1.easeInOut,
    });
  }
};
