<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div align="center">
		<div><h1>1 ~ 100까지의 합</h1></div>
		<%
			int sum = 0;
			for(int i = 1; i <= 100; i++){
				sum = sum + i;
			}
		%>
		<div><h3>합의 결과는 : <%= sum %></h3></div>
		<%
			for(int i=1; i<=9; i++){
		%>
			<h3>2 * <%=i %> = <%=2*i %></h3>
		<%
			}
		%>
		<a href="index.jsp">홈 가기</a>
	</div>
</body>
</html>