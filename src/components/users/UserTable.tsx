import { useState, useEffect } from "react";
import { IUSERS } from "../../common/interfaces/Users";
import { UserTableRow } from "./UserTableRow";
import { Box, Table, Thead, Tbody, Th, Tr } from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";

export const UserTable = (props: propTypes) => {
  const { users } = props;
  const [userData, setUserData] = useState<IUSERS[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [userPerPage, setUserPerPage] = useState(5);
  const [ageSort, setAgeSort] = useState<boolean>(false);
  const [nameSort, setNameSort] = useState<boolean>(false);
  const [emailSort, setEmailSort] = useState<boolean>(false);
 
  const changeStatus = (e: any) => { setUserPerPage(e.target.value); };
  useEffect(() => {
    setUserData(users);
    setTotalPages(Math.ceil(users.length) / 5);
  }, []);
  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };
  const sortAge = () => {
    if(!ageSort){
      const numAscending = [...users].sort((a, b) => a.age - b.age);
      setUserData(numAscending)
      setAgeSort(true)
    }
    else {
      const numDescending = [...users].sort((a, b) => b.age - a.age);
      setUserData(numDescending)
      setAgeSort(false)
    }
  }
  const sortName = () => {
    const nameAscending = [...users].sort((a, b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1);
    setUserData(nameAscending)
    setNameSort(true)
  }
  const handleNextClick = () => { if (currentPage < totalPages) { setCurrentPage(currentPage + 1); } };
  const handlePrevClick = () => { if (currentPage > 1) { setCurrentPage(currentPage - 1); } };
  const nextDisabled = currentPage === totalPages;
  const startIndex = (currentPage - 1) * userPerPage;
  const endIndex = startIndex + userPerPage;
  const usersToDisplay = userData.slice(startIndex, endIndex);
  const { isLoggedIn } = useSelector((state: RootState) => ({ isLoggedIn: state.authorized.isLoggedIn }))
  return (
    <Box className="p-4 ">
      <Box className="container p-7 box-shadow-2 br-2">
        <Table variant="SimpleTable">
          <Thead>
            <Tr>
              <Th>Id</Th>
              {
                <Th onClick={sortName}>User Name</Th>
              }
              <Th onClick={sortAge}>Age</Th>
              <Th>Gender</Th>
              <Th>Email</Th>
              {
                isLoggedIn ?
                  <Th>Actions</Th> :
                  null
              }
            </Tr>
          </Thead>
          <Tbody>
            {usersToDisplay && usersToDisplay.length > 0 ? usersToDisplay.map((element) => {
              return (
                <Tr key={element.id}>
                  <UserTableRow data={element} />
                </Tr>
              );
            }) : null}
          </Tbody>
        </Table>
        <div className="wrapper-pagination">
          <div className="pagination">
            <button onClick={handlePrevClick} className="pre-next-button">
              Prev Page
            </button>
            <div className="select-dropdown">
              <select value={userPerPage} onChange={changeStatus}>
                <option value="5" className="dd-menu">
                  5
                </option>
                <option value="10" className="dd-menu">
                  10
                </option>
                <option value="15" className="dd-menu">
                  15
                </option>
                <option value="20">
                  20
                </option>
              </select>
            </div>
            {Array.from({ length: totalPages }, (_, i) => {
              return (
                <button className="pages" onClick={() => handlePageChange(i + 1)} key={i} disabled={i + 1 === currentPage}
                >
                  {i + 1}
                </button>);
            })}
            <button onClick={handleNextClick} className="pre-next-button" disabled={nextDisabled}>
              Next Page
            </button>
          </div>
        </div>
      </Box>
    </Box>
  );
};

interface propTypes {
  users: IUSERS[];
}
