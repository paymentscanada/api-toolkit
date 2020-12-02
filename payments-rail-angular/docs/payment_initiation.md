# Payment Initiation

This interface simulates a payment method that enables you to initiate a payment 
from your bank account. It is an alternative for e.g. Credit card, PayPal and other payments.


When a user in on the Payment Initiation, they are shown a short description,
a panel to enter the information and a panel that displays what is 
sent and received from the API.
The user must enter any fake Financial Institution ID and 
Account Number before moving onto the second step.
The user will see the JSON request that will be sent modified live.
![Screenshot of initial Payment Initiation page](images/pay_init_initial.png)
![Screenshot of initial account details filled in](images/pay_init_acc_filled.png)
Below is an example of a successful payment.
![Screenshot of initial successful Payment Initiation](images/pay_init_valid.png)
Below is an example of a failed payment.
![Screenshot of initial successful Payment Initiation](images/pay_init_invalid.png)
