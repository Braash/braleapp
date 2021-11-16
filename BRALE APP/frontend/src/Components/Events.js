import React from 'react'; //Import the React module from React.
import '../App.css'; //Import App stylesheet.
import Card from 'react-bootstrap/Card'; //Import external Card component.
import Form from 'react-bootstrap/Form'; //Import external Form component.


//Props are passed down to display relevant information.
class Event extends React.Component {
    constructor(props) {
        super(props); 
        //Binding of component handlers.
        this.getUpdatedEvent = this.getUpdatedEvent.bind(this);
        this.getDeletedEvent = this.getDeletedEvent.bind(this);
        this.changeTitle=this.changeTitle.bind(this);
        this.changeCreatedBy =this.changeCreatedBy.bind(this);
        this.changeDescription =this.changeDescription.bind(this);
        this.changeDateOfEvent =this.changeDateOfEvent.bind(this);
        this.changeTimeOfEvent =this.changeTimeOfEvent.bind(this);
        this.changeLocation =this.changeLocation.bind(this);
    }
    //This event handler updates the titleUpdate state of parent component by passing event as param.
    changeTitle(e) {
        this.props.handleChangeTitle(e);
    }
    
    //This event handler updates the createdByUpdate state of parent component by passing event as param.
    changeCreatedBy(e) {
        this.props.handleChangeCreatedBy(e);
    }
    
    //This event handler updates the createdByUpdate state of parent component by passing event as param.
    changeDescription(e) {
        this.props.handleChangeDescription(e);
    }

    //This event handler updates the createdByUpdate state of parent component by passing event as param.
    changeLocation(e) {
        this.props.handleChangeLocation(e);
    }

    //This event handler updates the dateOfEventUpdate state of parent component by passing event as param.
    changeDateOfEvent(e) {
        this.props.handleChangeDateOfEvent(e);
    }

    //This event handler updates the timeOfEventUpdate state of parent component by passing event as param.
    changeTimeOfEvent(e) {
        this.props.handleChangeTimeOfEvent(e);
    }

    //This event handler triggers the update item handler in parent component.
    //Pass event as parameter to obtain item id. 
    getUpdatedEvent(e){
        e.preventDefault(); //Prevent default operation.
        console.log(e.target.id);
        this.props.update(e, e.target.id); //Invoke function inside the parent component.
    }

    //This event handler triggers the delete item handler in parent component.
    //Pass event as parameter to obtain item id. 
    getDeletedEvent(e){
        e.preventDefault(); //Prevent default operation.
        console.log(e)
        this.props.delete(e, e.target.id); //Invoke function inside the parent component.   
    }
     
    //Each instance of the event card is built from the code below: 
    render(){ 
        const retrievedRole = JSON.parse(sessionStorage.getItem('role'))
        return(
            <div id="card">
                <Card bsPrefix="cardd"  variant="primary" className="theCard" style={{ width: '60%'}}>
                    <Card.Body className="cardbox">
                        <Card.Title><b>Title: {this.props.title}</b></Card.Title>
                        <Card.Title><b>Event creator: {this.props.createdBy}</b></Card.Title>
                        <Card.Title><b>Date of event: {this.props.dateOfEvent}</b></Card.Title>
                        <Card.Title><b>Time: {this.props.timeOfEvent}</b></Card.Title>
                        <Card.Title><b>Location: {this.props.location}</b></Card.Title>
                        <Card.Subtitle>Event description: {this.props.description}</Card.Subtitle>
                    </Card.Body>
                </Card>
                {retrievedRole === 'admin'? 
                <div>
                <Form id={this.props.id} onSubmit={this.getUpdatedEvent}>
                      <Form.Group>
                        <Form.Control bsPrefix="ibox" type="text" placeholder="Title" name="title"  onChange={this.changeTitle}/>
                        <Form.Control bsPrefix="ibox" type="text" placeholder="Event creator"  name="createdBy"  onChange={this.changeCreatedBy}/>
                        <Form.Control bsPrefix="ibox" type="text" placeholder="Date of event"  name="dateOfEvent"  onChange={this.changeDateOfEvent}/>
                        <Form.Control bsPrefix="ibox" type="text" placeholder="Time"  name="timeOfEvent"  onChange={this.changeTimeOfEvent}/>
                        <Form.Control bsPrefix="ibox" type="text" placeholder="Location"  name="location"  onChange={this.changeLocation}/>
                        <Form.Control bsPrefix="ibox" type="text" placeholder="Description"  name="description"  onChange={this.changeDescription}/>
                      </Form.Group>
                      <button id="buttonupdate" bsPrefix="click" className="buttonRadius" variant="primary" type="submit">
                        <b>(Update)</b>
                      </button>
                </Form>
                <Form id={this.props.id} onSubmit={this.getDeletedEvent}>
                      <button id="buttondel" bsPrefix="click1" className="buttonRadius" variant="primary" type="submit">
                        <b>(Delete)</b>
                      </button>
                </Form>
                </div>
                 : 
                <div></div>}
            </div>
        );
    }
}

export default Event; //Export Event component.