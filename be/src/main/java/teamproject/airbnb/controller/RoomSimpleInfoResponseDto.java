package teamproject.airbnb.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import teamproject.airbnb.service.RoomSimpleInfoDto;

@Data
@AllArgsConstructor
public class RoomSimpleInfoResponseDto {

	LocalDate checkIn;
	LocalDate checkOut;
	Long guestCount;
	Long kidCount;
	Long minimumPrice;
	Long maximumPrice;
	List<RoomSimpleInfoDto> roomSimpleInfoDtos = new ArrayList<>();

	public static RoomSimpleInfoResponseDto from(List<RoomSimpleInfoDto> roomSimpleInfoDtos,
		RequestRoomSearchInfo requestRoomSearchInfo) {

		LocalDate checkIn = requestRoomSearchInfo.getCheckIn();
		LocalDate checkOut = requestRoomSearchInfo.getCheckOut();
		Long guestCount = requestRoomSearchInfo.getGuestCount();
		Long kidCount = requestRoomSearchInfo.getKidCount();
		Long minimumPrice = requestRoomSearchInfo.getMinimumPrice();
		Long maximumPrice = requestRoomSearchInfo.getMaximumPrice();

		return new RoomSimpleInfoResponseDto(checkIn, checkOut, guestCount, kidCount, minimumPrice,
			maximumPrice, roomSimpleInfoDtos);
	}
}
