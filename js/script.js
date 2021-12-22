$(document).ready(function () {

//    console.log('test');

});

function CheckForm(data) {

    let is_error = false;

    if (data.firstname != null && data.firstname.value.length == 0) {
        $('#toast').find('span').html(data.firstname.getAttribute('data-error'));
        $('#toast').find('b').html(data.firstname.getAttribute('data-name'));

        is_error = true;
       // console.log(1);

    }

    if (data.lastname != null && data.lastname.value.length == 0 && !is_error){
        $('#toast').find('span').html(data.lastname.getAttribute('data-error'));
        $('#toast').find('b').html(data.lastname.getAttribute('data-name'));

        is_error = true;

      //  console.log(2);

    }

    if (data.phone != null && (data.phone.value.length < 6 || data.phone.value.length > 15) && !is_error) {
        $('#toast').find('span').html(data.phone.getAttribute('data-error'));
        $('#toast').find('b').html(data.phone.getAttribute('data-name'));

        is_error = true;

      //  console.log(3);

    }

    if (data.email != null && data.email.value.length == 0 && !is_error) {
        $('#toast').find('span').html(data.email.getAttribute('dataset-error'));
        $('#toast').find('b').html(data.email.getAttribute('data-name'));

        is_error = true;

      //  console.log(4);

    }

  //  console.log(22222222222222222);
  //  console.log(is_error);

 //  console.log(22222222222222222);

    if(is_error){
        $('.toast').addClass('toast_show');
       
        return false;
    }else{
        $('.toast').removeClass('toast_show');
        $('#toast').find('b').html('');
        $('.form__submit_btn').on('click', function(e){
             $('.form__submit_btn').attr('disabled',false);
            e.preventDefault();
            $('.card_popup').show();
    
        })
    }
    // $('.toast').removeClass('toast_show');


    // if(1==1){
    //     exampleModal.classList.add('toast_show');
    //     body.classList.add('body__stop');
    //     closeModal.onclick = function () {
    //         exampleModal.classList.remove('toast_show');
    //         body.classList.remove('body__stop');
    //     };
    // }

    return true;


}

// LOCALSTORAGE
this.storeInputs = function(){
    var inputs = document.getElementsByTagName('input');

    Array.prototype.forEach.call(inputs, function(item){
        item.addEventListener('keyup', function(event){
            let inputName = event.target.name;
            let inputValue = event.target.value;

            if(inputName !== '_hjid')
                localStorage.setItem(inputName, inputValue);
        });
    });
}

storeInputs();

this.setInputs = function(){
    var inputs = getStorage();

//    console.log(inputs);

    for(var name in inputs){
        if (name.includes('/')) continue;

        if(name){
            var inp = document.querySelector('input[name=' + name + ']');
            if (inp) inp.value = inputs[name];
        }
    }
};
setInputs();

function getStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        if(keys[i] !== '_hjid')
            values[keys[i]] = localStorage.getItem(keys[i]);
    }

    return values;
}
// MODALS
this.openModal = function(event){
    //event.preventDefault();
    document.getElementsByTagName( 'html' )[0].classList.toggle('hidden');
    document.getElementsByClassName('modals__wrapper')[0].classList.toggle('show');
    document.getElementById(event.dataset.target).classList.add('show');
}

this.modalClose = function(event){
    var iddd = $(event.closest('.modal')).prop("id");
    event.closest('.modal').classList.toggle('show');
    document.getElementsByTagName( 'html' )[0].classList.toggle('hidden');
    document.getElementsByClassName('modals__wrapper')[0].classList.toggle('show');
    if (iddd == 'modalThanks' ) window.location = '/';
}

this.modalCloseAll = function(){
    document.getElementsByTagName( 'html' )[0].classList.remove('hidden');
    document.getElementsByClassName('modals__wrapper')[0].classList.remove('show');

    var modals = document.getElementsByClassName("modal");
    Array.prototype.forEach.call(modals, function(item){
        item.classList.remove('show');
    });
}

// COUNTDOWN

// Set the date we're counting down to
let currentDate = new Date();
currentDate.setMinutes(currentDate.getMinutes() + 5);

var countDownDate = currentDate.getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var countdowns = document.getElementsByClassName("countdown__datetime");

    Array.prototype.forEach.call(countdowns, function(item){
        item.innerHTML = "<span class='num'>" + days + "</span><span class='del'>:</span><span class='num'>" + hours + "</span><span class='del'>:</span><span class='num'>"
            + minutes + "</span><span class='del'>:</span><span class='num'>" + seconds + "</span>";
    });

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown__datetime").innerHTML = "EXPIRED";
    }
}, 1000);


