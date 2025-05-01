const galleryRow = document.getElementById("galleryRow");
const btnPrev = document.getElementById("galleryPrev");
const btnNext = document.getElementById("galleryNext");

let autoScroll = true;
let scrollSpeed = 0.5;
let pauseTimeout;
let currentIndex = 0;

// Функция непрерывной прокрутки
function continuousScroll() {
  if (autoScroll) {
    galleryRow.scrollLeft += scrollSpeed;

    // Циклическая прокрутка
    if (galleryRow.scrollLeft + galleryRow.clientWidth >= galleryRow.scrollWidth) {
      galleryRow.scrollLeft = 0;
    }
  }
  requestAnimationFrame(continuousScroll);
}

// Функция паузы автопрокрутки
function pauseAutoScroll() {
  autoScroll = false;
  clearTimeout(pauseTimeout);
  pauseTimeout = setTimeout(() => {
    autoScroll = true;
  }, 4000); // пауза 4 сек
}

// Открытие модального окна
function openModal(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src; // Устанавливаем изображение в модале
  lightbox.style.display = "flex"; // Показываем модальное окно
  currentIndex = Array.from(document.querySelectorAll(".gallery-card img")).indexOf(img); // Устанавливаем текущий индекс
}

// Закрытие модального окна
function closeModal() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none"; // Скрываем модальное окно
}

// Изменение изображения в модальном окне
function changeImage(direction) {
  const images = document.querySelectorAll(".gallery-card img");
  currentIndex = (currentIndex + direction + images.length) % images.length; // Циклическое переключение
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = images[currentIndex].src; // Обновляем изображение
}

// Привязка событий для кнопок
btnPrev.addEventListener("click", () => {
  galleryRow.scrollBy({ left: -300, behavior: "smooth" });
  pauseAutoScroll();
});

btnNext.addEventListener("click", () => {
  galleryRow.scrollBy({ left: 300, behavior: "smooth" });
  pauseAutoScroll();
});

// Привязка обработчика события клика к каждому изображению
const images = document.querySelectorAll(".gallery-card img");
images.forEach((img) => {
  img.addEventListener("click", () => openModal(img));
});

// Пользовательская прокрутка мышью/тачем
galleryRow.addEventListener("mousedown", pauseAutoScroll);
galleryRow.addEventListener("touchstart", pauseAutoScroll);
galleryRow.addEventListener("wheel", pauseAutoScroll);

// Закрытие модального окна при клике
document.querySelector(".lightbox-close").addEventListener("click", closeModal);

// const lightbox = document.getElementById("lightbox").addEventListener(
//   "click",
//   (e) => {
//     if (e.target.id === "lightbox") {
//       closeModal();
//     }
//   },
//   { capture: true }
// );
document.querySelector(".lightbox-nav.left").addEventListener("click", () => changeImage(-1));
document.querySelector(".lightbox-nav.right").addEventListener("click", () => changeImage(1));

// Запуск непрерывной прокрутки
window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(continuousScroll);
});
