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
			<div id="resultTitle">���̵� ã�� ���</div>	
				<div id="resultArea">
					<span id="resultId">${findResult.name }���� ���̵��<span id="idResult">${findResult.id }</span>�Դϴ�.</span>
			</div>	
		</c:when>
		
		<c:when test="${findResult.pw != null }">
			<div id="resultTitle">��й�ȣ ã�� ���</div>	
				<div id="resultArea">
					<span id="resultId">${findResult.name }���� ��й�ȣ��<span id="idResult">${findResult.pw }</span>�Դϴ�.</span>
			</div>			
			
		</c:when>

	</c:choose>
	</div>

</body>
</html>