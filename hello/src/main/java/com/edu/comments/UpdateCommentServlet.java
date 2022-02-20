package com.edu.comments;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/UpdateCommentServlet")
public class UpdateCommentServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public UpdateCommentServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		
		PrintWriter out = response.getWriter();
		
		String id = request.getParameter("id");
		String name = request.getParameter("name");
		String content= request.getParameter("content");
		
		Comment comment = new Comment();
		comment.setId(id);
		comment.setName(name);
		comment.setContent(content);
		
		CommentDAO dao = new CommentDAO();
		dao.updateComment(comment);
		
		Gson gson = new GsonBuilder().create();
		out.print(gson.toJson(comment));
	}

}
