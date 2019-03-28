

$('#name').focus(); //Makes the first text field in focus on page load. 

$('#other-title').hide(); 

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





// label for="design">Design:</label>
//           <select id="design" name="user_design">
//             <option>Select Theme</option>
//             <option value="js puns">Theme - JS Puns</option>
//             <option value="heart js">Theme - I &#9829; JS</option>
//           </select>
//         </div>

//         <div id="colors-js-puns" class="">
//           <label for="color">Color:</label>
//           <select id="color">
//             <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
//             <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
//             <option value="gold">Gold (JS Puns shirt only)</option> 
//             <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
//             <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
//             <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
//           </select>
//         </div>                
//       </fieldset>