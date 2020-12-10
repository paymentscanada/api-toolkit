# Payments Rail Angular API Sample

This is a sample angular application that connects to the Payments Canada API and retrieves the data 
from the fictionalized APIs. 
This sample and the APIs are built for the purpose of allowing consumers to envision what a futuristic payments rail may look like and function.

The following happen depending on the page:

1. Gets a bearer token with the provided consumer key and consumer secret.
2. Fetches the requested resource from the sandbox item using the provided bearer token.

This is to be used as a guide only, with no guarantees made, and is NOT production ready code. Certain values, example: (consumer_key, consumer_secret) will need to be replaced. For more information, visit https://developer.payments.ca/getting-started

## App screenshots and descriptions

These can be found on the [docs](docs/home.md) page.

## Requirements
* [NodeJS](https://nodejs.org/en/) must be installed


## Quick Guide to Execute the Application
1. Run `npm install` to install the dependencies
2. Edit the file src/environments/environment.ts to use your consumer key and consumer secret created from My Apps in the developer portal.
2. Run `npm start` to start the application.
3. In your browser, navigate to `http://localhost:4200` to access the app.


## To Deploy Application to GCP

1. set proper values in environment.prod.ts
2. ng build --prod
3. gcloud config set project `PROJECT_NAME`
4. gcloud app deploy
5. gcloud app browse

