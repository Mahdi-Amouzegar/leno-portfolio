document.addEventListener("DOMContentLoaded", function () {
  const video_dialog = document.querySelector(".video-modal");
  const videoFrame = document.querySelector(".video-modal__video");
  const playBtn = document.querySelector(".preview__play-btn-back");

  playBtn.addEventListener("click", function () {
    video_dialog.showModal();
    videoFrame.src =
      "https://www.aparat.com/video/video/embed/videohash/pbjip7n/vt/frame";
  });

  const videoModalCloseBtn = document.querySelector(".video-modal__close");

  // Close Video Modal
  videoModalCloseBtn.addEventListener("click", function () {
    video_dialog.close();
  });
});
