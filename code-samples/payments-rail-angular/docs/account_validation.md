[< Back](docs/home.md)

# Account Validation
This interface simulates an account validation scenario. 
This can be used for several items, including account verification, and 
account fraud detection.

When a user in on the account validation page, they are shown a short description,
a panel to enter the information and a panel that displays what is 
sent and received from the API.
The user may enter any fake Financial Institution ID and Account Number.
The user will see the JSON request that will be sent modified live.
![Screenshot of initial account validation page](docs/images/acc_val.png)
Once a user submits the information, the user will be presented with a 
message saying that a user account was found. The raw response can be 
seen by clicking JSON Response.
![Screenshot of submitted request](docs/images/acc_val_submitted.png)
