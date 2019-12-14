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

/**
 * This is a sample spring-boot application that connects to the Payments Canada API,
 * gets a bearer token, and makes an API request to fetch a branch-sandbox item.
 *
 * This is to be used as a guide only, and is NOT production ready code.
 * Values (consumer_key + secret), (dprn) will need to be replaced. For more information, visit
 * https://developer.payments.ca/getting-started
 */

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

		//base URL for the branch-sandbox
		String fif_branch_sandbox_url = "https://api.payments.ca/fif-branch-sandbox/branches/";

		//proper media type for the request
		MediaType fifMediaType = new MediaType("application", "vnd.fif.api.v1+json");

		//complete URL, comprised of sandbox_url and DPRN
		String url = fif_branch_sandbox_url + "REPLACE_WITH_DPRN";

		//call the bearer token method and generate a bearer token
		String bearer = getBearerToken(restTemplate);

		HttpHeaders headers = new HttpHeaders();

		//set the accept header to the fif media type
		headers.setAccept(Collections.singletonList(fifMediaType));
		//set the bearer token
		headers.setBearerAuth(bearer);

		HttpEntity<String> entity = new HttpEntity<>(headers);

		//make the API call
		ResponseEntity<ExampleResponseModel> respEntity = restTemplate.exchange(url, HttpMethod.GET, entity, ExampleResponseModel.class);
		log.info("Branch details" + respEntity.toString());
	}


	public String getBearerToken(RestTemplate restTemplate){

		//base URL for the access token URL
		String gateway_auth_url = "https://api.payments.ca/accesstoken";

		//your consumer key - this is generated when you create an 'app' for the product - in this example the fif branch sandbox
		String CONSUMER_KEY = "REPLACE_CONSUMER_KEY";

		//your consumer secret - this is generated when you create an 'app' for the product - in this example the fif branch sandbox
		String CONSUMER_SECRET = "CONSUMER_SECRET";

		HttpHeaders headers = new HttpHeaders();

		//set proper media type
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		//set basic auth with the consumer key + secret
		headers.setBasicAuth(CONSUMER_KEY, CONSUMER_SECRET);

		//you must define a body with the grant type equal to client_credentials for the request to be valid.
		MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("grant_type", "client_credentials");

		//set the HTTP entity
		HttpEntity<?> entity = new HttpEntity<>(body, headers);

		//make the POST to get the object which contains the access token
		ResponseEntity<AccessTokenModel> respEntity = restTemplate.exchange(gateway_auth_url, HttpMethod.POST, entity, AccessTokenModel.class);

		log.info("Bearer token: " + respEntity.toString());
		return respEntity.getBody().getAccess_token();
	}

}
