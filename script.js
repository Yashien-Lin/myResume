const menuList = document.querySelector(".menuList");
const elementA = menuList.querySelectorAll("a");
const navbar = document.querySelector(".navbar-collapse");

menuList.addEventListener("click", (e) => {
  navbar.classList.remove("show");

  elementA.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
  if (e.target.nodeName == "A") {
    e.target.classList.add("active");
  }
});

const TL_content_height = document.querySelectorAll(".timeline-content");
if (window.innerWidth > 767) {
  TL_content_height.forEach((item) => {
    item.setAttribute("style", `margin-top:${item.offsetHeight - 30}px`);
  });
}

window.addEventListener("resize", function () {
  TL_content_height.forEach((item) => {
    if (window.innerWidth > 767) {
      item.setAttribute("style", `margin-top:${item.offsetHeight - 30}px`);
    } else {
      item.removeAttribute("style", `margin-top:${item.offsetHeight - 30}px`);
    }
  });
});
