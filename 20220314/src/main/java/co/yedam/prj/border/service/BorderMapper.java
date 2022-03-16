package co.yedam.prj.border.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

public interface BorderMapper {
	List<BorderVO> borderSelectList();
	BorderVO borderSelect(BorderVO vo);
	int borderInsert(BorderVO vo);
	int borderUpdate(BorderVO vo);
	int borderDelete(BorderVO vo);
	int borderUpdateHit(int id);
	
	// 매개변수가 2개 이상일 때
	// @Param("sth") String sth => 넘어온 sth 값을 String sth 에 담겠다
	List<BorderVO> borderSelectSearchList(@Param("key") String key, @Param("val") String val);	// 검색 항목, 검색 내용
	List<BorderVO> borderSortList(String key);
}
