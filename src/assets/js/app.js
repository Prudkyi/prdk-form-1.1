import * as prdkFunctions from "./modules/functions.js";
import * as list from "./option.js";

prdkFunctions.isWebP();


///////////// VAR

const offFocusInput = '#00c2f0', // text color when focus is lost - OK * цвет текста при потери фокуса - Ок
      errorTextColor = '#cb1626'; // field error color - text * цвет ошибки поля - текст


///////////

function Validate() {

    let check = true;

    const name = $('#name'),
        phone = $('#phone'),
        email = $('#email'),
        filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (name.val().length < 2 || name.val() == "שם") {
        //   alert("אנא מלא את שדה השם");
        name.focus();
        name.next().css('color', errorTextColor);
        document.send.name.nextSibling.color = '#000000';
        check = false;
    }


    if (phone == null || phone.val().length < 9 || phone.val().length > 11 || phone.val().charAt(0) != 0) {
        //    alert("אנא הזן מספר טלפון");
        phone.next().css('color', errorTextColor);
        if (check) phone.focus();
        check = false;
    }


    if (!filter.test(email.val())) {
        //    alert('אנא הכנס אי מייל תקין');
        email.next().css('color', errorTextColor);
        if (check) email.focus();
        check = false;
    }

    $('.form-select__text').each(function(i){
        if ($(this).text() === '') {
            $(this).next().css('color', errorTextColor);
            check = false;
        }
    });


    return check;
}

$('.animat input').focusout(function (){
    console.log($(this).val())
    if ($(this).val() !== '') {
        $(this).next().css('color', offFocusInput);
    }

})

$('#send').on('click', function (e) {
    e.preventDefault();
    let resForm = Validate();
    if (resForm) $('#mainForm').submit();
});

// set main bg


//// Select 1

let selectForm = false;
$('#select1 .form-select__input').on('click', function () {



    if (!selectForm) {
        $('#select1 .form-select__arrow').css('transform', 'rotate(0deg)');
        $('#select1 ul').slideDown(400);
        selectForm = true;

        $('#select1 .form-select__arrow').css({
            transform: 'rotate(90deg)'
        });



    } else {

        $('#select1 .form-select__arrow').css({
            transform: 'rotate(0deg)'
        });


        $('#select1 ul').slideUp(400);
        selectForm = false;
    }

})

$('#select1__list').on('click', 'li', function () {

    const ulClass = $(this).parent().attr('class');
    $('#' + ulClass).css('color', offFocusInput)

    $('#select1 ul').slideUp(400);
    selectForm = false;
    let html = list.getOptions(1, $(this).attr('data-list'));

    document.getElementById('ul_list_2').innerHTML = html;

    $('#select1 .form-select__text').text($(this).text());

    $('#select1 .form-select__arrow').css({
        transform: 'rotate(0deg)'
    });

    $('#exfield1').val($(this).text());

    $('#select2').css('display', 'block');


})

//// Select 2

let selectForm2 = false;
$('#select2 .form-select__input').on('click', function () {

    if (!selectForm2) {
        $('#select2 .form-select__arrow').css('transform', 'rotate(0deg)');
        $('#select2 ul').slideDown(400);
        selectForm2 = true;

        $('#select2 .form-select__arrow').css({
            transform: 'rotate(90deg)'
        });

    } else {

        $('#select2 .form-select__arrow').css({
            transform: 'rotate(0deg)'
        });

        $('#select2 ul').slideUp(400);
        selectForm2 = false;
    }

})

$('#ul_list_2').on('click', 'li', function () {

    const ulClass = $(this).parent().attr('class');
    $('#' + ulClass).css('color', offFocusInput)

    $('#select2 ul').slideUp(400);
    selectForm2 = false;

    let html = list.getOptions(2, $(this).attr('data-list'));

    console.log($(this).attr('data-list'))

    document.getElementById('ul_list_3').innerHTML = html;

    $('#select2 .form-select__text').text($(this).text());

    $('#select2 .form-select__arrow').css({
        transform: 'rotate(0deg)'
    });

    $('#exfield2').val($(this).text());

    $('#select3').css('display', 'block');


})

//// Select 3

let selectForm3 = false;
$('#select3 .form-select__input').on('click', function () {

    if (!selectForm3) {
        $('#select3 .form-select__arrow').css('transform', 'rotate(0deg)');
        $('#select3 ul').slideDown(400);
        selectForm3 = true;

        $('#select3 .form-select__arrow').css({
            transform: 'rotate(90deg)'
        });

    } else {

        $('#select3 .form-select__arrow').css({
            transform: 'rotate(0deg)'
        });

        $('#select3 ul').slideUp(400);
        selectForm3 = false;
    }

})

$('#select3__list').on('click', 'li', function () {

    const ulClass = $(this).parent().attr('class');
    $('#' + ulClass).css('color', offFocusInput)

    $('#select3 ul').slideUp(400);
    selectForm3 = false;

    if ($(this).attr('class') === 'empty-1') {
        $('#select3 .form-select__text').text('');
    } else {
        $('#select3 .form-select__text').text($(this).text());
    }

    $('#select3 .form-select__arrow').css({
        transform: 'rotate(0deg)'
    });

    $('#exfield3').val($(this).text());


})

///

let checkboxState = true;

function setCheckbox(state) {
    console.log(state)
    if (state) {
        state = false;
        $('#checkbox').val('not-checked');
    } else {
        state = true;
        $('#checkbox').val('checked');
    }

    checkboxState = state;
}

let countSetCheck = 1;
$('.checkbox').on('click', function () {
    if (countSetCheck % 2 === 0) {
        setCheckbox(checkboxState);
    }
    countSetCheck++;
});