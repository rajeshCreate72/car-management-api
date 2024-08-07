import React from "react";

function HomePage() {
  return (
    <div>
      <h3>User Homepage</h3>
      <table>
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Manufacturing Year</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{/* Here all the car data */}</tbody>
      </table>
    </div>
  );
}

export default HomePage;
