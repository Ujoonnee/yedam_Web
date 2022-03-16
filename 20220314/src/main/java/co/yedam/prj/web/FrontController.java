package co.yedam.prj.web;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.prj.border.command.AjaxBorderSearch;
import co.yedam.prj.border.command.AjaxSortBorder;
import co.yedam.prj.border.command.BorderInsert;
import co.yedam.prj.border.command.BorderInsertForm;
import co.yedam.prj.border.command.BorderList;
import co.yedam.prj.border.command.BorderView;
import co.yedam.prj.common.Command;
import co.yedam.prj.home.command.HomeCommand;
import co.yedam.prj.member.command.AjaxMemberIdCheck;
import co.yedam.prj.member.command.MemberList;
import co.yedam.prj.member.command.MemberLogin;
import co.yedam.prj.member.command.MemberSearch;
import co.yedam.prj.member.command.memberJoin;
import co.yedam.prj.member.command.memberJoinForm;

public class FrontController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private HashMap<String, Command> map = new HashMap<>();
	
    public FrontController() {
        super();
        // TODO Auto-generated constructor stub
    }

	public void init(ServletConfig config) throws ServletException {
		map.put("/home.do", new HomeCommand());						// 처음 들어오는 페이지
		map.put("/memberList.do", new MemberList());				// 회원 목록 보기
		map.put("/memberSearch.do", new MemberSearch());			// 홍길동 보기
		map.put("/memberLogin.do", new MemberLogin());				// 로그인
		map.put("/ajaxMemberIdCheck.do", new AjaxMemberIdCheck());	// ajax 아이디 중복체크
		map.put("/memberJoinForm.do", new memberJoinForm());		// 회원가입 폼 호출
		map.put("/memberJoin.do", new memberJoin());				// 회원가입
		map.put("/borderList.do", new BorderList());				// 게시글 목록
		map.put("/borderInsertForm.do", new BorderInsertForm());	// 게시글 작성 폼 호출
		map.put("/borderInsert.do", new BorderInsert());			// 게시글 작성
		map.put("/borderView.do", new BorderView());				// 상세 글 보기
		map.put("/ajaxBorderSearch.do", new AjaxBorderSearch());	// 리스트에서 게시글 검색
		map.put("/ajaxSortBorder.do", new AjaxSortBorder());		// 게시글 정렬
	}

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		String uri = request.getRequestURI();
		String contextPath = request.getContextPath();
		String page = uri.substring(contextPath.length());
		
		Command command = map.get(page);
		String viewPage = command.execute(request, response);
		
		// view resolve
		if (!viewPage.endsWith(".do")) {
			if(viewPage.startsWith("ajax:")) {
				// ajax 처리
				response.setContentType("text/html; charset=UTF-8");
				response.getWriter().append(viewPage.substring(5));
				return;
			} else {
//				viewPage = "WEB-INF/views/" + viewPage + ".jsp";
				viewPage = viewPage + ".tiles";
			}
		}
		
		RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
		dispatcher.forward(request, response);
	}

}
