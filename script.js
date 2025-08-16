const nav = document.querySelector('.nav');
const ham = document.querySelector('.hamburger');
const mask = document.querySelector('.mask');

ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
  mask.classList.toggle('active');
});

mask.addEventListener('click', () => {
  ham.classList.remove('active');
  nav.classList.remove('active');
  mask.classList.remove('active');
});

/* FV */
window.addEventListener('load', () => {
  const fv = document.querySelector('.mainVisual__img')
  fv.classList.add('show');
  document.querySelector('.heading-Lv1').classList.add('show');
  document.querySelector('.mainVisual__text').classList.add('show')

});


/* worksアニメーション */
const items = document.querySelectorAll('.works__thumb');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

/* 各アイテムを個別で監視 */
items.forEach(item => observer.observe(item));


const aboutItems = document.querySelectorAll('.flex__item')
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

/* 各アイテムを個別で監視 */
aboutItems.forEach(item => aboutObserver.observe(item));

/* skillアニメーション */
const skillItems = document.querySelectorAll('.skill__item');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

/* 各アイテムを個別で監視 */
skillItems.forEach(item => skillObserver.observe(item));




