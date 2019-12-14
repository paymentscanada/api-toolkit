package ca.payments.example.restclient;

import ca.payments.example.restclient.model.AccessTokenModel;
import ca.payments.example.restclient.model.ExampleResponseModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;

import static java.lang.System.exit;

@SpringBootApplication
public class RestclientApplication implements CommandLineRunner {

	private static final Logger log = LoggerFactory.getLogger(RestclientApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(RestclientApplication.class, args);
		exit(0);
	}

	@Override
	public void run(String... args) {
		RestTemplate restTemplate = new RestTemplate();

		String fif_branch_url = "https://api.payments.ca/fif-branch-sandbox/branches/";
		MediaType fifMediaType = new MediaType("application", "vnd.fif.api.v1+json");

		String url = fif_branch_url + "123456789";
		String bearer = getBearerToken(restTemplate);

		HttpHeaders headers = new HttpHeaders();

		headers.setAccept(Collections.singletonList(fifMediaType));
		headers.setBearerAuth(bearer);

		HttpEntity<String> entity = new HttpEntity<>(headers);

		ResponseEntity<ExampleResponseModel> respEntity = restTemplate.exchange(url, HttpMethod.GET, entity, ExampleResponseModel.class);
		log.info("Branch details" + respEntity.toString());
		return;
	}


	public String getBearerToken(RestTemplate restTemplate){

		String gateway_auth_url = "https://api.payments.ca/accesstoken";
		String CONSUMER_KEY = "nlocOqxPpCjBG3RnWfkAbFHIwVGXA2FT";
		String CONSUMER_SECRET = "91muUGoA7ZNaoo1r";

		HttpHeaders headers = new HttpHeaders();

		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		headers.setBasicAuth(CONSUMER_KEY, CONSUMER_SECRET);

		MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("grant_type", "client_credentials");

		HttpEntity<?> entity = new HttpEntity<>(body, headers);
		ResponseEntity<AccessTokenModel> respEntity = restTemplate.exchange(gateway_auth_url, HttpMethod.POST, entity, AccessTokenModel.class);

		log.info("Bearer token: " + respEntity.toString());
		return respEntity.getBody().getAccess_token();
	}

}
