document.addEventListener("DOMContentLoaded", function () {
  // 1. Словарь всех переводов
  let translations = {};

  fetch("./data/translations.json")
    .then((res) => res.json())
    .then((data) => {
      translations = data;
      initLanguage(); // вызов после загрузки
    })
    .catch((err) => {
      console.error("Ошибка загрузки translations.json", err);
    });

  const reserve = {
    "school-name": {
      ru: "Школьная академия",
      uz: "School Academy",
    },
    address: {
      ru: "Ташкент, Юнусабадский район",
      uz: "Toshkent, Yunusobod tumani",
    },
    "nav-home": {
      ru: "Главная",
      uz: "Bosh sahifa",
    },
    "nav-about": {
      ru: "О школе",
      uz: "Maktab haqida",
    },
    "nav-about-history": {
      ru: "История",
      uz: "Tarix",
    },
    "nav-about-teachers": {
      ru: "Преподаватели",
      uz: "Ustozlar",
    },
    "nav-about-gallery": {
      ru: "Галарея",
      uz: "Galareya",
    },
    "nav-about-mission": {
      ru: "Наша миссия",
      uz: "Bizning maqsadlarimiz",
    },
    "nav-about-faq": {
      ru: "Часто задаваемые вопросы",
      uz: "Savol-javoblar",
    },
    "nav-program": {
      ru: "Учебные программы",
      uz: "O'quv dasturlari",
    },
    "nav-program-primary-school": {
      ru: "Начальная школа",
      uz: "Boshlang'ich maktab",
    },
    "nav-program-high-school": {
      ru: "Средняя школа",
      uz: "O'rta maktab",
    },
    "nav-program-clubs": {
      ru: "Дополнительные занятия",
      uz: "Qo'shimcha mashg'ulotlar",
    },
    "nav-contact": {
      ru: "Контакты",
      uz: "Aloqa",
    },
    "hero-title": {
      ru: "Качественное образование",
      uz: "Zamonaviy va sifatli taʼlim",
    },
    "hero-title-accent": {
      ru: "в Ташкенте",
      uz: "Toshkentda",
    },
    "hero-button": {
      ru: "Записаться на экскурсию",
      uz: "Ekskursiyaga yoziling",
    },
    "teachers-title": {
      ru: "Наши преподаватели",
      uz: "Bizning o'qituvchilarimiz",
    },
    "teachers-subtitle": {
      ru: "Познакомьтесь с нашей командой профессионалов",
      uz: "Bizning professional jamoamiz bilan tanishing",
    },
    "more-btn": {
      ru: "Подробнее",
      uz: "Batafsil",
    },
    "close-btn": {
      ru: "Закрыть",
      uz: "Yopish",
    },
    // Добавляй сюда новые ключи по мере необходимости
  };

  // 2. Получение перевода
  function getTranslation(key, lang) {
    const entry = translations[key];
    if (!entry) {
      console.warn(`❗ Отсутствует перевод для ключа: "${key}"`);
      return key;
    }
    return entry[lang] || entry["ru"] || key;
  }

  // 3. Установка текста по типу (text, html, placeholder и т.д.)
  function setElementContent(element, key, lang) {
    const type = element.dataset.translateType || "text";
    const value = getTranslation(key, lang);

    switch (type) {
      case "html":
        element.innerHTML = value;
        break;
      case "placeholder":
        element.placeholder = value;
        break;
      case "value":
        element.value = value;
        break;
      case "title":
        element.title = value;
        break;
      case "alt":
        element.alt = value;
        break;
      default:
        element.textContent = value;
    }
  }

  // 4. Применение языка ко всей странице
  function applyLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.dataset.translate;
      setElementContent(element, key, lang);
    });

    document.documentElement.lang = lang;
  }

  // 5. Инициализация языка (по localStorage или браузеру)
  function initLanguage() {
    const savedLang = localStorage.getItem("selectedLang");
    const browserLang = navigator.language.slice(0, 2);
    const defaultLang = ["ru", "uz"].includes(browserLang) ? browserLang : "ru";
    const lang = savedLang || defaultLang;
    applyLanguage(lang);
    updateLanguageUI(lang);
  }

  // 6. Обновление состояния кнопок и слайдера
  function updateLanguageUI(lang) {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      const isActive = btnLang === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive.toString());
    });

    const slider = document.querySelector(".lang-slider");
    if (slider) {
      slider.style.transform = lang === "uz" ? "translateX(100%)" : "translateX(0)";
    }
  }

  // 7. Обработчик смены языка
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      localStorage.setItem("selectedLang", lang);
      applyLanguage(lang);
      updateLanguageUI(lang);
    });
  });

  // 8. Инициализация
  initLanguage();

  // 9. Экспорт функций для других скриптов
  window.getTranslation = getTranslation;
  window.translatePage = applyLanguage;
  window.initLanguage = initLanguage;
});
