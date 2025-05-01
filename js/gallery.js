// <!-- Подключаем библиотеку Swiper -->
// <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
{
  /* <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>; */
}

// Инициализация Swiper с автопрокруткой
const swiper = new Swiper(".swiper-container", {
  loop: true, // Зацикливает слайды
  autoplay: {
    delay: 3000, // Задержка между прокрутками (3 секунды)
    disableOnInteraction: false, // Продолжает прокрутку даже после взаимодействия
  },
  speed: 1000, // Время перехода между слайдами (1 секунда)
  effect: "fade", // Эффект перехода
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
{
  // Галарея
  // // Модальное окно
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  document.querySelectorAll(".swiper-slide").forEach((item) => {
    item.addEventListener("click", () => {
      const imgSrc = item.querySelector(".swiper-slide > img").src;
      lightboxImg.src = imgSrc;
      lightbox.style.display = "flex";
    });
  });
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
  /*
Дальнейшие улучшения:
Добавить кнопки управления: Вы можете добавить кнопки для ручной навигации, если хотите, чтобы пользователи могли также управлять прокруткой.

Динамическая загрузка изображений: Если у вас много изображений, можно подключить lazy load для картинок, чтобы они загружались по мере прокрутки, что ускорит работу страницы.

Пример с кнопками навигации:
html
Копировать
Редактировать
<div class="swiper-button-next"></div>
<div class="swiper-button-prev"></div>
И добавьте эти кнопки в свой контейнер Swiper для навигации вперед и назад.

Заключение:
Теперь у вас будет карусель с медленной автопрокруткой и красивым эффектом плавного перехода. Карусель будет автоматически прокручиваться, но пользователи смогут также взаимодействовать с ней через кнопки или пагинацию.
 */
}
{
  /* Если есть другие пожелания или детали, которые нужно доработать, сообщите, я помогу! */
}
