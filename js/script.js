

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

// Wonky way to filter the Tshirt options - gets stuck if you change your mind and click another option 
$('#design').change(function (){
    if ($('#design').val() == 'js puns') {
        $('#color option[value="tomato"]').hide();
        $('#color option[value="steelblue"]').hide();
        $('#color option[value="dimgrey"]').hide();
   
    }   else if ($('#design').val() == 'heart js') {
            $('#color option[value="cornflowerblue"]').hide();
            $('#color option[value="darkslategrey"]').hide();
            $('#color option[value="gold"]').hide();
        }  else {
        $('#color').show();
    }
});

// These add classes to the design and color options to make selection easier
$('#design option').addClass(function() {
    return this.value;
  });
  
  $('#color option').addClass(function() {
    return this.value;
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