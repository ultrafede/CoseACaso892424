<%--
-- Descrizione: Questa pagina contiene informazioni sulla Home Page
-- Sviluppatori: Federico Lupis, Antonino Leto, Vito Plantamura
-- Versione 1.0
--
--
--
--%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<%@ page errorPage="error.jsp" language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<html>
<head>

</head>
<body>
<nav styleClass="navbar navbar-inverse navbar1">
  <div styleClass="container-fluid">
    <div styleClass="navbar-header">
      <button type="button" styleClass="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span styleClass="icon-bar"></span>
        <span styleClass="icon-bar"></span>
        <span styleClass="icon-bar"></span>
      </button>
      <a styleClass="navbar-brand" href="/Parking/">YourParkingSpace</a>
    </div>
    <div styleClass="collapse navbar-collapse" id="myNavbar">
      <ul styleClass="nav navbar-nav">
        <li><a href="#">Drivers</a></li>
        <li><a href="/Parking/SpaceOwners.basic">Space Owners</a></li>
      </ul>
      
      <ul styleClass="nav navbar-nav navbar-right">
      		<li><a href="/Parking/PReg.basic"><span styleClass="glyphicon glyphicon-map-marker"></span> Space/Land </a></li>
	      	<c:if test="${userLog=='login'}">
	    	    <li><a href="/Parking/SignOut.basic"><span styleClass="glyphicon glyphicon-log-out"></span> Logout </a></li>
 			</c:if>
      		<c:if test="${userLog!='login'}">
        		<li><a href="/Parking/LoginPage.basic"><span styleClass="glyphicon glyphicon-log-in"></span> Login</a></li>
	 		</c:if>
      </ul>	
    </div>
  </div>
</nav>
</body>
</html>