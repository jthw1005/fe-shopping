function setTopAdEvent() {
  const closeBtn = document.querySelector(".top-ad__btn");
  closeBtn.addEventListener("click", topAdBtnHandler);
}

function topAdBtnHandler(event) {
  const topAd = event.target.parentNode;
  topAd.classList.toggle("hidden");
}

export default setTopAdEvent;
