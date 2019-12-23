This is a sample spring-boot application that connects to the Payments Canada API and gets a sandboxed branch. The following happen:
1. Gets a bearer token with the provided consumer key and consumer secret.
2. Fetches a branch from the sandbox branch-sandbox item using the provided bearer token.

This is to be used as a guide only, with no guarantees made, and is NOT production ready code. Certain values, example: (consumer_key, consumer_secret) will need to be replaced. For more information, visit https://developer.payments.ca/getting-started

### Quick Guide to Execute the Application
- Execute `./mvnw clean install`
- Update the Consumer Key and Consumer Secret (extracted from the Sandbox Branch App in Payments Canada Developer Portal) in the src/main/resources application.
- Execute the Application by running the command `./mvnw spring-boot:run -Dspring-boot.run.arguments="--api-branch-dprn=9_DIGIT_DPRN"` replacing 9_DIGIT_DPRN with a DPRN. 
  - Alternatively, you can run `java -jar target/restclient-0.0.1-SNAPSHOT.jar --api-branch-dprn=9_DIGIT_DPRN` replacing 9_DIGIT_DPRN with a DPRN.
