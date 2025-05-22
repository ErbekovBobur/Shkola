document.addEventListener("DOMContentLoaded", function () {
  console.log(window.getTranslation);
  // Подключение Swiper JS
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
  script.onload = initializeSwiper;
  document.head.appendChild(script);
  // Данные преподавателей с переводами
  const teachers = [
    {
      name: { ru: "Анна Иванова", uz: "Anna Ivanova" },
      position: { ru: "Учитель математики", uz: "Matematika o'qituvchisi" },
      bio: {
        ru: "Опыт работы 15 лет, специализируется на подготовке к олимпиадам. Автор множества учебных пособий и победитель профессиональных конкурсов.",
        uz: "15 yillik tajriba, olimpiadalarga tayyorlashga ixtisoslashgan. Ko'plab o'quv qo'llanmalar muallifi va professional tanlovlar g'olibi.",
      },
      image: "img/teachers/teacher-1.webp",
    },
    {
      name: { ru: "Игорь Смирнов", uz: "Igor Smirnov" },
      position: { ru: "Учитель физики", uz: "Fizika o'qituvchisi" },
      bio: {
        ru: "Доктор наук, автор курсов по квантовой физике и динамике. Работает в школе более 10 лет.",
        uz: "Fan doktori, kvant fizika va dinamika bo'yicha kurslar muallifi. 10 yildan ortiq tajriba.",
      },
      image: "img/teachers/teacher-2.webp",
    },
    {
      name: { ru: "Мария Ким", uz: "Mariya Kim" },
      position: { ru: "Учитель химии", uz: "Kimyo o'qituvchisi" },
      bio: {
        ru: "Ведет лабораторные работы и занимается научным наставничеством учеников.",
        uz: "Laboratoriya ishlarini olib boradi va o'quvchilarga ilmiy rahbarlik qiladi.",
      },
      image: "img/teachers/teacher-3.webp",
    },
    {
      name: { ru: "Денис Абдуллаев", uz: "Denis Abdullayev" },
      position: { ru: "Учитель информатики", uz: "Informatika o'qituvchisi" },
      bio: {
        ru: "Специалист по программированию и робототехнике. Руководит IT-клубом школы.",
        uz: "Dasturlash va robototexnika bo'yicha mutaxassis. Maktabning IT klubini boshqaradi.",
      },
      image: "img/teachers/teacher-4.webp",
    },
    {
      name: { ru: "Светлана Нуреева", uz: "Svetlana Nuriyeva" },
      position: { ru: "Учитель английского языка", uz: "Ingliz tili o'qituvchisi" },
      bio: {
        ru: "Магистр педагогики, регулярно проводит разговорные клубы и олимпиады.",
        uz: "Pedagogika magistri, muntazam suhbat klublari va olimpiadalar o'tkazadi.",
      },
      image: "img/teachers/teacher-5.webp",
    },
    {
      name: { ru: "Рустам Саидов", uz: "Rustam Saidov" },
      position: { ru: "Учитель биологии", uz: "Biologiya o'qituvchisi" },
      bio: {
        ru: "Опыт полевых исследований, организует экскурсии и проекты по экологии.",
        uz: "Tadqiqot tajribasiga ega, ekologiya bo'yicha ekskursiyalar va loyihalarni tashkil qiladi.",
      },
      image: "img/teachers/teacher-6.webp",
    },
    {
      name: { ru: "Елена Тихонова", uz: "Elena Tixonova" },
      position: { ru: "Учитель истории", uz: "Tarix o'qituvchisi" },
      bio: {
        ru: "Увлеченный преподаватель, автор учебных программ и пособий по истории Узбекистана.",
        uz: "Tarixiy darsliklar va o‘quv dasturlar muallifi, fidokor ustoz.",
      },
      image: "img/teachers/teacher-7.webp",
    },
    {
      name: { ru: "Алексей Павлов", uz: "Aleksey Pavlov" },
      position: { ru: "Учитель географии", uz: "Geografiya o'qituvchisi" },
      bio: {
        ru: "Организует географические олимпиады и ведет кружки по картографии.",
        uz: "Geografik olimpiadalar va kartografiya to‘garaklarini tashkil qiladi.",
      },
      image: "img/teachers/teacher-8.webp",
    },
    {
      name: { ru: "Наталья Сергеева", uz: "Natalya Sergeeva" },
      position: { ru: "Учитель литературы", uz: "Adabiyot o'qituvchisi" },
      bio: {
        ru: "Проводит театральные постановки и творческие мастерские по литературе.",
        uz: "Adabiyot bo‘yicha ijodiy mahorat darslari va sahna ko‘rinishlarini tashkil qiladi.",
      },
      image: "img/teachers/teacher-9.webp",
    },
    {
      name: { ru: "Шавкат Исмоилов", uz: "Shavkat Ismoilov" },
      position: { ru: "Учитель физкультуры", uz: "Jismoniy tarbiya o'qituvchisi" },
      bio: {
        ru: "Тренер школьной сборной, участник международных спортивных мероприятий.",
        uz: "Maktab sport jamoasi murabbiyi, xalqaro sport tadbirlari ishtirokchisi.",
      },
      image: "img/teachers/teacher-10.webp",
    },
  ];

  // Функция для получения перевода из language.js
  function getTranslation(key, lang) {
    const translations = {
      "more-btn": { ru: "Подробнее", uz: "Batafsil" },
      "close-btn": { ru: "Закрыть", uz: "Yopish" },
    };
    if (window.getTranslation) {
      return (
        window.getTranslation(key, lang) || (translations[key] ? translations[key][lang] || translations[key].ru : key)
      );
    }
    return translations[key] ? translations[key][lang] || translations[key].ru : key;
  }

  // Генерация карточек
  function generateTeacherCards(lang) {
    const teachersGrid = document.getElementById("teachers-grid");
    if (!teachersGrid) return;
    teachersGrid.innerHTML = ""; // Очищаем текущие карточки
    teachers.forEach((teacher, index) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      slide.innerHTML = `
        <div class="teacher-card">
          <img src="${teacher.image}" alt="${teacher.name[lang] || teacher.name.ru}" loading="lazy">
          <div class="teacher-info">
            <h3 data-translate="teacher-${index + 1}-name">${teacher.name[lang] || teacher.name.ru}</h3>
            <div class="position" data-translate="teacher-${index + 1}-position">${
        teacher.position[lang] || teacher.position.ru
      }</div>
            <p class="bio" data-translate="teacher-${index + 1}-bio">${teacher.bio[lang] || teacher.bio.ru}</p>
            <button class="more-btn" data-modal="modal-${index}" data-translate="more-btn">${getTranslation(
        "more-btn",
        lang
      )}</button>
          </div>
        </div>
        <div class="teacher-modal" id="modal-${index}">
          <div class="modal-content">
            <h3 data-translate="teacher-${index + 1}-name">${teacher.name[lang] || teacher.name.ru}</h3>
            <div class="position" data-translate="teacher-${index + 1}-position">${
        teacher.position[lang] || teacher.position.ru
      }</div>
            <p data-translate="teacher-${index + 1}-bio">${teacher.bio[lang] || teacher.bio.ru}</p>
            <button class="close-btn" data-close="modal-${index}" data-translate="close-btn">${getTranslation(
        "close-btn",
        lang
      )}</button>
          </div>
        </div>
      `;
      teachersGrid.appendChild(slide);
    });

    // Обработчики для кнопок "Подробнее" и "Закрыть"
    document.querySelectorAll(".more-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add("show");
          document.body.style.overflow = "hidden"; // Блокируем прокрутку
        }
      });
    });

    document.querySelectorAll(".close-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-close");
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.remove("show");
          document.body.style.overflow = ""; // Разблокируем прокрутку
        }
      });
    });
  }

  // Инициализация Swiper
  function initializeSwiper() {
    const lang = document.documentElement.lang || localStorage.getItem("selectedLang") || "ru";
    generateTeacherCards(lang);

    new Swiper(".teachers-swiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
loadImg();
  }

  // Интеграция с language.js: обновление карточек при смене языка
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      generateTeacherCards(lang);
      // Обновление переводов
      if (window.translatePage) {
        window.translatePage(lang);
      }

      // Переинициализация Swiper после обновления карточек
      if (window.Swiper) {
        const swiper = document.querySelector(".teachers-swiper").swiper;
        if (swiper) swiper.destroy(true, true);
        initializeSwiper();
      }
    });
  });
  function waitForTranslationInit(callback) {
    if (window.getTranslation && typeof window.getTranslation === "function") {
      callback();
    } else {
      setTimeout(() => waitForTranslationInit(callback), 100); // повтор каждые 50мс
    }
  }
  // Первичная генерация карточек
  waitForTranslationInit(() => {
    initializeSwiper(); // теперь точно после инициализации переводов    
  });
  window.addEventListener("load", () => {
    loadImg();
  });
  function loadImg() {
      document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
        if (img.complete) {
          img.classList.add("loaded");
        } else {
          img.addEventListener("load", () => {
            img.classList.add("loaded");
          });
        }
      });
  }
});
