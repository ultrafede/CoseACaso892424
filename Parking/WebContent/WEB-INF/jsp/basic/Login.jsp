<%--
-- Descrizione: Questa pagina contiene il form per il login
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
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login</title>

<jsp:include page="/link.jsp" />
<style type="text/css">
/* Login(Page) : Credit to bootsnipp.com for the css for the color graph */
.colorgraph {
  height: 5px;
  border-top: 0;
  background: #c4e17f;
  border-radius: 5px;
  background-image: -webkit-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
  background-image: -moz-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
  background-image: -o-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
}

.logPage {
	margin-top: 5%;
	margin-bottom: 10%;
}

.myw {background: rgba(220, 220, 220, 0.7);}
</style>
</head>
<body>



		<!-- MENU BAR -->
		<jsp:include page="/mainMenu.jsp"></jsp:include>

<div styleClass="container logPage">

<div styleClass="well row myw">
    <div styleClass="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 auth-block">
		<form name="myForm" id="myForm" styleClass="form" action="/Parking/logValid.basic" method="post" role="form">
			<fieldset>
				<h2>Please Sign In</h2>
				<hr styleClass="colorgraph">
				<div styleClass="form-group">
                    <input required="required" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" name="username" id="username" styleClass="form-control input-lg" placeholder="Email Address">
				</div>
				<div styleClass="form-group">
                    <input required="required" type="password" pattern="[a-zA-Z][a-zA-Z0-9\s]*" name="password" id="password" styleClass="form-control input-lg" placeholder="Password">
				</div>
				<span styleClass="button-checkbox">
					<button type="button" styleClass="btn" data-color="info"> Remember Me</button>
                    <input type="checkbox" name="remember_me" id="remember_me" styleClass="hidden" >
					<a href="" styleClass="btn btn-link pull-right">Forgot Password?</a>
				</span>
				<hr styleClass="colorgraph">
				<div styleClass="row">
					<div styleClass="col-xs-6 col-sm-6 col-md-6">
                        <input type="submit" styleClass="btn btn-lg btn-success btn-block" value="Sign In">
					</div>
					<div styleClass="col-xs-6 col-sm-6 col-md-6">
						<a href="/Parking/register.basic" styleClass="btn btn-lg btn-primary btn-block">Register</a>
					</div>
				</div>
			</fieldset>
		</form>
	</div>
</div>

</div>
		<jsp:include page="/footer.jsp"></jsp:include>

</body>
</html>