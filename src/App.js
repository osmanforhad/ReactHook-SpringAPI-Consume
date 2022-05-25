import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeListComponent from './componenets/EmployeeListComponent';
import FooterComponent from './componenets/FooterComponent';
import HeaderComponent from './componenets/HeaderComponent';
import AddEmployeeComponent from './componenets/AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={EmployeeListComponent}></Route>
            <Route path="/add_employee" component={AddEmployeeComponent}></Route>
            <Route path="/employees" component={EmployeeListComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
