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
		<div id="pwChange"><span>��й�ȣ ����</span></div>
		<div id="memberDelete"><span>ȸ�� Ż��</span></div>
	</div>
 
	<div id="changePw">	 
	<form action="change.pw" onsubmit="return false;">
		<input id="idHidden" name="id" value="${sessionScope.loginMember.id }">
		<div id="changePwCheck">
			<input placeholder="������ ��й�ȣ�� �Է��ϼ���" name="pw" id="oldPw"><p>
			<span id="pwchk">��й�ȣ�� ��ġ���� �ʽ��ϴ�.</span>
		</div>
			<input type="submit" value="Ȯ��" id="changeBtn" >
		</form>
	</div>

</body>
</html>