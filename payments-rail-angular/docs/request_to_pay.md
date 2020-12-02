[< Back](home.md)

# Request To Pay
This interface simulates what a request to pay may look like and will allow any 
business or individual wishing to receive a payment, to send an electronic 
request for that payment to the debtor account. The request will be received 
by the payer showing the requested amount and the due date.

When a user in on the Request To Pay, they are shown a short description,
a panel to enter the information and a panel that displays what is 
sent and received from the API.
The user must enter any fake Financial Institution ID and 
Account Number before moving onto the second step.
The user will see the JSON request that will be sent modified live.
![Screenshot of initial Request to Pay page](images/req_to_pay_initial.png)
Once the account information is provided, payment details may be added in.
In this simulated example, the last digit determines whether the request will go
through successfully, odd digits fail and even digits succeeds.
![Screenshot of initial account details filled in](images/req_to_pay_acc_filled.png)
Below is an example of a successful request to pay.
![Screenshot of initial successful request to pay](images/req_to_pay_valid.png)
Below is an example of a failed request to pay.
![Screenshot of initial successful request to pay](images/req_to_pay_invalid.png)
