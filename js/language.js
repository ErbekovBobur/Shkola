// language.js - полностью заменить содержимое файла
document.addEventListener("DOMContentLoaded", function () {
  // 1. Словарь всех переводов
  const translations = {
    "school-name": {
      "ru": "Школьная академия",
      "uz": "School Academy"
    },
    "address": {
      "ru": "Ташкент, Юнусабадский район",
      "uz": "Toshkent, Yunusobod tumani"
    },
    "nav-home": {
      "ru": "Главная",
      "uz": "Bosh sahifa"
    },
    "nav-about": {
      "ru": "О школе",
      "uz": "Maktab haqida"
    },
    "nav-about-history": {
      "ru": "История",
      "uz": "Tarix"
    },
    "nav-about-history": {
      "ru": "История",
      "uz": "Tarix"
    },
    "nav-about-teachers": {
      "ru": "Преподаватели",
      "uz": "Ustozlar"
    },
    "nav-about-gallery": {
      "ru": "Галарея",
      "uz": "Galareya"
    },
    "nav-about-mission": {
      "ru": "Наша миссия",
      "uz": "Bizning maqsadlarimiz"
    },
    "nav-about-faq": {
      "ru": "Часто задаваемые вопросы",
      "uz": "Savol-javoblar"
    },
    "nav-program": {
      "ru": "Учебные программы",
      "uz": "O'quv dasturlari"
    },
    "nav-program-primary-school": {
      "ru": "Начальная школа",
      "uz": "Boshlang'ich maktab"
    },
    "nav-program-high-school": {
      "ru": "Средняя школа",
      "uz": "O'rta maktab"
    },
    "nav-program-clubs" : {
      "ru": "Дополнительные занятия",
      "uz": "Qo'shimcha mashg'ulotlar"
    },
    
    
    
    
    "nav-contact": {
      "ru": "Контакты",
      "uz": "Aloqa"
    },
    // Добавьте другие фразы по аналогии
  };

  // 2. Безопасная функция получения перевода
  function getTranslation(key, lang) {
    if (!translations || !translations[key]) return key;
    return translations[key][lang] || translations[key]['ru'] || key;
  }

  // 3. Применение языка ко всем элементам
  function applyLanguage(lang) {
    // Текстовые элементы
    document.querySelectorAll("[data-translate]").forEach(element => {
      const key = element.getAttribute("data-translate");
      element.textContent = getTranslation(key, lang);
    });

    // Плейсхолдеры инпутов
    document.querySelectorAll("[data-translate-placeholder]").forEach(input => {
      const key = input.getAttribute("data-translate-placeholder");
      input.placeholder = getTranslation(key, lang);
    });

    // Атрибут lang у html
    document.documentElement.lang = lang;
  }

  // 4. Инициализация языка
  function initLanguage() {
    const savedLang = localStorage.getItem("selectedLang");
    const browserLang = navigator.language.slice(0, 2);
    const defaultLang = ["ru", "uz"].includes(browserLang) ? browserLang : "ru";
    const lang = savedLang || defaultLang;

    applyLanguage(lang);

    // Обновляем кнопки переключателя
    document.querySelectorAll(".lang-btn").forEach(btn => {
      const btnLang = btn.getAttribute("data-lang");
      btn.classList.toggle("active", btnLang === lang);
      btn.setAttribute("aria-pressed", btnLang === lang ? "true" : "false");
    });

    // Анимация слайдера
    const slider = document.querySelector(".lang-slider");
    if (slider) {
      slider.style.transform = lang === "uz" ? "translateX(100%)" : "translateX(0)";
    }
  }

  // 5. Обработчики кнопок переключения
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      localStorage.setItem("selectedLang", lang);
      applyLanguage(lang);

      document.querySelectorAll(".lang-btn").forEach(b => {
        b.classList.toggle("active", b === this);
        b.setAttribute("aria-pressed", b === this ? "true" : "false");
      });

      const slider = document.querySelector(".lang-slider");
      if (slider) {
        slider.style.transform = lang === "uz" ? "translateX(100%)" : "translateX(0)";
      }
    });
  });

  // Запускаем инициализацию
  initLanguage();
});