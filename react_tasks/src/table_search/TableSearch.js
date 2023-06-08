import { useState } from "react";
import { Users } from "./users.js";

const TableSearch = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          {Users.filter(
            (user) =>
              user.first_name.toLowerCase().includes(search) ||
              user.last_name.toLowerCase().includes(search) ||
              user.email.toLowerCase().includes(search)
          ).map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </table>
      }
    </div>
  );
};

export default TableSearch;
