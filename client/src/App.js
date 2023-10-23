import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Userlist from "./component/users/Userlist";
import AddUser from "./component/users/AddUser";
import EditUser from "./component/users/EditUser";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Userlist />} />
          <Route path="/users" element={<Userlist />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
