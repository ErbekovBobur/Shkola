console.log("main.js is start");

document.addEventListener("DOMContentLoaded", function () {
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

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        smoothScroll(targetId);
        // Закрыть мобильное меню при клике на ссылку
        if (this.classList.contains("nav-link")) { // ++++
          mobileMenuBtn.classList.remove("active");
          mainNav.classList.remove("active");
          document.body.classList.remove("no-scroll");
        }
      }
    });
  });

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
  document.querySelectorAll(".feature-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

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
  document.querySelectorAll(".dropdown").forEach((item) => {
    const menu = item.querySelector(".dropdown-menu");
    item.addEventListener("mouseenter", () => {
      if (menu) {
        // menu.style.display = "block";
        menu.classList.add('show'); // меняем подход
        menu.style.animation = "slideDown 0.3s ease-out forwards";
      }
    });

    item.addEventListener("mouseleave", () => {
      if (menu) {
        // menu.style.animation = "";
        menu.classList.remove('show');
        setTimeout(() => {
          // menu.style.display = "none";
          menu.style.animation = "";
        }, 300);
      }
    });
  });
  // FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // Закрываем все другие вопросы, если они были открыты
      faqItems.forEach(innerItem => {
        if (innerItem !== item) {
          innerItem.classList.remove('active');
        }
      });

      // Переключаем текущий вопрос
      item.classList.toggle('active');
    });
  });
  // Teachers 
  document.querySelectorAll('.bio-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const bio = button.nextElementSibling;
      const overlay = button.closest('.bio-overlay');
      const isVisible = bio.style.display === 'block';

      if (isVisible) {
        bio.style.display = 'none';
        button.textContent = 'Показать биографию';
        overlay.style.height = 'auto';
      } else {
        bio.style.display = 'block';
        button.textContent = 'Скрыть биографию';
        overlay.style.height = 'auto';  // Не меняем высоту карточки
      }
    });
  });

  // Скрипт для прокрутки карточек
  // Скрипт для показа/скрытия биографии
  document.querySelectorAll('.bio-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const bio = button.nextElementSibling;
      const overlay = button.closest('.bio-overlay');
      const isVisible = bio.style.display === 'block';

      if (isVisible) {
        bio.style.display = 'none';
        button.textContent = 'Показать биографию';
        overlay.style.height = 'auto';
      } else {
        bio.style.display = 'block';
        button.textContent = 'Скрыть биографию';
        overlay.style.height = 'auto';  // Не меняем высоту карточки
      }
    });
  });

  // Скрипт для прокрутки карточек
  const scrollContainer = document.getElementById('teachersScroll');
  document.querySelector('.left-btn').addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -324, behavior: 'smooth' });
  });
  document.querySelector('.right-btn').addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 324, behavior: 'smooth' });
  });

  // Открытие биографии
  document.querySelectorAll('.bio-toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.teacher-card');
      card.classList.toggle('open');
      button.textContent = card.classList.contains('open') ? 'Скрыть' : 'Подробнее';
    });
  });



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
