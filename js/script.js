
$('#name').focus(); //Makes the first text field in focus on page load. 
$('#other-title').hide(); // Hides the job role box until it gets clicked

/***************************Shows and Hides the Job Title box***************************/
$('#title').change(function (){
    if ($('#title').val() == 'other') {
        $('#other-title').show();
    }   else {
        $('#other-title').hide();
    }
});

/***************************Tshirt color option filter***************************/
$('#color').val('');
$('#colors-js-puns').hide();
$('#design').change(function (){
    if ($('#design').val() == 'js puns') {
        $('#colors-js-puns').show();
        $('#color option[value="tomato"]').hide();
        $('#color option[value="steelblue"]').hide();
        $('#color option[value="dimgrey"]').hide();
        $('#color option[value="cornflowerblue"]').show();
        $('#color option[value="darkslategrey"]').show();
        $('#color option[value="gold"]').show();
       
    }   else if ($('#design').val() == 'heart js') {
             $('#colors-js-puns').show();
            $('#color option[value="cornflowerblue"]').hide();
            $('#color option[value="darkslategrey"]').hide();
            $('#color option[value="gold"]').hide();
            $('#color option[value="tomato"]').show();
            $('#color option[value="steelblue"]').show();
            $('#color option[value="dimgrey"]').show();
    
       }  else if ($('#design').val() != 'heart js' && $('#design').val() != 'js puns'){
               $('#colors-js-puns').hide();
    }
});

/***************************Activity Cost Section***************************/
let costSentence = "Your total is: $" ;
let sentenceAppend =$('.activities').append(costSentence);
let amountOwed = $('<p id="total" style = "display: inline-block;"></p>');
let owedAppend = $('.activities').append(amountOwed);

//Gives each activity a price value and time slot
$('label input').addClass('workshops'); 
$('.workshops').eq(0).val(200);
$('.workshops').eq(1).val(100).addClass('slot1');
$('.workshops').eq(2).val(100).addClass('slot2');
$('.workshops').eq(3).val(100).addClass('slot1');
$('.workshops').eq(4).val(100).addClass('slot2');
$('.workshops').eq(5).val(100).addClass('slot3');
$('.workshops').eq(6).val(100).addClass('slot4');

//Function to add or subtracts the total cost depending on what is selected
    function updateSum() {
      var total = 0;
      $('.workshops:checked').each(function(i, n) { total += parseInt($(n).val());})
      $('#total').text(total);
    }
    $('input.workshops').change(updateSum);
    updateSum();

/***************************Handling Conflicting Activities***************************/
//Time Slot #1 - JS Frameworks
$('.workshops').change(function() {
  if ($("input.slot1[type=checkbox]").eq(0).is(':checked')) {
      $(".slot1").eq(1).attr("disabled", true);
     $(".slot1").eq(1).parent().addClass('disable');
  } else {
 $(".slot1").eq(1).attr("disabled", false);
$(".slot1").eq(1).parent().removeClass('disable');
  }
});

//Time Slot #1 - Express Workshop
$('.workshops').change(function() {
  if ($("input.slot1[type=checkbox]").eq(1).is(':checked')) {
      $(".slot1").eq(0).attr("disabled", true);
     $(".slot1").eq(0).parent().addClass('disable');
  } else {
 $(".slot1").eq(0).attr("disabled", false);
$(".slot1").eq(0).parent().removeClass('disable');
  }
});

//Time Slot #2 - JS Libraries
$('.workshops').change(function() {
  if ($("input.slot2[type=checkbox]").eq(0).is(':checked')) {
      $(".slot2").eq(1).attr("disabled", true);
     $(".slot2").eq(1).parent().addClass('disable');
  } else {
 $(".slot2").eq(1).attr("disabled", false);
$(".slot2").eq(1).parent().removeClass('disable');
  }
});

//Time Slot #2 - Node Workshop
$('.workshops').change(function() {
  if ($("input.slot2[type=checkbox]").eq(1).is(':checked')) {
      $(".slot2").eq(0).attr("disabled", true);
     $(".slot2").eq(0).parent().addClass('disable');
  } else {
 $(".slot2").eq(0).attr("disabled", false);
$(".slot2").eq(0).parent().removeClass('disable');
  }
});

//Form submit is prevented if no activities are selected
function CheckActivities(){
let amount = $('input[type="checkbox"]:checked').length;
if (amount < 1 ) {
 $('.activities').after('<p class = "cc-num-error" style="background-color:red;color:black;">Please select at least one activity.</p>');  
   return false;
}  
}

/***************************Handling Conflicting Activities***************************/
//Add class to other two payment divs for easy access. 
var payPal = $('div.credit-card').next();
payPal.addClass('PayPal');
var bitCoin = $('div.PayPal').next();
bitCoin.addClass('Bitcoin');

