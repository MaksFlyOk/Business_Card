"use strict";

var popupBg = document.querySelector('.popup__bg'); // Фон попап окна

var popup = document.querySelector('.popup'); // Само окно

var openPopupButtons = document.querySelectorAll('.about'); // Кнопки для показа окна

openPopupButtons.forEach(function (button) {
  // Перебираем все кнопки
  button.addEventListener('click', function (e) {
    // Для каждой вешаем обработчик событий на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера

    popupBg.classList.add('active'); // Добавляем класс 'active' для фона

    popup.classList.add('active'); // И для самого окна
  });
});
document.addEventListener('click', function (e) {
  // Вешаем обработчик на весь документ
  if (e.target === popupBg) {
    // Если цель клика - фон, то:
    popupBg.classList.remove('active'); // Убираем активный класс с фона

    popup.classList.remove('active'); // И с окна
  }
});