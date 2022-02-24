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
	<div><h1>회 원 가 입</h1></div>
	<div>
		<form id="frm" action="memberSignup.do" onsubmit="return formCheck()" method="post">
			<div>
				<table border="1">
					<tr>
						<th width="100">* 아이디</th>
						<td width="270">
							<input type="email" id="id" name="id" required placeholder="example@email.com">&nbsp;&nbsp;
							<button onclick="" id="idCheck" value="No">중복체크</button>
						</td>
					</tr>
					<tr>
						<th width="100">* 비밀번호</th>
						<td width="200">
							<input type="password" id="password" name="password" required>&nbsp;&nbsp;
						</td>
					</tr>
					<tr>
						<th width="100">* 확인</th>
						<td width="200">
							<input type="password" id="password1" name="password1" required>&nbsp;&nbsp;
						</td>
					</tr>
					<tr>
						<th width="100">* 이 름</th>
						<td width="200">
							<input type="text" id="name" name="name" required>
						</td>
					</tr>
					<tr>
						<th width="100">전화번호</th>
						<td width="200">
							<input type="tel" id="tel" name="tel" >
						</td>
					</tr>
					<tr>
						<th width="100">주 소</th>
						<td width="200">
							<input type="text" id="address" name="address" size="30">
						</td>
					</tr>
				</table>
			</div><br>
			<div>
				<input type="hidden" id="authority" name="authority" value="USER">
				<input type="reset" value="취 소">&nbsp;&nbsp;
				<input type="submit" value="회원가입">
			</div>
		</form>
	</div>
</div>
<script type="text/javascript">
	function formCheck() {
		<%--
		if (frm.idCheck.value == 'No') {
			alert("아이디 중복 체크를 해주세요.");
			reutrn false;
		}
		--%>
		if(frm.password.value != frm.password1.value) {
			alert("비밀번호가 일치하지 않습니다.";)
			frm.password.value = '';
			frm.password1.value = '';
			frm.password.focus();
			return false;
		}
		
		return true;
	}

</script>
</body>
</html>