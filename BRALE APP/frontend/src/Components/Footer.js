import React from 'react'; //Import the React module from React.
import '../App.css'; //Import App stylesheet.
import image from '../footer.png'; //Import image for use.

//This component creates the footer for our application.
class Footer extends React.Component {
    constructor(props) {
        super(props); 
    }
    render(){ 
        return(
            <div id="footer">
                <img id="Logo3" src={image}></img>
                <h6 id="quote"><b>You can only find out what you actually believe (rather than what you think you believe) by watching how you act. You simply don't know what you believe, before that. You are too complex to understand yourself.</b></h6>
                <div></div>
            </div>
        );
    }
}

export default Footer; //Export Card component.