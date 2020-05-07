import {Power1, Power4, TimelineMax} from "gsap";

export const pageLoadAnim = (tl: TimelineMax): void => {
  const pageMain = document.querySelector(".PageMain");
  const backgroundPhoto = document.querySelector(".PageMain-bg");
  const pageLogo = document.querySelector(".PageLogo");
  const pageTitle = document.querySelector(".PageHeader-title");
  const devIcons = document.querySelectorAll(".Icon");
  const links = document.querySelectorAll(".ExternalLinks-link");
  const linksTitle = document.querySelector(".ExternalLinks-title");
  const iconsDesc = document.querySelector(".PageFooter-iconsDesc");

  if (
    pageMain &&
    backgroundPhoto &&
    pageLogo &&
    devIcons &&
    links &&
    iconsDesc &&
    linksTitle &&
    pageTitle) {
    tl
      .to(pageMain, 1, {
        opacity: 1,
        ease: Power4.easeInOut,
      })
      .to(backgroundPhoto, .5, {
        opacity: 0.5,
        ease: Power4.easeInOut,
      })
      .to(pageLogo, .5, {
        opacity: 1,
        ease: Power1.easeInOut,
      })
      .to(pageTitle, .3, {
        opacity: 1,
        ease: Power1.easeInOut,
      })
      .to(iconsDesc, .3, {
        opacity: 1,
        ease: Power1.easeInOut,
      })
      .to(linksTitle, .3, {
        opacity: 1,
        ease: Power1.easeInOut,
      });

    Array.from(links).forEach((el) => {
      tl.to(el, .09, {opacity: 1});
    });

    Array.from(devIcons).reverse().forEach((el) => {
      tl.to(el, .09, {opacity: 1});
    });
  }
};
