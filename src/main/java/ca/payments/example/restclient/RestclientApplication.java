package ca.payments.example.restclient;

import ca.payments.example.restclient.model.ExampleResponseModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;

@SpringBootApplication
public class RestclientApplication {

	private static final Logger log = LoggerFactory.getLogger(RestclientApplication.class);
	private static MediaType fifMediaType = new MediaType("application", "vnd.fif.api.v1+json");
	private static String gateway_auth_url = "https://api.payments.ca/accesstoken";
	private static String fif_branch_url = "https://api.payments.ca/fif-branch-sandbox/branches/";

	public static void main(String[] args) {
		SpringApplication.run(RestclientApplication.class, args);
	}

	@Bean
	public CommandLineRunner run()  {
		return args -> {

			String url = fif_branch_url + "123456789";
			String bearer = "BEARER_TOKEN";

			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();

			headers.setAccept(Collections.singletonList(fifMediaType));
			headers.setBearerAuth(bearer);

			HttpEntity<?> entity = new HttpEntity<>(headers);

			try {
				ResponseEntity<ExampleResponseModel> respEntity = restTemplate.exchange(url, HttpMethod.GET, entity, ExampleResponseModel.class);
				log.info(respEntity.toString());
			}catch (Exception ex){
				log.error("Exception caught: ", ex);
			}

		};
	}

}
