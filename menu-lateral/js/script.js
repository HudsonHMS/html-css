import { includeHtml } from "../../getHtmlContent/gethtmlContent.js";

const nav = document.querySelector(".navigation");
const list = document.querySelectorAll(".list");
const menuBars = document.querySelector("div.container");
if (nav) {
  nav.addEventListener("click", (el) => {
    if (list) {
      Array.from(list).forEach((i) => {
        i.classList.remove("active");
      });
    }
    el.target.parentElement.classList.add('active');
  }, true);
}

includeHtml();
