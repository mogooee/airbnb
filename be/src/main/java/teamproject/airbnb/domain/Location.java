package teamproject.airbnb.domain;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Location {

	@Id
	@GeneratedValue
	@Column(name = "LOCATION_ID")
	private Long id;

	private String name;

	@OneToMany(mappedBy = "location")
	private List<Room> rooms = new ArrayList<>();
}
