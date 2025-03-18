const swiper = new Swiper('.swiper', {
    direction: 'horizontal',  // Убедитесь, что направление горизонтальное
    loop: true,               // Лупим слайды
    slidesPerView: 1,         // Один слайд за раз
    spaceBetween: 0,          // Нет промежутков между слайдами
    grabCursor: true,         // Появление курсора руки при перетаскивании
    centeredSlides: false,    // Убираем центрирование, если это не нужно
    simulateTouch: true,      // Включаем возможность перетаскивания
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    autoplay: {
        delay: 8000, // Задержка между автопереключениями в миллисекундах
        disableOnInteraction: false, // Оставить автопрокрутку даже после ручного взаимодействия
    },
    speed: 1500,
});




const iconWrappers = document.querySelectorAll('.icon-wrapper');
const changingImage = document.getElementById('changing-image');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const price = document.getElementById('price');
const nightPrice = document.getElementById('night-price');

let isAnimating = false; // Флаг для предотвращения запуска анимаций во время их выполнения

iconWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
        if (!isAnimating) { // Проверяем, что анимации не идут
            isAnimating = true; // Устанавливаем флаг в true, чтобы заблокировать повторный запуск
            toggleActive(wrapper);
            changeImageAndPrice(wrapper);
        }
    });
});

function toggleActive(selectedElement) {
    iconWrappers.forEach(wrapper => {
        wrapper.classList.remove('active');
    });
    
    selectedElement.classList.add('active');
}

function changeImageAndPrice(selectedElement) {
    const newImageSrc = selectedElement.getAttribute('data-image-src');
    const newNumber1 = selectedElement.getAttribute('data-number1');
    const newNumber2 = selectedElement.getAttribute('data-number2');
    const newPrice = selectedElement.getAttribute('data-price');
    const newNightPrice = selectedElement.getAttribute('data-night-price');

    const newNumber1Top = selectedElement.getAttribute('data-number1-top');
    const newNumber1Right = selectedElement.getAttribute('data-number1-right');
    const newNumber2Top = selectedElement.getAttribute('data-number2-top');
    const newNumber2Right = selectedElement.getAttribute('data-number2-right');

    // Скрываем элементы для запуска анимаций
    changingImage.style.opacity = '0';
    number1.style.opacity = '0';
    number2.style.opacity = '0';
    price.style.opacity = '0';

    // Проверка, если alt="ночь"
    if (selectedElement.getAttribute('alt') !== 'ночь') {
        // Устанавливаем ночную цену и делаем её видимой
        nightPrice.textContent = newNightPrice;
        nightPrice.style.opacity = '0';

        setTimeout(() => {
            nightPrice.style.opacity = '1'; // Исчезновение ночной цены
        }, 2100);

        // Добавляем плавное появление ночной цены
        setTimeout(() => {
            nightPrice.classList.add('night-price-animation'); // Применяем анимацию через 1с
        }, 2400);

        // Плавное исчезновение nightPrice и night-price-animation
        setTimeout(() => {
            nightPrice.style.opacity = '0'; // Исчезновение ночной цены
            nightPrice.classList.remove('night-price-animation'); // Убираем класс после исчезновения
        });
    }

    // Обновляем стиль и текст для обычной цены
    setTimeout(() => {
        price.textContent = newPrice;
        price.style.opacity = '1';
    }, 3000); // Появление основной цены после завершения анимации nightPrice

    // Плавное появление number элементов
    setTimeout(() => {
        number1.textContent = newNumber1;
        number2.textContent = newNumber2;
        number1.style.top = newNumber1Top;
        number1.style.right = newNumber1Right;
        number2.style.top = newNumber2Top;
        number2.style.right = newNumber2Right;
        number1.style.opacity = '1';
        number2.style.opacity = '1';
    }, 700); // Появление number до появления обычной цены

    // Плавное появление changingImage после number
    setTimeout(() => {
        changingImage.src = newImageSrc;
        changingImage.style.opacity = '1';
        isAnimating = false;
    }, 1500);
}




const swiperContainer = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,        // Делает точки кликабельными
        type: 'bullets',        // Использует точечную пагинацию
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 8000, // Задержка между автопереключениями в миллисекундах
        disableOnInteraction: false, // Оставить автопрокрутку даже после ручного взаимодействия
    },
    speed: 1500,
});










document.querySelector('.features-headers').addEventListener('click', () => {
    const whyChooseUs = document.querySelector('#why-choose-us');
    if (!whyChooseUs.classList.contains('expanded')) {
        whyChooseUs.classList.add('expanded');
    }
    whyChooseUs.classList.add('animate-background');
   
    // Пауза перед началом появления элементов
    setTimeout(showItems, 4400); 
});

function showItems() {
    const items = document.querySelectorAll('.features-item'); // Получаем все элементы features-item
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1; // Меняем opacity на 1 для плавного появления
            item.style.transform = 'scale(1)'; // Отменяем уменьшение
        }, index * 4300); // Задержка для каждого элемента, 500 мс между появлениями
    });
}











document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('open');
    });
});






