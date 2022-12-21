document.addEventListener('DOMContentLoaded', function () {

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
       clickable: true,

    },

    centeredSlides: true,
    slidesPerView: 1,
    slidesPerGroup: 1,

  });

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

  document.addEventListener("click", function(e) {
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
  let guestsSomebody =document.querySelector('.guests__somebody');

  tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

     // tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn-active')});
      //e.currentTarget.classList.add('tabs-nav__btn-active');
      tabsItem.forEach(function(element) {element.classList.remove('guests__person_active')});
      let guest = document.querySelector(`[data-target="${path}"]`);

      if ( guest !== null) {
        console.log(guest);
        guest.classList.add('guests__person_active');

        }
        else {
          guestsSomebody.classList.add('guests__person_active');
        }
    });
    });


})

