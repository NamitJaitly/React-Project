import { Fragment } from "react";
import { Form, Input, Checkbox, RadioGroup, Radio, TextArea } from "informed";
import { Box, Button, Text } from "@chakra-ui/react";
import { useAppDispatch } from "../../redux/configureStore";
import { addUsers } from "../../redux/modules/users";
import { useNavigate } from "react-router";

export const AddUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const hobbies: any[] = []
  const onSubmit = ({ values }: any) => {
    const data = values;
    if(values.Reading === true ){
      hobbies.push("reading")
    }
    
    dispatch(addUsers(data));
    navigate("/dashboard");
    window.location.reload();
  };
  console.log("hobbies", hobbies);
  return (
    <Fragment>
      <Box className="flex justify-center purple align-center py-8 h-full">
        <Box className="form-width white px-5 py-8 br-4 box-shadow-2 h-full overflow-auto no-scroll">
          <Box>
            <Text className="text-2xl weight-7 mb-5">Add New User</Text>
          </Box>
          <Form onSubmit={onSubmit}>
            <Box className="mb-3">
              <Text className="text-lg weight-6 mb-2">User Name</Text>
              <Input
                name="name"
                placeholder="Elon"
                className="block py-3 px-2 grey lighten-8 w-full br"
              />
            </Box>
            <RadioGroup name="gender">
              <Box className="flex align-center mb-2">
                <Text className="text-lg weight-6">Gender</Text>
                <Box className="mr-4 ml-auto flex align-center">
                  <Text className="text-lg weight-6 mr-2">Male</Text>
                  <Radio value="male" />
                </Box>
                <Box className="ml-2 flex align-center">
                  <Text className="text-lg weight-6 mr-2">Female</Text>
                  <Radio value="female" />
                </Box>
              </Box>
            </RadioGroup>
            <Box className="flex">
              <Box className="mb-3 w-half mr-4">
                <Text className="text-lg weight-6 mb-2">Profile Image</Text>
                <Input
                  name="profileImg"
                  type="string"
                  className="block py-3 px-2 grey lighten-8 w-full br"
                />
              </Box>
              <Box className="mb-3 w-half">
                <Text className="text-lg weight-6 mb-2">DOB</Text>
                <Input
                  name="dob"
                  className="block py-3 px-2 grey lighten-8 w-full br"
                />
              </Box>
            </Box>
            <Box className="flex">
              <Box className="mb-3 w-half mr-4">
                <Text className="text-lg weight-6 mb-2">Age</Text>
                <Input
                  name="age"
                  type="number"
                  required="Age Required"
                  className="block py-3 px-2 grey lighten-8 w-full br"
                />
              </Box>
              <Box className="mb-3 w-half">
                <Text className="text-lg weight-6 mb-2">Phone</Text>
                <Input
                  name="phone"
                  formatter="+1 (###)-###-####"
                  className="block py-3 px-2 grey lighten-8 w-full br"
                />
              </Box>
            </Box>
            <Box className="mb-3">
              <Text className="text-lg weight-6 mb-2">Email</Text>
              <Input
                name="email"
                type="string"
                required="Email Required"
                className="block py-3 px-2 grey lighten-8 w-full br"
              />
            </Box>
            <Box className="mb-3">
              <Text className="text-lg weight-6 mb-2">About</Text>
              <TextArea
                name="about"
                className="block py-3 px-2 grey lighten-8 w-full br"
              />
            </Box>
            <Box>
              <Text className="text-lg weight6">Hobbies</Text>
              <Text className="text-base">Sports</Text>
              <Checkbox name="Sports" />
              <Text className="text-base">Reading</Text>
              <Checkbox name="Reading" />{" "}
              <Text className="text-base">Swimming</Text>
              <Checkbox name="Swimming" />{" "}
              <Text className="text-base">Hiking</Text>
              <Checkbox name="Hiking" />{" "}
              <Text className="text-base">Singing</Text>
              <Checkbox name="Singing" />
            </Box>
            <Button
              type="submit"
              colorScheme="blue"
              variant="solid"
              className="w-full"
            >
              Submit
            </Button>
          </Form>
        </Box>
      </Box>
    </Fragment>
  );
};
