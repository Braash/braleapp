import React, { Component } from 'react'; // Import React.
import '../App.css'; //Import CSS File.
import Event from './Events' //Import external CarItem component.
import Form from 'react-bootstrap/Form'; //Import external Form component.
import Footer from './Footer'; //Import external Footer component.
import Display from './Header';
import MainGen from './MainGeneral'
//import { Redirect } from 'react-router-dom'; 

class MainAdmin extends Component {
    constructor(props) {
        super(props);
        //Binding of component handlers.
        this.handleChangeTitle = this.handleChangeTitle.bind(this); 
        this.handleChangeCreatedBy = this.handleChangeCreatedBy.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeDateOfEvent = this.handleChangeDateOfEvent.bind(this);
        this.handleChangeTimeOfEvent = this.handleChangeTimeOfEvent.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeTitleUpdate = this.handleChangeTitleUpdate.bind(this); 
        this.handleChangeCreatedByUpdate = this.handleChangeCreatedByUpdate.bind(this);
        this.handleChangeDescriptionUpdate = this.handleChangeDescriptionUpdate.bind(this);
        this.handleChangeDateOfEventUpdate = this.handleChangeDateOfEventUpdate.bind(this);
        this.handleChangeTimeOfEventUpdate = this.handleChangeTimeOfEventUpdate.bind(this);
        this.handleChangeLocationUpdate = this.handleChangeLocationUpdate.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.getEvents = this.getEvents.bind(this);
        this.updateEvent = this.updateEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.state = {
                       id: '', //id of item added or updated.
                       title: '', //title of event added.
                       createdBy: '', //Who created the event.
                       description: '',
                       location: '',
                       dateOfEvent: '', //The date in which the event was created.
                       timeOfEvent: '', //The time in which the event was created.
                       titleUpdate: '', //When a user updates the title.
                       createdByUpdate: '', //When a user updates the who created the event.
                       descriptionUpdate: '',
                       locationUpdate: '',
                       dateOfEventUpdate: '', //Updating when the event is.
                       timeOfEventUpdate: '', //Updating the time of the event.
                       events: [], //State for the projects sent from Express.
                       value: '', //This state changes when a user adds a project.
                       error: null, 
                       isLoading : true,
                       jwt: JSON.parse(sessionStorage.getItem('jwt'))
        }
    }
    
