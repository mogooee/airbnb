package teamproject.airbnb.controller;

import java.time.LocalDate;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import teamproject.airbnb.service.RoomService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/room")
public class RoomController {

	private final RoomService roomService;

	// TODO
	//1-1) GNB 마이페이지 조회:(로그인이 되어 있을 시) / response: 유저 이름,예약,위시리스트 반환

	//1-2) 요금 바: request: 체크인,체크아웃 / response: 요금 최소값,요금 최대값,요금별 숙소 개수
	@GetMapping("/quantity")
	public RoomQuantityResponseDto loadQuantity(@RequestParam("checkIn") LocalDate checkIn) {

		return RoomQuantityResponseDto.from(roomService.loadQuantity(checkIn));
	}

	// TODO
	//1-3) 검색 바: request: 숙소 개수,체크인,체크아웃,요금 최소값,요금 최대값,게스트 수,어린이 수
	/// response: 숙소 개수,체크인,체크아웃,요금 최소값,요금 최대값,게스트 수,어린이 수
	//, (배열)roomDto{id,숙소이름,숙소설명,가구설명,평균평점,후기건수,가격,총액,찜 여부,주소,좌표}
	@PostMapping("/search")
	public RoomSimpleInfoResponseDto loadInfoList(
		@RequestBody RequestRoomSearchInfo requestRoomSearchInfo) {

		return RoomSimpleInfoResponseDto.from(roomService.loadSimpleInfoList(requestRoomSearchInfo),
			requestRoomSearchInfo);
	}

}
