package co.yedam.prj.member.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.prj.common.Command;
import co.yedam.prj.member.service.MemberService;
import co.yedam.prj.member.service.MemberVO;
import co.yedam.prj.member.serviceImpl.MemberServiceImpl;

public class MemberSearch implements Command {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {
		MemberService memberDao = new MemberServiceImpl();
		MemberVO vo = new MemberVO();
		vo.setId("hong@hong.com");
		vo.setPassword("1234");
		vo = memberDao.selectMember(vo);

		if (vo != null) {
			request.setAttribute("member", vo);
			return "member/memberSearch";
		} else {
			request.setAttribute("message", "존재하지 않거나 탈퇴한 회원입니다.");
			return "member/memberError";
		}
		
	}

}
