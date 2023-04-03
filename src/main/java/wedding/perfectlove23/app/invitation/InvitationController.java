package wedding.perfectlove23.app.invitation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class InvitationController {
	@Autowired
	private InvitationService invitationService;


	@RequestMapping(method = RequestMethod.POST, value = "/invitation")
	public Invitation addInvitation(@RequestBody Invitation invitation) {
		return invitationService.addInvitation(invitation);
	}


	@RequestMapping("{mobileNumber}/invitation")
	public Optional<Invitation> getInvitationByMobileNumber(@PathVariable String mobileNumber) {
		return invitationService.getInvitationByMobileNumber(mobileNumber);
	}

	@RequestMapping("/invitations")
	public List<Invitation> getAllInvitation() {
		return invitationService.getAllInvitation();
	}
}
