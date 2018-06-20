<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
<link rel="stylesheet" href="resources/css/main.css">
<link rel="stylesheet" href="resources/css/login.css">
<link rel="stylesheet" href="resources/css/myPage.css">
<script type="text/javascript" src="resources/js/menu.js"></script>
<script type="text/javascript" src="resources/js/myPage.js"></script>
<script type="text/javascript" src="resources/js/login.js"></script>
<script type="text/javascript" src="resources/js/validCheck.js"></script>
<script type="text/javascript" src="resources/js/jquery.js"></script>
<script type="text/javascript">
	$(function() {

		goMain();
		showSubMenu();
		showContent();
		goLogin();
		goJoinIdMenu();
		validCheck();
		
		
		
	});
</script>
</head>
<body>


	${r }

<div id="header">
	<div>
		<jsp:include page="#{sideMenu }"></jsp:include>
	</div>

	<div>
		<img src="resources/img/rush.jpg" id="mainRogo">
	</div>
</div>

	<div>
		<jsp:include page="#{content }"></jsp:include>
	</div>

 





</body>
</html>