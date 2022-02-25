package co.micol.prj.web;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.micol.prj.command.AjaxIdCheck;
import co.micol.prj.command.HomeCommand;
import co.micol.prj.command.LoginForm;
import co.micol.prj.command.Logout;
import co.micol.prj.command.MemberDelete;
import co.micol.prj.command.MemberList;
import co.micol.prj.command.MemberLogin;
import co.micol.prj.command.MemberSignup;
import co.micol.prj.command.MemberSignupForm;
import co.micol.prj.common.Command;

@WebServlet("*.do")
public class FrontController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private HashMap<String, Command> map = new HashMap<>();
       
    public FrontController() {
        super();
    }
    
    @Override
    public void init(ServletConfig config) throws ServletException {
    	map.put("/home.do", new HomeCommand());						// 처음 접근하는 페이지
    	map.put("/memberList.do", new MemberList());				// 멤버 목록 보기
    	map.put("/loginForm.do", new LoginForm());					// 로그인 폼 호출
    	map.put("/memberLogin.do", new MemberLogin());				// 로그인 처리
    	map.put("/logout.do", new Logout());						// 로그아웃 처리
    	map.put("/memberSignupForm.do", new MemberSignupForm());	// 로그아웃 처리
    	map.put("/memberSignup.do", new MemberSignup());			// 로그아웃 처리
    	map.put("/ajaxIdCheck.do", new AjaxIdCheck());				// 아이디 중복 체크(ajax)
    	map.put("/memberDelete.do", new MemberDelete());				// 회원 삭제
    }

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 실제 요청을 분석하고 처리해서 결과 page를 돌려주는 역할
		request.setCharacterEncoding("utf-8");
		String uri = request.getRequestURI();
		String contextPath = request.getContextPath();
		String page = uri.substring(contextPath.length());
		
		StringBuffer url = request.getRequestURL();
		System.out.println("contextPath : " + contextPath);
		System.out.println("uri : " + uri);
		System.out.println("url : " + url);
		System.out.println("page : " + page);
		
		Command command = map.get(page);	// Command command = new HomeCommand();
		String viewPage = command.run(request, response);
		
		// view resolve
		if(viewPage != null && !viewPage.endsWith(".do")) {
			if (viewPage.startsWith("ajax:")) {	// ajax 처리하는 view resolve
				response.setContentType("text/html");
				response.getWriter().append(viewPage.substring(5));
				return;
			} else {
				viewPage = "WEB-INF/views/" + viewPage + ".jsp";
			}
		}
		
		RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
		dispatcher.forward(request, response);
		
	}


}
