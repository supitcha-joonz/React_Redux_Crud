import './App.css';
import { Route , Routes } from "react-router-dom";
import Home from './pages/Home';
import AddUser from './pages/AddUser';



function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/addUser" element = {<AddUser />} />
      </Routes>

    </div>
  );
}

export default App;
