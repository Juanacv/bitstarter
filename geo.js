function initGeoApp() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition( success, failure);
	}
	else {
	    alert("Your browser does not support geolocation services.");
	}
}

var map;
	     
function success(position) {
	var coordinates = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); 
	var myOptions =
	{                      
		zoom: 14,
	    center: coordinates,
	    mapTypeControl: false,
	    navigationControlOptions: {style: google.maps.NavigationControlStyle.small},
	    mapTypeId: google.maps.MapTypeId.ROADMAP    
	};
	 
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	 
	var marker = new google.maps.Marker({
	    position: coordinates,
	    map: map,
	    title: "You are here."
	});
}
	 
function failure() {
	    alert("Sorry, could not obtain location");
}