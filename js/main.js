document.addEventListener('DOMContentLoaded', function () {


  //burger
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu__list-items');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('stop-scroll');

  })


  let menuBtnOne = document.querySelector('.menu-btn');
  let menuContainer = document.querySelector('.menu');
  menuBtnOne.addEventListener('click', function () {
    menuContainer.classList.remove('active');


    let menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach(function (el) {
      el.addEventListener('click', function () {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
        document.body.classList.remove('stop-scroll');
      })
    })
  })

  //search

  let searchFormIconLink = document.querySelector('.search-form__icon-visible');
  let searchBtnClose = document.querySelector('.search-form__icon-link_close');
  let searchFormInput = document.querySelector('.search-form__input');
  let searchForm = document.querySelector('.search-form');
  searchFormIconLink.addEventListener('click', function () {
    searchFormIconLink.classList.add('none');
    searchForm.classList.add('active-search-form');
    searchFormInput.classList.add('active-search-input');
  });

  document.addEventListener("click", function (e) {
    let formActive = e.target.closest('.container-search');
    if (!formActive) {
      searchFormInput.value = "";
      searchFormInput.classList.remove('active-search-input');
      searchForm.classList.remove("active-search-form");
      searchFormIconLink.classList.remove('none');
    } else {
      return;
    };
  })

  searchBtnClose.addEventListener('click', function () {
    searchFormInput.value = "";
    searchFormInput.classList.remove('active-search-input');
    searchForm.classList.remove("active-search-form");
    searchFormIconLink.classList.remove('none');
  });


  //tabs-guests

  let tabsBtn = document.querySelectorAll('.guests__link-person');
  let tabsItem = document.querySelectorAll('.guests__person');
  let guestsSomebody = document.querySelector('.guests__somebody');

  tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      tabsItem.forEach(function (element) { element.classList.remove('guests__person_active') });
      let guest = document.querySelector(`[data-target="${path}"]`);
      if (guest !== null) {
        guest.classList.add('guests__person_active');

      }
      else {
        guestsSomebody.classList.add('guests__person_active');
      }
    });
  });





  /*modal-window*/

  headerBtn = document.querySelector('.header__btn');
  modalWindow = document.querySelector('.modal-window');
  modalWindowBtnClose = document.querySelector('.modal-window__btn-close');
  headerBtn.addEventListener('click', function () {
    document.body.classList.add('stop-scroll');
    modalWindow.classList.add('display-block');
  });
  modalWindowBtnClose.addEventListener('click', function () {
    modalWindow.classList.remove('display-block');
    document.body.classList.remove('stop-scroll');
  });

  /*podcasts more */

  let podcastsBtnMore = document.querySelector('.podcasts__btn-more');
  let morePodcasts = 'Ещё подкасты';
  let fewerPodcasts = 'меньше подкастов';
  podcastsBtnMore.textContent = morePodcasts;
  let podcastsNoVisible = document.querySelectorAll('.podcasts__novisible');
  podcastsBtnMore.addEventListener('click', function () {
    podcastsNoVisible.forEach(element => element.classList.toggle('podcasts__novisible'));
    if (podcastsBtnMore.textContent == morePodcasts) {
      podcastsBtnMore.textContent = fewerPodcasts;
    } else if (podcastsBtnMore.textContent == fewerPodcasts) {
      podcastsBtnMore.textContent = morePodcasts;
    };
  })

  /*choices select*/

  let broadcastsItems = document.querySelectorAll('.broadcasts__item');
  let broadcastsNothing = document.querySelector('.broadcasts__nothing');
  let broadcastsNothingText = 'Увы, но у этого автора пока ничего нет :(';

  const broadcastsSelect = document.querySelector('.broadcasts__select');
  const choices = new Choices(broadcastsSelect, {
    placeholder: false,
    itemSelectText: '',
    searchEnabled: false,
  });
  broadcastsSelect.addEventListener(
    'addItem',
    function (event) {
      broadcastsNothing.textContent = '';
      broadcastsItems.forEach(function (elem) {
        elem.classList.remove('broadcasts__item_active')
      });
      let broadcastsItem = document.querySelectorAll(`[data-target="${event.detail.value}"]`);
      if (broadcastsItem.length !== 0) {
        broadcastsItem.forEach(function (el) {
          el.classList.add('broadcasts__item_active');
        });
      }
      else {
        broadcastsNothing.textContent = broadcastsNothingText;
      }

    },
  );

  /* playlists */
  let playlistsItems = document.querySelectorAll('.playlists__item');
  let playlistsNothing = document.querySelector('.playlists__nothing');
  let playlistsNothingText = 'Увы, из этого жанра пока ничего нет :(';

  let genreItem = document.querySelectorAll('.genre__input');
  genreItem.forEach(function (element) {
    element.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      playlistsNothing.textContent = '';
      playlistsItems.forEach(function (element) {
        element.classList.remove('playlists__items_active')
      });
      let playlistsItem = document.querySelectorAll(`[data-target="${path}"]`);
      if (playlistsItem.length !== 0) {
        playlistsItem.forEach(function (el) {
          el.classList.add('playlists__items_active');
        });
      }
      else {
        playlistsNothing.textContent = playlistsNothingText;
      }

    });
  });
  /*
    let submenuBtns = document.querySelectorAll('.submenu__btn');
    let submenuBtnPause = document.querySelector('.submenu__btn-pause');
    submenuBtns.forEach(function (element) {
      element.addEventListener('click', function (e) {
        const submenuBtn = e.currentTarget;
        
      console.log(submenuBtnPause.closest(submenuBtn));  
      });
    });*/

  let myAudio = document.querySelector(".submenu__audio");
  let btnsListen = document.querySelectorAll('.btn-listen-container');
  
  console.log(myAudio.paused);
