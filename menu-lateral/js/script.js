const nav = document.querySelector(".navigation");
const list = document.querySelectorAll(".list");
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