// TRANSLITERATION FUNCTION
this.rus_to_latin = function(str) {

    var ru = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
        'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
        'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
        'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
        'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya'
    }, n_str = [];

    str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');

    for ( var i = 0; i < str.length; ++i ) {
        n_str.push(
            ru[ str[i] ]
            || ru[ str[i].toLowerCase() ] == undefined && str[i]
            || ru[ str[i].toLowerCase() ].toUpperCase()
        );
    }

    return n_str.join('');
}

$(document).ready(function() {
    // $('input[name="phone"]').inputmask({"mask": "+9(999) 999 9999"});

    if(locale == 'de'){
        $('body').append(`<style>
            .jp-card-back .jp-card-shiny:after{content:"Diese Karte wurde von Jesse Pollak ausgestellt und ist für jedermann zur kostenlosen Nutzung lizenziert. Sie kommt ohne Garantie. Bei Support-Problemen besuchen Sie bitte github.com/jessepollak/card." !important;}
            .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:before{
                content: "MONAT/JAHR" !important;
            }
            .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:after{
                content: "gültig durch" !important;
            }
            </style>`);  
    }
    // $('#registration').validate({
    //     rules: {
    //         email: {
    //             required: true,
    //             email: true
    //         },
    //         phone: {
    //             required: true
    //         },
    //         password: {
    //             required: true,
    //         }
    //     },
    //     messages: {
    //         email: {
    //             required: "Please enter email",
    //             email: "Неверно введена почта. Попробуйте еще раз."
    //         },
    //         email: {
    //             required: "Please enter email",
    //         },
    //         password: {
    //             required: "Please enter password",
    //         }
    //     },
    //     submitHandler: function(form) {
    //         form.submit();
    //     }
    // });
    $('#main-page-form2').hide();

    // VALIDATE EMAIL FIRST STEP
    $('.button-continue').click((e) => {
        e.preventDefault();
        $('.toast').removeClass('toast_show');

        let form = CheckForm($('#first_form')[0]);
    //    console.log(form);

        if (!form) {
            return;
        }


        var firstnameInput = $('input[name="firstname"]').val();
        var lastnameInput = $('input[name="lastname"]').val();

        var phoneInput = $('input[name="phone"]').val();

        var emailInput = $('input[name="email"]').val();

        $('.input__wrapper_email').removeClass('error');
        $('.input__wrapper_phone').removeClass('error');
        $('.input__wrapper_firstname').removeClass('error');
        $('.input__wrapper_lastname').removeClass('error');


        if(firstnameInput.length < 2) {
            $('.input__wrapper_phone .error__text').text(errorsMsg[locale]['firstnameInput']);
            $('.input__wrapper_phone').addClass('error');
            return;
        } else  if(lastnameInput.length < 2) {
              $('.input__wrapper_phone .error__text').text(errorsMsg[locale]['lastnameInput']);
            $('.input__wrapper_phone').addClass('error');
            return;
        } else if(phoneInput.length < 6) {
            $('.input__wrapper_phone .error__text').text(errorsMsg[locale]['phoneInput']);
            $('.input__wrapper_phone').addClass('error');
            return;
        }
        else
        if(emailInput.length < 4) {
            $('#toast span').text(errorsMsg[locale]['emailInput']);
            $('#toast').addClass('toast_show');

            // $('.input__wrapper_email .error__text').text(errorsMsg[locale]['emailInput']);
            // $('.input__wrapper_email').addClass('error');
            return;
        }
        else
        if(emailInput.indexOf('@') === -1) {
    //        console.log(errorsMsg[locale]['emailInputIndex']);

            $('#toast span').text(errorsMsg[locale]['emailInputIndex']);
            $('#toast').addClass('toast_show');
            // $('.input__wrapper_email .error__text').text(errorsMsg[locale]['emailInputIndex']);
            // $('.input__wrapper_email').addClass('error');
            return;
        } else {

            let data = {
                email: emailInput,
                clickid:1
            };
            $.ajax({
                url: 'https://wingift.be/api/cloudPayments/is_subscribed',
                data: data,
                type: 'POST'
            }).done(function (response) {

                $('.card_popup').fadeIn();
                body_scroll_lock();
                // console.log(response);
                // $('.input__wrapper_email').removeClass('error');
                // $('#main-page-form1').hide();
                // $('#main-page-form2').show();


                // $.ajax({
                //     url: 'https://wingift.org/api/cloudPayments/is_subscribed',
                //     data: data,
                //     type: 'POST'
                // }).done(function (response) {
                //     console.log(response);

                // })

            }).fail(function (response) {
             //   console.log(response.responseJSON.error);
                if(response.responseJSON.error == 'Аккаунт уже зарегистрирован'){
                    let error = 'Account already registered';
                    $('#toast span').text(errorsMsg[locale]['alreadyEmail']);
                }else{
                    $('#toast span').text(response.responseJSON.error);
                }

         //       console.log(response);
                $('#toast').addClass('toast_show');
                // $('.input__wrapper_email .error__text').text(response.responseJSON.error);
                // $('.input__wrapper_email').addClass('error');
            });
        }


    })


    $('#card-number').inputmask({"mask": "9999 9999 9999 9999"});
    $('#card-expiry').inputmask({"mask": "99/99"});
    $('#card-cvc').inputmask({"mask": "999"});
    new Card({
        form: document.querySelector('#form'),
        container: '.card-wrapper',
        formatting: true,
    });
});

