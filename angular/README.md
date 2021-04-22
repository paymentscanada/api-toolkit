# Angular API Sample

This is a sample angular application that connects to the Payments Canada API and gets a sandboxed apis. The following happen depending on the page:

1. Gets a bearer token with the provided consumer key and consumer secret.
2. Fetches the requested resource from the hackathon api using the provided bearer token.

This is to be used as a guide only, with no guarantees made, and is NOT production ready code. Certain values, example: (consumer_key, consumer_secret) will need to be replaced. For more information, visit https://hackathon.payments.ca/getting-started

## Quick Guide to Execute the Application
1. Run `npm install` to install the dependencies
2. Edit the file src/environments/environment.ts to use your consumer key and consumer secret created from My Apps.
   * **Note**: Not all values are needed, you only need the consumer key and consumer secret for the API you are interested in
2. Run `npm start` to start the application.
3. In your browser, navigate to `http://localhost:4200` to access the app.
