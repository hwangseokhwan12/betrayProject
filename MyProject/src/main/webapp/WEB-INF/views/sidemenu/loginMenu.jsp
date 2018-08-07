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

	<div id="loginOk">
	<span id="loginName">${loginMember.id }</span>
	<a id="goMyPage" href="go.myPage">마이페이지</a>
	<a id="writeBoard" href="go.writeBulletin">게시글 쓰기</a>
	<a id="logOut" href="logout.ok">로그아웃</a>
	</div>
	
</body>
</html>