import React, { Component } from 'react'; // Import the React module from React.
import Navbar from 'react-bootstrap/Navbar'; // Import the React bootstrap package for the 'Navbar' elements.
import Nav from 'react-bootstrap/Nav'; // Imported from React bootstrap.
import Container from 'react-bootstrap/Container'; // Imported from React bootstrap.
import NavDropdown from 'react-bootstrap/NavDropdown'; // Imported from React bootstrap.
import '../App.css'; // Import App stylesheet.
import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap styles.
import image from '../brale.png'; // Import logo.
import image2 from '../01.png'; // Import logo.
import {Link} from 'react-router-dom';

// Display creates the Navbar with a dropdown that allows the user to choose between the Documentation, Older Models and Global Uodates.
// Navbar imported from react-bootstrap.
class Display extends Component {
  constructor(props) {
      super(props);
      this.logOut = this.logOut.bind(this);
      this.state = {         
            err: null,
            role: JSON.parse(sessionStorage.getItem('role')),
            jwt: JSON.parse(sessionStorage.getItem('jwt')),
      }
  }

  logOut(){
     this.setState({ jwt : null })
     sessionStorage.setItem('jwt', null);
     console.log(this.state.jwt)
     console.log(sessionStorage.getItem('jwt'))
  }


  render(){
    const retrievedRole = this.state.role;
    const retrievedUsername = JSON.parse(sessionStorage.getItem('username'));
    return(
      <div>
          <div className="header">
          <header>
              <img id="Logoheader" src={image}></img>
              <br/>
              <h3><b>(County Tennis Informational Services)</b></h3>
              <br/>
              <div>
                <h5><img id="Logo2" src={image2}></img><b>{retrievedUsername}</b></h5>
              </div>
              <Link to='/' style={{ textDecoration: 'none' }}>
                  <button id="buttonlogout" bsPrefix="click1" className="buttonRadius" variant="primary" onClick={this.logOut}>
                      <b>(Logout)</b>
                  </button>
              </Link>
          </header>
            <br/>
          </div>
          <Navbar id="bar" variant="dark" bg="dark" expand="lg">
            <Container fluid>
              <Navbar.Toggle aria-controls="navbar-dark-example" />
              <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="BRALE"
                        menuVariant="dark"
                    >
                    <NavDropdown.Item href="/Main">Upcoming events</NavDropdown.Item> {/* Link to Main component. */}
                    <NavDropdown.Item href="/Help">Understanding BRALE</NavDropdown.Item> {/* Link to Help component. */}
                    {retrievedRole === "admin"? <NavDropdown.Item href="/EditUsers">Edit Users</NavDropdown.Item> : <div></div>}   {/* Link to EditUsers component. */}
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </div>
      )};
  }
  

export default Display; // Export Display component.