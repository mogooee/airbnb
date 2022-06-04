package teamproject.airbnb.controller;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import teamproject.airbnb.service.RoomQuantityDto;

@Data
@AllArgsConstructor
public class RoomQuantityResponseDto {

	private String strPriceRange;
	private String strAveragePrice;
	private List<Long> priceRange;
	private List<Long> roomQuantity;

	public static RoomQuantityResponseDto from(RoomQuantityDto roomQuantityDto) {

		String minimumFormat = roomQuantityDto.getMinimumPriceFormat();
		String maximumFormat = roomQuantityDto.getMaximumPriceFormat();
		String averageFormat = roomQuantityDto.getAveragePriceFormat();

		String strPriceRange = "\\" + minimumFormat + "-" + maximumFormat + "+";
		String strAveragePrice = "평균 1박 요금은 \\" + averageFormat + "입니다.";

		return new RoomQuantityResponseDto(strPriceRange, strAveragePrice,
			roomQuantityDto.getPriceRange(),
			roomQuantityDto.getRoomQuantity());
	}
}
