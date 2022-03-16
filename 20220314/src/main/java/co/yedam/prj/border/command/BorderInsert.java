package co.yedam.prj.border.command;

import java.sql.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.prj.border.service.BorderService;
import co.yedam.prj.border.service.BorderVO;
import co.yedam.prj.border.serviceImpl.BorderServiceImpl;
import co.yedam.prj.common.Command;

public class BorderInsert implements Command {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {
		BorderService borderDao = new BorderServiceImpl();
		BorderVO vo = new BorderVO();
		vo.setBorderWriter(request.getParameter("borderWriter"));
		vo.setBorderDate(Date.valueOf(request.getParameter("borderDate")));
		vo.setBorderTitle(request.getParameter("borderTitle"));
		vo.setBorderContents(request.getParameter("borderContents"));
		int n = borderDao.borderInsert(vo);
		
		if (n != 0) return "borderList.do";
		
		request.setAttribute("message", "게시글 등록에 실패했습니다.");
		return "border/borderError";
	}

}