// SET NAME FROM FIRST STEP TO CARD
$(document).on('click touch','.button-continue',function(e){



    // TRANSLITERATION FIELDS
    let card_owner = rus_to_latin(document.querySelector('input[name=firstname]').value + ' ' + document.querySelector('input[name=lastname]').value);


    // SET VALUE TO CARD NAME FIELD
    document.querySelector('#name').value = document.querySelector('input[name=firstname]').value || document.querySelector('input[name=lastname]').value? card_owner : '';

    // SET VALUE TO CARD NAME HIDDEN INPUT
    $('input[data-cp="name"]').val(document.querySelector('#name').value);

    // WRITE NAME TO CARD IMAGE
    if(document.querySelector('#name').value)
        document.querySelector('.jp-card-name').textContent = document.querySelector('#name').value;


  //  console.log($('.toast'));
    $('.toast.bg-warning').each(function(){
      //  console.log($(this));
        $(this).removeClass('.toast_show');
    });

});

// $('.button-submit').click((e) => {
//     document.querySelector('#form').submit();
// });
$('#card-expiry').on('input',function(e) {
  //  console.log(2222222222);
    let val = this.value.split('/');

    console.log(val);
    $('input[data-cp="expDateMonth"]').val(val[0]);
    $('input[data-cp="expDateYear"]').val(val[1]);
});

$('#card-number').change(function(e) {
 //   console.log(1111111111);

    $('input[data-cp="cardNumber"]').val(this.value);
});

$('#card-cvc').on('input',function(e) {
 //   console.log(this.value);
    $('input[data-cp="cvv"]').val(this.value);
});

$('#name').change(function(e) {
    $('input[data-cp="name"]').val(this.value);
});

// $('.payment-button').click();
// $.ajax({
//     url: 'http://gifter.parabee8.beget.tech/api/cloudPayments',
//     method: 'POST',
//     success: function(response){
//         console.log('response', response);
//     },
//     error: function( response ){
//         console.log('error', response);
//     }
// });

// $(document).on('click','.button-continue.button-blank',function(e){
//     e.preventDefault();
//     e.stopPropagation();

//     let form = CheckForm('#first_form');
//     if(!form){
//         return;
//     }
// });

$(document).on("click", ".paypment_btn", function (e) {
  //  console.log(e);
    e.preventDefault();
    //Проверяем ошибки в форме
    //При ошибках в файле validation-pay-card добавляется класс card__field--error
    /*
        var form_valid = true;
        $(this).find('.card__field').each(function() {
            form_valid = form_valid && !$(this).hasClass('card__field--error');
        });
        if (!form_valid) {
            return false;
        }
    */


    /* Создание checkout */
    var checkout = new cp.Checkout(
        // public id из личного кабинета
        'pk_2db12b36d1e0d674bfc3fa8001f42',
        // тег, содержащий поля данных карты
        document.getElementById("form"));
    createCryptogram(checkout);
});

window.order_cost = 1;


function getGet(name) {
    var s = window.location.search;
    s = s.match(new RegExp(name + '=([^&=]+)'));
    return s ? s[1] : false;
}


