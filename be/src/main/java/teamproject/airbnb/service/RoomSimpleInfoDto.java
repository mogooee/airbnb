package teamproject.airbnb.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import teamproject.airbnb.domain.Review;
import teamproject.airbnb.domain.Room;

@Data
@AllArgsConstructor
public class RoomSimpleInfoDto {

	private String name;
	private String address;
	private String description;
	private String furnitureDescription;
	private Long averageRating;
	private Long reviewNumber;
	private Long price;
	private Long totalPrice;
	private Boolean isBookmark;

	public static RoomSimpleInfoDto of(Room room, LocalDate checkIn, LocalDate checkOut, List<Long> wishList) {

		Long averageRating =
			room.getReviews().stream().mapToLong(Review::getRating).sum() / room.getReviews()
				.size();

		Long reviewCount = Long.valueOf(room.getReviews().size());

		Period period = Period.between(checkIn, checkOut);
		Long totalPrice = room.getPrice() * period.getDays();

		Boolean isBookmark = wishList.contains(room.getId());

		return new RoomSimpleInfoDto(room.getName(), room.getAddress(), room.getDescription(),
			room.getFurnitureDescription(), averageRating, reviewCount,room.getPrice(),totalPrice,isBookmark);
	}
}
