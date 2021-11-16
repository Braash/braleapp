import React from 'react'; // Import the React module from React.
import '../App.css'; // Import App stylesheet.
import Display from './Header';
import Footer from './Footer'; //Import external Footer component.

function HowBraleWorks(){ // How BRALE works.
    return(
        <div id="rules">
            <Display />
            <h3 id="title"><b>How BRALE works?</b></h3>
                <hr/>
                    <p id="understandingBrale">
                      BRALE is a informational application for Hout Bay residents that are serious about the wonderful game of tennis. 

                      BRALE allows students to keep up to date with upcoming tennis events that the school is affiliated with, each event is built using a card which contains the events
                      title, description, time of event, date of event and the location. This is all the information a student would need to stay up to date with the school tennis schedule.
                    </p>
                <hr/>
            <Footer />
        </div>  
    )
};

export default HowBraleWorks; // Export HowbraleWorks component.