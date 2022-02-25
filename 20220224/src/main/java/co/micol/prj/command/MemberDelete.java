package co.micol.prj.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.micol.prj.common.Command;
import co.micol.prj.member.service.MemberService;
import co.micol.prj.member.serviceImpl.MemberServiceImpl;
import co.micol.prj.member.vo.MemberVO;

public class MemberDelete implements Command {

	@Override
	public String run(HttpServletRequest request, HttpServletResponse response) {
		// 회원 삭제
		MemberService memberDao = new MemberServiceImpl();
		MemberVO vo = new MemberVO();
		vo.setId(request.getParameter("id"));
		System.out.println(vo.getId());
		int n = memberDao.memberDelete(vo);
		if(n != 0) {
			return "memberList.do";
		} else {
			request.setAttribute("message", "회원삭제가 안됨");
			return "member/memberLogin";
		}
	}
}
