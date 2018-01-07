<%--
-- 
-- Sviluppatori: Federico Lupis, Antonino Leto, Vito Plantamura
-- Versione 1.0
--
--
--
--%>

<div styleClass="container pana">
	<div styleClass="box">
  		<div styleClass="container-fluid navbar2">
    		<div styleClass="header">
      			<label styleClass="brand" >${loc }</label>>
    		</div>
  		</div>
	</div>
    <%-- row contentlist --%>
	<div styleClass="row contentList">
		<div styleClass="container">
		<div styleClass="row">
                    <div styleClass="col-xs-6 col-sm-2 col-md-2">
                        <a href="#">
                            <img src="${parking.image }" styleClass="img-responsive img-box img-thumbnail"  /> 
                        </a>
                    </div>
                    <div styleClass="col-xs-6 col-sm-10 col-md-10">
                        <div styleClass="list-group">
                            <div styleClass="list-group-item">
                                <div styleClass="row-content">
                                    <div styleClass="list-group-item-heading">
                                        <a href="Pay.jsp" title="sintret">
                                            <small>${parking.area }</small>
                                        </a>
                                    </div>
                                    <small>
                                        <i styleClass="glyphicon glyphicon-time"></i> 3 days ago via <span styleClass="twitter"> <i styleClass="fa fa-twitter"></i> <a target="_blank" href="https://twitter.com/sintret" alt="sintret" title="sintret">${parking.city }</a></span>
                                        <br>
                                        <span styleClass="explore"><i styleClass="glyphicon glyphicon-th"></i> <a href="#">Explore 2 places </a></span>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <h4><a href="#" >${parking.country }</a></h4>
                        <p>${parking.state }</p>
                        <a href="#" id="addClass" styleClass="btn btn-success" >Book Now</a>
                  	</div>
                </div>

                <hr>

                <div styleClass="row"> 
                    <div styleClass="col-xs-6 col-sm-2 col-md-2">
                        <a href="#">
                            <img src="http://wanderluxe.theluxenomad.com/wp-content/uploads/2014/09/http-barbacoabali.com_.jpg" styleClass="img-responsive img-box img-thumbnail"> 
                        </a>
                    </div> 
                    <div styleClass="col-xs-6 col-sm-10 col-md-10">
                        <div styleClass="list-group">
                            <div styleClass="list-group-item">
                                <div styleClass="row-picture">
                                    <a href="#" title="sintret">
                                        <img styleClass="circle img-thumbnail img-box" src="http://sintret.com/img/andy.jpg" alt="sintret">
                                    </a>
                                </div>
                                <div styleClass="row-content">
                                    <div styleClass="list-group-item-heading">
                                        <a href="#" title="sintret">
                                            <small>sintret</small>
                                        </a>
                                    </div>
                                    <small>
                                        <i styleClass="glyphicon glyphicon-time"></i> 1 month ago via <span styleClass="twitter"> <i styleClass="fa fa-twitter"></i> <a target="_blank" href="https://twitter.com/sintret" alt="sintret" title="sintret">@sintret</a></span>
                                        <br>
                                        <span styleClass="explore"><i styleClass="glyphicon glyphicon-th"></i> <a href="#">Explore 9 places </a></span>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <h4><a href="#">Top 8 Best Bants</a></h4>
                        <p>We know that there’s to visit.</p>
                    </div> 
                </div>
                <hr>

                <%-- row --%>
                <div styleClass="row"> 
                    <div styleClass="col-xs-6 col-sm-2 col-md-2">
                        <a href="#">
                            <img src="http://i.huffpost.com/gen/2038950/thumbs/s-BANGKOK-NOODLES-large.jpg" styleClass="img-responsive img-box img-thumbnail"> 
                        </a>
                    </div> 
                    <div styleClass="col-xs-6 col-sm-10 col-md-10">
                        <div styleClass="list-group">
                            <div styleClass="list-group-item">
                                <div styleClass="row-picture">
                                    <a href="#" title="sintret">
                                        <img styleClass="circle img-thumbnail img-box" src="http://sintret.com/img/andy.jpg" alt="sintret">
                                    </a>
                                </div>
                                <div styleClass="row-content">
                                    <div styleClass="list-group-item-heading">
                                        <a href="#" title="sintret">
                                            <small>sintret</small>
                                        </a>
                                    </div>
                                    <small>
                                        <i styleClass="glyphicon glyphicon-time"></i> 1 month ago via <span styleClass="twitter"> <i styleClass="fa fa-twitter"></i> <a target="_blank" href="https://twitter.com/sintret" alt="sintret" title="sintret">@sintret</a></span>
                                        <br>
                                        <span styleClass="explore"><i styleClass="glyphicon glyphicon-th"></i> <a href="#">Explore 9 places </a></span>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <h4><a href="#">These Are The Spots In Bangkok</a></h4>
                        <p>BANGKOK (AP) — With its fluor decorating.              But thathstaurant's many fans...</p>
                    </div> 
                </div>
                <hr>
      	</div>
	</div>
</div>