//search.js

function get_search_url(term){
	//set our qeury terms and get a URL for the magnify api
	
	var channel_url = 'http://woof.magnify.net/api/';
	var api_mode = 'content/find?';
	var search_term = 'vq=' + term;
	var return_parms = '&per_page=5&page=1&sort=popularity';
	var api_Key = '&key=84LTHNZQ1364W14D';
	var return_format = '&format=json';
	var callback = '&callback=?';
	var url = channel_url + api_mode + search_term + return_parms + api_Key + return_format + callback
    return url

	}

