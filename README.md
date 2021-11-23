Thanks for checking out my WIP project.
This projected started out as a way to learn react better and now turned into a bigger project due to expanding the to the backend as well.
The technology stack I used for this project are backend: NodeJS/Express/MySQL/REST API & Front-end: React 
For the payment process, I decided to use Stripe for easy checkout sessions and any other complex payment situations I may decide to implement in the future.

Note: to see the project in its fullest completion, you should also run the ecommerce-backend, which is another repository for the back-end of this project.
A proper MySQL database and table configuration is required to see all implemented features.

To start this project in development, make sure to ofcourse have NodeJS when attempting to run the project and npm install to get all dependecies.
Next run `npm start` in the root folder.

Runs the app in the development mode.

implementation list:

user login session - backend to check for user roles/permissions, considering using jwt library
user login session has been implemented using localStorage, not my IDEAL solution but it solves the problem of user session clearing on refreshes

stat rating feature - frontend react component with backend data persistence

user reviews - frontend with backend data persistence

authentication for REST API - backend permissions page management

auto-deployment for react application 