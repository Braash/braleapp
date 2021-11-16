import React, { Component } from 'react'; // Import React.
import '../App.css'; //Import CSS File.
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap.
import image from '../brale.png'; //Import image for use.
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props); 
    
    }
    render() {
    return(
            <div id="Home" style = {{height:"100vh"}}>
                <img id="Logo3" src={image}></img>
                <Link to='/Signin' style={{ textDecoration: 'none' }}><button id="buttonhome" className="buttonRadius"><b>Sign In</b></button></Link>
            </div>
    )}
}

export default Home; //Export Component