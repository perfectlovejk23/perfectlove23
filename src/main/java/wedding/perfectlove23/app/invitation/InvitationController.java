package wedding.perfectlove23.app.invitation;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import wedding.perfectlove23.app.fileuploadutil.FileUploadUtil;

@RestController
@CrossOrigin
public class InvitationController {
	@Autowired
	private InvitationService invitationService;

	@RequestMapping(method = RequestMethod.PUT, value = "/invitation")
	public Invitation addInvitation(@RequestBody Invitation invitation) {
		return invitationService.addInvitation(invitation);
	}

	@RequestMapping(method = RequestMethod.POST, value = "image/invitation")
	public Invitation addImage(@RequestParam("image") MultipartFile multipartFile) throws IOException {
		Invitation invitation = new Invitation();

		Invitation savedInvitation = invitationService.addInvitation(invitation);

		String uploadDir = "guests-photo/";

		FileUploadUtil.saveFile(uploadDir, String.valueOf(savedInvitation.getId()) + ".jpg", multipartFile);

		return savedInvitation;
	}
}
