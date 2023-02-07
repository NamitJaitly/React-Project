import { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Box, Text, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/configureStore";
import { fetchUsers, updateUser } from "../../redux/modules/users";
import { Link } from "react-router-dom";
import { Field, Formik, Form, useField } from "formik";

const MyTextArea = ({ label, ...props }: any) => {

  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
export const EditUser = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  const { currUser, currHobbies } = useSelector((state: RootState) => ({
    currUser: state.users.users,
    currHobbies: state.users.hobbies,
  }));
  const navigate = useNavigate();

  console.log(currHobbies, "current");

  const item = currUser.find((element) => element.id == id);
  if (item == null) return null;

  const defaultvalue = {
    email: item.email,
    name: item.name,
    profileImg: item.profileImg,
    age: item.age,
    gender: item.gender,
    dob: item.dob,
    phone: item.phone,
    about: item.about
  };

  const onSubmit = (values: any) => {
    values.hobbies = currHobbies;
    console.log("Hello", values);
    dispatch(updateUser({ values, id }));
    navigate(`/dashboard/user/${id}`)
  };

  return (
    <Fragment>
      <Box className="flex justify-center purple align-center py-8 h-full">
        <Box className="form-width white px-5 py-8 br-4 box-shadow-2 h-full overflow-auto no-scroll">
          <Box className="mb-4">
            <Text className="text-2xl weight-7 mb-5">Edit User Info</Text>
          </Box>
          <Formik initialValues={defaultvalue} onSubmit={onSubmit}>
            <Form>
              <Box className="mb-3">
                <Text className="text-lg weight-6 mb-2">User Name</Text>
                <Field
                  name="name"
                  placeholder="Elon"
                  className="block py-3 px-2 grey lighten-8 w-full br"
                ></Field>
              </Box>
              <Box className="mb-3">
                <Text className="text-lg weight-6 mb-2">Age</Text>
                <Field
                  name="age"
                  className="block py-3 px-2 grey lighten-8 w-full br"
                ></Field>
              </Box>
              <Box className="flex align-center mb-2 w-half">
                <Text className="text-lg weight-6">Gender</Text>
                <Box>
                  <Box className="mr-4 ml-auto flex align-center">
                    <Text className="form-label mb-3 mr-60">Male</Text>
                    <Field
                      name="gender"
                      type="radio"
                      placeholder="Enter Your Password"
                      value="male"
                      className="w-100 p-2 form-field mb-3 mr-60"
                    ></Field>
                  </Box>
                  <Box className="ml-2 flex align-center">
                    <Text className="form-label mb-3 mr-60">Female</Text>
                    <Field
                      name="gender"
                      type="radio"
                      value="female"
                      className="w-100 p-2 form-field mb-3"
                    ></Field>
                  </Box>
                </Box>
              </Box>
              <Box className="flex">
                <Box className="mb-3 w-half mr-4">
                  <Text className="text-lg weight-6 mb-2">Profile Image</Text>
                  <Field
                    name="profileImg"
                    type="text"
                    className="block py-3 px-2 grey lighten-8 w-full br"
                  ></Field>
                </Box>
                <Box className="mb-3 w-half">
                  <Text className="text-lg weight-6 mb-2">DOB</Text>
                  <Field
                    name="dob"
                    type="string"
                    className="block py-3 px-2 grey lighten-8 w-full br"
                  ></Field>
                </Box>
              </Box>
              <Box className="flex">
                <Box className="mb-3 w-half mr-4">
                  <Text className="text-lg weight-6 mb-2">Age</Text>
                  <Field
                    name="age"
                    type="number"
                    required="Age Required"
                    className="block py-3 px-2 grey lighten-8 w-full br"
                  ></Field>
                </Box>
                <Box className="mb-3 w-half">
                  <Text className="text-lg weight-6 mb-2">Phone</Text>
                  <Field
                    name="phone"
                    type="string"
                    formatter="+1 (###)-###-####"
                    className="block py-3 px-2 grey lighten-8 w-full br"
                  ></Field>
                </Box>
              </Box>
              <Box className="mb-3">
                <Text className="text-lg weight-6 mb-2 ">
                  Email
                  <Text className="text-sm weight-3 inline">
                    (Can't be Edited)
                  </Text>
                </Text>
                <Field
                  name="email"
                  type="string"
                  readOnly
                  className="block py-3 px-2 grey lighten-8 w-full br"
                />
              </Box>
              <Box className="mb-3">
                <Text className="text-lg weight-6 mb-2">About</Text>
                <MyTextArea
                  name="about"
                  className="block py-3 px-2 grey lighten-8 w-full br h-40"
                />
              </Box>
              <Box>
                <Text>
                  <Link to={`/dashboard/${item.id}/AddHobbies`}>
                    Add/Edit Your Hobbies
                  </Link>
                </Text>
                {currHobbies?.map((element: string, index: number) => {
                  return (
                    <Box key={index}>
                      <Text className="text-lg">{element}</Text>
                    </Box>
                  );
                })}
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
          </Formik>
        </Box>
      </Box>
    </Fragment>
  );
};