document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';  // Сделать модальное окно видимым
        setTimeout(() => {
            modal.classList.add('open');  // Добавить класс для плавного появления
        }, 10);

        // Изменяем позиционирование заголовка и отключаем прокрутку
        const header = document.querySelector('header'); // Убедитесь, что это правильный селектор для вашего заголовка
        header.classList.add('header-static'); // Добавляем класс для изменения позиционирования
        const discounts = document.querySelector('.discounts-background'); // Убедитесь, что это правильный селектор для вашего заголовка
        discounts.classList.add('discounts-static');
        document.body.style.overflow = 'hidden'; // Отключаем прокрутку на body
    });
});

document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        const modal = closeButton.closest('.modal');
        modal.classList.remove('open');  // Убрать класс для скрытия
        setTimeout(() => {
            modal.style.display = 'none';  // Скрыть модальное окно после анимации
        }, 500);  // Время анимации (должно совпадать с временем transition)

        // Возвращаем позиционирование заголовка и включаем прокрутку
        const header = document.querySelector('header'); // Убедитесь, что это правильный селектор для вашего заголовка
        header.classList.remove('header-static'); // Убираем класс для возврата позиционирования
        const discounts = document.querySelector('.discounts-background'); // Убедитесь, что это правильный селектор для вашего заголовка
        discounts.classList.remove('discounts-static');
        document.body.style.overflow = ''; // Возвращаем прокрутку на body
    });
});



// Закрытие модальных окон при клике за пределами окна
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        const modal = event.target;
        modal.classList.remove('open');  // Убрать класс для скрытия
        setTimeout(() => {
            modal.style.display = 'none';  // Скрыть модальное окно после анимации
        }, 500);  // Время анимации (должно совпадать с временем transition)

        // Возвращаем позиционирование заголовка и включаем прокрутку
        const header = document.querySelector('header'); // Убедитесь, что это правильный селектор для вашего заголовка
        header.classList.remove('header-static'); // Убираем класс для возврата позиционирования
        const discounts = document.querySelector('.discounts-background'); // Убедитесь, что это правильный селектор для фона скидок
        if (discounts) {
            discounts.classList.remove('discounts-static'); // Убираем класс для фона
        }
        document.body.style.overflow = ''; // Возвращаем прокрутку на body
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
      const thumbnails = modal.querySelectorAll('.thumbnail');
      const mainImage = modal.querySelector('.main-image');
  
      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', (event) => {
          // Добавляем класс для плавного исчезновения
          mainImage.classList.add('fade-out');
          
          // Устанавливаем задержку для смены изображения после исчезновения
          setTimeout(() => {
            mainImage.src = event.target.src;
            mainImage.classList.remove('fade-out'); // Убираем класс для плавного появления
          }, 500); // Тайм-аут должен совпадать с длительностью перехода CSS
        });
      });
    });
  });
  

document.querySelectorAll('.open-m').forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';  // Сделать модальное окно видимым
        setTimeout(() => {
            modal.classList.add('open');  // Добавить класс для плавного появления
        }, 10);

        // Добавить класс .header-static при открытии модального окна
        document.body.classList.add('header-static');
    });
});

document.querySelectorAll('.closes').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.classList.remove('open');  // Убрать класс для скрытия
        setTimeout(() => {
            modal.style.display = 'none';  // Скрыть модальное окно после анимации
        }, 500);  // Время анимации (должно совпадать с временем transition)

        // Убрать класс .header-static при закрытии модального окна
        document.body.classList.remove('header-static');
    });
});


// Функция для смены основного изображения
function changeImage(modalId, mainImageId, thumbnailClass) {
    const modal = document.getElementById(modalId);  // Находим модальное окно по его ID
    const mainImage = modal.querySelector(`#${mainImageId}`);  // Находим основное изображение в модале
    const thumbnails = modal.querySelectorAll(`.${thumbnailClass}`);  // Находим все миниатюры в модале

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Уменьшаем прозрачность основного изображения перед сменой
            mainImage.style.opacity = '0'; 

            // Задержка, чтобы дождаться завершения анимации
            setTimeout(() => {
                mainImage.src = this.src; // Меняем источник основного изображения
                mainImage.style.opacity = '1'; // Восстанавливаем прозрачность
            }, 500); // 500мс - это время, указанное в CSS для перехода
        });
    });
}

// Инициализация функции для каждого модального окна
document.querySelectorAll('.modal').forEach(modal => {
    const modalId = modal.id;
    // Для каждого модала меняем изображения
    if (modalId === 'modal-party') {
        changeImage(modalId, 'mainImage', 'thumbnail');
    } else if (modalId === 'modal-night') {
        changeImage(modalId, 'mainImage2', 'thumbnail');
    } else if (modalId === 'modal-romantic') {
        changeImage(modalId, 'mainImage3', 'thumbnail');
    } else if (modalId === 'modal-date') {
        changeImage(modalId, 'mainImage4', 'thumbnail');
    }
});







///////////////////////////////////////////////////////////МОБИЛЬНАЯ ВЕРСИЯ/////////////////////////////////////////////////////////////////////
document.querySelector('.menu-icon').addEventListener('click', () => {
    const mobileLinks = document.querySelector('.mobile-links');
    mobileLinks.classList.toggle('open');
});

