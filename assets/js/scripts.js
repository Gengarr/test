// Настройки слайдера
let swiper = new Swiper('.myswiper', {
    spaceBetween: 20,
    slidesPerView: 11,
    loop: true,
    autoplay: {
      delay: 1000,
    },
    
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewhell: true,
    keyboard: true,
    grabCursor: true,

  }); 

  // Открытие модального окна form
document.getElementById("open-popap-btn").addEventListener("click", function(){
  document.getElementById("modal").classList.add("open")
})

// Закрытие модального окна form
document.getElementById("krest-form").addEventListener("click", function(){
  document.getElementById("modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии Esc form
window.addEventListener("keydown", (e) =>{
  if (e.key === "Escape") {
      document.getElementById("modal").classList.remove("open")
  }
})

// Закрыть модальное окно при клике вне окна form
document.querySelector("#modal .modal-box").addEventListener("click", event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal").addEventListener("click", event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open")
})

// Открытие модального окна успеха
document.getElementById('click-from-button').addEventListener('click', function() {
  var modal = document.getElementById('modal'); 
  modal.classList.remove('open');
  var succes = document.getElementById('succes');
  succes.classList.add('show');
})

// Закрытие модального окна успеха
document.getElementById("krest-form-succes").addEventListener("click", function(){
  document.getElementById("succes").classList.remove("show")
})

// Закрыть модальное окно успеха при нажатии Esc form
window.addEventListener("keydown", (e) =>{
  if (e.key === "Escape") {
      document.getElementById("succes").classList.remove("show")
  }
})

// Закрыть модальное окно успеха при клике вне окна form
document.querySelector("#modal .modal-box").addEventListener("click", event => {
  event._isClickWithInModal = true;
});
document.getElementById("succes").addEventListener("click", event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("show")
})
// Закрыть модальное окно успеха при нажатии кнопки вернуться
document.getElementById("combek").addEventListener("click", function(){
  document.getElementById("succes").classList.remove("show")
})


// Неожиданное появление меню
document.getElementById("nemenu").addEventListener("mouseover", function(){
  document.getElementById("id-drop-menu").classList.add("show-menu")
})
// Неожиданное исчезновение меню
document.getElementById("nemenu").addEventListener("mouseout", function(){
  document.getElementById("id-drop-menu").classList.remove("show-menu")
})
  
// Тут у нас пошли чекбоксы

// 1 Нажал на чекбокс и появилась надпись, ещё раз нажал и надписи нет
document.getElementById("chekbox-1").addEventListener("click", function(){
  var chekboxText = document.getElementById("chekbox-text-1");
  if (chekboxText.classList.contains("show")) {
    chekboxText.classList.remove("show");
  } else {
    chekboxText.classList.add("show");
  }
});

document.getElementById("chekbox-2").addEventListener("click", function(){
  var chekboxText = document.getElementById("chekbox-text-2");
  if (chekboxText.classList.contains("show")) {
    chekboxText.classList.remove("show");
  } else {
    chekboxText.classList.add("show");
  }
});

document.getElementById("chekbox-3").addEventListener("click", function(){
  var chekboxText = document.getElementById("chekbox-text-3");
  if (chekboxText.classList.contains("show")) {
    chekboxText.classList.remove("show");
  } else {
    chekboxText.classList.add("show");
  }
});

document.getElementById("chekbox-4").addEventListener("click", function(){
  var chekboxText = document.getElementById("chekbox-text-4");
  if (chekboxText.classList.contains("show")) {
    chekboxText.classList.remove("show");
  } else {
    chekboxText.classList.add("show");
  }
});

document.getElementById("chekbox-5").addEventListener("click", function(){
  var chekboxText = document.getElementById("chekbox-text-5");
  if (chekboxText.classList.contains("show")) {
    chekboxText.classList.remove("show");
  } else {
    chekboxText.classList.add("show");
  }
});

document.getElementById("chekbox-6").addEventListener("click", function(){
  var chekboxText = document.getElementById("chekbox-text-6");
  if (chekboxText.classList.contains("show")) {
    chekboxText.classList.remove("show");
  } else {
    chekboxText.classList.add("show");
  }
});

document.getElementById("chekbox-7").addEventListener("click", function(){
  var chekboxText = document.getElementById("chekbox-text-7");
  if (chekboxText.classList.contains("show")) {
    chekboxText.classList.remove("show");
  } else {
    chekboxText.classList.add("show");
  }
});

document.getElementById("chekbox-8").addEventListener("click", function(){
  var chekboxText = document.getElementById("chekbox-text-8");
  if (chekboxText.classList.contains("show")) {
    chekboxText.classList.remove("show");
  } else {
    chekboxText.classList.add("show");
  }
});

document.getElementById("chekbox-9").addEventListener("click", function(){
  var chekboxText = document.getElementById("chekbox-text-9");
  if (chekboxText.classList.contains("show")) {
    chekboxText.classList.remove("show");
  } else {
    chekboxText.classList.add("show");
  }
});

document.getElementById("chekbox-10").addEventListener("click", function(){
  var chekboxText = document.getElementById("chekbox-text-10");
  if (chekboxText.classList.contains("show")) {
    chekboxText.classList.remove("show");
  } else {
    chekboxText.classList.add("show");
  }
});

