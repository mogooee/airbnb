package teamproject.airbnb.api;

import java.time.LocalDate;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestRoomSearchInfo {

	private Long roomCount;
	private Long minimumPrice;
	private Long maximumPrice;
	private Long guestCount;
	private Long kidCount;
	private List<Long> wishList;
	LocalDate checkIn;
	LocalDate checkOut;
}
