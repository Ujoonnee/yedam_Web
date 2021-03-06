<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script>
	function goPage(page) {
		location.href = "noticeListPaging.do?page=" + page;
	}
	
	function formSubmit(id) {
		frm.id.value = id;
		frm.submit();
	}
</script>

<div align="center">
	<div>
		<h1>공지사항 목록</h1>
	</div>
	<form id="frm" name="frm" action="notice.do" method="post">
		<input type="hidden" id="id" name="id">
	</form>
	<div>
		<table class="table">
			<tr>
				<th width="100">순번</th>
				<th width="200">제목</th>
				<th width="100">작성일자</th>
				<th width="100">조회수</th>
			</tr>
			<c:forEach var="vo" items="${notices }">
				<tr onclick="formSubmit(${vo.id})">
					<td align="center">${vo.id }</td>
					<td align="center">${vo.title }</td>
					<td align="center">${vo.wdate }</td>
					<td align="center">${vo.hit }</td>
				</tr>
			</c:forEach>
		</table>
	</div>
	<br />
	<div>
		<button type="button" onClick="location.href='main.do'">홈</button>
		<c:if test="${id eq 'admin' }">
			<button type="button" onClick="location.href='noticeForm.do'">등록</button>
		</c:if>
	</div>
	<div>
		<div class="paginate">
			<a href="javascript:goPage(${paging.firstPageNo})" class="first">처음 페이지</a>
			<a href="javascript:goPage(${paging.prevPageNo})" class="prev">이전 페이지</a>
			<span>
				<c:forEach var="i" begin="${paging.startPageNo}" end="${paging.endPageNo}" step="1">
					<c:choose>
						<c:when test="${i eq paging.pageNo}">
							<a href="javascript:goPage(${i})" class="choice">${i}</a>
						</c:when>
						<c:otherwise>
							<a href="javascript:goPage(${i})">${i}</a>
						</c:otherwise>
					</c:choose>
				</c:forEach>
			</span>
			<a href="javascript:goPage(${paging.nextPageNo})" class="next">다음 페이지</a>
			<a href="javascript:goPage(${paging.finalPageNo})" class="last">마지막 페이지</a>
		</div>
	</div>
</div>