//запуск воспроизведения
function playClip(media) {
  media.play();
}

//стоп воспроизведения 
function stopClip(media) {
  media.pause();
}


  btnsListen.forEach(function (element) {
    element.addEventListener('click', function (e) {
      let activeBtn = e.currentTarget;
      activeBtn.firstElementChild.classList.toggle('btn-listen_none')
      activeBtn.firstElementChild.nextElementSibling.classList.toggle('btn-pause_active');   
      
      if (myAudio.paused === true) {
        playClip(myAudio);
      } else {       
        stopClip(myAudio);
      }    
    })});
  
/*
    let myVideo = document.querySelector(".submenu__audio");
let btnlisten = document.querySelector(".btn-listen");
let k2 = document.querySelector(".k2");
    function playClip(media) {
      media.play();
    }
    
    //стоп воспроизведения видео примера
    function stopClip(media) {
      media.pause();
    }
    
    //Использование и демонстрация:
    //получим медиа объект в переменную
    
    //запуск по onclick для кнопок:

    btnlisten.addEventListener('click', function (e) {
      console.log(myVideo.muted);
    playClip(myVideo); //для кнопки "Play"
    console.log(myVideo.muted);
    });
    k2.addEventListener('click', function (e) {
      console.log(myVideo.muted);
    stopClip(myVideo); //для кнопки "Stop"
    console.log(myVideo.muted);
  });*/






  
  /*form*/
  function validateForm() {
    // let phone = document.querySelector('.input__tel')
    //  let im = new Inputmask("+375 (99) 999-99-99")
    //  im.mask(phone);
    new window.JustValidate('.about__form', {
      colorWrong: '#D52B1E',
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        }
        /*phone: {
          required: true,
          function: (name, value) => {
            const ph = phone.inputmask.unmaskedvalue();
            return Number(ph) && ph.length === 10;
          }
        },*/
      },
      messages: {
        email: {
          required: "Вы не ввели e-mail"
        },
        name: "Вы не ввели имя",
        message: "Вы не ввели сообщение",
        /* phone: {
           required: "Вы не ввели телефон",
           function: "Недостаточное количество символов"
         }*/
      }
    });
  }
  validateForm();

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    loopedSlides: 4,
    autoplay: {
      delay: 5000,
    },

    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },

    centeredSlides: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    /*breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is <= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }*/






  });


})