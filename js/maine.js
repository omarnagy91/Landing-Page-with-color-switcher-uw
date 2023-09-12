// Random image bg
let landingPage = document.querySelector(".landing-page");
let ArrImgBg = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
let backgroundOption = true;
let setRandom;
function random() {
  if (backgroundOption === true) {
    setRandom = setInterval(() => {
      let random = Math.floor(Math.random() * ArrImgBg.length);
      landingPage.style.backgroundImage =
        'url("image/' + ArrImgBg[random] + '")';
    }, 10000);
  }
}
// Setting icon
document.querySelector(".setting-icon .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("open");
};

// color list
let colorList = document.querySelectorAll(".colors-list li");
let localColor = localStorage.getItem("color-option");
if (localColor !== null) {
  document.documentElement.style.setProperty("--main-color", localColor);
  document.querySelectorAll(".colors-list li").forEach((e) => {
    e.classList.remove("active");
    if (e.dataset.color === localColor) {
      e.classList.add("active");
    }
  });
}
colorList.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color-option", e.target.dataset.color);
    e.target.parentElement.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
// reset
document.querySelector(".reset").onclick = function () {
  window.localStorage.clear();
  window.location.reload();
};
// active a
document.querySelectorAll("header .header-area .link li a").forEach((a) => {
  a.addEventListener("click", (e) => {
    console.log(e);
    e.target.parentElement.parentElement
      .querySelectorAll(".active")
      .forEach((e) => {
        e.classList.remove("active");
      });
    console.log("aa" + e);
    e.target.classList.add("active");
  });
});

// random
let randomBg = localStorage.getItem("background-option");
if (randomBg !== null) {
  if (randomBg === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
}

document.querySelectorAll(".random span").forEach((e) => {
  e.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      random();
      localStorage.setItem("background-option", backgroundOption);
    } else {
      backgroundOption = false;
      clearInterval(setRandom);
      localStorage.setItem("background-option", backgroundOption);
    }
  });
});
random();
// data progress
let skills = document.querySelector(".skills");
window.onscroll = function () {
  let topOff = skills.offsetTop;
  let height = skills.offsetHeight;
  let inner = window.innerHeight;
  let pageY = window.pageYOffset;
  if (pageY > topOff - inner) {
    document.querySelectorAll(".skills span").forEach((e) => {
      e.style.width = e.dataset.progress;
    });
  }
};
// gallery
document.querySelectorAll(".gallery .image img").forEach((img) => {
  img.addEventListener("click", (e) => {
    let popupOverflow = document.createElement("div");
    popupOverflow.className = "popup-layout";
    document.body.appendChild(popupOverflow);
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    let image = document.createElement("img");
    image.src = img.src;
    popupBox.appendChild(image);
    let icon = document.createElement("i");
    icon.className = "fa-sharp fa-solid fa-xmark";
    popupBox.appendChild(icon);
    document.body.appendChild(popupBox);
    icon.addEventListener("click", () => {
      document.body.removeChild(popupOverflow);
      document.body.removeChild(popupBox);
    });
    if (img.alt !== "") {
      let headText = document.createElement("h3");
      let text = document.createTextNode(img.alt);
      headText.appendChild(text);
      popupBox.appendChild(headText);
    }
  });
});
let link = document.querySelector("header .header-area .link ");
window.addEventListener("scroll", function () {
  document
    .querySelector(".header-area")
    .classList.toggle("fixed", this.scrollY > 0);
  link.classList.toggle("scroll", this.scrollY > 0);
});

let icon = document.querySelector("header .header-area i");
icon.addEventListener("click", function () {
  link.classList.toggle("in-blo");
});

document
  .querySelector("header .header-area .logo a")
  .addEventListener("click", () => {
    window.location.reload();
  });
