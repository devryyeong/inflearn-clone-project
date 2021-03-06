/* HERO SWIPER */
import { Swiper } from 'swiper/react';

const bannerLists = [
  'Top 50 π',
  'μ κ· κ°μ π',
  'λμκ² λ§λ κ°μ',
  'μλ¬Έ λ‘λλ§΅',
  'μ§μκ³΅μ μ μ²­',
  'μΈνλ°μ π±',
  'μΈνλ° λλ£μ°ΎκΈ°',
  'κ°λ°',
];

//MAIN SWIPER
const heroSwiper = new Swiper('.hero .swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  /*autoplay: {
    delay: 1000,
  },*/
  pagination: {
    el: '.hero .swiper-pagination-wrapper .swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
});

//COURSE SWIPER
const courseSwiper = new Swiper('.courses .swiper-container', {
  slidesPerView: 5, // νλ²μ λ³΄μ¬μ€ μ¬λΌμ΄λ κ°μ
  spaceBetween: 6,
  /*autoplay: {
    delay: 1000,
  },*/
  navigation: {
    prevEl: '.courses .swiper-prev',
    nextEl: '.courses .swiper-next ',
  },
});

//CATEGORY SWIPER
const categorySwiper = new Swiper('.category .swiper-container', {
  slidesPerView: 6,
  /*autoplay: {
    delay: 1000,
  },*/
  navigation: {
    prevEl: '.category .swiper-prev',
    nextEl: '.category .swiper-next ',
  },
});

//BANNER2 SWIPER
const bannerSwiper = new Swiper('.banner2 .swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: '.banner2 .swiper-pagination',
    clickable: true,
    type: 'bullets',
  },

  navigation: {
    prevEl: '.banner2 .swiper-prev',
    nextEl: '.banner2 .swiper-next',
  },
});

//SIGNUP SWIPER
const signupSwiper = new Swiper('.signup .swiper-container', {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
  },
});

for (let i = 0; i < heroSwiper.pagination.bullets.length; i++) {
  heroSwiper.pagination.bullets[i].innerText = bannerLists[i];
}

export default heroSwiper;
// export default courseSwiper;
// export default categorySwiper;
// export default categorySwiper;
// export default categorySwiper;
// export default categorySwiper;
