import './App.css';
import { Route , Routes } from "react-router-dom";
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';



function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/addUser" element = {<AddUser />} />
        <Route path = "/editUser/:id" element = {<EditUser />} />
      </Routes>

    </div>
  );
}

export default App;
