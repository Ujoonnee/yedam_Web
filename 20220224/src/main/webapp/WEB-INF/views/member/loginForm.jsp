<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<jsp:include page="../home/header.jsp"/>
<div align="center">
	<div><h1>로 그 인</h1></div>
	<div>
		<form id="frm" action="memberLogin.do" method="post">
			<table border="1">
				<tr>
					<th>아이디</th>
					<td><input type="email" id="id" name="id" placeholder="example@email.com" required value="micol@abc.com"></td>
				</tr>
				<tr>
					<th>비밀번호</th>
					<td><input type="password" id="password" name="password" placeholder="Enter your password" required value="1234"></td>
				</tr>
			</table><br>
			<div>
				<input type="reset" value="취소" style="margin-right: 10px;">&nbsp;&nbsp;&nbsp;
				<input type="submit" value="로그인">
			</div>
		</form>
	</div>
</div>
</body>
</html>