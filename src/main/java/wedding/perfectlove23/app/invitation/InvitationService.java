package wedding.perfectlove23.app.invitation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvitationService {
	@Autowired
	private InvitationRepository invitationRepository;

	public Invitation addInvitation(Invitation invitation) {
		return invitationRepository.save(invitation);
	}
	
	public Optional<Invitation> getInvitation(int id) {
		return invitationRepository.findById(id);
	}
	
	public Optional<Invitation> getInvitationByMobileNumber(String mobileNumber) {
		return invitationRepository.findByMobileNumber(mobileNumber);
	}
	
	public List<Invitation> getInvitationGreatherThan(int id) {
		return invitationRepository.findFirst10ByIdGreaterThanEqual(id);
	}
	
	public List<Invitation> getAllInvitation() {
		return (List<Invitation>) invitationRepository.findAll();
	}
}
