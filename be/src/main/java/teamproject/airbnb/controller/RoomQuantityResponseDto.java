package teamproject.airbnb.controller;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import teamproject.airbnb.service.RoomQuantityDto;

@Data
@AllArgsConstructor
public class RoomQuantityResponseDto {

	private String minimumFormat;
	private String maximumFormat;
	private String averageFormat;
	private List<Long> priceRange;
	private List<Long> roomQuantity;

	public static RoomQuantityResponseDto from(RoomQuantityDto roomQuantityDto) {

		String minimumFormat = roomQuantityDto.getMinimumPriceFormat();
		String maximumFormat = roomQuantityDto.getMaximumPriceFormat();
		String averageFormat = roomQuantityDto.getAveragePriceFormat();

		return new RoomQuantityResponseDto(minimumFormat, maximumFormat, averageFormat,
			roomQuantityDto.getPriceRange(), roomQuantityDto.getRoomQuantity());
	}
}
