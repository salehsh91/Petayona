
  const scrollBox = document.querySelector('.scroll-box');

  scrollBox.addEventListener('wheel', function (e) {
    // اگر شیفت گرفته نشده بود، اسکرول عمودی رو به افقی تبدیل کن
    if (!e.shiftKey) {
      e.preventDefault();
      scrollBox.scrollLeft += e.deltaY;
    }
  });

