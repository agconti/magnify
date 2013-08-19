$(document).ready(function(){
	$("#submit_button").click(function() {
		if ($("#search_query").val() != "") {
			if ($(".result").length	){
				$(".result").each(function(i){
					this.fadeOut((i*50));});
				console.log("removed");
			}
			//var results = get_search_results($("#search_query").val());
	    	//var results = flick();
	    	var results = data; 
	    	var fadeIn_time = 1000;
	    	for(var i=0; i < results.entry.length; i++){
	    		var item = $("<p>" + results.entry[i].author.name.content + "</p>")
	    		$("#search_results").append(item.hide().fadeIn(fadeIn_time).addClass('result'));
	    		fadeIn_time += 400;
	    	}
	   		console.log("querried something");
	   		return	false;
	  		} else{
	  		$("#validate_check").text("Please enter something to search!").show().fadeOut(3000);
	 		console.log("failed qerry");
	 		return false;
			}
	});
});