<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>

	<div id="findResult">
	<c:choose>
	
		<c:when test="${findResult.id != null }" >
			<div id="resultTitle">아이디 찾기 결과</div>	
				<div id="resultArea">
					<span id="resultId">${findResult.name }님의 아이디는<span id="idResult">${findResult.id }</span>입니다.</span>
			</div>	
		</c:when>
		
		<c:when test="${findResult.pw != null }">
			<div id="resultTitle">비밀번호 찾기 결과</div>	
				<div id="resultArea">
					<span id="resultId">${findResult.name }님의 비밀번호는<span id="idResult">${findResult.pw }</span>입니다.</span>
			</div>			
			
		</c:when>

	</c:choose>
	</div>

</body>
</html>