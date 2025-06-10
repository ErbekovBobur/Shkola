document.addEventListener("DOMContentLoaded", () => {
  const videoCards = document.querySelectorAll(".video-card");
  const modal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const closeModal = document.querySelector(".modal-close");

  videoCards.forEach((card) => {
    card.addEventListener("click", () => {
      const videoUrl = card.getAttribute("data-video");
      videoPlayer.src = videoUrl;
      modal.classList.add("show");
      document.body.classList.add("no-scroll");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
    videoPlayer.src = "";
    document.body.classList.remove("no-scroll");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      videoPlayer.src = "";
      document.body.classList.remove("no-scroll");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      modal.classList.remove("show");
      videoPlayer.src = "";
      document.body.classList.remove("no-scroll");
    }
  });
});
