const qs = (s, o=document) => o.querySelector(s);
const qsa = (s, o=document) => [...o.querySelectorAll(s)];

const navToggle = qs('.nav-toggle');
const navList = qs('.nav-list');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    navToggle.classList.toggle('active', open);
    document.body.classList.toggle('menu-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true':'false');
  });
  qsa('.nav-list a').forEach(a => a.addEventListener('click', () => {
    if (navList.classList.contains('open')) navToggle.click();
  }));
}

const i18n = {
  ru: {
    metaTitle: '3D Studio',
  nav: { gallery: 'Галерея', about: 'Обо мне', services: 'Услуги', contacts: 'Контакты', openMenu:'Открыть меню' },
    hero: { title: 'Фотореалистичная 3D визуализация', subtitle: 'Интерьеры · Экстерьеры · Предметы', cta: 'Смотреть работы' },
    gallery: { title: 'Галерея', sub: 'Подборка готовых рендеров' },
    filters: { all: 'Все', interior: 'Интерьеры', exterior: 'Экстерьеры', product: 'Предметы' },
    about: {
      title: 'Обо мне',
      lead: 'Я создаю фотореалистичные 3D визуализации, помогая архитекторам, дизайнерам и брендам быстрее принимать решения и впечатлять клиентов.',
      text: 'Использую современные пайплайны и рендер-движки. Фокус на детализации, свете и материальности. Готов к проектам любой сложности.',
      point1: 'Опыт: 5+ лет', point2: 'Реалистичные материалы и освещение', point3: 'Оптимизация сцен для скорости',
      stats: { projects: 'проектов', clients: 'клиентов', countries: 'стран' }
    },
    clients: { title: 'Доверяют', sub: 'Выбранные бренды и платформы' },
    services: {
      title: 'Услуги', sub: 'Что я делаю',
      interiors: { title:'Интерьеры', text:'Детализированные интерьерные сцены: жилые и коммерческие пространства, атмосфера и свет.', li1:'Планирование композиции', li2:'Материалы и текстуры', li3:'Фотореалистичное освещение' },
      exteriors: { title:'Экстерьеры', text:'Архитектурные визуализации зданий, ландшафт и окружение в нужном времени суток.', li1:'Реалистичная среда', li2:'Атмосферные эффекты', li3:'Качественные ракурсы' },
      product: { title:'Предметная визуализация', text:'Каталожные и рекламные рендеры продуктов с акцентом на материал и форму.', li1:'Чистые студийные сцены', li2:'PBR материалы', li3:'Высокое разрешение' }
    },
    contact: { title:'Контакты', lead:'Опишите задачу — я свяжусь с вами и предложу оптимальный формат сотрудничества.', emailLabel:'Email:', tgLabel:'Telegram:', igLabel:'Instagram:' },
    form: { nameLabel:'Имя', namePlaceholder:'Ваше имя', emailLabel:'Email', emailPlaceholder:'you@mail.com', messageLabel:'Сообщение', messagePlaceholder:'Опишите проект', submit:'Отправить',
      errors: { fill:'Заполните все поля.', email:'Неверный email.' }, sending:'Отправка...', sent:'Сообщение отправлено (демо).' },
  footer: { rights:'Все права защищены.' },
  theme: { toggle:'Переключить тему' }
  },
  en: {
    metaTitle: '3D Studio',
  nav: { gallery: 'Gallery', about: 'About', services: 'Services', contacts: 'Contacts', openMenu:'Open menu' },
    hero: { title: 'Photorealistic 3D Visualization', subtitle: 'Interiors · Exteriors · Product', cta: 'View Works' },
    gallery: { title: 'Gallery', sub: 'Selected renders' },
    filters: { all: 'All', interior: 'Interiors', exterior: 'Exteriors', product: 'Product' },
    about: {
      title: 'About Me',
      lead: 'I create photorealistic 3D visualizations helping architects, designers and brands impress clients and decide faster.',
      text: 'Modern pipelines and render engines. Focus on detail, light and materials. Ready for projects of any complexity.',
      point1: 'Experience: 5+ years', point2: 'Realistic materials and lighting', point3: 'Scene optimization for speed',
      stats: { projects: 'projects', clients: 'clients', countries: 'countries' }
    },
    clients: { title: 'Trusted by', sub: 'Selected brands and platforms' },
    services: {
      title: 'Services', sub: 'What I do',
      interiors: { title:'Interiors', text:'Detailed interior scenes for residential and commercial spaces.', li1:'Composition planning', li2:'Materials & textures', li3:'Photoreal lighting' },
      exteriors: { title:'Exteriors', text:'Architectural visualizations with landscape and time-of-day mood.', li1:'Realistic environment', li2:'Atmospheric effects', li3:'Quality angles' },
      product: { title:'Product Visualization', text:'Catalog and advertising renders focusing on material and form.', li1:'Clean studio scenes', li2:'PBR materials', li3:'High resolution' }
    },
    contact: { title:'Contacts', lead:'Describe your task — I will get back with the best options.', emailLabel:'Email:', tgLabel:'Telegram:', igLabel:'Instagram:' },
    form: { nameLabel:'Name', namePlaceholder:'Your name', emailLabel:'Email', emailPlaceholder:'you@mail.com', messageLabel:'Message', messagePlaceholder:'Describe your project', submit:'Send',
      errors: { fill:'Please fill all fields.', email:'Invalid email.' }, sending:'Sending...', sent:'Message sent (demo).'},
  footer: { rights:'All rights reserved.' },
  theme: { toggle:'Toggle theme' }
  },
  uk: {
    metaTitle: '3D Studio',
  nav: { gallery: 'Галерея', about: 'Про мене', services: 'Послуги', contacts: 'Контакти', openMenu:'Відкрити меню' },
    hero: { title: 'Фотореалістична 3D візуалізація', subtitle: 'Інтерʼєри · Екстерʼєри · Предмети', cta: 'Дивитися роботи' },
    gallery: { title: 'Галерея', sub: 'Добірка готових рендерів' },
    filters: { all: 'Усі', interior: 'Інтерʼєри', exterior: 'Екстерʼєри', product: 'Предмети' },
    about: {
      title: 'Про мене',
      lead: 'Створюю фотореалістичні 3D візуалізації для архітекторів, дизайнерів та брендів.',
      text: 'Сучасні пайплайни і рендер-рушії. Фокус на деталях, світлі та матеріалах.',
      point1: 'Досвід: 5+ років', point2: 'Реалістичні матеріали та освітлення', point3: 'Оптимізація сцен',
      stats: { projects: 'проєктів', clients: 'клієнтів', countries: 'країн' }
    },
    clients: { title: 'Довіряють', sub: 'Вибрані бренди та платформи' },
    services: {
      title: 'Послуги', sub: 'Що я роблю',
      interiors: { title:'Інтерʼєри', text:'Деталізовані інтерʼєрні сцени для житлових і комерційних просторів.', li1:'Композиція', li2:'Матеріали і текстури', li3:'Фотореалістичне освітлення' },
      exteriors: { title:'Екстерʼєри', text:'Архвіз з ландшафтом і потрібною атмосферою.', li1:'Реалістичне середовище', li2:'Атмосферні ефекти', li3:'Якісні ракурси' },
      product: { title:'Предметна візуалізація', text:'Рекламні та каталожні рендери з акцентом на матеріал і форму.', li1:'Чисті студійні сцени', li2:'PBR матеріали', li3:'Висока роздільна здатність' }
    },
    contact: { title:'Контакти', lead:'Опишіть задачу — я звʼяжусь з вами.', emailLabel:'Email:', tgLabel:'Telegram:', igLabel:'Instagram:' },
    form: { nameLabel:'Імʼя', namePlaceholder:'Ваше імʼя', emailLabel:'Email', emailPlaceholder:'you@mail.com', messageLabel:'Повідомлення', messagePlaceholder:'Опишіть проєкт', submit:'Надіслати',
      errors: { fill:'Заповніть усі поля.', email:'Невірний email.' }, sending:'Надсилання...', sent:'Повідомлення надіслано (демо).'},
  footer: { rights:'Всі права захищені.' },
  theme: { toggle:'Перемкнути тему' }
  }
};