var createCryptogram = function (checkout) {

 //   console.log(2222222222222);

    var result = checkout.createCryptogramPacket();

 //   console.log(result);
    $('.input__wrapper.error').each(function() {
        $(this).removeClass('error');
    });

  //  console.log(result);

    if (result.success) {
        // сформирована криптограмма
        var email = '', phone = '';
        if ($('#checkSms').is(':checked')) {
            phone = $('#tel').val();
        } else {
            email = $('#email').val();
        }

        phone = $('#tel').val();

        var data = {
            action: 'sendCryptogram',
            CardCryptogramPacket: result.packet,
            name: $('#firstname').val(),
            lastname: $('#lastname').val(),
            email: email,
            accountId: email,
            phone: $('#tel').val(),
            clickid:getGet('clockid'),
            locale:locale,
        };
 //           console.log(data);
//            console.log(11111111111);
        $.ajax({
            url: 'https://wingift.be/api/cloudPayments/charge',
            data: data,
            type: 'post',
            dataType: 'json'
        }).done(function (response) {
            response = JSON.parse(response);
            if (response['Success']) {
                window.location.href = response['success_url']
            }
            else {
                // if (response['acs_form']) {
                //     window.openAcs(response['acs_form']);
                // } else {
                //     console.error(response);
                //     alert('Произошла ошибка при оплате');
                // }

                if (response.Model.AcsUrl) {
                    // var data = {
                    //     MD: response.Model.TransactionId,
                    //     PaReq: response.Model.PaReq,
                    //     TermUrl: 'http://gl.parabee8.beget.tech'
                    // };

                    // $.ajax({
                    //     url: response.Model.AcsUrl,
                    //     data: data,
                    //     crossDomain: true,
                    //     type: 'post',
                    //     dataType: 'jsonp'
                    // }).done(function (resp) {
                    //     console.log(resp)
                    // });
                    // console.log(response.Model.PaReq);
                    $('#secure input[name="MD"]').val(response.Model.TransactionId);
                    $('#secure input[name="PaReq"]').val(response.Model.PaReq);
                    // var pp = window.location.href.substr(window.location.protocol.length + 2);
                    // pp = pp.replace('.nikitadev.me', '');
                    // pp = pp.replace('/', '');
                    // pp = pp.replace('#', '');

                    var strGET = '?'+window.location.search.replace( '?', ''); 
                    
                    strGET += strGET == '?' ?  'locale='+locale : '&locale='+locale;
                    $('#secure input[name="TermUrl"]').val(/*document.location.origin*/'https://wingift.be/api/cloudPayments/success/form'+strGET);
                    $('#secure').attr('action', response.Model.AcsUrl);
                    $('#secure').submit();
                } else {
      //              console.error(response);
                    alert('Произошла ошибка при оплате');
                }
            }
        });
    } else {

        Object.keys(result.messages).forEach(function(key) {

            let error = '';
            switch(key){
                case 'name':
                    error = 'Enter your name';
                    error = errorsMsg[locale]['EnerName'];
                break;
                case 'cardNumber':
                    if('В номере карты допущены ошибки' == result.messages[key]){
                        error = 'There are mistakes in the card number';
                        error = errorsMsg[locale]['mistakeCardNumber'];
                    }else{
                        error = 'Enter card number';
                        error = errorsMsg[locale]['EnterCardNumber'];
                    }
                break;

                case 'expDateMonth':
                    if(result.messages[key] == 'Некорректное значение года'){
                        error = 'Incorrect year';
                        error = errorsMsg[locale]['incorrectYear'];
                    }else{
                        error = 'Specify the year';
                        error = errorsMsg[locale]['specifyYear'];
                    }
                break;
                case 'expDateYear':
                   if(result.messages[key] == 'Некорректное значение года'){
                        error = 'Incorrect year';
                        error = errorsMsg[locale]['incorrectYear'];

                    }else{
                        error = 'Specify the year';
                        error = errorsMsg[locale]['specifyYear'];

                    }
                break;

                case 'cvv':
                    error = 'Enter CVC code';
                    error = errorsMsg[locale]['enterCvCCode'];
                break;
            }

            $('.input__wrapper_' + key + ' .error__text').text(error);
            $('.input__wrapper_' + key).addClass('error');
        });
    }
};

