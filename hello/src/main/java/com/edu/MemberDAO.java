package com.edu;

import java.sql.SQLException;
import java.util.Map;

public class MemberDAO extends DAO{
	// pstmt, conn, rs, connect(), disconnect()
	
	public void insertMember(Map<String, String> map) {
		String sql = "insert into member values(?,?,?)";
		try {
			connect();
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, map.get("name"));
			pstmt.setString(2, map.get("age"));
			pstmt.setString(3, map.get("score"));
			
			int r = pstmt.executeUpdate();
			System.out.println(r + "건 입력");
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		
		
	}
}
