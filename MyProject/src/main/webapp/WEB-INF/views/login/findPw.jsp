<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>

	<div id="loginFind">
		<form action="find.pw">

			<div>
				<input id="id" name="id" placeholder="아이디">
			</div>
			
			<div>
				<input id="name" name="name" placeholder="이름">
			</div>

			<div>
				<input id="innate" name="innate" placeholder="주민번호 앞자리">
			</div>

			<div>
				<input type="submit" value="찾기" id="findBtn">
			</div>

		</form>
	</div>

</body>
</html>