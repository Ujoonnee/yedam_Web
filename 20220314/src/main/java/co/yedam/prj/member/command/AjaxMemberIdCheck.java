package co.yedam.prj.member.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.prj.common.Command;
import co.yedam.prj.member.service.MemberService;
import co.yedam.prj.member.serviceImpl.MemberServiceImpl;

public class AjaxMemberIdCheck implements Command {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {
		// ajax 로 아이디 중복체크
		MemberService memberDao = new MemberServiceImpl();
		String str = request.getParameter("str");
		boolean b = memberDao.isIdCheck(str);
		String result;
		
		if(!b) {
			result = "ajax:0";	// 이미 존재
		} else {
			result = "ajax:1";	// 사용가능
		}
		
		return result;
	}

}
