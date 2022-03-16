<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
	<div align="center">
		<div><h1>회원가입</h1></div>
		<div>
			<form id="frm" action="memberJoin.do" onsubmit="return formCheck()" method="post">
				<div>
					<table border="1">
						<tr>
							<th width="100">아이디</th>
							<td width="300">
								<input type="email" id="id" name="id" placeholder="Enter email" required>&nbsp;&nbsp;
								<button id="checkId" value="No" onclick="isIdCheck()">중복체크</button>
							</td>
						</tr>
						<tr>
							<th>패스워드</th>
							<td><input type="password" id="password" name="password" required></td>
						</tr>
						<tr>
							<th>패스워드확인</th>
							<td><input type="password" id="password1" name="password1" required></td>
						</tr>
						<tr>
							<th>이  름</th>
							<td><input type="text" id="name" name="name" required></td>
						</tr>
						<tr>
							<th>전화번호</th>
							<td><input type="text" id="tel" name="tel"></td>
						</tr>
						<tr>
							<th>주  소</th>
							<td><input type="text" id="address" name="address"></td>
						</tr>
					</table>
				</div><br>
				<div>
					<input type="submit" value="회원가입">&nbsp;&nbsp;
					<input type="reset" value="취소">&nbsp;&nbsp;
					<input type="button" value="홈 가기" onclick="location.href='home.do'">&nbsp;&nbsp;
				</div>
			</form>
		</div>
	</div>
		
	<script type="text/javascript">
		function isIdCheck() {
			$.ajax({
				url: "ajaxMemberIdCheck.do",
				type: "post",
				data: {'str': $("#id").val()},
				dataType: "text",
				success: function(result) {
					let message;
					if(result == '1') {
						alert('사용가능한 아이디');
						$("#checkId").attr("disabled", "true");
						$("#checkId").val('Yes');
						$("#password").focus();
					} else {
						alert('이미 존재하는 아이디');
						$("#id").val('');
						$("#id").focus();
					}
				}
			});
		}
		
		function formCheck() {
			if($("#checkId").val() != 'Yes') {
				alert('아이디 중복체크를 해주세요');
				return false;
			}
			
			if($("#password").val() != $("#password1").val()) {
				alert("패스워드가 일치하지 않습니다.")
				$("#password").val('');
				$("#password1").val('');
				$("#password").focus();
				return false;
			}
			
			return true;
		}
	</script>
</body>
</html>