// Paypal and bitcoin details hidden on load
$('.PayPal').hide();
$('.Bitcoin').hide();
$('#payment').val('credit card');

// Makes the 'select method' option non clickable. 
$('#payment option[value="select_method"]').attr('disabled', true);

//Hides and shows payment details depending on selection.
$('#payment').change(function (){
    if ($('#payment').val() == 'paypal') { //If 'paypal' option is chosen, bitcoin and cc details removed.
            $('.credit-card').hide();
            $('.Bitcoin').hide();
            $('.PayPal').show();
      
    } else if ($('#payment').val() == 'bitcoin') { // If 'bitcoin' is chosen, cc and paypal details removed.
            $('.credit-card').hide();
            $('.PayPal').hide();
            $('.Bitcoin').show(); 
    }  else $('.credit-card').show() ;                
        
});
/***************************Field Validation***************************/
//Removes exisitng CSS on the fields for each submit
function removeCSS () {
    $('.name-error').remove();
    $('.mail-error').remove();
    $('#name').css('border', ''); 
    $('#mail').css('border', '');
    $('.cc-num-error').remove();
    $('.cc-zip-error').remove();
    $('.cc-cvv-error').remove();
    $('#cc-num').css('border', '');
    $('#zip').css('border', '');
    $('#cvv').css('border', '');

}
// Removes credit card specific styling if bitcoin or paypal options are selected 
$('#payment').change(function (){
if (($('#payment').val() == 'bitcoin') || ($('#payment').val() == 'paypal')){
    $('.cc-num-error').remove();
    $('.cc-zip-error').remove();
    $('.cc-cvv-error').remove();
    $('#cc-num').css('border', '');
    $('#zip').css('border', '');
    $('#cvv').css('border', '');
}
});

  //Validates if user has entered in a name
  function validateName() {
  let x = $('#name').val();
     if (x.length < 1) {
  $('#name').css('border', 'solid 2px red');
  $('#name').after('<p class = "name-error" style="background-color:red;color:black;">Please enter your name.</p>');
           return false;
        }
  }
  
  //Validates (real time) if the user has entered in an email address
function validateEmail() {
$('#mail').css('border', '');
$('.mail-error').remove(); 
  let mail = $('#mail').val(); 
  let regex = RegExp(/^[^@]+@[^@.]+\.[a-z]+$/i);
  let result = regex.test(mail);
   if (result == false) {
        $('#mail').after('<p class = "mail-error" style="background-color:red;color:black;">Enter a valid email.</p>');  
        $('#mail').css('border', 'solid 2px red');   
  return false;
        } 
  }
$('#mail').keyup(validateEmail);


//Validates the CC number
function validateCreditCardNum(){
  let ccNum = $('#cc-num').val();  
  let ccNumRegex = RegExp(/^\d{13,17}$/);
  let ccNumResult = ccNumRegex.test(ccNum);
if (ccNum.length < 1) {  
  $('#credit-card').after('<p class = "cc-num-error" style="background-color:red;color:black;">Please enter a credit card number.</p>');  
  $('#cc-num').css('border', 'solid 2px red');  
  return false;
}
else if (ccNumResult == false) {
        $('#credit-card').after('<p class = "cc-num-error" style="background-color:red;color:black;">Enter a valid credit card number between 13 and 16 digits.</p>');  
        $('#cc-num').css('border', 'solid 2px red');
             return false;
    }
}
//Validates the CC zip
function validateCreditCardZip(){
  let ccZip = $('#zip').val(); 
  let ccZipRegex = RegExp(/^\d{5}$/);
  let ccZipResult = ccZipRegex.test(ccZip);
     if (ccZipResult == false) {
        $('#credit-card').after('<p class = "cc-zip-error" style="background-color:red;color:black;">Enter a valid 5 digit zip code.</p>');  
        $('#zip').css('border', 'solid 2px red');
             return false;
     }
}  
//Validates the CC cvv
function validateCreditCardCvv(){
  let ccCvv = $('#cvv').val(); 
  let ccCvvRegex = RegExp(/^\d{3}$/);
  let ccCvvResult = ccCvvRegex.test(ccCvv);
    if (ccCvvResult == false) {
        $('#credit-card').after('<p class = "cc-cvv-error" style="background-color:red;color:black;">Enter a valid 3 digit CVV code.</p>');  
        $('#cvv').css('border', 'solid 2px red');
             return false;
     }
}  


 /***************************Launches Functions on Form Submit***************************/
$('form').submit(removeCSS);
$('form').submit(validateName);
$('form').submit(validateEmail);
$('form').submit(CheckActivities);

// validates the CC info only if cc is chosen as a payment method
$('form').submit(function () {
    if ($('#payment').val() == 'credit card'){
    validateCreditCardNum();
    validateCreditCardZip();
    validateCreditCardCvv();
    }    
});

