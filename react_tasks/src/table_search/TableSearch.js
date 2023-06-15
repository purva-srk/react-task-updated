import { useState } from "react";
import { Users } from "./users.js";

const TableSearch = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const filteredDataRecords = Users.filter(
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
  );
  const dataRecords = filteredDataRecords.slice(firstIndex, lastIndex);
  const noOfPages = Math.ceil(filteredDataRecords.length / recordsPerPage);
  const pageNumbers = [...Array(noOfPages + 1).keys()].slice(1);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
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
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {dataRecords.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="pagination">
        <li>
          <a disabled={currentPage === 1} onClick={handlePrevPage}>
            {"<<Prev"}
          </a>
        </li>
        {pageNumbers.map((n, i) => (
          <li key={i}>
            <a
              className={currentPage === n ? "active" : ""}
              onClick={() => changeCurrentPage(n)}
            >
              {n}
            </a>
          </li>
        ))}
        <li>
          <a disabled={currentPage === noOfPages} onClick={handleNextPage}>
            {"Next>>"}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TableSearch;
