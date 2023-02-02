# Project-2-Jaden-Ruplal

Like the previous project this one will be vehicle related. Using the NHTSA APi there will be a main page where you can select different options or using a schema create vehicles that will show up on your saved vehicle page with stats like the color what model year ect which you can edit or delete if it's no longer the wave. You and others would have the ability to comment what you want on each others vehicles up to a certain extent with the ability to edit and delete messages.

User experience:

1. user signs up for the first time or signs in
2. create specific vehicles they want or have currently using set Schema
3. find the vehicles brand list to scroll down and come up with vehicle ideas
4. comment anything on the vehicles they have

PLANS:

original API idea
1. https://vpic.nhtsa.dot.gov/api/
2. https://www.vinaudit.com/api-subscribers?gclid=Cj0KCQjwlK-WBhDjARIsAO2sErQkHMrSnAlEGrMV2eOljzs2_OI229jmOMALDIa4vIkRVeOrlfp_-uIaAhKPEALw_wcB

Although this was planned it didnt go this way instead seeded data is used to show a list of vehicles people can scroll through and potentially use. full crud abilities are available when creating a vehicle to add to your list with the ability to add comments to your persenal vehicles.

Routes:

| path                                 | verb   | description                                         |
| ------------------------------------ | ------ | --------------------------------------------------- |
| /signup                              | post   | user sign up                                        |
| /signin                              | post   | user sign in                                        |
| /signup/passwordChange               | update | user changes password                               |
| /vehicleList                         | get    | search through vehicles to add to your vehicle list |
| /vehicles                            | post   | add vehicles you like or wish to have               |
| /vehicles/vehicleID                  | update | edite vehicles you already have picked out          |
| /vehicles/vehicleID                  | get    | get vehicles you already have picked out and saved  |
| /vehicles/vehicleID                  | delete | delete vehicles you have picked out                 |
| /vehicles/vehicleID/comments         | post   | post comments on a vehicle                          |
| /vehicles/vehicleID/comments/comment | update | update comments on a vehicle                        |
| /vehicles/vehicleID/comments/comment | delete | delete comments on a vehicle                        |

Models:
user - holds user name and password
comments - hold comments made on anything from companies to specific vehicles
savedVehicles - stores all vehicles saved by specific user

Wireframe:

![wireframe](./images/wireframe-project-2.pngwireframe-project-2.png)

![wireframe2](./images/wireframe-2-project-2.png)

![ERD](./images/ERD-Project-2.png)
