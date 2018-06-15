<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>

	<form action="join.id" name="myForm">
	<div id="joinIdMenu">
	<input placeholder="아이디" id="idJoin" name="id" maxlength="15"><p>
	<span id="idCheck"></span><p>
	<input placeholder="비밀번호" id="pwJoin" name="pw" maxlength="15" type="password"><p>
	<span id="pwCheck"></span><p>
	<input placeholder="비밀번호 확인" id="pw2Join" name="pw2" maxlength="15" readonly="readonly" type="password"><p>
	<span id="pw2Check"></span><p>
	<input placeholder="이름" id="nameJoin" name="name"><p>
	<span id="nameCheck"></span><p>
	<input placeholder="주민번호 앞자리" id="numJoin" name="innate" maxlength="6"> - <input placeholder="주민번호 뒷자리" id="numJoin2" name="innate2" maxlength="7"><p>
	<span id="innateCheck"></span><p>	
	<input placeholder="주소" id="addrJoin" name="address"><p>
	<input type="submit" value="등록" id="joinIdBtn"> 
	</div>
	</form>
	
	
</body>
</html>