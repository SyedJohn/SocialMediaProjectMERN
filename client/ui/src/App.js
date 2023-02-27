import logo from './logo.svg';
import './App.css';
import UsersClass from '../src/UsersClassComp/UsersClass';
import Users from './Users/Users';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      {/* <UsersClass /> */}
      <Users  name="anil" age="20" country="india"/>
    </div>
  );
}

export default App;
