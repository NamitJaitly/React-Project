import { Form, Input } from "informed";
import { useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useAppDispatch, RootState } from "../../redux/configureStore";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchVerified, setIsLoggedIn } from "../../redux/modules/verification";

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { authorizedUser } = useSelector((state: RootState) => ({
    authorizedUser: state.authorized.authorized,
  }));
  useEffect(() => {
    dispatch(fetchVerified());
  }, [dispatch]);

  const onSubmit = ({ values }: any) => {
    const data = values;

    const verified = authorizedUser.find(
      (items) => items.email === data.email && items.password === data.password
    );
    if (verified === null) return console.log("Invalid User", verified);
    else {
      const currToken = verified.token;
      localStorage.setItem("user-token", currToken);
      dispatch(setIsLoggedIn(true))
      navigate("/dashboard");
    }
  };

  return (
    <Box className="full p-20 green lighten-4">
      <Box className="h-full flex white br-5 overflow-hidden">
        <Box className="w-half p-10 overflow-auto no-scroll flex justify-center align-center">
          <Box className="w-85">
            <Box className="mb-8">
              <Text className="text-3xl weight-7">Login To Namit's Project</Text>
              <Text>
                Don't have an account?{" "}
                <Link to="/signup" className="blue-text text-primary-color">
                  Sign Up
                </Link>{" "}
                Now!
              </Text>
            </Box>
            <Form onSubmit={onSubmit} id="loginForm">
              <Box className="mb-3">
                <Text className="text-base weight-6 mb-2">Email</Text>
                <Input
                  name="email"
                  required="Email Required"
                  placeholder="Enter Email"
                  className="block py-3 px-2 grey lighten-8 w-full br"
                />
              </Box>
              <Box className="mb-3">
                <Text className="text-base weight-6 mb-2">Password</Text>
                <Input
                  name="password"
                  required="*****"
                  placeholder="Enter Password"
                  className="block py-3 px-2 grey lighten-8 w-full br"
                />
              </Box>
            <Button
              className="w-full mt-5"
              colorScheme="blue"
              type="submit"
              id="login-btn"
            >
              Login
            </Button>
            <Link to="/" className="text-sm">Login Later</Link>
            </Form>
          </Box>
        </Box>
        <Box className="w-half relative login-bg px-4">
          <Box className="absolute inset-0 linear-black"></Box>
          <Box className="absolute bottom-100">
            <Text className="white-text text-2xl weight-7">Lorem Ipsum</Text>
            <Text className="white-text text-lg auth-caption">This is simply demo text that I am using for design purposes. This is simply demo text that I am using for design purposes.</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
