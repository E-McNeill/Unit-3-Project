
$('#name').focus(); //Makes the first text field in focus on page load. 
$('#other-title').hide(); // Hides the job role box until it gets clicked

//Shows and hides the job title box
$('#title').change(function (){
    if ($('#title').val() == 'other') {
        $('#other-title').show();
    }   else {
        $('#other-title').hide();
    }
});

// Tshirt color option filter
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

//Activity Cost Section
let costSentence = "Your total is: $" ;
let sentenceAppend =$('.activities').append(costSentence);
let amountOwed = $('<p id="total" style = "display: inline-block;"></p>');
let owedAppend = $('.activities').append(amountOwed);
//Gives each activity a price value
$('label input').addClass('workshops'); 
$('.workshops').eq(0).val(200);
$('.workshops').eq(1).val(100);
$('.workshops').eq(2).val(100);
$('.workshops').eq(3).val(100);
$('.workshops').eq(4).val(100);
$('.workshops').eq(5).val(100);
$('.workshops').eq(6).val(100);

//Function that adds or subtracts the total cost depending on what is selected
$(document).ready(function() {
    function updateSum() {
      var total = 0;
      $(".workshops:checked").each(function(i, n) { total += parseInt($(n).val());})
      $("#total").text(total);
    }
    $("input.workshops").change(updateSum);
    updateSum();
})




//example of how to pull out the specific activity 
/*let ad = $('.activities label')[0].textContent; 
console.log(ad);
VM4624:1  Main Conference — $200*/

//


//payment section
//add class to other two payment divs for easy access. 
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
//Field Validation Section
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
// removes credit card specific styling if bitcoin or paypal options are selected 
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
  
  //Validates if the user has entered in an email address
  function validateEmail() {
  let mail = $('#mail').val(); 
  let regex = RegExp(/^[^@]+@[^@.]+\.[a-z]+$/i);
  let result = regex.test(mail);
   if (result == false) {
        $('#mail').after('<p class = "mail-error" style="background-color:red;color:black;">Enter a valid email.</p>');  
        $('#mail').css('border', 'solid 2px red');   
  return false;
        } 
  }

//Credit Card Information 

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


  //Launches the functions that validate the form fields --> Can these all be inline one submit? 
$('form').submit(removeCSS);
$('form').submit(validateName);
$('form').submit(validateEmail);
//$('#payment').change(removeCSS);
// validates the CC info only if cc is chosen as a payment method

$('form').submit(function () {
if ($('#payment').val() == 'credit card'){
validateCreditCardNum();
validateCreditCardZip();
validateCreditCardCvv();
}
                 });
