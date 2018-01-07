<%--
-- 
-- Sviluppatori: Federico Lupis, Antonino Leto, Vito Plantamura
-- Versione 1.0
--
--
--
--%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<%@ page errorPage="error.jsp" language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
  <head>

    <title>Place details</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
        <jsp:include page="/link.jsp" />
	    <link rel="stylesheet" href='<c:url value="/css/findMap.css"></c:url>'  />
    
    <script>
    function initMap() {

    	var parkings = ${json };

    	var fenway = {lat: parseFloat(${latitude}), lng: parseFloat(${longitude}) };
        var map = new google.maps.Map(document.getElementById('map'), {
            center: fenway,
            zoom: 14,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        });
   		var trafficLayer = new google.maps.TrafficLayer();
          trafficLayer.setMap(map);

        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        var geocoder = new google.maps.Geocoder;

		geocoder.geocode({'location': fenway}, function(results, status) {
    		if (status === google.maps.GeocoderStatus.OK) {
	      		if (results[0]) {
	      			
        		   	for(var i=0; i < parkings.length; i++) {
            	     	var marker = new google.maps.Marker({
                 	    	map: map,
                    	 	draggable: true,
                      		animation: google.maps.Animation.DROP,
                     		position: {lat: parkings[i].latitude, lng: parkings[i].longitude },
                   			title: parkings[i].area
                 		});
        	 			var title = marker.getTitle();
     		      		google.maps.event.addListener(marker, 'click', function() { 
      		    			infowindow.setContent('<div><strong>' + title + '</strong><br>' +
    		            		'Place ID: ' + results[0].place_id + '<br>' +'Address: '+ results[0].formatted_address + '</div>');
    		          			infowindow.open(map, this);
                		});
     		      	}  		

	      		} else {
        			window.alert('No results found');
      			}
    		} else {
      			window.alert('Geocoder failed due to: ' + status);
    		}
	  	});
    }
/*         
		var weatherLayer = new google.maps.weather.WeatherLayer({
			temperatuerUnits: google.maps.weather.TemperatuerUnits.CELSIUS
		});
		weatherLayer.setMap(map);
		
		var cloudLayer = google.maps.weather.CloudLayer();
		cloudLayer.setMap(map);
 */
		
/* 		
		var panorama = new google.maps.StreetViewPanorama(
	            document.getElementById('pano'), {
	              position: fenway,
	              addressControlOptions: {
	                position: google.maps.ControlPosition.BOTTOM_CENTER
	              },
	              linksControl: true,
	              panControl: true,
	              enableCloseButton: true
	        });
*/
$(document).ready(function(){
	$(".lsimg").hover3d({
		selector: ".img",
		/* shine: true, */
		sensitivity: 6,
	});				
});
	
    </script>
  </head>
  <body>
  	<jsp:include page="/mainMenu.jsp" />
	
 	<div id="map"></div>
	
	<!-- <div id="pano"></div>	 -->	

<div styleClass="container pana">
	<div styleClass="box">
  		<div styleClass="container-fluid navbar2">
    		<div styleClass="header">
      			<label styleClass="brand" >${loc }</label>
    		</div>
  		</div>
	</div>

	<div styleClass="row contentList">
		<div styleClass="container">
			<c:forEach var="p" items="${parking }" varStatus="status">
		
			<div styleClass="row">
          		<div styleClass="lsimg col-xs-6 col-sm-2 col-md-2">
              		<a href="/Parking/Check.basic?loc=${p.area }&lat=${p.latitude }&lng=${p.longitude }">
                   		<img src="${p.image }" styleClass="img-responsive img-box img-thumbnail img"  /> 
                  	</a>
             	</div>
          		<div styleClass="col-xs-6 col-sm-10 col-md-10">
              		<div styleClass="list-group">
                   		<div styleClass="list-group-item">
                       		<div styleClass="row-content">
                          		<div styleClass="list-group-item-heading">
                              		<a href="/Parking/Check.basic?loc=${p.area }&lat=${p.latitude }&lng=${p.longitude }" title="sintret">
                                   		<small>${p.area }</small>
                                	</a>
                    			</div>
                            	<small>
                              	<i styleClass="glyphicon glyphicon-time"></i> ${p.latitude } <span styleClass="twitter"> <i styleClass="fa fa-twitter"></i> <a target="_blank" href="https://twitter.com/sintret" alt="sintret" title="sintret">${p.city }</a></span>
                              	<br>
                           		<span styleClass="explore"><i styleClass="glyphicon glyphicon-th"></i> <a href="#">${p.longitude } </a></span>
                                </small>
                        	</div>
                     	</div>
                  	</div>
     	            <a href="#" id="addClass" styleClass="btn btn-success" >Book Now</a>
	          	</div>	
 	        </div>
          	<hr>      	
 	        </c:forEach>
		</div>
	</div>	
</div>
	
	<jsp:include page="/popup.jsp"></jsp:include>
	<jsp:include page="/Payment.jsp"></jsp:include>
  	<jsp:include page="/footer.jsp" />
	
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQ5r7UKO1smUmapgSi3dLV9MWkbFMi45M&libraries=places&callback=initMap" async defer></script>

  </body>
</html>