import React, { Component } from 'react'; // Import React.
import '../App.css'; //Import CSS File.
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap.
import Form from 'react-bootstrap/Form'; //Import external Form component.
import Table from 'react-bootstrap/Table'; //Import external Table component.
import Footer from './Footer'; //Import external Footer component.
import Button from 'react-bootstrap/Button'; // Import  external Button commponent.
import Display from './Header'; //Import Display function.

class Edituser extends Component {
    constructor(props) {
        super(props); 
        //Binding of component handlers.
        this.getUsers = this.getUsers.bind(this);
        this.updatedUsersGlobal = this.updatedUsersGlobal.bind(this);
        this.handleChangeUsernameGlobal = this.handleChangeUsernameGlobal.bind(this);
        this.handleChangePasswordGlobal = this.handleChangePasswordGlobal.bind(this);
        this.handleChangeRoleGlobal = this.handleChangeRoleGlobal.bind(this);
        this.state = {
                       jwt: null, //JWT state is intially = null
                       users: [], //Users state waiting for getUsers handler to inject users into state.
                       err: null,
                       isLoading: true
        }
    }

    //This event handler updates the modelGlobal state of this component.
    handleChangeUsernameGlobal(event) {
        let arr=this.state.users;
        //arr[0].make = event.target.value 
        //This means that the item that is in the [arr] array(The key value(id) which is extracted from the parent node is how we find the particular item) is equal to whatever the user types into the input field. 
        arr[Number(event.target.parentNode.parentNode.id)].username = event.target.value;
        console.log(arr);
        this.setState({users: arr})
    }

    //This event handler updates the modelGlobal state of this component.
    handleChangePasswordGlobal(event) {
        let arr=this.state.users;
        arr[Number(event.target.parentNode.parentNode.id)].password = event.target.value;
        console.log(arr);
        this.setState({users: arr})
    }

    //This event handler updates the modelGlobal state of this component.
    handleChangeRoleGlobal(event) {
        let arr=this.state.users;
        arr[Number(event.target.parentNode.parentNode.parentNode.id)].role = event.target.value;
        console.log(arr);
        this.setState({users: arr})
    }

    updatedUsersGlobal(e) {
        e.preventDefault(); //Prevents the default submission
        fetch("/updateUsersGlobal", { //First argument is the route/endpoint.
          //Second argument is our init object, which will be sent to the server (Express)
                method: "PUT", //Update item to array declared in Express.
                headers: {
                    "Content-Type": "application/json" //The type of data that will be sent to server = JSON.
                },
                body: JSON.stringify({ users: this.state.users, jwt: this.state.jwt }), //Sending all the existing documents to express.
                //All relevant state is sent to server inside the body of the init object.
            }).then(res => res.json()) //Parse to JS
            .then(response => {
              const arrUpd = response; //Store array in variable.
              console.log(arrUpd)
              this.setState({
                users: arrUpd //Set the state to arrUpd
          });
        })
        .catch(error => console.log('Error:', error));//Error.
    }

    
    //This event handler is used to constantly get the updated user information from the server.
    //preventDefault prevents the default behaviour of the form, which doesnt auntomatically refreshthe page once the new data has been submitted.
    getUsers(){
        fetch("/getUsersGlobal", { //First argument is the route/endpoint.
          //Second argument is our init object(req), which will be sent to the server (Express).
                method: "POST", //Add item to array declared in Express.
                headers: {
                    "Content-Type": "application/json", //The type of data that will be sent to server = JSON.
                },
                body: JSON.stringify({jwt: JSON.parse(sessionStorage.getItem('jwt'))}),
                //All relevant state is sent to server inside the body of the init object.
                //jwt is setn with every request for Authorization.
            }).then(res => res.json()) //Parse to JS
            .then(response => {
              const users = response; //Store array in variable.
              console.log(users);
              this.setState({
                users: users, //app.get sends array to frontend and is saved in state.
                isLoading: false //isLoading state set to false.
          });
        })
            .catch(error => console.log('Error:', error));
    }

    //ComponentDidMount retrieves the initial state of the project.
    componentDidMount() {
        const retrievedJWT = JSON.parse(sessionStorage.getItem('jwt'))
        console.log(`jwt in cdm = ${retrievedJWT}`)
        this.setState({jwt: retrievedJWT})
        this.getUsers(); //Invokes the intial post request.
    }
    
    

    render() {
        
            const {isLoading, error} = this.state;
    
            const users = this.state.users; // Users state stored in variable.
    
            console.log(`In render users= ${users}`); // Keeping console.log for the future, refactoring my code at this point is'nt helpful if wanting to recap this task going forward.
            
            if(!isLoading){
              let userItems = users.map((item, index) => { //This maps through the item array and passes item(carItem) and index as parameters.
                console.log(item);
    
            return(
                    <tr key={index} id={index} className="editBorder"> {/*Assign Card index a unique key.*/}
                        <td style={{ color: 'black' }}><b>{index + 1}</b></td>
                        <td><Form.Control bsPrefix="ibox" type="text" id={item._id} placeholder={item.username} name="username" onChange={this.handleChangeUsernameGlobal}/></td>
                        <td><Form.Control bsPrefix="ibox" type="text" id={item._id} placeholder={item.password}  name="password" onChange={this.handleChangePasswordGlobal}/></td>
                        <td>
                            <Form.Select id="dropdown-button-dark-example1" variant="secondary" aria-label="Default select example" className="editSelect">
                                <option className="editSelect">Choose Role(Current Role : {item.role})</option>
                                <option value="admin" className="editSelect">Admin</option>
                                <option value="normal" className="editSelect">General</option>
                            </Form.Select>
                        </td>
                    </tr>
            )})  
    
            if(error){
                return <div>Error: {error.message}</div>;
            } else
                return (
                    <div className="App">
                        <Display />
                        <br/>
                        <div id="userItems">
                            <Form id={this.props.id} onSubmit={this.updatedUsersGlobal}>
                                <Table>
                                    <thead>
                                        <tr>
                                        <th style={{ color: 'black' }}>#</th>
                                        <th style={{ color: 'black' }}>Username</th>
                                        <th style={{ color: 'black' }}>Password</th>
                                        <th style={{ color: 'black' }}>Role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userItems}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td id="update" className="editBorder">
                                            <button id="buttonupdate" bsPrefix="click1" className="buttonRadius" variant="primary" type="submit">
                                                <b>(Update)</b>
                                            </button>
                                           </td>
                                        </tr>
                                    </tfoot>
                                </Table> 
                            </Form>
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

export default Edituser; //Export Component