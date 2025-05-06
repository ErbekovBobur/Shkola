document.addEventListener("DOMContentLoaded", function () {
  // --- Общие элементы ---
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mainNav = document.querySelector(".main-nav");
  const header = document.querySelector(".sticky-header");
  const dateInput = document.getElementById("date");

  // --- Мобильное меню ---
  function toggleMenu() {
    if (!mobileMenuBtn || !mainNav) return;
    const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
    mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);
    mainNav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  }

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", toggleMenu);

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".main-nav") && !e.target.closest(".mobile-menu-btn")) {
        mainNav.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
      }
    });
  }

  // --- Плавный скролл ---
  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element && header) {
      const headerHeight = header.offsetHeight;
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

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        smoothScroll(targetId);
        if (this.classList.contains("nav-link") && mobileMenuBtn && mainNav) {
          mobileMenuBtn.classList.remove("active");
          mainNav.classList.remove("active");
          document.body.classList.remove("no-scroll");
        }
      }
    });
  });

  // --- Фиксация шапки ---
  let lastScroll = 0;
  window.addEventListener(
    "scroll",
    debounce(() => {
      if (!header) return;
      const currentScroll = window.pageYOffset;

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

  // --- Анимация карточек ---
  document.querySelectorAll(".feature-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  // --- Выпадающее меню ---
  document.querySelectorAll(".dropdown").forEach((item) => {
    const menu = item.querySelector(".dropdown-menu");
    if (menu) {
      item.addEventListener("mouseenter", () => {
        menu.style.display = "block";
        menu.style.animation = "slideDown 0.3s ease-out forwards";
      });

      item.addEventListener("mouseleave", () => {
        menu.style.animation = "";
        setTimeout(() => {
          menu.style.display = "none";
        }, 300);
      });
    }
  });

  // --- Календарь ---
  function initCalendar() {
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
  }

  initCalendar();

  // --- Переключение языков ---
  const translations = {
    "school-name": { ru: "School Academy", uz: "School Akademiyasi" },
    address: { ru: "Ташкент, Юнусабадский район", uz: "Toshkent, Yunusobod tumani" },
    "nav-home": { ru: "Главная", uz: "Bosh sahifa" },
    "nav-about": { ru: "О школе", uz: "Maktab haqida" },
  };

  function getTranslation(key, lang) {
    if (!translations || !translations[key]) return key;
    return translations[key][lang] || translations[key]["ru"] || key;
  }

  function applyLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      element.textContent = getTranslation(key, lang);
    });

    document.querySelectorAll("[data-translate-placeholder]").forEach((input) => {
      const key = input.getAttribute("data-translate-placeholder");
      input.placeholder = getTranslation(key, lang);
    });

    document.documentElement.lang = lang;
  }

  function initLanguage() {
    const savedLang = localStorage.getItem("selectedLang");
    const browserLang = navigator.language.slice(0, 2);
    const defaultLang = ["ru", "uz"].includes(browserLang) ? browserLang : "ru";
    const lang = savedLang || defaultLang;

    applyLanguage(lang);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      btn.classList.toggle("active", btnLang === lang);
      btn.setAttribute("aria-pressed", btnLang === lang ? "true" : "false");
    });

    const slider = document.querySelector(".lang-slider");
    if (slider) {
      slider.style.transform = lang === "uz" ? "translateX(100%)" : "translateX(0)";
    }
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      localStorage.setItem("selectedLang", lang);
      applyLanguage(lang);

      document.querySelectorAll(".lang-btn").forEach((b) => {
        b.classList.toggle("active", b === this);
        b.setAttribute("aria-pressed", b === this ? "true" : "false");
      });

      const slider = document.querySelector(".lang-slider");
      if (slider) {
        slider.style.transform = lang === "uz" ? "translateX(100%)" : "translateX(0)";
      }
    });
  });

  initLanguage();

  // --- Галерея ---
  const galleryRow = document.getElementById("galleryRow");
  const btnPrev = document.getElementById("galleryPrev");
  const btnNext = document.getElementById("galleryNext");
  let autoScroll = true;
  let scrollSpeed = 0.5;
  let pauseTimeout;
  let currentIndex = 0;

  function continuousScroll() {
    if (autoScroll && galleryRow) {
      galleryRow.scrollLeft += scrollSpeed;

      if (galleryRow.scrollLeft + galleryRow.clientWidth >= galleryRow.scrollWidth) {
        galleryRow.scrollLeft = 0;
      }
    }
    requestAnimationFrame(continuousScroll);
  }

  function pauseAutoScroll() {
    autoScroll = false;
    clearTimeout(pauseTimeout);
    pauseTimeout = setTimeout(() => {
      autoScroll = true;
    }, 4000);
  }

  function openModal(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    if (lightbox && lightboxImg) {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
      currentIndex = Array.from(document.querySelectorAll(".gallery-card img")).indexOf(img);
    }
  }

  function closeModal() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
      lightbox.style.display = "none";
    }
  }

  function changeImage(direction) {
    const images = document.querySelectorAll(".gallery-card img");
    currentIndex = (currentIndex + direction + images.length) % images.length;
    const lightboxImg = document.getElementById("lightbox-img");
    if (lightboxImg) {
      lightboxImg.src = images[currentIndex].src;
    }
  }

  if (btnPrev && btnNext && galleryRow) {
    btnPrev.addEventListener("click", () => {
      galleryRow.scrollBy({ left: -300, behavior: "smooth" });
      pauseAutoScroll();
    });

    btnNext.addEventListener("click", () => {
      galleryRow.scrollBy({ left: 300, behavior: "smooth" });
      pauseAutoScroll();
    });

    galleryRow.addEventListener("mousedown", pauseAutoScroll);
    galleryRow.addEventListener("touchstart", pauseAutoScroll);
    galleryRow.addEventListener("wheel", pauseAutoScroll);
  }

  document.querySelectorAll(".gallery-card img").forEach((img) => {
    img.addEventListener("click", () => openModal(img));
  });

  const lightboxClose = document.querySelector(".lightbox-close");
  const lightbox = document.getElementById("lightbox");
  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeModal);
  }
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target.id === "lightbox") {
        closeModal();
      }
    });
  }

  document.querySelectorAll(".lightbox-nav.left").forEach((nav) => {
    nav.addEventListener("click", () => changeImage(-1));
  });
  document.querySelectorAll(".lightbox-nav.right").forEach((nav) => {
    nav.addEventListener("click", () => changeImage(1));
  });

  requestAnimationFrame(continuousScroll);

  // --- Фильтрация ---
  function filterItems(button, itemSelector, filterAttribute) {
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");
    document.querySelectorAll(itemSelector).forEach((item) => {
      if (filter === "all" || item.getAttribute(filterAttribute) === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  document.querySelectorAll(".filter-btn[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      filterItems(button, target === "gallery" ? ".gallery-card" : ".teacher-card", "data-category");
    });
  });

  // --- Валидация форм ---
  class FormValidator {
    constructor(formId) {
      this.form = document.getElementById(formId);
      if (this.form) {
        this.init();
      }
    }

    init() {
      this.setMinDate();
      this.addValidation();
      this.initPhoneMask();
    }

    setMinDate() {
      const dateInput = this.form.querySelector('input[type="date"]');
      if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;
      }
    }

    initPhoneMask() {
      const phoneInput = this.form.querySelector('input[type="tel"]');
      if (phoneInput) {
        phoneInput.addEventListener("input", function (e) {
          const x = e.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
          e.target.value = !x[2] ? x[1] : `+${x[1]} (${x[2]}) ${x[3]}-${x[4]}-${x[5]}`;
        });
      }
    }

    addValidation() {
      this.form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (this.validateForm()) {
          await this.submitForm();
        }
      });
    }

    validateForm() {
      let isValid = true;
      const requiredFields = this.form.querySelectorAll("[required]");

      requiredFields.forEach((field) => {
        field.classList.remove("error");

        if (!field.value.trim()) {
          field.classList.add("error");
          this.showError(field, "Это поле обязательно");
          isValid = false;
        }

        if (field.type === "email" && !this.validateEmail(field.value)) {
          field.classList.add("error");
          this.showError(field, "Введите корректный email");
          isValid = false;
        }
      });

      return isValid;
    }

    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    showError(field, message) {
      let errorElement = field.nextElementSibling;

      if (!errorElement || !errorElement.classList.contains("error-message")) {
        errorElement = document.createElement("div");
        errorElement.className = "error-message";
        field.parentNode.insertBefore(errorElement, field.nextSibling);
      }

      errorElement.textContent = message;
    }

    async submitForm() {
      const formData = new FormData(this.form);
      const submitBtn = this.form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      try {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';

        const response = await fetch(this.form.action, {
          method: "POST",
          body: formData,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        });

        const data = await response.json();

        if (data.success) {
          this.showSuccessMessage();
          this.form.reset();
        } else {
          this.showServerError(data.message);
        }
      } catch (error) {
        console.error("Ошибка:", error);
        this.showServerError("Ошибка соединения");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }

    showSuccessMessage() {
      const successMsg = document.createElement("div");
      successMsg.className = "success-message";
      successMsg.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span data-translate="form-success">Спасибо! Мы свяжемся с вами в ближайшее время.</span>
      `;

      this.form.parentNode.insertBefore(successMsg, this.form.nextSibling);

      setTimeout(() => {
        successMsg.classList.add("fade-out");
        setTimeout(() => successMsg.remove(), 500);
      }, 5000);
    }

    showServerError(message) {
      alert(`Ошибка: ${message}`);
    }
  }

  new FormValidator("schoolTourForm");

  // --- Scroll Restoration ---
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
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