    //This event handler updates the title state of this component.
    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }
    //This event handler updates the createdBy state of this component.
    handleChangeCreatedBy(event) {
        this.setState({ createdBy: event.target.value });
    }
    //This event handler updates the createdBy state of this component.
    handleChangeDescription(event) {
        this.setState({ description: event.target.value });
    }
    //This event handler updates the dateOfEvent state of this component.
    handleChangeDateOfEvent(event) {
        this.setState({ dateOfEvent: event.target.value });
    }
    //This event handler updates the timeOfEvent of the event state of this component.
    handleChangeTimeOfEvent(event) {
      this.setState({ timeOfEvent: event.target.value });
    }
    //This event handler updates the timeOfEvent of the event state of this component.
    handleChangeLocation(event) {
        this.setState({ location: event.target.value });
    }
    //This event handler updates the titleUpdate state of this component.
    handleChangeTitleUpdate(event) {
      this.setState({ titleUpdate: event.target.value });
    }
    //This event handler updates the createdByUpdate state of this component.
    handleChangeCreatedByUpdate(event) {
        this.setState({ createdByUpdate: event.target.value });
    }
    //This event handler updates the createdBy state of this component.
    handleChangeDescriptionUpdate(event) {
        this.setState({ descriptionUpdate: event.target.value });
    }
    //This event handler updates the dateOfEventUpdate state of this component.
    handleChangeDateOfEventUpdate(selected) {
        this.setState({ dateOfEventUpdate: event.target.value });
    }
    //This event handler updates the timeOfEventUpdate state of this component.
    handleChangeTimeOfEventUpdate(event) {
      this.setState({ timeOfEventUpdate: event.target.value });
    }
    //This event handler updates the timeOfEvent of the event state of this component.
    handleChangeLocationUpdate(event) {
        this.setState({ locationUpdate: event.target.value });
    }

    //This fetch will trigger app.post('/') inside our routes file.
    //preventDefault prevents the default behaviour of the form, which doesnt auntomatically refresh the page once the new data has been submitted.
    addEvent(e) {
        e.preventDefault();
        fetch("/addEvent", { //First argument is the route/endpoint.
          //Second argument is our init object(req), which will be sent to the server (Express).
                method: "POST", //Add item to array declared in Express.
                headers: {
                    "Content-Type": "application/json" //The type of data that will be sent to server = JSON.
                },
                body: JSON.stringify({ title: this.state.title, createdBy: this.state.createdBy, description: this.state.description, dateOfEvent: this.state.dateOfEvent, timeOfEvent: this.state.timeOfEvent, location: this.state.location, jwt:this.state.jwt }),
                //All relevant state is sent to server inside the body of the init object.
            }).then(res => res.json()) //Parse to JS
            .then(response => {
              const arrDoc = response; //Store array in variable.
              console.log(this.state.item)
              this.setState({
                events: arrDoc,//app.get sends array to frontend and is saved in state
          });
        })
            .catch(error => console.log('Error:', error));
    }

    //This fetch will trigger app.put('/') inside our routes file.
    updateEvent(e, updateId) {
        e.preventDefault();
        fetch("/updateEvent", { //First argument is the route/endpoint.
          //Second argument is our init object, which will be sent to the server (Express)
                method: "PUT", //Update item to array declared in Express.
                headers: {
                    "Content-Type": "application/json" //The type of data that will be sent to server = JSON.
                },
                body: JSON.stringify({ id: updateId, titleUpdate: this.state.titleUpdate, createdByUpdate: this.state.createdByUpdate, descriptionUpdate: this.state.descriptionUpdate, dateOfEventUpdate: this.state.dateOfEventUpdate, timeOfEventUpdate: this.state.timeOfEventUpdate, locationUpdate: this.state.locationUpdate, jwt:this.state.jwt }),
                //All relevant state is sent to server inside the body of the init object.
            }).then(res => res.json()) //Parse to JS
            .then(response => {
              const arrUpd = response; //Store array in variable.
              console.log(`Updated items = ${response}`)
              this.setState({
                events: arrUpd, //app.put sends the updated array to frontend and is saved in state
                titleUpdate: '', //makeUpdate of item added.
                createdByUpdate: '', //modelUpdate of item added.
                dateOfEventUpdate: '', //registrationUpdate of item updated.
                timeOfEventUpdate: '',
                descriptionUpdate: '',
                locationUpdate: ''
          });
        })
            .catch(error => console.log('Error:', error));
    } 

    //This fetch will trigger app.delete('/') inside our routes file.
    deleteEvent(e, updateId){
        e.preventDefault();
        fetch("/deleteEvent", {
                method: "DELETE", //Delete item to array declared in Express.
                headers: {
                    "Content-Type": "application/json" //The type of data that will be sent to server = JSON.
                },
                body: JSON.stringify({ id: updateId, jwt:this.state.jwt }),
                //id is sent to server inside the body of the init object.
            }).then(res => res.json()) //Parse to JS
            .then(response => {
                const arrDel = response; //Store array in variable.
                this.setState({
                  events: arrDel //app.delete removes a car item(Document).
            });
        })
            .catch(error => console.log('Error:', error)); //error.
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
        const { value, error, jwt } = this.state;
        
        const jwtSS = JSON.parse(sessionStorage.getItem('jwt'))
        const date = this.state.dateOfEvent
        console.log(date)

        const events = this.state.events;
        console.log(`In render ${events}`);
        const retrievedRole = JSON.parse(sessionStorage.getItem('role'))
        
        //if(jwtSS !== null){
        //    return <Redirect  to='/Main'/>
        //}

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
                    delete = {this.deleteEvent} //sending handler over as props.
                    update = {this.updateEvent} //sending handler over as props.
                    add = {this.addEvent} //sending handler over as props.
                    handleChangeTitle = {this.handleChangeTitleUpdate} //sending handler over as props.
                    handleChangeCreatedBy = {this.handleChangeCreatedByUpdate} //sending handler over as props.
                    handleChangeDescription = {this.handleChangeDescriptionUpdate} //sending handler over as props.
                    handleChangeLocation = {this.handleChangeLocationUpdate} //sending handler over as props.
                    handleChangeDateOfEvent = {this.handleChangeDateOfEventUpdate} //sending handler over as props.
                    handleChangeTimeOfEvent = {this.handleChangeTimeOfEventUpdate} //sending handler over as props.
                    />
                </div>
        )})  

        if (error) {
            return <div>Error: {error.message}</div>;
        } else
            if(retrievedRole === 'admin'){
            return (
                
                <div className="App">
                    <Display />
                    <div id="App">
                        <br/>
                        <Form bsPrefix="form" id="formName" onSubmit={this.addDoc}>
                            <Form.Group>
                                <Form.Control bsPrefix="ibox" type="text" placeholder="Title" name="title"  onChange={this.handleChangeTitle}/>
                                <Form.Control bsPrefix="ibox" type="text" placeholder="Created by"  name="createdBy"  onChange={this.handleChangeCreatedBy}/>
                                <Form.Control bsPrefix="ibox" type="text" placeholder="Date of event"  name="createdBy"  onChange={this.handleChangeDateOfEvent}/>
                                <Form.Control bsPrefix="ibox" type="text" placeholder="Time of event"  name="timeOfEvent"  onChange={this.handleChangeTimeOfEvent}/>
                                <Form.Control bsPrefix="ibox" type="text" placeholder="Location" name="location"  onChange={this.handleChangeLocation}/>
                                <Form.Control bsPrefix="ibox" type="text" placeholder="Description" name="description"  onChange={this.handleChangeDescription}/>
                            </Form.Group>
                            <button id="buttonadd" bsPrefix="click1" className="buttonRadius" type="submit" onClick={this.addEvent}><b>(Add)</b></button>
                        </Form>
                        <div id="eventItems">
                            {eventItems} 
                        </div>
                        <Footer />
                    </div>
                </div>  
            );}else{
                return(
                    <MainGen />
                )
            }
        }else{
            return(
                <div>Is loading...</div>
            )
        }
    }
}

export default MainAdmin; //Export Main Component.
