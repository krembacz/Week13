//importing the necessary bootstra files and Components 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavbarComp from './components/NavbarComp'; 
import Alert from './components/Alert'; 
import Login from './components/Login'; 

//kept app to relative minimals and tried to keep return as clean as possible 
function App() {
  return (
    <div className="App">
      <Alert />
      <NavbarComp /> 
      <Login />

    </div>
  );
}

export default App;
