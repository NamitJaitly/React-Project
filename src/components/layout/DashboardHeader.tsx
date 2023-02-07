import { Box, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/configureStore";
import { setUser } from "../../redux/modules/auth";

export const DashboardHeader = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(setUser(null))
    localStorage.clear()
    navigate('/login')
  }
  return (
    <header className="h-14 p-4 blue lighten flex">
      <Box className="ml-auto">
        <Button variant="ghost" colorScheme="teal" className="mr-3">
          <Link to="/dashboard">DashBoard</Link>
        </Button>
        <Button variant="ghost" colorScheme="teal" className="mr-3">
          <Link to="/dashboard/AddUser">Add User</Link>
        </Button>
        <Button variant="ghost" colorScheme="teal" onClick={handleLogout}>
          LogOut
        </Button>
      </Box>
    </header>
  );
};
