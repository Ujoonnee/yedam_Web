<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>borderInsertForm.do</title>
</head>
<body>
	<div align="center">
		<div><h1>게시글 작성</h1></div>
		<div>
			<form id="frm" action="borderInsert.do" method="post">
				<div>
					<table border="1">
						<tr>
							<th width="100">작성자</th>
							<td width="150">
								<input type="text" id="borderWriter" name="borderWriter" required>
							</td>
							<th width="100">작성일자</th>
							<td width="150">
								<input type="date" id="borderDate" name="borderDate" required>
							</td>
						</tr>
						<tr>
							<th width="100">제목</th>
							<td colspan="3">
								<input type="text" size="80" id="borderTitle" name="borderTitle" required>
							</td>
						</tr>
						<tr>
							<th width="100">내용</th>
							<td colspan="3">
								<textarea rows="10" cols="80" name="borderContents"></textarea>
							</td>
						</tr>
					</table>
				</div><br>
				<div>
					<button type="submit">글 등록</button>&nbsp;&nbsp;&nbsp;
					<button type="reset">취 소</button>&nbsp;&nbsp;&nbsp;
					<button onclick="location.href='borderList.do'">목 록</button>
				</div>
			</form>
		</div>
	</div>
</body>
</html>