function applyI18n(lang) {
  const dict = i18n[lang] || i18n.ru;
  qsa('[data-i18n]').forEach(el => {
    const path = el.dataset.i18n.split('.');
    let value = dict;
    for (const key of path) value = value?.[key];
    if (typeof value === 'string') el.textContent = value;
  });
  qsa('[data-i18n-placeholder]').forEach(el => {
    const path = el.dataset.i18nPlaceholder.split('.');
    let value = dict;
    for (const key of path) value = value?.[key];
    if (typeof value === 'string') el.placeholder = value;
  });
  qsa('.lang-btn').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true':'false'));
  if (dict.metaTitle) document.title = dict.metaTitle;
  localStorage.setItem('lang', lang);
  window.__i18nErrors = dict.form.errors;
  window.__i18nForm = dict.form;
    qsa('[data-i18n-aria-label]').forEach(el => {
      const path = el.dataset.i18nAriaLabel.split('.');
      let value = dict; path.forEach(k=> value = value?.[k]);
      if(typeof value === 'string') el.setAttribute('aria-label', value);
    });
}

qsa('.lang-btn').forEach(btn => btn.addEventListener('click', () => applyI18n(btn.dataset.lang)));

applyI18n(localStorage.getItem('lang') || 'ru');

  const themeBtn = qs('.theme-toggle');
  function applyTheme(mode){
    const root = document.documentElement;
    if(mode === 'light') root.classList.add('light'); else root.classList.remove('light');
    localStorage.setItem('theme', mode);
    if(themeBtn) themeBtn.textContent = mode === 'light' ? '☀️' : '🌙';
  }
  if(themeBtn){
    themeBtn.addEventListener('click', () => {
      const next = document.documentElement.classList.contains('light') ? 'dark' : 'light';
      applyTheme(next);
    });
  }
  applyTheme(localStorage.getItem('theme') || 'dark');
