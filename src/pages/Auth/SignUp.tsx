import { Form, Input } from "informed";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/configureStore";
import { addVerified } from "../../redux/modules/verification";

const secretKey = ".MyTokenSecretKeyIs_babyShark."
export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit = ({ values }: any) => {
    const data = values;
    const { name, email, password } = data
    const token = data.email + secretKey + data.password + '6181811' + data.password
    dispatch(addVerified({ name, email, password, token }))
    localStorage.setItem("user-token", token)
    navigate("/dashboard")
  }

  return (
    <Box className="full p-20 green lighten-4">
      <Box className="h-full flex white br-5 overflow-hidden">
        <Box className="w-half p-10 overflow-auto no-scroll flex justify-center align-center">
          <Box className="w-85">
            <Box className="mb-8">
              <Text className="text-3xl weight-7">
                Sign Up in Namit's Project
              </Text>
              <Text>
                Already have an account?{" "}
                <Link to="/login" className="blue-text text-primary-color">
                  Log in
                </Link>{" "}
                Now!
              </Text>
            </Box>
            <Form id="SignUpForm" onSubmit={onSubmit}>
              <Box className="mb-3">
                <Text className="text-base weight-6 mb-2">Name</Text>
                <Input
                  name="name"
                  required="Name Required"
                  placeholder="John Doe"
                  className="block py-3 px-2 grey lighten-8 w-full br"
                />
              </Box>
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
                Sign Up
              </Button>
              <Link to="/" className="text-sm">Sign up Later</Link>
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
