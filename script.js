const yearElement = document.querySelector("#year");
const themeToggle = document.querySelector(".theme-toggle");
const languagePicker = document.querySelector("#language-picker");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector("[data-form-status]");

const translations = {
  es: {
    pageTitle: "Cafe Aurora | Cafe local",
    navMenu: "Menu",
    navLocal: "Local",
    navContact: "Contacto",
    themeDark: "Modo oscuro",
    themeLight: "Modo claro",
    languageLabel: "Idioma",
    heroEyebrow: "Cafe de especialidad en tu barrio",
    heroTitle: "Buen cafe, pan dulce y un espacio tranquilo para bajar el ritmo.",
    heroText:
      "Servimos espresso, filtrados y reposteria fresca todos los dias con granos seleccionados de productores locales.",
    heroPrimary: "Ver especialidades",
    heroSecondary: "Como llegar",
    heroCardLabel: "Abierto hoy",
    heroCardAddress: "Av. Central 123, Centro",
    menuEyebrow: "Nuestro menu",
    menuTitle: "Favoritos de la casa",
    productOneTitle: "Latte Aurora",
    productOneText: "Espresso suave con leche cremosa y un toque de vainilla natural.",
    productTwoTitle: "Cold Brew",
    productTwoText: "Extraccion lenta, notas de cacao y final refrescante.",
    productThreeTitle: "Croissant artesanal",
    productThreeText: "Horneado por la manana, mantequilla real y textura ligera.",
    testimonialsEyebrow: "Testimonios",
    testimonialsTitle: "Lo que dicen nuestros clientes",
    testimonialOneText: "\"El latte es excelente y el ambiente perfecto para leer un rato.\"",
    testimonialOneName: "Mariana G.",
    testimonialTwoText: "\"Siempre paso por un cold brew antes de ir a la oficina.\"",
    testimonialTwoName: "Carlos R.",
    testimonialThreeText: "\"El servicio es amable y los croissants salen frescos cada manana.\"",
    testimonialThreeName: "Lucia M.",
    locationEyebrow: "Ubicacion y contacto",
    locationTitle: "Un rincón calido para trabajar, leer o encontrarte con alguien.",
    addressLabel: "Direccion:",
    addressText: "Av. Central 123, Centro",
    hoursLabel: "Horario:",
    hoursText: "Lunes a domingo, 8:00 - 20:00",
    phoneLabel: "Telefono:",
    learningEyebrow: "Aprendizaje",
    learningTitle: "What I learned",
    learningText:
      "Este proyecto es una practica para aprender OpenCode, Git y como trabajar con agentes de IA en cambios pequenos y controlados.",
    contactEyebrow: "Contacto",
    contactTitle: "Escribenos o ven por tu cafe favorito.",
    contactText: "Este formulario es visual para la practica. No envia datos a ningun servidor.",
    contactNameLabel: "Nombre",
    contactNamePlaceholder: "Tu nombre",
    contactEmailLabel: "Correo",
    contactEmailPlaceholder: "tu@email.com",
    contactMessageLabel: "Mensaje",
    contactMessagePlaceholder: "Cuentanos que necesitas",
    contactSubmit: "Enviar mensaje",
    contactFormNote: "Formulario demostrativo: no se enviaran datos.",
    contactFormSent: "Mensaje listo. En esta practica no se envia a ningun servidor.",
    mapEyebrow: "Visitanos",
    mapTitle: "Av. Central 123, Centro",
    mapText: "A dos calles de la plaza principal, con mesas tranquilas y cafe recien molido.",
    footerCta: "Reserva o pide para llevar:",
    footerRights: "Todos los derechos reservados.",
    footerPracticePrefix: "Proyecto creado como práctica de IA por",
  },
  en: {
    pageTitle: "Cafe Aurora | Local coffee shop",
    navMenu: "Menu",
    navLocal: "Location",
    navContact: "Contact",
    themeDark: "Dark mode",
    themeLight: "Light mode",
    languageLabel: "Language",
    heroEyebrow: "Specialty coffee in your neighborhood",
    heroTitle: "Good coffee, sweet pastries and a quiet place to slow down.",
    heroText:
      "We serve espresso, pour-overs and fresh pastries every day with beans selected from local producers.",
    heroPrimary: "View specialties",
    heroSecondary: "How to get here",
    heroCardLabel: "Open today",
    heroCardAddress: "123 Central Ave, Downtown",
    menuEyebrow: "Our menu",
    menuTitle: "House favorites",
    productOneTitle: "Aurora Latte",
    productOneText: "Smooth espresso with creamy milk and a touch of natural vanilla.",
    productTwoTitle: "Cold Brew",
    productTwoText: "Slow extraction, cocoa notes and a refreshing finish.",
    productThreeTitle: "Artisan croissant",
    productThreeText: "Baked in the morning with real butter and a light texture.",
    testimonialsEyebrow: "Testimonials",
    testimonialsTitle: "What our customers say",
    testimonialOneText: "\"The latte is excellent and the atmosphere is perfect for reading.\"",
    testimonialOneName: "Mariana G.",
    testimonialTwoText: "\"I always stop by for a cold brew before heading to the office.\"",
    testimonialTwoName: "Carlos R.",
    testimonialThreeText: "\"The service is kind and the croissants are fresh every morning.\"",
    testimonialThreeName: "Lucia M.",
    locationEyebrow: "Location and contact",
    locationTitle: "A warm corner to work, read or meet someone.",
    addressLabel: "Address:",
    addressText: "123 Central Ave, Downtown",
    hoursLabel: "Hours:",
    hoursText: "Monday to Sunday, 8:00 - 20:00",
    phoneLabel: "Phone:",
    learningEyebrow: "Learning",
    learningTitle: "What I learned",
    learningText:
      "This project is a practice lab for learning OpenCode, Git and how to work with AI agents through small, controlled changes.",
    contactEyebrow: "Contact",
    contactTitle: "Write to us or stop by for your favorite coffee.",
    contactText: "This form is visual for practice. It does not send data to any server.",
    contactNameLabel: "Name",
    contactNamePlaceholder: "Your name",
    contactEmailLabel: "Email",
    contactEmailPlaceholder: "you@email.com",
    contactMessageLabel: "Message",
    contactMessagePlaceholder: "Tell us what you need",
    contactSubmit: "Send message",
    contactFormNote: "Demo form: no data will be sent.",
    contactFormSent: "Message ready. In this practice, it is not sent to any server.",
    mapEyebrow: "Visit us",
    mapTitle: "123 Central Ave, Downtown",
    mapText: "Two blocks from the main square, with quiet tables and freshly ground coffee.",
    footerCta: "Book or order takeaway:",
    footerRights: "All rights reserved.",
    footerPracticePrefix: "Project created as AI practice by",
  },
  zh: {
    pageTitle: "Cafe Aurora | 本地咖啡店",
    navMenu: "菜单",
    navLocal: "位置",
    navContact: "联系",
    themeDark: "深色模式",
    themeLight: "浅色模式",
    languageLabel: "语言",
    heroEyebrow: "你身边的精品咖啡",
    heroTitle: "好咖啡、甜点和一个让节奏慢下来的安静空间。",
    heroText: "我们每天供应浓缩咖啡、手冲咖啡和新鲜烘焙点心，咖啡豆来自精选本地生产者。",
    heroPrimary: "查看招牌推荐",
    heroSecondary: "如何到达",
    heroCardLabel: "今日营业",
    heroCardAddress: "市中心 Central 大街 123 号",
    menuEyebrow: "我们的菜单",
    menuTitle: "店内人气推荐",
    productOneTitle: "Aurora 拿铁",
    productOneText: "柔和浓缩咖啡搭配绵密牛奶，并带有天然香草气息。",
    productTwoTitle: "冷萃咖啡",
    productTwoText: "慢速萃取，带有可可风味和清爽尾韵。",
    productThreeTitle: "手工可颂",
    productThreeText: "每日早晨烘焙，使用真正黄油，口感轻盈。",
    testimonialsEyebrow: "顾客评价",
    testimonialsTitle: "顾客怎么说",
    testimonialOneText: "“拿铁很棒，环境也非常适合安静阅读。”",
    testimonialOneName: "Mariana G.",
    testimonialTwoText: "“去办公室前，我总会来买一杯冷萃。”",
    testimonialTwoName: "Carlos R.",
    testimonialThreeText: "“服务很亲切，可颂每天早上都很新鲜。”",
    testimonialThreeName: "Lucia M.",
    locationEyebrow: "位置与联系",
    locationTitle: "一个适合工作、阅读或会面的温暖角落。",
    addressLabel: "地址：",
    addressText: "市中心 Central 大街 123 号",
    hoursLabel: "营业时间：",
    hoursText: "周一至周日，8:00 - 20:00",
    phoneLabel: "电话：",
    learningEyebrow: "学习记录",
    learningTitle: "我学到了什么",
    learningText: "这个项目是一个练习，用来学习 OpenCode、Git，以及如何通过小而可控的修改与 AI 代理协作。",
    contactEyebrow: "联系",
    contactTitle: "给我们留言，或来喝你喜欢的咖啡。",
    contactText: "这个表单只用于视觉练习，不会向任何服务器发送数据。",
    contactNameLabel: "姓名",
    contactNamePlaceholder: "你的姓名",
    contactEmailLabel: "邮箱",
    contactEmailPlaceholder: "you@email.com",
    contactMessageLabel: "留言",
    contactMessagePlaceholder: "告诉我们你的需求",
    contactSubmit: "发送留言",
    contactFormNote: "演示表单：不会发送任何数据。",
    contactFormSent: "留言已准备好。在这个练习中，它不会发送到服务器。",
    mapEyebrow: "到店访问",
    mapTitle: "市中心 Central 大街 123 号",
    mapText: "距离主广场两个街区，有安静的座位和现磨咖啡。",
    footerCta: "预订或外带：",
    footerRights: "版权所有。",
    footerPracticePrefix: "AI 练习项目创建者：",
  },
};

let currentLanguage = "es";

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const updateThemeLabel = () => {
  if (!themeToggle) {
    return;
  }

  const isDarkMode = document.body.classList.contains("dark-mode");
  const dictionary = translations[currentLanguage];
  themeToggle.textContent = isDarkMode ? dictionary.themeLight : dictionary.themeDark;
};

const applyLanguage = (language) => {
  const dictionary = translations[language];

  document.documentElement.lang = language;
  document.title = dictionary.pageTitle;
  document.body.classList.remove("theme-es", "theme-en", "theme-zh");
  document.body.classList.add(`theme-${language}`);
  currentLanguage = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (key !== "themeToggle" && dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (dictionary[key]) {
      element.placeholder = dictionary[key];
    }
  });

  updateThemeLabel();
};

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    updateThemeLabel();
  });
}

if (languagePicker) {
  languagePicker.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formStatus) {
      formStatus.textContent = translations[currentLanguage].contactFormSent;
    }
  });
}

applyLanguage(currentLanguage);
