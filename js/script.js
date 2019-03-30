
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
$('#design').change(function (){
    if ($('#design').val() == 'js puns') {
        $('#color option[value="tomato"]').hide();
        $('#color option[value="steelblue"]').hide();
        $('#color option[value="dimgrey"]').hide();
        $('#color option[value="cornflowerblue"]').show();
        $('#color option[value="darkslategrey"]').show();
        $('#color option[value="gold"]').show();
       
    }   else if ($('#design').val() == 'heart js') {
            $('#color option[value="cornflowerblue"]').hide();
            $('#color option[value="darkslategrey"]').hide();
            $('#color option[value="gold"]').hide();
            $('#color option[value="tomato"]').show();
            $('#color option[value="steelblue"]').show();
            $('#color option[value="dimgrey"]').show();
    
        }  else if ($('#design').val() != 'heart js' && $('#design').val() != 'js puns'){
                $('#color option[value="cornflowerblue"]').show();
                $('#color option[value="darkslategrey"]').show();
                $('#color option[value="gold"]').show();
                $('#color option[value="tomato"]').show();
                $('#color option[value="steelblue"]').show();
                $('#color option[value="dimgrey"]').show();
    }
});

//payment section
//add class to other two payment divs for easy access. 
var payPal = $('div.credit-card').next();
payPal.addClass('PayPal');
var bitCoin = $('div.PayPal').next();
bitCoin.addClass('Bitcoin');
// Paypal and bitcoin details hidden on load
$('.PayPal').hide();
$('.Bitcoin').hide();
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
  }
  
  //Validates if user has entered in a name
  function validateName() {
  let x = $('#name').val();
    if (x.length < 1) {
  $('#name').css('border', 'solid 2px red');
  $('#name').after('<p class = "name-error" style="background-color:Tomato;">Please enter your name.</p>');
      return false;
        }
  }
  
  //Validates if the user has entered in an email address
  function validateEmail() {
  let mail = $('#mail').val(); 
  let regex = new RegExp(/^[^@]+@[^@.]+\.[a-z]+$/i);
  let result = regex.test(mail);
   if (result == false) {
        $('#mail').after('<p class = "mail-error" style="background-color:Tomato;">Enter a valid email.</p>');  
        $('#mail').css('border', 'solid 2px red');   
  return false;
        } 
  }
  //Launches the functions that validate the form fields
  $('form').submit(removeCSS);
  $('form').submit(validateName);
  $('form').submit(validateEmail);