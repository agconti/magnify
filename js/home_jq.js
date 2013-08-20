$(document).ready(function(){
	$("#submit_button").click(function(e) {
		//prevents resubmiting the form and losing the jQuery already inplace.
		e.preventDefault();
		//validates query
		if ($("#search_query").val() != "") {
			//removes pervious queries, if there are any.
			if ($(".result").length	){
				$("#search_results").fadeOut(1000);
			}
			//gets url to make a query.
			var url = get_search_url($("#search_query").val());
			//makes query
			$.getJSON(url, function (data) {
    			results = data;
  			
  			//dynamically adds and parses resulting query to page.	
	    	var fadeIn_time = 1000;
	    	for(var i=0; i < results.entry.length; i++){
	    		var title = "<p id='results_title'>"+ results.entry[i].title.content + "</p>" 
	    		var video = "<iframe id='results_video' src=" + results.entry[i].link[1].href + '/player?layout=&amp;read_more=1 width="420" height="376" frameborder="0" scrolling="no""></iframe>'
	    		var name = "<p id='author_name'>Video by: " + results.entry[i].author.name.content + "</p>";
	    		var content = "<p id='results_content'>" + data.entry[i].content.content + "</p>"
	    		var item = $("<div>" + title + video + name + content + "</div>");
	    		$("#search_results").append(item.hide().fadeIn(fadeIn_time).addClass('result'));
	    		fadeIn_time += 400;
	    	}
	   		return	false;
	   		});
	  		} else{
	  		$("#validate_check").text("Please enter something to search!").show().fadeOut(3000);
	 		return false;
			}
	});
});