
# BRALE
### Informational Tennis Application
### Please find login details in the Task 15 folder(username: B Password: chelsea(admin), you can create general user account.)

Task 15 : Capstone Part 2 - Implementation.

In this exercise, the server.js file contains all relevant code and resources for the server.

### Instructions

Make sure Reacts proxy matches the servers port number before starting Express and React.

Once you've followed both React and Express instructions, you should see the application on port 8080.

### How BRALE works?

BRALE is a informational application for Hout Bay residents that are serious about the wonderful game of tennis. 

BRALE allows students to keep up to date with upcoming tennis events that the school is affiliated with, each event is built using a card which contains the events
title, description, time of event, date of event and the location. This is an informative application that helps students plan for a successful tennis season.


#### BASELINE FUNCTIONALITY FOR ADMIN USER:

SIGN IN - This function allows the user to access the application.

SIGN UP - This function allows the user to create an account.

ADD - This function allows an admin user to add an event to the DB.

UPDATE - This function allows an admin user to update an event.

GLOBAL UPDATE - This function allows an admin user to update exisiting user accounts.

DELETE - This function allows an admin user to delete an event. 

LOGOUT - This function allows the user to leave the application.


### Express:

To run this project, do the following:
1. Copy the directory called 'Task 15' to your local machine.
2. Navigate to this directory from the command line interface. E.g. cd c:\Task 15.
3. In the command line interface type 'npm install'
4. Now type 'npm start'. Runs the app in the development mode.


### React:

Available Scripts:

In the project directory, you can run:

1. (Navigate to React file directory and run npm install(install node modules))

Type npm install in the React file directory within the terminal.

2. (npm start)

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

3. (npm test)

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

 
### System Architecture)


**MERN Stack)**
BRALE will be developed using MongoDB, Express.js, React and Node.js(MERN). As a Junior developer I'm most comfortable with this stack, this will allow me to create a product that will best satisfy the needs of the consumer. The MERN stack is currently the quintessential approach to full stack development, and yes, there is'nt one way to approach a full stack application but the MERN stack is widely recommended.
 
**Deployment)**
I will be deploying my application with Heroku, they take care of configuring and maintaining the infrastructure needed to host an application online, and I don't need to worry about servers or managing systems.
 
**Frontend Architecture)**
I'll create my frontend environment using Create React App(CRA), this is the environment I'm most comfortable with. 

 
### System Requirements Specifications)
 
### Functional Requirements)
 
**Signing up)**
The user should have the immediate option of creating an account.
 
**Signing in)**
The application must allow users to log into their account by entering their email and password, alternatively the user is given access to their account via Google accounts. The user must have the option of clicking on a ‘Forgot my password’ button which allows the user to verify themselves through their email account.
 
**Add events)**
The application allows the user to add an event to the main page of the application. A event can contain a number of properties.
 
**Delete events)**
An admin user has the liberty of removing an event if they want to, unfortunately a general user does not have this authority.
 
**Edit existing events)**
The user should have the option of editing an existing event. Again, a general user does not have this authority.
 
**Marking events as read)**
The user has the option of marking an event as read(they've acknowledged that the event is happening), this is available to both types of users(General and Administrator).



### Non-Functional Requirements)

**Performance :**
*General performance:* The performance of your application is a consequential property which can separate high grade applications from lower grade applications. 

*Getting the events:* Once the page loads, the collection of events instantly populates your homepage, this operation is almost not recognisable. 

*Operational aspects/Responsiveness:* Any further requests must respond quickly and smoothly in a way which won’t frustrate the user. The response time of your application has an effect on the users experience, perfecting performance is a critical part of development. The system will notify the user when processing

*Number of users:* A user will have their own version of the application, and depending on your status(General and Administrator), this determines what you can and can't do.



**Security :**
*Authentication:* The user is granted a JWT(JSON Web Token) once they successfully sign in, meaning the user is now authenticated. 

*Authorisation:* This token will authorise the user allowing them to freely make requests within the domain of the application. 

*Server Security:* Helmet is also installed to secure your application from web vulnerabilities by setting up appropriate HTTP headers. 

*Safety Requirements:* The users version of the application is unique to them, this means all the data accumulated within their account is safe and only accessible to them. 


**Usability :** 
*UI:* The user-interface tends to focus on the visuals of the application, but in fact UI is just a component within the UX ensemble. Our application essentially needs to be cohesive, repetitive and breathable which will enhance the experience and help create a strong visual language. The application ensures easy navigational patterns and encourages simplicity which will allow your product to be more palatable to a broader range of users. The visuals need to be apt and aesthetic, the functional elements need to look good but their appearance must also make sense to the user. eg

*UX:* The user-experience needs to be frictionless and easy to operate, the individual components/elements(e.g. Button, Dropdown) needs to be responsive and seamlessly integrated into the application.

*Documentation Provided:* A page dedicated to help users understand the utility of the application.

**Reliability :**

*Nodemon:* Nodemon simply restarts your node application when it crashes or observes any current changes within the working directory of the project. This assures the user that the server will restart if anything goes wrong.

*Validation:* Validating what the user inserts into an input field. This will falsify any inputs that don’t meet the fields requirements and keeps the data valid.
   


## User Stories:

As a frequent user of Sporting applications, I’d like to have the option of having all my upcoming events available to me at all times.

As a High school tennis player, I’d like to see the entire ensemble of events with all its relevant information with minimal effort.

As a University tennis coach, I want the simple option of being able to create an event, which will essentially be the lifeforce of the application.

As a fan of the KISS(Keep it simple stupid) principles, I would like the application to be simple and easy to navigate which will not leave the user confused.

As a avid supporter of authentication and security, I would want to see the application force the user to create their version of the application.

#

