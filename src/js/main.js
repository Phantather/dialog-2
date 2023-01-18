let callBtn = document.querySelector('.call')
let overlay = document.querySelector('.overlay')

let closeBtn = document.querySelector('.overlay__close')

callBtn.onclick = function () {
   overlay.style.display = 'flex'
}

closeBtn.onclick = function () {
    overlay.style.display = 'none'
}

overlay.onclick = function (event) {
    if (event.target.classList.contains('overlay')) {
        overlay.style.display = 'none'
    }
}

let im = new Inputmask("+\\9\\96 (999) 99-99-99");

let formTel = document.querySelector('#tel')

im.mask(formTel);



$('.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active')
})


$(window).on('scroll',function () {
    if ($(this).scrollTop() > 20){
        $('.goTop').fadeIn('slow')
    } else {
        $('.goTop').fadeOut('slow')
    }
    if ($(this).scrollTop() > 700) {
        document.querySelector('.goTop').style.color = 'yellow'
    } else if ($(this).scrollTop() > 500) {
        document.querySelector('.goTop').style.color = 'green'
    } else if ($(this).scrollTop() > 200) {
        document.querySelector('.goTop').style.color = 'blue'
    }

/*    if (окно отпущено на больше чем 500 пикселей) {
        то тогда  возьми элемент с классом goTop  и покажи его медленно
    } else {
        иначе возьми элемент с классом goTop и скорой его медленно
    }*/
});


let burger = document.querySelector('.header__burger')
let headerMenu = document.querySelector('.header__menu')

burger.onclick = function () {
    burger.classList.toggle('active')
    headerMenu.classList.toggle('active')

}



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        }
    }
});


















