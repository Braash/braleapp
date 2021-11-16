import React, { Component } from 'react'; // Import React.
import '../App.css'; //Import CSS File.
import Event from './Events' //Import external CarItem component.
import Footer from './Footer'; //Import external Footer component.
import Display from './Header';
import "react-datepicker/dist/react-datepicker.css";


class MainGen extends Component {
    constructor(props) {
        super(props);
        //Binding of component handlers.
        this.getEvents = this.getEvents.bind(this);
        this.state = {
                       id: '', //id of item added or updated.
                       events: [], //State for the projects sent from Express.
                       value: '', //This state changes when a user adds a project.
                       error: null, 
                       isLoading : true,
                       jwt: JSON.parse(sessionStorage.getItem('jwt'))
        }
    }
    
    //This event handler is used to constantly get the update information from the server.
    //preventDefault prevents the default behaviour of the form, which doesnt auntomatically refreshthe page once the new data has been submitted.
    getEvents(){
        console.log(this.state.jwt)
        fetch("/getEvents", { //First argument is the route/endpoint.
          //Second argument is our init object(req), which will be sent to the server (Express).
                method: "POST", //Add item to array declared in Express.
                headers: {
                    "Content-Type": "application/json", //The type of data that will be sent to server = JSON.
                },
                body: JSON.stringify({ jwt:this.state.jwt }),
                //All relevant state is sent to server inside the body of the init object.
                //jwt is setn with every request for Authorization.
            }).then(res => res.json()) //Parse to JS
            .then(response => {
              const events = response; //Store array in variable.
              //console.log(`In getEvents ${events}`);
              this.setState({

                events: events, //app.post sends array to frontend and is saved in state.
                isLoading: false //isLoading state set to false.
          });
        })
            .catch(error => console.log('Error:', error));
    }

    //ComponentDidMount retrieves the initial documentation.
    componentDidMount() {
        this.getEvents();
    }

    render() {
        const { value, error } = this.state;

        const date = this.state.dateOfEvent
        console.log(date)

        const events = this.state.events;

        console.log(`In render ${events}`);
        
        if(!this.state.isLoading){
          let eventItems = events.map((item, index) => { //This maps through the item array and passes item(carItem) and index as parameters.
            console.log(item);

        return(
                <div key={index}> {/*Assign Card index a unique key.*/}
                    <Event 
                    title = {item.title} //title state.
                    createdBy = {item.createdBy} //createdBy state.
                    description = {item.description} //description state.
                    location = {item.location} //description state.
                    dateOfEvent = {item.dateOfEvent} //dateOfEvent state.
                    timeOfEvent = {item.timeOfEvent} //timeOfEvent state.
                    id = {item._id} // id=index
                    event = {item}
                    value = {value}
                    />
                </div>
        )})  

        if (error) {
            return <div>Error: {error.message}</div>;
        } else
            return (
                <div className="App">
                    <Display />
                    <br/>
                    <div id="eventItems">
                      {eventItems} 
                    </div>
                    <Footer />
                </div> 
            ); 
        }else{
            return(
                <div>Is loading...</div>
            )
        }
    }
}

export default MainGen; //Export Main Component.