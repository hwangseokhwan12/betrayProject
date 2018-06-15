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
		<input placeholder="아이디" id="id" name="id"><p>
		<input placeholder="비밀번호" id="pw" name="pw"><p>
		<input id="loginbtn" type="submit" value="로그인">
	</div>
		<span id="saveId"><input type="checkbox"  name="autoLoginCheck">아이디 저장</span>
</form>
	
	<div id="goSideMenu">
	<a id="joinId2" href="go.joinIdMenu">회원가입</a>
	<a id="findId" href="find.login">아이디/비밀번호 찾기</a>	
	</div>


</body>
</html>