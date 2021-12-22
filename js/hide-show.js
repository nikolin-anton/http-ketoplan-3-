"use strict";

$(document).ready(function () {
  var hash,
      flagCensor = false;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');

    if (hash[0] == 'ver') {
      flagCensor = true;
    }
  }

  if (flagCensor) {
    $('.version1').hide();
    $('.censor').show();
  }

  function create() {
    $('#normalweight').hide();
    $('#underweight').hide();
    $('#overweight').hide();
    var gender = $("input[name=gender]").val();
    var measurements_type = $("input[name=measurements_type]").val();
    var age = $("input[name=metric-age]").val();
    var height = $("input[name=metric-height-cm]").val();
    var weight = $("input[name=metric-weight-kg]").val();
    var tar_weight = $("input[name=metric-target-weight-kg]").val();
    var physical_activity = $("input[name=physical_activity]").val();
    var calc = Math.ceil(weight / (height / 100 * (height / 100)) * 100) / 100;

    if (calc < 16) {
      $('#underweight').show();
    } else if (calc > 18.5 && calc <= 24.99) {
      $('#normalweight').show();
    } else if (calc >= 25) {
      $('#overweight').show();
    } //Калории


    var call_from = '';
    var call_to = '';
    var call_arrow = '';
    var bmr = '';
    var amr = '';

    if (gender == 'male') {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }

    if (physical_activity == 1) {
      amr = 1.2;
    } else if (physical_activity == 2) {
      amr = 1.375;
    } else if (physical_activity == 3) {
      amr = 1.55;
    } else if (physical_activity == 4) {
      amr = 1.725;
    } else if (physical_activity == 5) {
      amr = 1.9;
    }

    call_from = Math.round(bmr * amr - bmr * amr * 0.2);
    call_to = call_from + 100;
    $(".calories").text(call_from + '-' + call_to); //Достижимый вес

    var good_weight = '';
    var label = " кг";

    if (weight > tar_weight) {
      var maxdown = '';

      if (weight >= 100) {
        maxdown = 8;
      } else if (weight >= 70) {
        maxdown = 6;
      } else {
        maxdown = 5;
      }

      if (weight - tar_weight < maxdown) {
        good_weight = tar_weight;
      } else {
        good_weight = weight - maxdown;
      }
    } else {
      var maxup = weight + weight / 100 * 7;

      if (tar_weight >= maxup) {
        good_weight = maxup;
      } else {
        good_weight = tar_weight;
      }
    }

    $(".tar_weight").text(Math.round(good_weight) + label); //
    //   url:"views/quiz/personal_summary.php", //the page containing php script
    //   type: "post", //request type,
    //   dataType: "json",
    //   data: {gender: gender, measurements_type: measurements_type,physical_activity:physical_activity,age: age,weight: weight,tar_weight: tar_weight,height: height,height_ft:height_ft,height_inch: height_inch },
    //   success:function(result){
    //     $(".calories").text(result['calorie']);
    //     $(".protein").text(result['protein']);
    //     $(".carbs").text(result['carbs']);
    //     $(".fats").text(result['fat']);
    //     $(".water_amount").text(result['water_amount']);
    //     $(".bmi").text(result['bmi']);
    //     $(".bmi_result").text(result['bmi_result']);
    //     $(".tar_weight").text(result['tar_weight']);
    //     $("#activity_level").text(result['physical_activity']);
    //     if(result['bmi'] >= 18.5 && result['bmi'] <= 24.99){
    //       $('#normalweight').show();
    //     }
    //     else if(result['bmi']>= 25 ){
    //       $('#overweight').show();
    //     }
    //     else if(result['bmi'] < 18.5){
    //       $('#underweight').show();
    //     }
    //
    //     console.log(result);
    //   }
    // });
  }

  $('.main-cta').on('click', function () {
    $('.quiz').show();
    $('#main').show();
    $('.first-screen').hide();
  });
  var keto_meal_plan_form_request;
  var keto_meal_plan_awebar_request;

  var keto_check_required_number_pass_allowed = function keto_check_required_number_pass_allowed(element, required_number) {
    var total_checked_elements = 0;
    var pass_allowed = false;
    $(element).each(function () {
      if (this.checked) {
        total_checked_elements++;
      }
    });

    if (total_checked_elements >= required_number) {
      pass_allowed = true;
    }

    return pass_allowed;
  };

  var keto_check_required_checkbox_value_matched = function keto_check_required_checkbox_value_matched(element, required_values, count_required_value) {
    var required_values_pass_allowed = false;
    var total_matched_count = 0;
    $(element).each(function () {
      var checkbox_value = $(this).val();
      var total_matched_count = 0;
      var current_scope = this;
      required_values.forEach(function (value) {
        if (value === checkbox_value && current_scope.checked) {
          total_matched_count++;
        }

        if (total_matched_count == count_required_value) {
          required_values_pass_allowed = true;
          return false;
        }
      });

      if (required_values_pass_allowed === true) {
        return false;
      }
    });
    return required_values_pass_allowed;
  };

  var keto_check_required_values_pass_allowed = function keto_check_required_values_pass_allowed(element, required_values) {
    var count_required_value = required_values[0];
    var index = 0;
    var required_values_pass_allowed = false;
    required_values.splice(index, 1);
    required_values_pass_allowed = keto_check_required_checkbox_value_matched(element, required_values, count_required_value);
    return required_values_pass_allowed;
  };

  var keto_check_checkbox_selected = function keto_check_checkbox_selected(element) {
    var required_number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var required_values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var pass_allowed = false;
    pass_allowed = keto_check_required_number_pass_allowed(element, required_number);

    if (required_values.length > 0 && pass_allowed === true) {
      pass_allowed = keto_check_required_values_pass_allowed(element, required_values);
    }

    return pass_allowed;
  };

  var keto_meal_imperial_measurements = function keto_meal_imperial_measurements() {
    var imperial_weight_lb = $('#weight-2').val();
    var imperial_target_weight_lb = $('#target-weight-2').val();
    var data = keto_meal_get_valid_weight_value(imperial_weight_lb, imperial_target_weight_lb);
    imperial_weight_lb = data.weight_value;
    imperial_target_weight_lb = data.target_weight_value;
    imperial_weight_difference = data.weight_value_difference; // if (imperial_weight_difference > 44 || (imperial_weight_lb === 0 || imperial_target_weight_lb === 0)) {

    if (imperial_weight_lb === 0 || imperial_target_weight_lb === 0) {
      if ($("#imperial-error-message").is(":hidden")) {
        $("#imperial-error-message").show();
      }

      if ($("#imperial-required-error-message").is(":visible")) {
        $('#imperial-required-error-message').hide();
      }
    } else {
      $("#question-1").show();
      $("#measurements_1").hide();
      $("#measurements_2").hide();
    }
  };

  var keto_meal_metric_measurements = function keto_meal_metric_measurements() {
    var metric_weight_lb = $('#weight-kg').val();
    var metric_target_weight_lb = $('#target-weight-kg').val();
    var data = keto_meal_get_valid_weight_value(metric_weight_lb, metric_target_weight_lb);
    var emailVal = $('input[name="metric-target-email"]').val().toLowerCase();
    $('input[name="order[email]"]').val(emailVal);
    metric_weight_lb = data.weight_value;
    metric_target_weight_lb = data.target_weight_value; // let metric_weight_difference = data.weight_value_difference;
    // if (metric_weight_difference > 20 || (metric_weight_lb === 0 || metric_target_weight_lb === 0)) {

    if (metric_weight_lb === 0 || metric_target_weight_lb === 0) {
      if ($("#metric-required-error-message").is(":visible")) {
        $('#metric-required-error-message').hide();
      }

      if ($("#metric-error-message").is(":hidden")) {
        $("#metric-error-message").show();
      }
    } else {
      $("#question-1").show();
      $("#measurements_1").hide();
      $("#measurements_2").hide();
    }
  };

  var keto_meal_get_valid_weight_value = function keto_meal_get_valid_weight_value(weight_value, target_weight_value) {
    if (typeof weight_value === 'undefined' || weight_value === null || weight_value === '') {
      weight_value = 0;
    }

    if (typeof target_weight_value === 'undefined' || target_weight_value === null || target_weight_value === '') {
      target_weight_value = 0;
    }

    weight_value = parseFloat(weight_value);
    target_weight_value = parseFloat(target_weight_value);
    var weight_value_difference = weight_value - target_weight_value;
    var data = {
      weight_value: weight_value,
      target_weight_value: target_weight_value,
      weight_value_difference: weight_value_difference
    };
    return data;
  }; // var keto_meal_imperial_check_fields_required = function() {
  //   var pass_allowed = true;
  //
  //   var imperial_age = $("input[name='imperial-age']").val();
  //   var imperial_height_ft = $("input[name='imperial-height-ft']").val();
  //   var imperial_height_inch = $("input[name='imperial-height-inch']").val();
  //   var imperial_weight = $("input[name='imperial-weight']").val();
  //   var imperial_target_weight = $("input[name='imperial-target-weight']").val();
  //
  //   if (typeof imperial_age === "undefined" || imperial_age === null || imperial_age === '')
  //     return false;
  //
  //   if (typeof imperial_height_ft === "undefined" || imperial_height_ft === null || imperial_height_ft === '')
  //     return false;
  //
  //   if (typeof imperial_height_inch === "undefined" || imperial_height_inch === null || imperial_height_inch === '')
  //     return false;
  //
  //   if (typeof imperial_weight === "undefined" || imperial_weight === null || imperial_weight === '')
  //     return false;
  //
  //   if (typeof imperial_target_weight === "undefined" && imperial_target_weight === null || imperial_target_weight === '')
  //     return false;
  //
  //   return pass_allowed;
  // }


  var keto_meal_imperial_check_fields_required = function keto_meal_imperial_check_fields_required() {
    var pass_allowed = true;
    var imperial_age = $("input[name='imperial-age']").val();
    var imperial_height_ft = $("input[name='imperial-height-ft']").val();
    var imperial_height_inch = $("input[name='imperial-height-inch']").val();
    var imperial_weight = $("input[name='imperial-weight']").val();
    var imperial_target_weight = $("input[name='imperial-target-weight']").val();
    if (typeof imperial_age === "undefined" || imperial_age === null || imperial_age === '') return "Все поля обязательны для заполнения";
    if (typeof imperial_height_ft === "undefined" || imperial_height_ft === null || imperial_height_ft === '') return "Все поля обязательны для заполнения";
    if (typeof imperial_height_inch === "undefined" || imperial_height_inch === null || imperial_height_inch === '') return "Все поля обязательны для заполнения";
    if (typeof imperial_weight === "undefined" || imperial_weight === null || imperial_weight === '') return "Все поля обязательны для заполнения";
    if (typeof imperial_target_weight === "undefined" && imperial_target_weight === null || imperial_target_weight === '') return "Все поля обязательны для заполнения";
    imperial_age = parseFloat(imperial_age);
    imperial_height_ft = parseFloat(imperial_height_ft);
    imperial_height_inch = parseFloat(imperial_height_inch);
    imperial_weight = parseFloat(imperial_weight);
    imperial_target_weight = parseFloat(imperial_target_weight);

    if (isNaN(imperial_age)) {
      return "Age must be Numbric value";
    }

    if (imperial_age < 18 || imperial_age > 80) {
      return "Age must be between 18 and 80";
    }

    if (imperial_weight <= 0 || imperial_target_weight <= 0) {
      return "Please enter valid value";
    } // if(imperial_weight < 120){
    //   return "Weight value must be at least 120 lbs";
    // }


    var weight_difference = imperial_weight - imperial_target_weight;

    if (weight_difference < 0) {
      return "Target weight must not be greater than weight";
    } // if(weight_difference > 44){
    //   return "Weight difference should not be greater than 44 lbs";
    // }


    return pass_allowed;
  }; // var keto_meal_metric_check_fields_required = function() {
  //   var pass_allowed = true;
  //
  //   var metric_age = $("input[name='metric-age']").val();
  //   var metric_height_cm = $("input[name='metric-height-cm']").val();
  //   var metric_weight_kg = $("input[name='metric-weight-kg']").val();
  //   var metric_target_weight_kg = $("input[name='metric-target-weight-kg']").val();
  //
  //   if (typeof metric_age === "undefined" || metric_age === null || metric_age === '')
  //     return false;
  //
  //   if (typeof metric_height_cm === "undefined" || metric_height_cm === null || metric_height_cm === '')
  //     return false;
  //
  //   if (typeof metric_weight_kg === "undefined" || metric_weight_kg === null || metric_weight_kg === '')
  //     return false;
  //
  //   if (typeof metric_target_weight_kg === "undefined" || metric_target_weight_kg === null || metric_target_weight_kg === '')
  //     return false;
  //
  //   return pass_allowed;
  // }


  var keto_meal_metric_check_fields_required = function keto_meal_metric_check_fields_required() {
    var pass_allowed = true;
    var metric_age = $("input[name='metric-age']").val();
    var metric_height_cm = $("input[name='metric-height-cm']").val();
    var metric_weight_kg = $("input[name='metric-weight-kg']").val();
    var metric_target_weight_kg = $("input[name='metric-target-weight-kg']").val();
    var metric_target_mail = $("input[name='metric-target-email']").val();
    var emailValidate = /^([A-z0-9_-]+\.)*[A-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    if (typeof metric_age === "undefined" || metric_age === null || metric_age === '') return "Все поля обязательны для заполнения";
    if (typeof metric_height_cm === "undefined" || metric_height_cm === null || metric_height_cm === '') return "Все поля обязательны для заполнения";
    if (typeof metric_weight_kg === "undefined" || metric_weight_kg === null || metric_weight_kg === '') return "Все поля обязательны для заполнения";
    if (typeof metric_target_weight_kg === "undefined" || metric_target_weight_kg === null || metric_target_weight_kg === '') return "Все поля обязательны для заполнения";
    if (typeof metric_target_mail === "undefined" || metric_target_mail === null || metric_target_mail === '') return "Все поля обязательны для заполнения";
    metric_age = parseFloat(metric_age);
    metric_height_cm = parseFloat(metric_height_cm);
    metric_weight_kg = parseFloat(metric_weight_kg);
    metric_target_weight_kg = parseFloat(metric_target_weight_kg);
    var weight_difference = metric_weight_kg - metric_target_weight_kg;

    if (isNaN(metric_age)) {
      return "Возраст должен быть числом";
    }

    if (metric_age < 18 || metric_age > 80) {
      return "Возраст должен быть от 18 до 80 лет";
    }

    if (weight_difference < 0) {
      return "Желаемый вес не должен быть больше текущего веса";
    }

    if (!emailValidate.test(metric_target_mail)) {
      return "Укажите корректный email";
    } // if(weight_difference > 20){
    //   return "Weight difference should not be greater than 20 kg";
    // }


    return pass_allowed;
  };

  var create_awebar_form = function create_awebar_form(ajax_site_url, fullname, email, uid, affid, source, vtid) {
    if (keto_meal_plan_awebar_request) {
      keto_meal_plan_awebar_request.abort();
    }

    var data = {
      action: 'create_awebar_form',
      fullname: fullname,
      email: email,
      uid: uid,
      affid: affid,
      source: source,
      vtid: vtid
    };
    keto_meal_plan_awebar_request = $.ajax({
      // url: "./",
      url: ajax_site_url,
      type: "post",
      data: data
    });
    keto_meal_plan_awebar_request.done(function (response, textStatus, jqXHR) {
      $('#yummly-awebar-form-container').append(response);
      $("#frm_ketomeal").submit();
    });
    keto_meal_plan_awebar_request.fail(function (jqXHR, textStatus, errorThrown) {
      console.error("The following error occurred: " + textStatus, errorThrown);
    });
    keto_meal_plan_awebar_request.always(function () {});
  };

  $(".next-btn-meat").click(function (e) {
    var gender_text = $(this).data('value');
    $('.keto-quiz-gender').val(gender_text);
    $("#meat").show();
    $("#main").hide();
  });
  $(".next-btn-veggies").click(function () {
    $("#veggies").show();
    $("#meat").hide();
  });
  $(".next-btn-products").click(function () {
    var current_elements = '.keto-veggies-checkbox';
    var pass_allowed = keto_check_checkbox_selected(current_elements, 3);

    if (pass_allowed) {
      if ($("#veggies-error-message").is(":visible")) {
        $("#veggies-error-message").hide();
      }

      $("#products").show();
      $("#veggies").hide();
    } else {
      if ($("#veggies-error-message").is(":hidden")) {
        $("#veggies-error-message").show();
      }
    }
  });
  $(".next-btn-measurements1").click(function () {
    var current_elements = '.keto-products-checkbox';
    var pass_allowed = keto_check_checkbox_selected(current_elements, 2);

    if (pass_allowed) {
      if ($("#products-error-message").is(":visible")) {
        $("#products-error-message").hide();
      }

      $("#measurements_2").show();
      $("#products").hide();
    } else {
      if ($("#products-error-message").is(":hidden")) {
        $("#products-error-message").show();
      }
    }
  });
  $(".next-btn-question1").click(function () {
    if ($("#measurements_2").is(":visible")) {
      var pass_allowed = keto_meal_metric_check_fields_required();
      var emailVal = $("input[name='metric-target-email']").val();
      var dataMail = document.getElementById('dataMail');
      dataMail.dataset.mail = emailVal;

      if (pass_allowed === true) {
        keto_meal_metric_measurements();
        $("#measurements_1").remove();
        $("#keto-meal-measurements-type").val('metric');
      } else {
        // if ($("#metric-required-error-message").is(":hidden")) {
        //   $('#metric-required-error-message').show();
        // }
        if ($("#metric-error-message").is(":hidden")) {
          $("#metric-error-message").show();
        }

        $("#metric-error-message p").text(pass_allowed);
      }
    }
  });
  $(".q1-btn").click(function (e) {
    var physical_activity_text = $(e.target).data('value');
    $('.keto-quiz-physical-activity').val(physical_activity_text);
    $("#question-2").show();
    $("#question-1").hide();
  });
  $(".q2-btn").click(function (e) {
    var true_for_you_text = $(e.target).text();
    $('.keto-quiz-true-for-you').val(true_for_you_text);
    $("#personal_summary").show();
    $("#personal_note").show();
    $("body").removeClass("body");
    $("body").addClass("body-personal-summary");
    $("#question-2").hide(); //$(".section_headline").hide();headline-v2 v3

    $(".section_headline").addClass("headline-v2");
    $(".section_headline").addClass("v3");
    create();
  });
  // $(".per_sum").click(function (e) {
  //   var dataMail = document.getElementById('dataMail').dataset.mail;
  //   document.location.href = "pay?email=".concat(dataMail); // var true_for_you_text = $(e.target).text();
  //   // $('.keto-quiz-true-for-you').val(true_for_you_text);
  //   // $("#final").show();
  //   //  $("#personal_note").hide();
  //   //  $("body").addClass("body");
  //   //  $("body").removeClass("body-personal-summary");
  //   // $("#personal_summary").hide();
  //   // $(".section_headline").show();
  //   //  $(".section_headline").removeClass("headline-v2");
  //   //   $(".section_headline").removeClass("v3");
  // });
  $(".next-btn-final").click(function () {
    $("#final").show();
    $("#measurements_1").hide();
  });
  $(".next-btn-final").click(function () {
    $("#final").show();
    $("#measurements_2").hide();
  });
  var aff_id = $("#affid").val();
  var source = $("#source").val();
  var vtid = $("#vtid").val();
  $("#keto-meal-plan-form").submit(function (e) {
    e.preventDefault();

    if (keto_meal_plan_form_request) {
      keto_meal_plan_form_request.abort();
    }

    var form = $(this);
    var inputs = form.find("input, checkbox, button, textarea");
    var serialized_data = form.serialize(); // sessionStorage.setItem("keto_saved_form_information", serialized_data);

    inputs.prop("disabled", true);
    var site_url = form.data('site-url');
    var ajax_site_url = site_url + '/index.php';
    sessionStorage.setItem("keto_saved_form_url", ajax_site_url); // window.location.replace(site_url + '/?page=quiz&action=prepare-salespage');

    keto_meal_plan_form_request = $.ajax({
      url: ajax_site_url,
      type: "post",
      data: serialized_data
    });
    keto_meal_plan_form_request.done(function (response, textStatus, jqXHR) {
      //return false;
      response = JSON.parse(response);

      if (response.response == 'success') {
        sessionStorage.setItem("keto_saved_salespage_url", response.redirect_url + '&from=quiz&affid=' + aff_id + '&source=' + source + '&vtid=' + vtid);
        sessionStorage.setItem("keto_user_unique_id", response.uid);

        if (response.pdf == 'error') {
          sessionStorage.setItem("keto_user_pdf", response.pdf);
        }

        create_awebar_form(ajax_site_url, response.fullname, response.email, response.uid, aff_id, source, vtid); // window.location.href = site_url + '?page=quiz&action=prepare-salespage';
      }

      if (response.response == 'error') {
        if (typeof response.message !== "undefined" && response.message !== '') {//form error msg
          //$("#form-error-message").show();
        }
      }
    });
    keto_meal_plan_form_request.fail(function (jqXHR, textStatus, errorThrown) {
      console.error("The following error occurred: " + textStatus, errorThrown);
    });
  });
}); // Checkbox jquery meat

