package wedding.perfectlove23.app.configuration;

import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		exposeDirectory("guests-photo", registry);
	}

	private void exposeDirectory(String dirName, ResourceHandlerRegistry resourceHandlerRegistry) {
		Path uploadDir = Paths.get(dirName);
		String uploadPath = uploadDir.toFile().getAbsolutePath();
		if (dirName.startsWith("../")) {
			dirName = dirName.replace("../", "");
		}
		resourceHandlerRegistry.addResourceHandler("/" + dirName + "/**").addResourceLocations("file:/" + uploadPath + "/");

	}
}