document.getElementById("chekbox-11").addEventListener("click", function(){
  var chekboxText = document.getElementById("chekbox-text-11");
  if (chekboxText.classList.contains("show")) {
    chekboxText.classList.remove("show");
  } else {
    chekboxText.classList.add("show");
  }
});

document.getElementById("chekbox-12").addEventListener("click", function(){
  var chekboxText = document.getElementById("chekbox-text-12");
  if (chekboxText.classList.contains("show")) {
    chekboxText.classList.remove("show");
  } else {
    chekboxText.classList.add("show");
  }
});



// Это скрипт переключения квиза

document.getElementById("btn-quest-right-column").addEventListener("click", function(){
  var quest1 = document.getElementById("quest-1");
  var shownumber2 = document.getElementById("left-column-2");
  var quest2 = document.getElementById("quest-2");
  var leftcolumn1white = document.getElementById("left-column-1");
  if (quest1.classList.contains("show")) {
    quest1.classList.remove("show");
  } else {
    quest1.classList.add("show");
  }
  
  if (quest2.classList.contains("show")) {
    quest2.classList.remove("show");
  } else {
    quest2.classList.add("show");
  }
  
  if (shownumber2.classList.contains("show-number-2")) {
    shownumber2.classList.remove("show-number-2");
  } else {
    shownumber2.classList.add("show-number-2");
  }
    if (leftcolumn1white.classList.contains("white")) {
      leftcolumn1white.classList.remove("white");
  } else {
    leftcolumn1white.classList.add("white");
  }
});
// Это скрипт переключения квиза со вторго квиза назад

document.getElementById("btn-quest-right-column-nazad-2").addEventListener("click", function(){
  var quest1 = document.getElementById("quest-1");
  var shownumber2 = document.getElementById("left-column-2");
  var quest2 = document.getElementById("quest-2");
  var leftcolumn1white = document.getElementById("left-column-1");
  if (quest1.classList.contains("show")) {
    quest1.classList.remove("show");
  } else {
    quest1.classList.add("show");
  }
  
  if (quest2.classList.contains("show")) {
    quest2.classList.remove("show");
  } else {
    quest2.classList.add("show");
  }
  
  if (shownumber2.classList.contains("show-number-2")) {
    shownumber2.classList.remove("show-number-2");
  } else {
    shownumber2.classList.add("show-number-2");
  }
    if (leftcolumn1white.classList.contains("white")) {
      leftcolumn1white.classList.remove("white");
  } else {
    leftcolumn1white.classList.add("white");
  }
});

// Это скрипт переключения квиза со вторго квиза вперёд

document.getElementById("btn-quest-right-column-quest-2").addEventListener("click", function(){
  var quest2 = document.getElementById("quest-2");
  var quest3 = document.getElementById("quest-3");
  var leftcolumn2white = document.getElementById("left-column-2");
  var leftcolumn3white = document.getElementById("left-column-3");
  
  
  if (leftcolumn2white.classList.contains("white")) {
    leftcolumn2white.classList.remove("white");
  } else {
    leftcolumn2white.classList.add("white");
  }
  if (quest2.classList.contains("show")) {
    quest2.classList.remove("show");
  } else {
    quest2.classList.add("show");
  }
  if (quest3.classList.contains("show")) {
    quest3.classList.remove("show");
  } else {
    quest3.classList.add("show");
  }
  if (leftcolumn3white.classList.contains("show")) {
    leftcolumn3white.classList.remove("show");
  } else {
    leftcolumn3white.classList.add("show");
  }
});

// Это скрипт переключения квиза c третьего квиза назад

document.getElementById("btn-quest-right-column-nazad-3").addEventListener("click", function(){
  var quest2 = document.getElementById("quest-2");
  var quest3 = document.getElementById("quest-3");
  var leftcolumn2white = document.getElementById("left-column-2");
  var leftcolumn3white = document.getElementById("left-column-3");
  
  
  if (leftcolumn2white.classList.contains("white")) {
    leftcolumn2white.classList.remove("white");
  } else {
    leftcolumn2white.classList.add("white");
  }
  if (quest2.classList.contains("show")) {
    quest2.classList.remove("show");
  } else {
    quest2.classList.add("show");
  }
  if (quest3.classList.contains("show")) {
    quest3.classList.remove("show");
  } else {
    quest3.classList.add("show");
  }
  if (leftcolumn3white.classList.contains("show")) {
    leftcolumn3white.classList.remove("show");
  } else {
    leftcolumn3white.classList.add("show");
  }
});

// Это скрипт переключения квиза c третьего квиза в модальную форму

document.getElementById("btn-quest-right-column-quest-3").addEventListener("click", function(){
  var quiz = document.getElementById("quize-iakor");
  var openmodalpopap = document.getElementById("modal");


  if (quiz.classList.contains("hide")) {
    quiz.classList.remove("hide");
  } else {
    quiz.classList.add("hide");
  }
  if (openmodalpopap.classList.contains("open")) {
    openmodalpopap.classList.remove("open");
  } else {
    openmodalpopap.classList.add("open");
  }
  
});
