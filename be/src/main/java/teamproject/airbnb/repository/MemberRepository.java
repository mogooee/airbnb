package teamproject.airbnb.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import teamproject.airbnb.domain.Member;

@Repository
public class MemberRepository {

	@PersistenceContext
	private EntityManager em;

	public void save(Member member) {
		em.persist(member);
	}

	public Member findOne(Long id) {
		return em.find(Member.class, id);
	}
}
