<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>

	<form action="login.ok" method="post">
	<div id="loginMenu">
		<input placeholder="���̵�" id="id" name="id"><p>
		<input placeholder="��й�ȣ" id="pw" name="pw"><p>
		<input id="loginbtn" type="submit" value="�α���">
	</div>
		<span id="saveId"><input type="checkbox"  name="autoLoginCheck">���̵� ����</span>
</form>
	
	<div id="goSideMenu">
	<a id="joinId2" href="go.joinIdMenu">ȸ������</a>
	<a id="findId" href="find.login">���̵�/��й�ȣ ã��</a>	
	</div>


</body>
</html>