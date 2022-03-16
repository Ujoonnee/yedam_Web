<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>borderView.do</title>
</head>
<body>
	<div align="center">
		<div><h1>게시글 상세보기</h1></div>
		<div>
			<table border="1">
				<tr>
					<th width="100">작성자</th>
					<td width="150">${border.borderWriter }</td>
					<th width="100">작성일자</th>
					<td width="150">${border.borderDate }</td>
				</tr>
				<tr>
					<th width="100">제목</th>
					<td colspan="3">${border.borderTitle }</td>
				</tr>
				<tr>
					<th width="100">내용</th>
					<td colspan="3">
						<textarea rows="10" cols="80">${border.borderContents }</textarea>
					</td>
				</tr>
			</table>
		</div><br>
		<div>
			<button onclick="location.href='borderList.do'">목록가기</button>&nbsp;&nbsp;
			<button onclick="">수정</button>&nbsp;&nbsp;
			<button onclick="">삭제</button>
		</div>
	</div>
</body>
</html>