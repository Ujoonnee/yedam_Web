package co.yedam.prj.member.service;

import java.util.List;

public interface MemberMapper {
	List<MemberVO> selectMemberList();
	MemberVO selectMember(MemberVO vo);
	int insertMember(MemberVO vo);
	int updateMember(MemberVO vo);
	int deleteMember(MemberVO vo);
	
	boolean isIdCheck(String str);	// 사용 가능하면 true == 이미 존재하면 false
}
