<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>

	<div id="myDataPage">
		<div id="pwChange"><span>비밀번호 변경</span></div>
		<div id="memberDelete"><span>회원 탈퇴</span></div>
	</div>
 
	<div id="changePw">	 
	<form action="change.pw" onsubmit="return false;">
		<input id="idHidden" name="id" value="${sessionScope.loginMember.id }">
		<div id="changePwCheck">
			<input placeholder="기존의 비밀번호를 입력하세요" name="pw" id="oldPw"><p>
			<span id="pwchk">비밀번호가 일치하지 않습니다.</span>
		</div>
			<input type="submit" value="확인" id="changeBtn" >
		</form>
	</div>

</body>
</html>