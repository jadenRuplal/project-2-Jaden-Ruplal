# project-2-Jaden-Ruplal

Like the previous project this one will be vehicle related. Using the NHTSA APi there will be a main page where you can select different options:

1. search for the list of cars based on the brand (potentially filters to close in on the searches)
2. search for vrhicles by vin and get its information
3. add a wishlist where you can add vehicles
4. see brand information page

API:

1. https://vpic.nhtsa.dot.gov/api/
2. https://www.vinaudit.com/api-subscribers?gclid=Cj0KCQjwlK-WBhDjARIsAO2sErQkHMrSnAlEGrMV2eOljzs2_OI229jmOMALDIa4vIkRVeOrlfp_-uIaAhKPEALw_wcB

Routes:

| index | / | get | main page to branch off into your choice
| favorite | /favorite | get | all vehicles or brands favorited
| brands | /brands | get | lists all possible brands from api to see
| vehiclelist | /brands/vehicleList | get | brings you to a page with the vehicles of the selected brand
| vehicle | /brand/vehicleList/vehicle | get | page of a specific vehile in which its information is shown

Models:
user - holds user name and password
comments - hold comments made on anything from companies to specific vehicles

Wireframe:

![wireframe](images/wireframe%20project%202.pngwireframe-project-2.png)
