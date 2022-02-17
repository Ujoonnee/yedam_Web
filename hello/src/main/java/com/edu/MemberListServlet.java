package com.edu;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class MemberListServelet
 */
@WebServlet("/MemberListServlet")
public class MemberListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberListServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		
//		MemberDAO dao = new MemberDAO();
//		List<Map<String,String>> list = dao.getMemberList();
//		
//		PrintWriter out = response.getWriter();
//		out.print("<h3>Hello,World</h3>");
//		out.print("<ul>");
//		for(Map<String, String> map : list) {
//			out.print("<li>" + map.get("name") + ", " + map.get("age") + ", " + map.get("score"));
//		}
//		out.print("</ul>");
//		out.print("<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>");
		
		
//		gson library 이용
		
		PrintWriter out = response.getWriter();
		
		MemberDAO dao = new MemberDAO();
		List<Map<String,String>> list = dao.getMemberList();
		
		Gson gson = new GsonBuilder().create();
		out.print(gson.toJson(list));
		
		}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