$('.chicken').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false); //$("#chicken").attr('src', "images/check-icon.jpg");

    $("#chicken").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true); //$("#chicken").attr('src', "images/uncheck-icon.jpg");

    $("#chicken").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.pork').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false); //$("#pork").attr('src', "images/check-icon.jpg");

    $("#pork").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true); //$("#pork").attr('src', "images/uncheck-icon.jpg");

    $("#pork").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.beef').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false); // $("#beef").attr('src', "images/check-icon.jpg");

    $("#beef").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true); // $("#beef").attr('src', "images/uncheck-icon.jpg");

    $("#beef").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.fish').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#fish").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#fish").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.seafood').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#seafood").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#seafood").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
}); //add new shrimp

$('.shirmp').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#shirmp").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#shirmp").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
}); //add new shrimp

$('.bacon').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#bacon").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#bacon").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
}); // Checkbox jquery veggies

$('.broccoli').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#broccoli").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#broccoli").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.mushrooms').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#mushrooms").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#mushrooms").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.zucchini').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#zucchini").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#zucchini").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.cauliflower').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#cauliflower").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#cauliflower").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.asparagus').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#asparagus").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#asparagus").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.avocado').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#avocado").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#avocado").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
}); // Checkbox jquery products

$('.eggs').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#eggs").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#eggs").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.nuts').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#nuts").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#nuts").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.seeds').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#seeds").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#seeds").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.cheese').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#cheese").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#cheese").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.cottage-cheese').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#cottage-cheese").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#cottage-cheese").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.butter').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#butter").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#butter").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});
$('.coconut').click(function () {
  var clicks = $(this).data('clicks');

  if (clicks) {
    $(this).find("input[type='checkbox']").attr("checked", false);
    $("#coconut").addClass("unchecked");
  } else {
    $(this).find("input[type='checkbox']").attr("checked", true);
    $("#coconut").removeClass("unchecked");
  }

  $(this).data("clicks", !clicks);
});