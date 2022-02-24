package co.micol.prj.member.service;

import java.util.List;

import co.micol.prj.member.vo.MemberVO;

public interface MemberService {
	
	List<MemberVO> memberSelectList();	// 전체 회원 목록 R
	MemberVO memberSelect(MemberVO vo);	// 1명 조회 R
	int memberInsert(MemberVO vo);		// 회원 가입 C
	int memberUpdate(MemberVO vo);		// 화원정보 수정 U
	int memberDelete(MemberVO vo);		// 회원정보 삭제 D
	
	boolean isIdCheck(String id);		// id 중복 체크 - 이미 존재하면 false
	MemberVO memberLogin(MemberVO vo);	// 로그인
	
}
