package teamproject.airbnb.service;

import java.util.Arrays;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import teamproject.airbnb.domain.Room;

@Data
@AllArgsConstructor
public class RoomQuantityDto {

	private Long minimumPrice;
	private Long maximumPrice;
	private List<Long> priceRange;
	private List<Long> roomQuantity;

	public static RoomQuantityDto from(List<Room> rooms) {

		// 가격을 기준으로 내림차순으로 정렬한 배열
		Long[] priceArray = rooms.stream()
			.mapToLong(x -> x.getPrice())
			.sorted()
			.boxed()
			.toArray(Long[]::new);

		Long maximumPrice = priceArray[0];
		Long minimumPrice = priceArray[priceArray.length - 1];

		// 가격 중에 중복되는거 제거 해서 가격범위 만들기
		Long[] priceRange = rooms.stream()
			.mapToLong(x -> x.getPrice())
			.sorted()
			.distinct()
			.boxed()
			.toArray(Long[]::new);

		//===================

		Long[] roomQuantity = new Long[priceRange.length];
		int count = 0;
		for (int i = 0; i < priceArray.length; i++) {

			// 방개수를 ++
			roomQuantity[count]++;
			if (i + 1 < priceArray.length) {
				// 현 인덱스와 다음 인덱스의 값이 다르면 count를 ++
				if (priceArray[i] != priceArray[i + 1]) {
					count++;
				}
			}
		}

		return new RoomQuantityDto(
			minimumPrice,
			maximumPrice,
			Arrays.stream(priceRange).toList(),
			Arrays.stream(roomQuantity).toList());
	}
}
