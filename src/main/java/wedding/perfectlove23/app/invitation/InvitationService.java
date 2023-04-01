package wedding.perfectlove23.app.invitation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvitationService {
	@Autowired
	private InvitationRepository invitationRepository;

	public Invitation addInvitation(Invitation invitation) {
		return invitationRepository.save(invitation);
	}
}
