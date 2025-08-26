document.addEventListener("DOMContentLoaded", function () {
  console.log("main.js is start");
  const themeToggleBtn = document.querySelector("#theme-toggle");
  // Проверка текущей темы из localStorage
  if (localStorage.getItem("theme") === "dark" && false) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggleBtn?.classList.add("dark");
  }
  // Переключение темы
  themeToggleBtn?.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      themeToggleBtn.classList.remove("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeToggleBtn.classList.add("dark");
    }
  });
  //  wow анимации
  if (typeof WOW !== "undefined") {
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 50,
      mobile: true,
    }).init();
  } else {
    console.warn("WOW.js не загружен");
  }
  // google analitics
  /*
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      dataLayer.push(arguments);
    };
  gtag("js", new Date());
  gtag("config", "G-22ZG2NQ22L");
*/
  // консоль eruda
  const consol = document.querySelector('p[data-translate="address"]');
  if (consol && typeof eruda !== "undefined") {
    let erudaActive = false;
    consol.addEventListener("click", () => {
      try {
        if (!erudaActive) {
          eruda.init();
          erudaActive = true;
        } else {
          eruda.destroy();
          erudaActive = false;
        }
      } catch (error) {
        console.error("Ошибка при работе с Eruda:", error);
      }
    });
  }
  // Ленивая загрузка изображений
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    // Если изображение уже загружено (например, из кэша)
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      // Добавляем класс по событию загрузки
      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });
    }
  });
  // Ленивая загрузка iframe
  document.querySelectorAll('iframe[loading="lazy"]').forEach((iframe) => {
    if (iframe.complete) {
      iframe.classList.add("loaded");
    } else {
      iframe.addEventListener("load", () => {
        iframe.classList.add("loaded");
      });
    }
  });
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
    function closeMenu() {
      if (mainNav.classList.contains("active")) {
        mainNav.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
      }
    }
    mobileMenuBtn.addEventListener("click", toggleMenu);

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".main-nav") && !e.target.closest(".mobile-menu-btn")) {
        closeMenu();
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
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  if (anchors.length > 0) {
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId && targetId !== "#") {
          smoothScroll(targetId);
          if (this.classList.contains("nav-link")) {
            closeMenu();
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
        // header.style.background = "rgba(255, 255, 255, 0.98)";
        return;
      }

      if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
        // header.style.background = "rgba(255, 255, 255, 0.98)";
        header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
      }
      lastScroll = currentScroll;
    }, 50)
  );

  // --- Анимация карточек при наведении ---
  const feature_card = document.querySelectorAll(".feature-card");
  if (feature_card.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    feature_card.forEach((card) => {
      card.style.transform = "translateY(20px)";
      observer.observe(card);
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
      });
    });
  }

  // --- Выпадающее меню (dropdown) ---  
  const ENABLE_DROPDOWN = false;
  const dropdown_menu = document.querySelectorAll(".dropdown");
  if (dropdown_menu && ENABLE_DROPDOWN) {
    dropdown_menu.forEach((item) => {
      const menu = item.querySelector(".dropdown-menu");
      item.addEventListener("mouseenter", () => {
        if (menu) {
          menu.classList.add("show"); // меняем подход
        }
      });
      item.addEventListener("mouseleave", () => {
        if (menu) {
          // menu.style.animation = "";
          menu.classList.remove("show");
        }
      });
    });
  }
  if (document.body.classList.contains("page-about")) {
    // Управление темами
    const themeSwitcher = document.querySelector(".theme-switcher");
    const themeButtons = document.querySelectorAll(".theme-btn");
    const body = document.body;

    // Проверяем сохранённую тему или системную настройку
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemDark ? "dark" : "light");

    // Устанавливаем начальную тему
    body.setAttribute("data-theme", initialTheme);
    themeSwitcher.setAttribute("data-theme", initialTheme);
    themeButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-theme") === initialTheme);
    });

    // Обработчик клика по кнопкам
    themeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const newTheme = btn.getAttribute("data-theme");

        // Обновляем тему
        body.setAttribute("data-theme", newTheme);
        themeSwitcher.setAttribute("data-theme", newTheme);

        // Обновляем активную кнопку
        themeButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Сохраняем выбор
        localStorage.setItem("theme", newTheme);
      });
    });
    // =======Teachers-2=======//
    // Получаем элементы для кнопок и контейнера с карточками
    const cardsWrapper = document.querySelector(".teacher-cards-wrapper");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    const cards = document.querySelectorAll(".teacher-card");

    if (cardsWrapper && cards.length > 0 && leftBtn && rightBtn) {
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
      //   // Открытие биографии- пока не работате
      cardsWrapper.querySelectorAll(".bio-toggle-btn").forEach((button) => {
        button.addEventListener("click", () => {
          const card = button.closest(".teacher-card");
          card.classList.toggle("open");
          button.textContent = card.classList.contains("open") ? "Скрыть" : "Подробнее";
        });
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

    // Gallery
    const galleryRow = document.getElementById("galleryRow");
    const btnPrev = document.getElementById("galleryPrev");
    const btnNext = document.getElementById("galleryNext");
    if (galleryRow && btnNext && btnPrev) {
      let autoScroll = true;
      let scrollSpeed = 0.5;
      let pauseTimeout;
      let currentIndex = 0;

      // Функция непрерывной прокрутки
      function continuousScroll() {
        if (autoScroll && galleryRow.getBoundingClientRect().top < window.innerHeight) {
          galleryRow.scrollLeft += scrollSpeed;
          // Циклическая прокрутка
          if (galleryRow.scrollLeft + galleryRow.clientWidth >= galleryRow.scrollWidth) {
            galleryRow.scrollLeft = 0;
          }
        }
        requestAnimationFrame(continuousScroll);
      }
      requestAnimationFrame(continuousScroll);

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
      function closeModalFunc() {
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
      document.querySelector(".lightbox-close").addEventListener("click", closeModalFunc);
      const lightbox = document.getElementById("lightbox");
      if (lightbox) {
        lightbox.addEventListener("click", (e) => {
          if (e.target === lightbox) {
            closeModalFunc();
          }
        });
      }
      document.querySelector(".lightbox-nav.left").addEventListener("click", () => changeImage(-1));
      document.querySelector(".lightbox-nav.right").addEventListener("click", () => changeImage(1));
    }
  }
  if (document.body.classList.contains("page-index")) {
    // Video-section
    const myVideoBox = document.getElementById("myVideo-placeholder");
    const plyrContainer = document.getElementById("plyr-container");
    const playButton = document.querySelector(".video-play-button");

    let player = new Plyr("#player", {
      controls: [
        'play',
        'progress',
        'duration',
        'mute',
        'volume',
        'fullscreen',
      ],
      youtube: {
        noCookie: true,
      },
    });

    let hasPlayed = false;

    function playVideo() {
      myVideoBox.style.display = "none";
      plyrContainer.style.display = "block";
      player.play();
      hasPlayed = true;
    }

    function pauseVideo() {
      if (player && hasPlayed && typeof player.pause === "function") {
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
  }
  // --- Service Worker ---
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      try {
        const response = await fetch("./sw.js");
        if (!response.ok) {
          console.warn("Файл ServiceWorker не найден");
          return;
        }
        const registration = await navigator.serviceWorker.register("/sw.js");
        console.log("ServiceWorker зарегистрирован:", registration.scope);
      } catch (error) {
        console.error("Ошибка регистрации ServiceWorker:", error);
      }
    });
  };
  const videoCards = document.querySelectorAll(".video-card");
  const modal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const modalCloseBtn = document.querySelector(".modal-close");

  videoCards.forEach((card) => {
    card.addEventListener("click", () => {
      try {
        const videoUrl = card.getAttribute("data-video");
        videoPlayer.src = videoUrl;
        modal.classList.add("show");
        document.body.classList.add("no-scroll");
      } catch (error) {
        // console.log("Ошибка при открытии видео:", error);
      }
    });
  });

  function closeVideoModal() {
    modal.classList.remove("show");
    videoPlayer.src = "";
    document.body.classList.remove("no-scroll");
  }

  modalCloseBtn.addEventListener("click", closeVideoModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeVideoModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) closeVideoModal();
  });
});
