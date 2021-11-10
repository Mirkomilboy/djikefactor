document.querySelector('.menuBtn').addEventListener('click', function() {
    this.classList.toggle('hidden');
    document.querySelector('.xBtn').classList.toggle('hidden');
    document.querySelector('.menu').classList.toggle('translate-x-full');
})
document.querySelector('.xBtn').addEventListener('click', function() {
    this.classList.toggle('hidden');
    document.querySelector('.menuBtn').classList.toggle('hidden');
    document.querySelector('.menu').classList.toggle('translate-x-full');
})



var menu = ['Step 1', 'Step 2', 'Step 3', 'Step4']
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
                },
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});