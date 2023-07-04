const btnElement = document.querySelector(".btn");
const videoElement = document.querySelector(".background-video");
const fontAwesome = document.querySelector(".fa");

btnElement.addEventListener("click", () => {
  if (btnElement.classList.contains("pause")) {
    btnElement.classList.remove("pause");
    videoElement.play();
    fontAwesome.classList.add("fa-play");
    fontAwesome.classList.remove("fa-pause");
  } else {
    btnElement.classList.add("pause");
    videoElement.pause();
    fontAwesome.classList.add("fa-pause");
    fontAwesome.classList.remove("fa-play");
  }
});
