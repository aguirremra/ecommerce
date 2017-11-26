# flowers
Philanthropic florist is a web based tool for monitoring and administrating flowers which are donated to users in USA.
Features
•	Remote Control
o	View flowers inventory status and statistics
o	Add update flower inventories.
o	Add update donor’s information.
o	Add update recipient information.
o	Update manager with flowers inventory status.
o	View transaction of flowers donated.
API
Flower API enables to manage the Flowers inventory via REST API, call query and receive query for flowers.
Installation
Npm install 
Run Sql schema (in your local-db)

Usage
User is able to navigate to URL provided
User is able to choose Flowers by clicking flowers image
On selecting flower, user is navigated to description page
On description page, user can enter donor’s information, and recipient information and donate one flower bouquet per recipient.


Sql side – 
On description page, when submit button is pressed,
3 tables in DB are updated –
1)	Flowers db
2)	Donors db
3)	Recipient db
4)	Transaction db

Testing
Dev Dependencies: Mocha
[Mocha](https://mochajs.org) based test.
Expect [Expect](https://devhints.io/expectjs) assertions.


Running test:
'npm run test-unit'