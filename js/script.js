function init(){
  function jsalert(){
    var check = document.getElementById("gpa");
  
    if(check.checked){
      window.alert("You meet the GPA requirement, Welcome to Google!");
    }
	else
	{
	  window.alert("You do not meet the GPA requirement, good luck next year.");	
	}
  };
  
  var submitb = document.getElementById("submitt");
  submitb.addEventListener("click", jsalert);
  
};
window.addEventListener("load", init);