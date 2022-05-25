import './App.css';
import EmployeeListComponent from './componenets/EmployeeListComponent';
import FooterComponent from './componenets/FooterComponent';
import HeaderComponent from './componenets/HeaderComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <EmployeeListComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
