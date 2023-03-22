import logo from './logo.svg';
import './App.css';
import UsersClass from '../src/UsersClassComp/UsersClass';
import Users from './Users/Users';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      {/* <UsersClass /> */}
      <Users />
    </div>
  );
}

export default App;
