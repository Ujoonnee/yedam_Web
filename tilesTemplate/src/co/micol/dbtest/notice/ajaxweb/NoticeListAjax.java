package co.micol.dbtest.notice.ajaxweb;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.micol.dbtest.common.DbCommand;

public class NoticeListAjax implements DbCommand {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) {
		
		
		
		return "notice/noticeListAjax.tiles";
	}

}
