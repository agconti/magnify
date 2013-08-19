$(document).ready(function(){
	$("#submit_button").click(function() {
		if ($("#search_query").val() != "") {
			if ($(".result").length	){
				$(".result").fadeOut(1000);
				console.log("removed");
			}
			var results = get_search_results($("#search_query").val());
	    	var fadeIn_time = 1000;
	    	for( i in results){
	    		var item = $("<p>" + i + "</p>")
	    		$("#search_results").append(item.hide().fadeIn(fadeIn_time).addClass('result'));
	    		fadeIn_time += 400;
	    	return false;
	    	}
	   		console.log("querried something");
	  		} else{
	  		$("#validate_check").text("Please enter something to search!").show().fadeOut(3000);
	 		console.log("failed qerry");
	 		return false;
			}
	});
});