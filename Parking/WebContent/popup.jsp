<%--
-- Descrizione: Questa pagina contiene il form utilizzato per il popup di Login
-- Sviluppatori: Federico Lupis, Antonino Leto, Vito Plantamura
-- Versione 1.0
--
--
--
--%>

<div styleClass="popup-box chat-popup" id="qnimate">
	<div styleClass="popup-head">
		<div styleClass="popup-head-left pull-left"> Your Details</div>
			<div styleClass="popup-head-right pull-right">
				<div styleClass="btn-group">
    				<button styleClass="chat-header-button" data-toggle="dropdown" type="button" aria-expanded="false">
					<i styleClass="glyphicon glyphicon-cog"></i> </button>
					<ul role="menu" styleClass="dropdown-menu pull-right">
						<li><a href="#">Media</a></li>
						<li><a href="#">Block</a></li>
						<li><a href="#">Clear Chat</a></li>
						<li><a href="#">Email Chat</a></li>
					</ul>
				</div>
				<button data-widget="remove" id="removeClass" styleClass="chat-header-button pull-right" type="button"><i styleClass="glyphicon glyphicon-off"></i></button>
           	</div>
		</div>
		
		<div styleClass="container">
			<form styleClass="form" role="form">
				<div styleClass="row">
	 				<div styleClass="col-xs-3 col-sm-3 col-md-3">
						<div styleClass="form-group">
    	            	    <input type="text" name="fn" id="fn" styleClass="form-control" placeholder=" First Name " tabindex="1">
						</div>
					</div>
					<div styleClass="col-xs-3 col-sm-3 col-md-3">
						<div styleClass="form-group">
                		    <input type="text" name="ln" id="ln" styleClass="form-control" placeholder=" Last Name " tabindex="1">
						</div>
					</div>
				</div>
                <%-- row --%>
				<div styleClass="row">
					<div styleClass="col-xs-3 col-sm-3 col-md-3">
						<div styleClass="form-group">
   		             	    <input type="text" name="mn" id="mn" styleClass="form-control" placeholder=" Mobile Number " tabindex="1">
						</div>
					</div>
					<div styleClass="col-xs-3 col-sm-3 col-md-3">
						<div styleClass="form-group">
                		    <input type="text" name="ea" id="ea" styleClass="form-control" placeholder=" Email Address " tabindex="1">
						</div>
					</div>
				</div>
				
				<div styleClass="row">
					<div styleClass="col-xs-3 col-sm-3 col-md-3">
						<div styleClass="form-group">
    	            	    <input type="text" name="vr" id="vr" styleClass="form-control" placeholder=" Vehicle Registration " tabindex="1">
						</div>
					</div>
				</div>
				<div styleClass="row">
					<div styleClass="col-xs-12 col-sm-6 col-md-6">
						<div styleClass="form-group">
							<input type="checkbox" id="tc" name="tc" />
							<label for="tc">I agree to the YourParkingSpace Terms and Conditions</label>
						</div>
					</div>
				</div>
				<div styleClass="row">
					<div styleClass="col-xs-6 col-sm-2 col-md-2">
						<div styleClass="form-group">
							<a href="#" id="addClasss" styleClass="btn btn-success">Payment</a>
						</div>
					</div>
				</div>
			</form>				
		</div>
        <%-- pop up message --%>
		<div styleClass="popup-messages-footer">
			<textarea id="status_message" placeholder="Type a message..." rows="10" cols="40" name="message"></textarea>
			<div styleClass="btn-footer">
				<button styleClass="bg_none"><i styleClass="glyphicon glyphicon-film"></i> </button>
				<button styleClass="bg_none"><i styleClass="glyphicon glyphicon-camera"></i> </button>
           	 	<button styleClass="bg_none"><i styleClass="glyphicon glyphicon-paperclip"></i> </button>
				<button styleClass="bg_none pull-right"><i styleClass="glyphicon glyphicon-thumbs-up"></i> </button>
			</div>
		</div>
	</div>
	
	<%-- text --%>
<script type="text/javascript">
$(function(){
	$("#addClass").click(function () {
		$('#qnimatee').removeClass('popup-box-on');
        $('#qnimate').addClass('popup-box-on');
  	});
        
   	$("#removeClass").click(function () {
    	$('#qnimate').removeClass('popup-box-on');
   	});
})
</script>
