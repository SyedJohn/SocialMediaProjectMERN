import logo from './logo.svg';
import './App.css';
import UsersClass from './UsersClassComp/UsersClass';
import Users from './Users/Users';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import About from './Home/About';
import Navibar from './Navibar/Navibar';
import Routing from './Routing/Routing';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navibar />
      <Routes>
        <Route path='/users' element={
           <div className="App">
           {/* <UsersClass /> */}
           <Users />
         </div>
        } />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/router/:category/:userId' element={<Routing />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
