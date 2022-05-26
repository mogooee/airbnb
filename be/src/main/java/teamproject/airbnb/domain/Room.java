package teamproject.airbnb.domain;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Room {

	@Id
	@GeneratedValue
	@Column(name = "ROOM_ID")
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "LOCATION_ID")
	private Location location;

	@OneToMany(mappedBy = "room")
	private List<Reservation> reservations = new ArrayList<>();

	@OneToMany(mappedBy = "room")
	private List<Image> images = new ArrayList<>();

	@OneToMany(mappedBy = "room")
	private List<Review> reviews = new ArrayList<>();

	private String name;
	private String description;
	private String furnitureDescription;
	private Long price;
	private Long remainingRoomCount;
	private Long reviewNumber;
	private Long discount;
	private Long cleaningFee;
	private Long serviceCharge;
	private Long lodgingTax;
}
