This is a sample nodejs based application using request and it connects to the Payments Canada API and gets a sandboxed branch. The following happen:
1. Gets a bearer token with the provided consumer key and consumer secret.
2. Fetches a branch from the hackathon branch item using the provided bearer token.

This is to be used as a guide only, with no guarantees made, and is NOT production ready code. Certain values, example: (consumer_key, consumer_secret) will need to be replaced. For more information, visit https://developer.payments.ca/getting-started

### Quick Guide to Execute the Application
- Update the Consumer Key and Consumer Secret in the config.js
  - For branch API, the branchKeys values for apiConsumerKey and apiConsumerSecret must be replaced with your consumer key and secret from hackathon app that was created
  - For extract API, the extractsKeys values for apiConsumerKey and apiConsumerSecret must be replaced with your consumer key and secret from hackathon app that was created
- Execute `npm install` to build the application
- To receive a single branch, execute the Application by running the command `node index.js branch --dprn="9_DIGIT_DPRN"` replacing 9_DIGIT_DPRN with a DPRN. 
  - Alternatively, you can launch via npm by running the command `npm start branch -- --dprn="9_DIGIT_DPRN"` replacing 9_DIGIT_DPRN with a DPRN. 
- To receive branch extracts, execute the Application by running the command `node index.js extract`.
  - Alternatively, you can launch via npm by running the command `npm start extract`
