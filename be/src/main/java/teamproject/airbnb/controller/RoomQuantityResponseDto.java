package teamproject.airbnb.controller;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import teamproject.airbnb.service.RoomQuantityDto;

@Data
@AllArgsConstructor
public class RoomQuantityResponseDto {

	private Long minimumPrice;
	private Long maximumPrice;
	private List<Long> priceList;

	public static RoomQuantityResponseDto from(RoomQuantityDto roomQuantityDto) {

		return new RoomQuantityResponseDto(
			roomQuantityDto.getMinimumPrice(),
			roomQuantityDto.getMaximumPrice(),
			roomQuantityDto.getPriceList());
	}
}
