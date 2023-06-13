import { useState } from "react";
import { Users } from "./users.js";

const TableSearch = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const dataRecords = Users.slice(firstIndex, lastIndex);
  const noOfPages = Math.ceil(Users.length / recordsPerPage);
  const numbers = [...Array(noOfPages + 1).keys()].slice(1);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  const handleNextPage = () => {
    if (currentPage !== noOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleSearchInput} />
      {search === "" ? (
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>

          {dataRecords.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </table>
      ) : (
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>

          {Users.filter(
            (user) =>
              user.first_name.includes(search) ||
              user.first_name.toLowerCase().includes(search) ||
              user.first_name.toUpperCase().includes(search) ||
              user.last_name.includes(search) ||
              user.last_name.toLowerCase().includes(search) ||
              user.last_name.toUpperCase().includes(search) ||
              user.email.includes(search) ||
              user.email.toLowerCase().includes(search) ||
              user.email.toUpperCase().includes(search)
          ).map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </table>
      )}
      {search === "" && (
        <nav className="table-search-flex">
          <ul className="pagination">
            <li>
              <a href="#" onClick={handlePrevPage}>
                {"<<Prev"}
              </a>
            </li>
            {numbers.map((n, i) => (
              <li key={i}>
                <a href="#" onClick={() => changeCurrentPage(n)}>
                  {n}
                </a>
              </li>
            ))}
            <li>
              <a href="#" onClick={handleNextPage}>
                {"Next>>"}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default TableSearch;
