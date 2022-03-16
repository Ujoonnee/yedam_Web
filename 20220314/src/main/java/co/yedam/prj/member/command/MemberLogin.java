package co.yedam.prj.member.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.prj.common.Command;
import co.yedam.prj.member.service.MemberService;
import co.yedam.prj.member.service.MemberVO;
import co.yedam.prj.member.serviceImpl.MemberServiceImpl;

public class MemberLogin implements Command {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {
		// 로그인 처리
		MemberService memberDao = new MemberServiceImpl();
		MemberVO vo = new MemberVO();
		vo.setId("hong@hong.com");
		vo.setPassword("1234");
		vo = memberDao.selectMember(vo);
		if(vo != null) {
			// 로그인 성공 세션 처리
			request.setAttribute("message", vo.getName() + " 님 환영합니다.");
		} else {
			request.setAttribute("message", "아이디 또는 패스워드가 틀립니다.");
		}
		
		return "member/memberLogin";
	}

}