const yearEl = qs('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const filterBtns = qsa('.filter-btn');
const galleryItems = qsa('.gallery-item');

function applyFilter(cat){
  galleryItems.forEach(item => {
    const show = (cat === 'all') || (item.dataset.category === cat);
    item.style.display = show ? '' : 'none';
  });
}

filterBtns.forEach(btn => btn.addEventListener('click', () => {
  filterBtns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilter(btn.dataset.filter);
}));

const activeFilterBtn = qs('.filter-btn.active');
if (activeFilterBtn) applyFilter(activeFilterBtn.dataset.filter);
else applyFilter('interior');

const lightbox = qs('#lightbox');
const lightboxImg = qs('.lightbox-image');
const lightboxCap = qs('.lightbox-caption');
const lightboxClose = qs('.lightbox-close');

function openLightbox(fig) {
  const img = qs('img', fig);
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  const cap = qs('figcaption', fig)?.textContent?.trim() || '';
  if (lightboxCap) {
    lightboxCap.textContent = cap;
    lightboxCap.style.display = cap ? '' : 'none';
  }
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => lightbox.classList.add('open'), 10);
}
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.hidden = true;
  document.body.style.overflow = '';
}

if (lightbox) {
  galleryItems.forEach(fig => {
    fig.addEventListener('click', () => openLightbox(fig));
    fig.addEventListener('keypress', e => { if (e.key === 'Enter') openLightbox(fig); });
    fig.setAttribute('tabindex','0');
  });
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  window.addEventListener('keydown', e => { if (e.key === 'Escape' && !lightbox.hidden) closeLightbox(); });
}

const counters = qsa('.num[data-count]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      if (el.dataset.done) return;
      const target = +el.dataset.count;
      const duration = 1200;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(progress * target) + (el.textContent.includes('+') ? '+' : '');
        if (progress < 1) requestAnimationFrame(tick); else el.dataset.done = '1';
      }
      requestAnimationFrame(tick);
    }
  });
}, { threshold: .4 });

counters.forEach(c => observer.observe(c));

const form = qs('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = qs('.form-status', form);
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    if (!name || !email || !message) {
      status.textContent = (window.__i18nErrors?.fill) || 'Заполните все поля.';
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      status.textContent = (window.__i18nErrors?.email) || 'Неверный email.';
      return;
    }

    status.textContent = (window.__i18nForm?.sending) || 'Отправка...';

    setTimeout(() => {
      status.textContent = (window.__i18nForm?.sent) || 'Сообщение отправлено (демо).';
      form.reset();
      setTimeout(()=> status.textContent = '', 4000);
    }, 900);
  });
}

const revealEls = qsa('section, .service-card').filter(el => !el.matches('#gallery'));
const revObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('reveal','bounce-in');
    } else {
      en.target.classList.remove('reveal','bounce-in');
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(24px)';
  revObs.observe(el);
});

const style = document.createElement('style');
style.textContent = `.reveal { opacity:1 !important; transform:translateY(0) !important; transition:opacity .9s var(--transition), transform .9s var(--transition); }`;
document.head.appendChild(style);

qsa('.gallery-item').forEach((card, i) => {
  const once = new IntersectionObserver((ents, obs) => {
    ents.forEach(ent => {
      if (ent.isIntersecting) {
        card.classList.add('card-bounce-in');
        obs.unobserve(card);
      }
    });
  }, { threshold: 0.2 });
  once.observe(card);
});

qsa('.gallery-item img').forEach(img => {
  img.addEventListener('error', () => {
    if (!img.dataset.fallback) {
      img.dataset.fallback = '1';
      img.src = 'assets/images/placeholder.svg';
    }
  });
  const markLoaded = () => img.classList.add('img-loaded');
  if (img.complete && img.naturalWidth > 0) {
    markLoaded();
  } else {
    img.addEventListener('load', markLoaded, { once: true });
  }
});
