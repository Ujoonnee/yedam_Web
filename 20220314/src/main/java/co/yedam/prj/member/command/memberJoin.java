package co.yedam.prj.member.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.prj.common.Command;
import co.yedam.prj.member.service.MemberService;
import co.yedam.prj.member.service.MemberVO;
import co.yedam.prj.member.serviceImpl.MemberServiceImpl;

public class memberJoin implements Command {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {
		// 회원가입
		MemberService memberDao = new MemberServiceImpl();
		MemberVO vo = new MemberVO();
		vo.setId(request.getParameter("id"));
		vo.setPassword(request.getParameter("password"));
		vo.setName(request.getParameter("name"));
		vo.setTel(request.getParameter("tel"));
		vo.setAddress(request.getParameter("address"));

		int n = memberDao.insertMember(vo);
		
		if (n != 0) {
			request.setAttribute("message", "회원 가입 성공");
		} else {
			request.setAttribute("message", "회원 가입 실패");
		}
		
		return "member/memberJoin";
	}

}
