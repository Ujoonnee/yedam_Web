package com.edu.comments;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/DeleteCommentServlet")
public class DeleteCommentServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public DeleteCommentServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("id");
		CommentDAO dao = new CommentDAO();
		if(dao.deleteComment(id)) {
			// {"retCode": "OK"}
			response.getWriter().print("{\"retCode\": \"OK\"}");
		} else {
			// {"retCode": "NG"}
			response.getWriter().print("{\"retCode\": \"NG\"}");
		}
		
	}

}
