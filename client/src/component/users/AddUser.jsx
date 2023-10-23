import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3010/users/register", {
        username,
        email,
        password,
        role,
      });
      navigate("/users");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="username" className="form-label">
            username
          </label>
          <input type="text" className="form-control" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            email address
          </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" name="email" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Role
          </label>
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} className="form-control" id="role" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
