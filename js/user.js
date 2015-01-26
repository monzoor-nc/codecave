

$( document ).ready(function() {
$.ajax({
        url: 'https://spreadsheets.google.com/feeds/list/1_ZomKON51x2DLoaymzPW4SeFtUj6ZFrg6bZHCBXug0g/od6/public/values?alt=json',
        type: 'GET',
        dataType: "json",
        success: displayAll
    });
var WebsiteURL = new Array;
var ImageURL = new Array;
var FullData = new Array;
function displayAll(data){
    var size = Object.keys(data.feed.entry).length;
    for(var i = 0; i < size; i++){

        //console.log(data.feed.entry[i]['gsx$websiteurl']['$t']+":"+data.feed.entry[i]['gsx$imageurl']['$t']);
        //WebsiteURL.push(data.feed.entry[i]['gsx$websiteurl']['$t']);
        //ImageURL.push(data.feed.entry[i]['gsx$imageurl']['$t']);

        FullData.push({v1: data.feed.entry[i]['gsx$websiteurl']['$t'], v2: data.feed.entry[i]['gsx$imageurl']['$t']});

    }
}

setTimeout(function(){ 
	//console.log(FullData.length); 
	var SetSize = 1;
	var a = 0;

	if(FullData.length%6 === 0) SetSize = FullData.length/6;
	else SetSize = parseInt(FullData.length/6) + 1;
	//console.log(SetSize);

	for(var i = 1; i <= SetSize; i++){
		$(".test").append("<li>");
		$(".test >li:nth-child("+i+")").addClass("set"+i);
		$(".test >li:nth-child("+i+")").append("<ul>");
		while( a < FullData.length ){
			if(a === 0 ) {
				$(".test li.set"+i+" ul").append('<li><a href=""><img src="'+FullData[a].v2+'" alt=""><span></span></a></li>'); 
				console.log(a);
				console.log("i = "+i);
				a++;
			}
			else if( a % 5 === 0) {
				$(".test li.set"+i+" ul").append('<li><a href=""><img src="'+FullData[a].v2+'" alt=""><span></span></a></li>');
				console.log("this is 6 "+a);
				a++; 
				console.log("this is 6 "+a);
				break;
			}
			else {
				$(".test li.set"+i+" ul").append('<li><a href=""><img src="'+FullData[a].v2+'" alt=""><span></span></a></li>')
				console.log(a);
				a++;
			}
		}

	}
		// for(var index in FullData) { 
		//     var attr = FullData[index];
		// 	$(".value").append('<li><a href=""><img src="'+attr.v2+'" alt=""><span></span></a></li>')
		// }
}, 1000);
setTimeout(function(){ 
	var unslider = $('.slider').unslider({
    	dots: true,
    	delay: 5000
    });
},2000);



//tasks.push({firstName: firstName.value, lastName: lastName.value, DOB: dateofBirth.toString()})
})


