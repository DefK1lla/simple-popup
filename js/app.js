document.addEventListener("DOMContentLoaded", function (event) {

    // Popup
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';  // Получаем размер скроллбара
    let lockPaddings = document.querySelectorAll('.lock-padding');   // Элементы с position: fixed

    let popups = document.querySelectorAll('.popup'),
        popupLinks = document.querySelectorAll('.popup-link'),
        curentPopup,
        body = document.querySelector('body');

    popupLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            if (curentPopup) {
                curentPopup.classList.remove('open');
            }

            curentPopup = document.querySelector(this.getAttribute('href'));
            curentPopup.classList.add('open');
            body.classList.add('scroll-lock');  // Отключаем скролл

            // Убираем дёрганье при открытии попапа
            body.style.paddingRight = lockPaddingValue;
            lockPaddings.forEach(function (elem) {
                elem.style.paddingRight = lockPaddingValue;
            });
        });
    });


    let popupClose = document.querySelectorAll('.popup-close');

    popupClose.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content') || e.target.closest('.popup__close')) {
                popups.forEach(function (item) {
                    item.classList.remove('open');
                });

                setTimeout(() => {
                    body.classList.remove('scroll-lock');

                    // Убираем дёргание при закрытии попапа
                    body.style.paddingRight = '0px';
                    lockPaddings.forEach(function (elem) {
                        elem.style.paddingRight = '0px';
                    });
                }, 400);
            }
        });
    });
});