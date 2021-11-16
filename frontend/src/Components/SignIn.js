import React, { Component } from 'react'; // Import React.
import '../App.css'; //Import CSS File.
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap.
import image from '../brale.png'; //Import image for use.
import MainAdmin from './MainAdmin' // Import Main
import Footer from './Footer'; //Import external Footer component.
import {Link} from 'react-router-dom';

class Signin extends Component {
    constructor(props) {
        super(props); 
        //Binding of component handlers.
        this.handleUserName = this.handleUserName.bind(this); 
        this.handleUserPassword = this.handleUserPassword.bind(this); 
        this.SigninUser = this.SigninUser.bind(this);
        this.state = {
                       username: '', //username state.
                       password: '', //password state.
                       jwt: null, //JWT State
                       err: null
        }
    }
    
    //This event handler updates the username state of this component.
    handleUserName(event) {
        this.setState({ username: event.target.value, err: null, jwt: null }); //Previous jwt is destroyed once new user attempts to login, jwt isnt removed from state once intial user logs out.
    }

    //This event handler updates the password state of this component.
    handleUserPassword(event) {
        this.setState({ password: event.target.value, err: null, jwt: null }); //Previous jwt is destroyed once new user attempts to login, jwt isnt removed from state once intial user logs out.
    }
    
    //This fetch will trigger app.post('/') within our express server.
    //preventDefault prevents the default behaviour of the form, which doesnt auntomatically refresh the page once the new data has been submitted.
    SigninUser(e) {
        e.preventDefault();
        fetch("/Signin", { //First argument is the route/endpoint.
          //Second argument is our init object(req), which will be sent to the server (Express).
                method: "POST", //Add user to the collection within MongoDB.
                headers: {
                    "Content-Type": "application/json" //The type of data that will be sent to server = JSON.
                },
                body: JSON.stringify({ username: this.state.username, password: this.state.password }),
                //All relevant state is sent to server inside the body of the init object.
            }).then(res => res.json()) //Parse to JS
            .then(response => {
                if (response.token) { //If the jwt exists, proceed with block
                    sessionStorage.setItem('jwt', JSON.stringify(response.token)) //Putting jwt in sessionStorage for when the user navigates to the EditUsers component. Once there, the user can retrieve the jwt.
                    sessionStorage.setItem('role', JSON.stringify(response.role))
                    sessionStorage.setItem('username', JSON.stringify(response.name)) 
                    const token = response.token; //Store token in variable.
                    console.log(token)
                    this.setState({
                        jwt: token, //set the jwt state to the token that has been recieved.
                        err: null // error is set null
                    });
                } else {
                    const error = response.err;
                    this.setState({
                        err: error, //set error to the error
                        jwt: null //set jwt state to null.
                    });
                }
            })
            .catch(error => console.log('Error:', error));
        }

    render() {
        if(this.state.jwt === null || this.state.jwt === '' || sessionStorage.getItem('jwt') === null){ //If jwt is equal to null follow through with block of code.
            console.log('No JWT found!');
            if (this.state.err !== null){ //If the error message is not equal to null send alert.(precaution)
                alert(this.state.err);
            }
            return(
                <div className="App">
                    <img id="Logo" src={image}></img>
                    <h3><b>(County Tennis Informational Services)</b></h3>
                    <br/>
                    <form id="container">
                        <label><input type="text" placeholder="Username" onChange={this.handleUserName}/></label>
                        <label><input type="password" placeholder="Password" onChange={this.handleUserPassword}/></label>
                        <label><button id="buttonsign" type="submit" onClick={this.SigninUser} className="buttonRadius"><b>(Log in)</b></button></label>
                    </form>
                    <h4><b>No account? <Link to='/Signup'>Sign up</Link></b></h4>     
                    <br/>
                    <Footer />
                </div> 
              )
        }else{
            console.log(this.state.jwt); //Log jwt (not deleting, this will help me with recapping this task)
            return(
                <div>
                   <MainAdmin jwt={this.state.jwt}/>
                </div>
            )
        }
              
    }
}

export default Signin; //Export Component