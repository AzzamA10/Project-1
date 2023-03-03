jQuery(function($){
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function jsalert(){
  var check = document.getElementByID("gpa");
  
  if(check.checked == true){
    alert("You meet the GPA requirement");
  }
};