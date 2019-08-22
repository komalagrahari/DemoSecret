function availableCodes(){
   var availableCodes = $('#availableCodes').html().split(', ')
   if(jQuery.inArray($('#user_code_string').val(), availableCodes) != -1){
    return true;
   }
  alert('Please select available Secret Codes')
   return false;
}
function checkValidation(){
  var first_name = $('#user_first_name').val()
  var last_name = $('#user_last_name').val()
  var pwd = $('#user_password').val()
  var confirm_pwd = $('#user_password_confirmation').val()
  var email = $('#user_email').val()
  var code = $('#user_code_string').val()
  if(first_name == ''){
    alert('First Name should not be blank.')
    return false;
  }else if(email == ''){
    alert('Email should not be blank.')
    return false;
  }else if(pwd == ''){
    alert('Password should not be blank.')
    return false;
  }else if(confirm_pwd == ''){
    alert('Confirm Password should not be blank.')
    return false;
  }else if(code == ''){
    alert('Secret Code should not be blank.')
    return false;
  }else{
    if(confirm_pwd != pwd){
      alert('Confirm Password should be same as Password.')
      return false;
    }else{
      var is_submit = availableCodes()
      if(is_submit)
      $('form').submit();
    }
  }
}
;
