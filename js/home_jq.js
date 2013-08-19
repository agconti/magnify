$(document).ready(function(){
	$("#submit_button").click(function() {
	  if ($("#search_query").val() != "") {
	    $("#validate_check").text("Searching...").show();
	    get_search_results($("#search_query").val());
	    return true;
	  }
	  $("#validate_check").text("Please enter something to search!").show().fadeOut(3000);
	  return false;
	  
	});
});