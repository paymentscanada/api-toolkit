package ca.payments.example.restclient;

import ca.payments.example.restclient.model.ExampleResponseModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class RestclientApplication {


	private static final Logger log = LoggerFactory.getLogger(RestclientApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(RestclientApplication.class, args);
	}

	@Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}

	@Bean
	public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
		return args -> {
			ExampleResponseModel erm = restTemplate.getForObject(
					"https://gturnquist-quoters.cfapps.io/api/random", ExampleResponseModel.class);
			log.info(erm.toString());
		};
	}

}
