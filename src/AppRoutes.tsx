import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { RootState, useAppDispatch } from "./redux/configureStore";
import { fetchUsers } from "./redux/modules/users";
import { UserTable, AddUser, EditUser, UserView, DeleteUser } from "./components/users";
import { About, Dashboard, Home } from "./pages";
import { Login, SignUp } from "./pages/Auth";
import { setIsLoggedIn } from "./redux/modules/verification";
import { AddHobbies } from "./components/users/addHobbies/AddHobbies";

function AppRoutes() {
  const { userLoading, usersData, isLoggedIn } = useSelector(
    (state: RootState) => ({
      userLoading: state.users.loading,
      usersData: state.users.users,
      isLoggedIn: state.authorized.isLoggedIn
    })
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const state = useLocation();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [fetchUsers]);
  const userToken = localStorage.getItem("user-token");

  useEffect(() => {
    if (userToken == null) {
      navigate("/");
    } else {
      dispatch(setIsLoggedIn(true))
      if (isLoggedIn) {
        navigate(state?.pathname || "/dashboard");
      } else navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/about" element={<About />} />
        <Route
          path=""
          element={
            userLoading ? (
              <Box className="relative h-screen">
                <Box className="center-circle ">Users Are Loading...</Box>
              </Box>
            ) : (
              <UserTable users={usersData} />
            )
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route
          path=""
          element={
            userLoading ? (
              <Box className="relative h-screen">
                <Box className="center-circle ">Users Are Loading...</Box>
              </Box>
            ) : (
              <UserTable users={usersData} />
            )
          } />
        <Route path="/dashboard/delete/:id" element={<DeleteUser />} />
        <Route path="/dashboard/AddUser" element={<AddUser />} />
        <Route path="/dashboard/:id/EditUser" element={<EditUser />} />
        <Route path="/dashboard/:id/AddHobbies" element={<AddHobbies />} />
        <Route path="/dashboard/user/:id" element={<UserView />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
