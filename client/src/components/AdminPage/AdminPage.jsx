import React from "react";

function AdminPage() {
  return (
    <div>
      <h3>Admin Homepage</h3>
      <form>
        <button>Add Car Details</button>
        <label htmlFor="">
          <input type="text"></input>
        </label>
        <label htmlFor="">
          <input type="text"></input>
        </label>
        <label htmlFor="">
          <input type="text"></input>
        </label>
        <button>Update</button>
        <button>Delete</button>
      </form>
    </div>
  );
}

export default AdminPage;
