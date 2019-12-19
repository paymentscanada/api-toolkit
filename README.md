This is a sample spring-boot application that connects to the Payments Canada API, gets a bearer token, and makes an API request to fetch a branch-sandbox item.

This is to be used as a guide only, with no guarentees made, and is NOT production ready code. Certain values, example: (consumer_key, consumer_secret) will need to be replaced. For more information, visit https://developer.payments.ca/getting-started

### Quick Guide to Execute the Application (
- To intall Maven Wrapper execute `mvn -N io.takari:maven:wrapper`
- Execute `./mvnw clean install`
- Update the Consumer Key and Consumer Secret (extracted from the Sandbox Branch App in Payments Canada Developer Portal)
- Change the DPRN to Nine-Digit numeric value
- Execute the Application by running the command `./mvnw spring-boot:run`
