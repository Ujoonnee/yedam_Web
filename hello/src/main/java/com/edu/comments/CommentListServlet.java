package com.edu.comments;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class CommentListServlet
 */
@WebServlet("/CommentListServlet")
public class CommentListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public CommentListServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		
		PrintWriter out = response.getWriter();
		
		// 댓글 항목을 json으로 가져옴
		CommentDAO dao = new CommentDAO();
		List<Comment> list = dao.selectAll();
		
		Gson gson = new GsonBuilder().create();
		out.print(gson.toJson(list));
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
