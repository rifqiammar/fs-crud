import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

const DeleteUser = ({ users, setUsers, id, deleteStat, setDeleteStat }) => {
  const deleteUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        await axios.delete(`http://localhost:3010/users/delete/${id}`);
        setDeleteStat(true);
      }
    });
  };

  return (
    <>
      <button type="buton" className="btn btn-danger" onClick={(e) => deleteUser(id)}>
        hapus
      </button>
    </>
  );
};

export default DeleteUser;
