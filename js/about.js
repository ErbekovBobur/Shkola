document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");
    document.querySelectorAll(".teacher-card").forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Фильтрация галереи
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.getAttribute("data-filter");
    document.querySelectorAll(".gallery-item").forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// // Галарея
// // Модальное окно
// const lightbox = document.getElementById("lightbox");
// const lightboxImg = document.getElementById("lightbox-img");
// const closeBtn = document.querySelector(".lightbox-close");

// document.querySelectorAll(".gallery-item").forEach((item) => {
//   item.addEventListener("click", () => {
//     const imgSrc = item.querySelector(".gallery-image").src;
//     lightboxImg.src = imgSrc;
//     lightbox.style.display = "flex";
//   });
// });

// closeBtn.addEventListener("click", () => {
//   lightbox.style.display = "none";
// });

// lightbox.addEventListener("click", (e) => {
//   if (e.target === lightbox) {
//     lightbox.style.display = "none";
//   }
// });
