package co.yedam.prj.member.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.prj.common.DataSource;
import co.yedam.prj.member.service.MemberMapper;
import co.yedam.prj.member.service.MemberService;
import co.yedam.prj.member.service.MemberVO;

public class MemberServiceImpl implements MemberService {
	// openSession(true) -> auto commit
	private SqlSession sqlSession = DataSource.getInstance().openSession(true);
	// sql mapper 를 가져옴
	private MemberMapper map = sqlSession.getMapper(MemberMapper.class);

	@Override
	public List<MemberVO> selectMemberList() {
		// 전체 회원 목록
		return map.selectMemberList();
	}

	@Override
	public MemberVO selectMember(MemberVO vo) {
		// 한 명 또는 로그인
		return map.selectMember(vo);
	}

	@Override
	public int insertMember(MemberVO vo) {
		// 회원 등록
		return map.insertMember(vo);
	}

	@Override
	public int updateMember(MemberVO vo) {
		// 회원 정보 변경
		return map.updateMember(vo);
	}

	@Override
	public int deleteMember(MemberVO vo) {
		// 회원 정보 삭제
		return map.deleteMember(vo);
	}

	@Override
	public boolean isIdCheck(String str) {
		// id 중복 체크
		return map.isIdCheck(str);
	}

}
