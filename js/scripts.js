$(document).ready(function () {
  $('.faq__item-top').on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
});
$(document).ready(function () {
  $('.getplan__what').on('click', function () {
    $(this).siblings('.getplan__tooltip').css("display", "flex");
  });
  $('.getplan__tooltip-close').on('click', function () {
    $(this).parent('.getplan__tooltip').fadeOut('slow');
  }); // =========================================== Data collection

  var resumeCards = document.querySelectorAll('.resume__item');
  var dataComplete = false;

  var UserData = function UserData() {
    this.data = {
      userName: 'Посетитель',
      gender: null,
      activity: null,
      protein: null,
      habbits: null,
      age: null,
      weight: null,
      height: null
    };

    this.handleChange = function (name, value) {
      var _this = this;

      if (name in this.data) {
        this.data[name] = value;

        for (var i = 0; i < resumeCards.length + 1; i++) {
          calc(i, this.data);
        }

        dataComplete = Object.keys(this.data).every(function (key) {
          return !!_this.data[key];
        });
      }
    };

    this.checkKey = function (name) {
      if (this.data[name]) {
        return true;
      }

      return false;
    };
  };

  var data = new UserData();
  window.data = data;
  var gendorSelect = document.querySelector('.question__option--select');
  var activityArr = document.getElementsByName('activity');
  var meatArr = document.getElementsByName('meat');
  var proteinArr = document.querySelectorAll('.js-protein');
  var habbitsArr = document.getElementsByName('habbits');
  var limit2 = document.querySelectorAll('.js-limit-2');
  var limit3 = document.querySelectorAll('.js-limit-3');
  gendorSelect.addEventListener('change', function () {
    data.handleChange('gender', this.value);
  }); // =========================================== inputs click change styles

  activityArr.forEach(function (item) {
    item.addEventListener('change', function () {
      changeRadio(activityArr, item);
      data.handleChange('activity', this.value);
    });
  });
  meatArr.forEach(function (item) {
    item.addEventListener('change', function () {
      var label = item.closest('label');
      var labelActive = label.classList.contains('active');
      var restrict = item.dataset.restrict === "meat";

      if (restrict) {
        for (var i = 0; i < meatArr.length; i++) {
          meatArr[i].closest('label').classList.remove('active');
        }

        if (labelActive) {
          label.classList.remove('active');
        } else {
          label.classList.add('active');
        }
      } else if (!labelActive && !restrict) {
        label.classList.add('active');

        for (var _i = 0; _i < meatArr.length; _i++) {
          if (meatArr[_i].dataset.restrict === "meat" && meatArr[_i].closest('label').classList.contains('active')) {
            meatArr[_i].closest('label').classList.remove('active');
          }
        }
      } else {
        label.classList.remove('active');
      }
    });
  });
  proteinArr.forEach(function (item) {
    item.addEventListener('change', function () {
      if (verifyCheckboxChecked(proteinArr)) {
        data.handleChange('protein', this.value);
      } else {
        data.handleChange('protein', null);
      }
    });
  });
  habbitsArr.forEach(function (item) {
    item.addEventListener('change', function () {
      changeCheckbox(item);

      if (verifyCheckboxChecked(habbitsArr)) {
        data.handleChange('habbits', this.value);
      } else {
        data.handleChange('habbits', null);
      }
    });
  }); // =========================================== Limit input characters

  limit2.forEach(function (item) {
    item.addEventListener('keyup', function () {
      limitInputCharacters(2, item);
    });
  });
  limit3.forEach(function (item) {
    item.addEventListener('keyup', function () {
      limitInputCharacters(3, item);
    });
  }); // =========================================== User params collect to Data

  var personData = document.getElementsByName('person-data');
  personData.forEach(function (item) {
    item.addEventListener('change', function () {
      if (item.id === "age") {
        data.handleChange('age', parseInt(item.value));
      } else if (item.id === "height") {
        data.handleChange("height", parseInt(item.value));
      } else if (item.id === "weight") {
        data.handleChange("weight", parseInt(item.value));
      }
    });
  }); // =========================================== Supporting functions

  function limitInputCharacters(limitNumber, item) {
    var characters = item.value.split('');

    if (characters.length > limitNumber) {
      item.value = item.value.substring(0, limitNumber);
    }
  }

  function changeCheckbox(item) {
    var label = item.closest('label');
    var labelActive = label.classList.contains('active');

    if (labelActive) {
      label.classList.remove('active');
    } else {
      label.classList.add('active');
    }
  }

  function changeRadio(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      arr[i].closest('label').classList.remove('active');
    }

    item.closest('label').classList.add('active');
  }

  function verifyCheckboxChecked(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].checked) {
        return true;
      }
    }
  } // =========================================== Data calculation function


  function calc(item, data) {
    var sex = data.gender;
    var age = data.age;
    var height = data.height;
    var weight = data.weight;
    var active = data.activity;
    var text_value = $(".resume__item--".concat(item, " .resume__item-text"));
    var card = $(".resume__item--".concat(item));

    function removeCardClassIndex() {
      var maxIndexOfClasses = 10;

      for (var i = 0; i <= maxIndexOfClasses; i++) {
        card.removeClass("class-".concat(i));
      }
    }

    if (item == 1) {
      //Калории
      var call_from = '';
      var label = ' kcal';
      var bmr = '';
      var amr = '';

      if (sex == 1) {
        bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else {
        bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
      }

      if (active == 1) {
        amr = 1.2;
      } else if (active == 2) {
        amr = 1.375;
      } else if (active == 3) {
        amr = 1.55;
      } else if (active == 4) {
        amr = 1.725;
      } else if (active == 5) {
        amr = 1.9;
      }

      call_from = Math.round(bmr * amr - bmr * amr * 0.2);
      text_value.html('~' + call_from + label);
    } else if (item == 2) {
      //Достижимый вес
      var good_weight = '';
      var _label = " kg";
      var recommendedWeightLoss = 4;
      good_weight = weight - recommendedWeightLoss;
      text_value.html(Math.round(good_weight) + _label);
    } else if (item == 3) {
      //Ваш ИМТ
      var decimal_places = 2;

      var _calc = Math.ceil(weight / (height / 100 * (height / 100)) * 100) / 100;

      if (_calc <= 16) {
        removeCardClassIndex();
        text_value.html('Pronunciato disavanzo di massa corporea');
      } else if (_calc > 16 && _calc <= 18.5) {
        removeCardClassIndex();
        text_value.html('Insufficiente (disavanzo) massa corporea');
      } else if (_calc > 18.5 && _calc <= 24.99) {
        removeCardClassIndex();
        text_value.html('Norma');
      } else if (_calc > 24.99 && _calc <= 35) {
        removeCardClassIndex();
        text_value.html('Obesità');
      } else if (_calc > 35) {
        removeCardClassIndex();
        text_value.html('Obesità rapida');
      }
    } else if (item == 4) {
      //Метаболический возраст
      var mAge = '';

      if (sex == 1) {
        mAge = Math.round(0.629 * age + 18.56);
      } else {
        mAge = Math.round(0.58 * age + 17.24);
      }

      var devision = mAge % 10;
      var ageTag = 'anni';

      if (mAge < 21) {
        ageTag = 'anni';
      } else if (devision == 1) {
        ageTag = 'anni';
      } else if (devision > 1 && devision < 5) {
        ageTag = 'anni';
      } else if (devision > 5) {
        ageTag = 'anni';
      }

      text_value.html("".concat(mAge, " ").concat(ageTag));
    } else if (item == 5) {
      //Вода
      var ruler = $('.resume__item-scale');
      var ruler_s = $('.resume__item-scale-holder').outerHeight() / 100;
      var l = '';

      if (weight >= 90) {
        if (active == 1) {
          l = 3;
        } else if (active == 2 || active == 3) {
          l = 3.5;
        } else if (active == 4 || active == 5) {
          l = 3.9;
        }
      } else if (weight >= 80) {
        if (active == 1) {
          l = 2.5;
        } else if (active == 2 || active == 3) {
          l = 2.9;
        } else if (active == 4 || active == 5) {
          l = 3.3;
        }
      } else if (weight >= 70) {
        if (active == 1) {
          l = 2.3;
        } else if (active == 2 || active == 3) {
          l = 2.5;
        } else if (active == 4 || active == 5) {
          l = 3;
        }
      } else if (weight >= 60) {
        if (active == 1) {
          l = 1.8;
        } else if (active == 2 || active == 3) {
          l = 2.3;
        } else if (active == 4 || active == 5) {
          l = 2.6;
        }
      } else if (weight >= 50) {
        if (active == 1) {
          l = 1.5;
        } else if (active == 2 || active == 3) {
          l = 2;
        } else if (active == 4 || active == 5) {
          l = 2.3;
        }
      }

      ruler.css({
        height: ruler_s * (l / 5 * 100)
      });
      text_value.html("".concat(l, " l"));
    }
  } // =========================================== Jump to next block


  var sectionIndex = 0;
  var stageIndex = 0;
  var sidebarFigures = document.querySelectorAll('.sidebar__figure');
  var stageFigures = document.querySelectorAll('.scene__stage-arts');
  var stages = document.querySelectorAll('.js-stage');
  var sections = document.querySelectorAll('.js-section');
  var stageNextButtons = document.querySelectorAll('.js-next-stage');
  var stagePrevButtons = document.querySelectorAll('.js-prev-stage');
  var sectionNextButtons = document.querySelectorAll('.js-next-section');
  var sectionPrevButtons = document.querySelectorAll('.js-prev-section');
  var homeButtons = document.querySelectorAll('.js-home');

  function addSectionClass() {
    if (sections[sectionIndex] !== undefined) {
      sections[sectionIndex].classList.add('active');
    }
  }

  ;

  function removeSectionClass() {
    if (sections[sectionIndex] !== undefined) {
      sections[sectionIndex].classList.remove('active');
    }
  }

  ;

  function addBlocksClass() {
    if (sidebarFigures[stageIndex] !== undefined) {
      sidebarFigures[stageIndex].classList.add('active');
    }

    if (stageFigures[stageIndex] !== undefined) {
      stageFigures[stageIndex].classList.add('active');
    }

    if (stages[stageIndex] !== undefined) {
      stages[stageIndex].classList.add('active');
    }
  }

  function removeBlocksClass() {
    if (sidebarFigures[stageIndex] !== undefined) {
      sidebarFigures[stageIndex].classList.remove('active');
    }

    if (stageFigures[stageIndex] !== undefined) {
      stageFigures[stageIndex].classList.remove('active');
    }

    if (stages[stageIndex] !== undefined) {
      stages[stageIndex].classList.remove('active');
    }
  }

  function nextSection() {
    removeSectionClass();
    sectionIndex++;
    addBlocksClass();
    addSectionClass();
  }

  function prevSection() {
    removeSectionClass();
    sectionIndex--;
    addSectionClass();
  }

  function nextBlock() {
    removeBlocksClass();
    stageIndex++;
    addBlocksClass();
  }

  function prevBlock() {
    removeBlocksClass();
    stageIndex--;
    addBlocksClass();
  }

  function home() {
    removeSectionClass();
    removeBlocksClass();
    sectionIndex = 0;
    stageIndex = 0;
    addSectionClass();
    addBlocksClass();
  }

  ;
  stageNextButtons.forEach(function (item) {
    item.addEventListener('click', function () {
      if (data.checkKey(item.dataset.check)) {
        nextBlock();
      }
    });
  });
  stagePrevButtons.forEach(function (item) {
    item.addEventListener('click', function () {
      prevBlock();
    });
  });
  sectionNextButtons.forEach(function (item) {
    item.addEventListener('click', function () {
      nextSection();
    });
  });
  sectionPrevButtons.forEach(function (item) {
    item.addEventListener('click', function () {
      prevSection();
    });
  });
  homeButtons.forEach(function (item) {
    item.addEventListener('click', function () {
      home();
      resetParams();
    });
  }); // =========================================== Validate Params

  var sexSelect = document.querySelector(".question__option--select");
  var weightInput = document.querySelector("#weight");
  var heightInput = document.querySelector("#height");
  var ageInput = document.querySelector("#age");
  var errorMessages = document.querySelectorAll(".question__error");
  var validateFlag = false;

  function resetParams() {
    data.data.gender = null;
    data.data.age = null;
    data.data.weight = null;
    data.data.height = null;
    sexSelect.value = "0";
    weightInput.value = "";
    heightInput.value = "";
    ageInput.value = "";
  }

  function validateSelect() {
    if (sexSelect.value === "0") {
      errorMessages[0].classList.add("active");
      validateFlag = false;
    } else {
      errorMessages[0].classList.remove("active");
      validateFlag = true;
    }
  }

  function validateInput(input, error, min, max) {
    var inputValue = input.value;

    if (inputValue < min || inputValue > max) {
      error.classList.add("active");
      validateFlag = false;
    } else {
      error.classList.remove("active");
      validateFlag = true;
    }
  }

  function validateForm() {
    validateSelect();
    validateInput(ageInput, errorMessages[1], 12, 112);
    validateInput(weightInput, errorMessages[2], 30, 400);
    validateInput(heightInput, errorMessages[3], 80, 300);
  }

  sexSelect.addEventListener("change", function () {
    validateSelect();
  });
  ageInput.addEventListener("change", function () {
    validateInput(ageInput, errorMessages[1], 12, 112);
  });
  ageInput.addEventListener("focus", function () {
    errorMessages[1].classList.remove("active");
  });
  weightInput.addEventListener("change", function () {
    validateInput(weightInput, errorMessages[2], 30, 400);
  });
  weightInput.addEventListener("focus", function () {
    errorMessages[2].classList.remove("active");
  });
  heightInput.addEventListener("change", function () {
    validateInput(heightInput, errorMessages[3], 80, 300);
  });
  heightInput.addEventListener("focus", function () {
    errorMessages[3].classList.remove("active");
  }); // =========================================== Calc Data/Validate & Animation start trigger

  document.querySelector('.js-count-start').addEventListener('click', function () {
    validateForm();

    if (dataComplete && validateFlag) {
      nextSection();
    }
  });
});
$(document).ready(function () {
  var body = document.querySelector(".body");
  var modalLinks = document.querySelectorAll("[data-check='modal']");
  var modalCall = document.querySelector("#modal-call");
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13; // Открытие модального окна

  var openModalCall = function openModalCall() {
    modalCall.classList.add("modal-active");
    body.classList.add("fixed");
    var firstInput = modalCall.querySelector(".form__input");
    firstInput.focus();
    var buttonClose = modalCall.querySelector(".modal__btn-close"); // Скрытие окна при нажатии на кнопку-крестик клавишей ENTER

    var onButtonCloseEnterPress = function onButtonCloseEnterPress() {
      if (event.keyCode === ENTER_KEYCODE) {
        modalCall.classList.remove("modal-active");
        body.classList.remove("fixed");
      }

      buttonClose.removeEventListener("keydown", onButtonCloseEnterPress);
      document.removeEventListener("keydown", onDocumentEscPress);
    };

    buttonClose.addEventListener("keydown", onButtonCloseEnterPress); // Скрытие окна при нажатии ESC

    var onDocumentEscPress = function onDocumentEscPress() {
      if (event.keyCode === ESC_KEYCODE) {
        modalCall.classList.remove("modal-active");
        body.classList.remove("fixed");
      }

      document.removeEventListener("keydown", onDocumentEscPress);
    };

    document.addEventListener("keydown", onDocumentEscPress); // Скрытие окна при нажатии на область вне окна

    var wrapper = document.querySelector(".modal__wrapper");

    var onWrapperClick = function onWrapperClick() {
      modalCall.classList.remove("modal-active");
      body.classList.remove("fixed");
      wrapper.removeEventListener("click", onWrapperClick);
      document.removeEventListener("keydown", onDocumentEscPress);
    };

    wrapper.addEventListener("click", onWrapperClick); // Скрытие окна при нажатии на кнопку-крестик мышью

    var onButtonClose = function onButtonClose() {
      modalCall.classList.remove("modal-active");
      body.classList.remove("fixed");
      buttonClose.removeEventListener("click", onButtonClose);
      document.removeEventListener("keydown", onDocumentEscPress);
    };

    buttonClose.addEventListener("click", onButtonClose); // Валидация

    $('.modal .js-orderform').submit(function (e) {
      e.preventDefault();
      var email = $(this).children('.email').val();
      var error = $(this).children('.error');
      email.replace(/^(0|\+44) */, '');
      var emailValidate = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

      if (emailValidate.test(email.toLowerCase())) {
        error.remove();
        $('#form-modal .form__btn').addClass('basket__button-loader');
        $('#form-modal .form__btn').prop('disabled', true);
        $.post($(this).attr('action'), $(this).serialize(), function (data) {
          // console.log(data);
          if (data.paymentSystem == 'CloudPayments') {
            var widget = new cp.CloudPayments();
            widget.pay('auth', data.data, {
              onSuccess: data.url.success // onSuccess: function (options) { // success
              //     // console.log('onSuccess', options);
              //     //действие при успешной оплате
              // },
              // onFail: function (reason, options) { // fail
              //     // console.log('onFail', reason, options);
              //     //действие при неуспешной оплате
              // },
              // onComplete: function (paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
              //     // console.log('onComplete', paymentResult, options);
              //     //например вызов вашей аналитики Facebook Pixel
              // }

            });
          } else if (data.paymentSystem == 'yookassa') {
            var checkout = new window.YooMoneyCheckoutWidget({
              confirmation_token: data.data.token,
              return_url: data.url.result,
              customization: {
                modal: true
              },
              error_callback: function error_callback(error) {
                console.log(error);
              }
            });
            checkout.render();
          }
        });
        setTimeout(function () {
          $('#form-modal .form__btn').prop("disabled", false);
          $('#form-modal .form__btn').removeClass('basket__button-loader');
        }, 5000);
      } else {
        error.text('Укажите корректный email');
      }
    });
    $('#form-modal .basket__check-input').prop('checked', false);
    $('#form-modal .form__btn').prop('disabled', true);
    $('#form-modal .basket__check-input').click(function () {
      $('#form-modal .form__btn').prop("disabled", !$('#form-modal .form__btn').prop("disabled"));
    });
  };

  [].forEach.call(modalLinks, function (el) {
    el.addEventListener("click", openModalCall);
  });
});
$(document).ready(function () {
  $('.slider__slider-block').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 15000
  });
});
$(document).ready(function () {
  var modalLinks = document.querySelectorAll("[data-check='modal']");
  var time = 900;
  var intr;
  var flag = true;

  function start_timer() {
    intr = setInterval(tick, 1000);
  }

  function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;

    if (mins == 0 && secs == 0) {
      clearInterval(intr);
    }

    secs = secs >= 10 ? secs : "0" + secs;
    $(".minutes").html(mins >= 10 ? mins : "0" + mins);
    $(".seconds").html(secs);
  }

  [].forEach.call(modalLinks, function (el) {
    el.addEventListener("click", function () {
      if (flag) {
        flag = false;
        start_timer();
      }
    });
  });
});

jQuery(document).ready(function($) {
  $('.modal__btn-close').on('click', function(e) {
    $('#modal-call').hide();
     $('.body').removeClass('fixed');
  })
  
});