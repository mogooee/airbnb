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
	private List<Long> priceRange;
	private List<Long> roomQuantity;

	public static RoomQuantityResponseDto from(RoomQuantityDto roomQuantityDto) {

		return new RoomQuantityResponseDto(
			roomQuantityDto.getMinimumPrice(),
			roomQuantityDto.getMaximumPrice(),
			roomQuantityDto.getPriceRange(),
			roomQuantityDto.getRoomQuantity());
	}
}
