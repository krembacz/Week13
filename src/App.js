import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavbarComp from './components/NavbarComp'; 
import Alert from './components/Alert'; 
import Login from './components/Login'; 

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
