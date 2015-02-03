

$( document ).ready(function() {
	var FullData = new Array;

	$.ajax({
        url: 'https://spreadsheets.google.com/feeds/list/1_ZomKON51x2DLoaymzPW4SeFtUj6ZFrg6bZHCBXug0g/od6/public/values?alt=json',
        type: 'GET',
        dataType: "json",
        success: displayAll
    });

	function displayAll(data){
	    var size = Object.keys(data.feed.entry).length;
	    for(var i = 0; i < size; i++){
	        FullData.push({v1: data.feed.entry[i]['gsx$websiteurl']['$t'], v2: data.feed.entry[i]['gsx$imageurl']['$t']});
	    }
	}

	setTimeout(function(){ 
		var SetSize = 1;
		var j = 1;
		(FullData.length%6 === 0)? SetSize = FullData.length/6 : SetSize = parseInt(FullData.length/6) + 1;
		for(var i = 1; i <= SetSize; i++){
			$(".test").append("<li>");
			$(".test >li:nth-child("+i+")").addClass("set"+i);
			$(".test >li:nth-child("+i+")").append("<ul>");
			for ( j; j <= FullData.length;j++){
				console.log(j);
				if( j % 6 === 0) {
					$(".test li.set"+i+" ul").append('<li><a href="'+FullData[j].v1+'"><img src="'+FullData[j].v2+'" alt=""><span></span></a></li>');
					j++;
					break; 
				}
				else {
					$(".test li.set"+i+" ul").append('<li><a href="'+FullData[j].v1+'"><img src="'+FullData[j].v2+'" alt=""><span></span></a></li>'); 
				}
			}
		}
	}, 1000);

	setTimeout(function(){ 
		var unslider = $('.slider').unslider({
	    	dots: true,
	    	delay: 5000,
	    	fluid: false 
	    });
	},2000);



})


