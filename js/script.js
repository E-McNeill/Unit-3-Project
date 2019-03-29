
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

$('#payment').change(function (){
    if ($('#payment').val() == 'paypal') { //If 'paypal' option is chosen, bitcoin and cc details removed.
            $('.credit-card').hide();
            $('.Bitcoin').hide();
            $('.PayPal').show();
      
    } else if ($('#payment').val() == 'bitcoin') { // If 'bitcoin' is chosen, cc and paypal details removed.
            $('.credit-card').hide();
            $('.PayPal').hide();
            $('.Bitcoin').show();
    }  else $('.credit-card').show() && $('.Bitcoin').hide() && $('.PayPal').hide(); // When 'select payment method'is chosen, only CC info shows. 
                 

});