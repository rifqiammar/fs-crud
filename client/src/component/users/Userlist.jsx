import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteUser from "./DeleteUser";
import { useNavigate, Link } from "react-router-dom";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [deleteStat, setDeleteStat] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, [deleteStat]);

  //   Get users List
  const getUser = async () => {
    const response = await axios.get("http://localhost:3010/users");
    setUsers(response.data);
  };

  return (
    <div className="container mt-5">
      <Link to={"add"} className="btn btn-success mb-2">
        {" "}
        Add User
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, username, email, img }, i) => {
            return (
              <tr key={id}>
                <th scope="row">{i + 1}</th>
                <td>{username}</td>
                <td>{email}</td>
                <td>{img}</td>
                <td>
                  <button
                    type="button"
                    className="mx-2 btn btn-secondary"
                    onClick={() => {
                      navigate(`/users/edit/${id}`);
                    }}
                  >
                    ubah
                  </button>

                  <DeleteUser users={users} setUsers={setUsers} id={id} deleteStat={deleteStat} setDeleteStat={setDeleteStat} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
