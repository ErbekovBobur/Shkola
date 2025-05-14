console.log("main.js is start");

document.addEventListener("DOMContentLoaded", function () {
  //  wow анимации
  new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 50,
    mobile: true,
  }).init();
  // google analitics
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-22ZG2NQ22L");

  // консоль eruda
  const consol = document.querySelector('p[data-translate="address"]');
  if (consol) {
    let erudaActive = false;
    consol.onclick = () => {
      if (!erudaActive) {
        eruda.init();
        erudaActive = true;
      } else {
        eruda.destroy();
        erudaActive = false;
      }
    };
  }
  // Элементы
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mainNav = document.querySelector(".main-nav");
  const header = document.querySelector(".sticky-header");
  const dateInput = document.getElementById("date");
  const anchors = document.querySelectorAll('a[href^="#"]');

  // --- Мобильное меню ---

  if (mobileMenuBtn && mainNav) {
    function toggleMenu() {
      const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);
      mainNav.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
    }
    mobileMenuBtn.addEventListener("click", toggleMenu);

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".main-nav") && !e.target.closest(".mobile-menu-btn")) {
        mainNav.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
      }
    });
  }

  // --- Плавный скролл с debounce ---
  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      const headerHeight = header ? header.offsetHeight : 0;
      const offset = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      // clearTimeout(timeout);
      // timeout = setTimeout(() => func.apply(this, args), wait);
      cancelAnimationFrame(timeout);
      timeout = requestAnimationFrame(() => func.apply(this, args));
    };
  }

  if (anchors) {
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId && targetId !== "#") {
          smoothScroll(targetId);
          // Закрыть мобильное меню при клике на ссылку
          if (this.classList.contains("nav-link")) {
            // ++++
            mobileMenuBtn.classList.remove("active");
            mainNav.classList.remove("active");
            document.body.classList.remove("no-scroll");
          }
        }
      });
    });
  }

  // --- Фиксация шапки при скролле ---
  let lastScroll = 0;
  window.addEventListener(
    "scroll",
    debounce(() => {
      const currentScroll = window.pageYOffset;

      if (!header) return;

      if (currentScroll <= 0) {
        header.style.boxShadow = "none";
        header.style.background = "rgba(255, 255, 255, 0.98)";
        return;
      }

      if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
        header.style.background = "rgba(255, 255, 255, 0.98)";
        header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
      }

      lastScroll = currentScroll;
    }, 15)
  );

  // --- Анимация карточек при наведении ---
  const feature_card = document.querySelectorAll(".feature-card");
  if (feature_card) {
    feature_card.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
      });
    });
  }

  // --- Инициализация календаря ---
  if (dateInput) {
    dateInput.addEventListener("input", function () {
      const selectedDate = new Date(this.value);
      const day = selectedDate.getDay();
      if (day === 0 || day === 6) {
        this.setCustomValidity("Выберите будний день");
        this.reportValidity();
        this.value = "";
      } else {
        this.setCustomValidity("");
      }
    });
  }

  // --- Выпадающее меню (dropdown) ---
  const dropdown_menu = document.querySelectorAll(".dropdown");
  if (dropdown_menu) {
    dropdown_menu.forEach((item) => {
      const menu = item.querySelector(".dropdown-menu");
      item.addEventListener("mouseenter", () => {
        if (menu) {
          // menu.style.display = "block";
          menu.classList.add("show"); // меняем подход
          menu.style.animation = "slideDown 0.3s ease-out forwards";
        }
      });

      item.addEventListener("mouseleave", () => {
        if (menu) {
          // menu.style.animation = "";
          menu.classList.remove("show");
          setTimeout(() => {
            // menu.style.display = "none";
            menu.style.animation = "";
          }, 300);
        }
      });
    });
  }

  // Teachers
  // Скрипт для прокрутки карточек

  // const scrollContainer = document.getElementById("teachersScroll");
  // if (scrollContainer) {
  //   document.querySelector(".left-btn").addEventListener("click", () => {
  //     scrollContainer.scrollBy({ left: -324, behavior: "smooth" });
  //   });
  //   document.querySelector(".right-btn").addEventListener("click", () => {
  //     scrollContainer.scrollBy({ left: 324, behavior: "smooth" });
  //   });

  //   // Открытие биографии
  //   document.querySelectorAll(".bio-toggle-btn").forEach((button) => {
  //     button.addEventListener("click", () => {
  //       console.log("bio");

  //       const card = button.closest(".teacher-card");
  //       card.classList.toggle("open");
  //       button.textContent = card.classList.contains("open") ? "Скрыть" : "Подробнее";
  //     });
  //   });
  // }
  if (window.location.pathname === "/about.html") {
    console.log(window.location.pathname);
    // =======Teachers-2=======//
    // Получаем элементы для кнопок и контейнера с карточками
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    const cardsWrapper = document.querySelector(".teacher-cards-wrapper");
    const cards = document.querySelectorAll(".teacher-card");

    if (cards) {
      // Получаем ширину карточки, чтобы прокручивать на одну карточку
      const cardWidth = cards[0].offsetWidth + 20; // Ширина карточки с учетом отступа
      let scrollPosition = 0; // Текущая позиция прокрутки

      // Функция для прокрутки влево
      leftBtn.addEventListener("click", () => {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          cardsWrapper.style.transform = `translateX(-${scrollPosition}px)`;
        }
      });

      // Функция для прокрутки вправо
      rightBtn.addEventListener("click", () => {
        if (scrollPosition < (cards.length - 4) * cardWidth) {
          // Учитываем 4 видимые карточки
          scrollPosition += cardWidth;
          cardsWrapper.style.transform = `translateX(-${scrollPosition}px)`;
        }
      });
    }
    // FAQ
    const faqItems = document.querySelectorAll(".faq-item");
    if (faqItems) {
      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
          // Закрываем все другие вопросы, если они были открыты
          faqItems.forEach((innerItem) => {
            if (innerItem !== item) {
              innerItem.classList.remove("active");
            }
          });

          // Переключаем текущий вопрос
          item.classList.toggle("active");
        });
      });
    }
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
  }
  // Video-section

  const myVideoBox = document.getElementById("myVideo-placeholder");
  const plyrContainer = document.getElementById("plyr-container");
  const playButton = document.querySelector(".video-play-button");

  let player = new Plyr("#player", {
    youtube: {
      noCookie: true,
    },
  });

  let hasPlayed = false;

  function playVideo() {
    console.log(1);

    myVideoBox.style.display = "none";
    plyrContainer.style.display = "block";

    player.play();
    hasPlayed = true;
  }

  function pauseVideo() {
    if (player && hasPlayed) {
      player.pause();
    }
  }

  if (playButton && myVideoBox) {
    playButton.addEventListener("click", playVideo);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Если видео вышло за пределы экрана — ставим на паузу
        if (!entry.isIntersecting && hasPlayed) {
          pauseVideo();
        }
      });
    },
    { threshold: 0.1 }
  );

  // Наблюдаем за plyrContainer
  observer.observe(plyrContainer);
});

// --- Service Worker ---
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("ServiceWorker зарегистрирован:", registration.scope);
      })
      .catch((error) => {
        console.log("Ошибка регистрации ServiceWorker:", error);
      });
  });
}
