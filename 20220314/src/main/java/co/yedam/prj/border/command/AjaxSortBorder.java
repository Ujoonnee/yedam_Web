package co.yedam.prj.border.command;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import co.yedam.prj.border.service.BorderService;
import co.yedam.prj.border.service.BorderVO;
import co.yedam.prj.border.serviceImpl.BorderServiceImpl;
import co.yedam.prj.common.Command;

public class AjaxSortBorder implements Command {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {
		BorderService borderDao = new BorderServiceImpl();
		
		String key = request.getParameter("key");
		
		List<BorderVO> list = borderDao.borderSortList(key);

		String data = "";
		try {
			data = new ObjectMapper().writeValueAsString(list);	// json 객체로 변환
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return "ajax:" + data;
	}

}