document.addEventListener('DOMContentLoaded', function(){
    $("a[href]").each(function(){if(document.domain==="start."+document.domain.replace("start.","")){var a=document.domain.replace("start.","");a=$(this).attr("href").replace("parimatch.com",a).replace("pari-match.com",a);$(this).attr("href",a)}});

    function setCookie(a,c,b){var f=window.location.hostname.split(".").filter(function(a,b){return 0!==b}).join("."),e=new Date;e.setTime(e.getTime()+864E5*b);b="expires="+e.toUTCString();document.cookie=a+"="+c+";"+b+";path=/;domain=."+f}function findGetParameter(a){var c=null,b=[];location.search.substr(1).split("&").forEach(function(f){b=f.split("=");b[0]===a&&(c=decodeURIComponent(b[1]))});return c}
    function insertParam(r,a,e){var n=new URL(e),t=n.search,s=new URLSearchParams(t);return s.set(r,a),n.search=s.toString(),n.toString()}
    null!==findGetParameter("btag")&&setCookie("pm_btag",findGetParameter("btag"),3);null!==findGetParameter("qtag")&&setCookie("qtag",findGetParameter("qtag"),3);null!==findGetParameter("siteid")&&setCookie("pm_siteid",findGetParameter("siteid"),365);links = document.getElementsByTagName("a");
    Array.prototype.forEach.call(links, function (c) {var a = c.href, b = "", e = window.location.hostname.split(".").filter(function (a, b) {return 0 !== b}).join(".");-1 !== a.indexOf("#") && (b = a.slice(a.indexOf("#"), a.length), a = a.slice(0, a.indexOf("#")));-1 !== a.indexOf(e) && (null !== findGetParameter("btag") && (a = insertParam("btag", findGetParameter("btag"), a)), null !== findGetParameter("qtag") && (a = insertParam("qtag", findGetParameter("qtag"), a)), null !== findGetParameter("siteid") && (a = insertParam("siteid", findGetParameter("siteid"), a)), null !== findGetParameter("utm") && (a = insertParam("utm", findGetParameter("utm"), a)), null !== findGetParameter("utm_source") && (a = insertParam("utm_source", findGetParameter("utm_source"), a)), null !== findGetParameter("utm_medium") && (a = insertParam("utm_medium", findGetParameter("utm_medium"), a)), null !== findGetParameter("utm_campaign") && (a = insertParam("utm_campaign", findGetParameter("utm_campaign"), a)), null !== findGetParameter("utm_content") && (a = insertParam("utm_content", findGetParameter("utm_content"), a)), 0 < b.length && (a += b), c.dataset.toggle || (c.href = a))});
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2178833,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');


if(1==1){
    // openModal2.onclick = function () {
    //     exampleModal2.classList.add('toast_show');
    //     body.classList.add('body__stop');
    // };
    // closeModa2.onclick = function () {
    //     exampleModal2.classList.remove('toast_show');
    //     body.classList.remove('body__stop');
    //     body_scroll_lock();
    // };

    // openModal3.onclick = function () {
    //     exampleModal3.classList.add('toast_show');
    //     body.classList.add('body__stop');
    // };
    // closeModa3.onclick = function () {
    //     exampleModal3.classList.remove('toast_show');
    //     body.classList.remove('body__stop');
    // };
    // openModal4.onclick = function () {
    //     exampleModal4.classList.add('toast_show');
    //     body.classList.add('body__stop');
    // };
    // closeModa4.onclick = function () {
    //     exampleModal4.classList.remove('toast_show');
    //     body.classList.remove('body__stop');
    // };
    // closeModa41.onclick = function () {
    //     exampleModal4.classList.remove('toast_show');
    //     body.classList.remove('body__stop');
    // };
    // checkPolicy2.onclick = function () {
    //     exampleModal2.classList.add('toast_show');
    //     body.classList.add('body__stop');
    // };
    // checkPolicy.onclick = function () {
    //     exampleModal2.classList.add('toast_show');
    //     body.classList.add('body__stop');
    // };


}

$('#checkPolicy, #openModal2').on('click', function(e){
    e.preventDefault();
    $('#exampleModal1').addClass('toast_show');
    body_scroll_lock();
});

$('#checkPolicy2').on('click', function(e){
    e.preventDefault();
    $('#exampleModal2').addClass('toast_show');
    body_scroll_lock();
});

$('.toast__close').on('click', function(e){
    e.preventDefault();
    $(this).closest('.toast_show').removeClass('toast_show');
    body_scroll_unlock()
});

function body_scroll_lock(){
   // console.log('body_scroll_lock');
    $('body').css('overflow', 'hidden');
    $('body').on('touchmove', function(e){
        e.preventDefault();
    });
}

function body_scroll_unlock(){
 //   console.log('body_scroll_unlock');
    $('body').css('overflow', 'auto');
    $('body').off('touchmove');
}

$('.popup_content .close_btn, .close_popup_button').on('click', function(){
    $(this).closest('.popup_wrap').fadeOut();
});

$('.first_screen__form').on('submit', function(e){
    e.preventDefault();
    $('.card_popup').fadeIn();
});

$('.show_text_popup, .show_text_popup_open').on('click', function(e){
    e.preventDefault();
    $('.popup_policy').fadeIn();
});


$('.term_open').on('click',function(e){
    e.preventDefault();
    $('.term_popup').fadeIn();
})

$('.per_sum').on('click', function(e){
    e.preventDefault();
    console.log('sdsasad');
 //   $('.card_popup').show();
    
})

