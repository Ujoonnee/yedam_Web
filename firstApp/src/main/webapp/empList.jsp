<%@page import="java.util.List"%>
<%@page import="com.yedam.employees.Employee"%>
<%@page import="com.yedam.employees.EmployeesDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<!-- jspíì-->
<%
List<Employee> list = EmployeesDAO.getInstance().selectAll();
for(Employee emp : list) {
%>
<!-- view íì -->
	<div><span><%=emp.getFirstName() %></span>
		 <span><%=emp.getEmail() %></span>
	</div>
<%
}
%>
</body>
</html>