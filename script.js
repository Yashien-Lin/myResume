const menuList = document.querySelector(".menuList");
const elementA = menuList.querySelectorAll("a");
const navbar = document.querySelector(".navbar-collapse");

menuList.addEventListener("click", (e) => {
  // e.preventDefault();
  console.log("elementA:", elementA);
  navbar.classList.remove("show");

  elementA.forEach((item) => {
    // console.log(item);
    if (item.classList.contains("active")) {
      console.log("Yes!");
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
    // console.log(item.offsetHeight); //-30px
    item.setAttribute("style", `margin-top:${item.offsetHeight - 30}px`); //-208
  });
}

window.addEventListener("resize", function () {
  // console.log("window size:", window.innerWidth);
  TL_content_height.forEach((item) => {
    // console.log(item.offsetHeight); //-30px
    if (window.innerWidth > 767) {
      item.setAttribute("style", `margin-top:${item.offsetHeight - 30}px`); //-208
    } else {
      item.removeAttribute("style", `margin-top:${item.offsetHeight - 30}px`); //-208
    }
  });
});
