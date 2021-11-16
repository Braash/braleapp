import './App.css'; // Import App stylesheet.
import { BrowserRouter, Route } from "react-router-dom"; // Import Browser router.
import SignIn from './Components/SignIn'; // Import SignIn component.
import SignUp from './Components/SignUp'; // Import SignIn component.
import MainAdmin from './Components/MainAdmin'; // Import Main component. 
import HowBraleWorks from './Components/Help'; // Import Help component.
import EditUsers from './Components/EditUsers'; // Import EditUsers component.
import Home from './Components/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Route exact={true} path="/" component={Home}/> {/* Link to SignIn component.*/}
          <Route exact={true} path="/Signin" component={SignIn}/> {/* Link to SignIn component.*/}
          <Route exact={true} path="/Main" component={MainAdmin}/> {/* Link to MainAdmin component.*/}
          <Route exact={true} path="/Help" component={HowBraleWorks}/> {/* Link to HowBraleWorks component.*/}
          <Route exact={true} path="/Signup" component={SignUp}/> {/* Link to SignUp component.*/}
          <Route exact={true} path="/Editusers" component={EditUsers}/> {/* Link to EditUsers component.*/}
      </div>
    </BrowserRouter>
  ); 
}

export default App; // Export App component.
