package co.micol.prj.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.micol.prj.common.Command;
import co.micol.prj.member.service.MemberService;
import co.micol.prj.member.serviceImpl.MemberServiceImpl;

public class MemberList implements Command {

	@Override
	public String run(HttpServletRequest request, HttpServletResponse response) {
		// 멤버 목록 보기
		MemberService memberDao = new MemberServiceImpl();	// dao 생성
		request.setAttribute("members", memberDao.memberSelectList());	// 멤버리스트를 실행한 결과를 담음
		return "member/memberList";
	}

}
