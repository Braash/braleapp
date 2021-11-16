import React, { Component } from 'react'; // Import React.
import '../App.css'; //Import CSS File.
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap.
import image from '../brale.png'; //Import image for use.
import SignIn from './SignIn' // Import Main
import Footer from './Footer'; //Import external Footer component.

class SignUp extends Component {
    constructor(props) {
        super(props); 
        //Binding of component handlers.
        this.createUserName = this.createUserName.bind(this); 
        this.createUserPassword1 = this.createUserPassword1.bind(this);
        this.createUserPassword2 = this.createUserPassword2.bind(this); 
        this.SignUpUser = this.SignUpUser.bind(this);
        this.state = {
                       username: '', //This state is a mirror image of what the user loads into the input field.
                       password1: '', //List of todos.
                       password2: '', 
                       newUser: '',
                       err: null
        }
    }
    
    //This event handler updates the username state of this component.
    createUserName(event) {
        this.setState({ username: event.target.value, err: null }); //Previous jwt is destroyed once new user attempts to login, jwt isnt removed from state once intial user logs out.
    }

    //This event handler updates the password state of this component.
    createUserPassword1(event) {
        this.setState({ password1: event.target.value, err: null }); //Previous jwt is destroyed once new user attempts to login, jwt isnt removed from state once intial user logs out.
    }

    //This event handler updates the password state of this component.
    createUserPassword2(event) {
        this.setState({ password2: event.target.value, err: null }); //Previous jwt is destroyed once new user attempts to login, jwt isnt removed from state once intial user logs out.
    }
    
    //This fetch will trigger app.post('/') within our express server.
    //preventDefault prevents the default behaviour of the form, which doesnt auntomatically refresh the page once the new data has been submitted.
    SignUpUser(e) {
        e.preventDefault();
        const password1 = this.state.password1
        const password2 = this.state.password2
        if(password1 === password2){
        fetch("/Signup", { //First argument is the route/endpoint.
          //Second argument is our init object(req), which will be sent to the server (Express).
                method: "POST", //Add user to the collection within MongoDB.
                headers: {
                    "Content-Type": "application/json" //The type of data that will be sent to server = JSON.
                },
                body: JSON.stringify({ username: this.state.username, password1: this.state.password1 }),
                //All relevant state is sent to server inside the body of the init object.
            }).then(res => res.json()) //Parse to JS
            .then(response => {
                console.log(response)
                const arrDoc = response; //Store array in variable.
                this.setState({
                  newUser: arrDoc,
                })//app.get sends array to frontend and is saved in state
            })
            .catch(error => console.log('Error:', error));
        } else {
            alert('Passwords do not match!')
        }
    }

    render() {
        console.log(this.state.username)
        console.log(this.state.password1)
        console.log(this.state.password2)
        if(this.state.newUser === ''){ //If jwt is equal to null follow through with block of code.
            return(
                <div className="App">
                    <img id="Logo" src={image}></img>
                    <h3><b>(County Tennis Informational Services)</b></h3>
                    <br/>
                    <form id="container">
                        <label><input type="text" placeholder="Username" onChange={this.createUserName}/></label>
                        <label><input type="password" placeholder="Password" onChange={this.createUserPassword1}/></label>
                        <label><input type="password" placeholder="Password" onChange={this.createUserPassword2}/></label>
                        <label><button id="buttonsign" type="submit" onClick={this.SignUpUser} className="buttonRadius"><b>(Sign up)</b></button></label>
                    </form>    
                    <br/>
                    <Footer />
                </div> 
              )
        }else{
            console.log(this.state.newUser); //Log jwt (not deleting, this will help me with recapping this task)
            return(
                <div>
                  <SignIn />
                </div>
            )
        }
              
    }
}

export default SignUp; //Export Component