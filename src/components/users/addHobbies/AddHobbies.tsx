import { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useParams } from "react-router";
import { raisedClasses } from "../../../Theme/Classes/CustomClasses";
import { hobbiesArr } from "../../../common/data/hobbies";
import { setHobbies } from "../../../redux/modules/users";
import { RootState, useAppDispatch } from "../../../redux/configureStore";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const AddHobbies = () => {
  const { id } = useParams();
  const [isActive, setIsActive] = useState<boolean>(false);
  const { Hobbies } = useSelector((state: RootState) => ({
    Hobbies: state.users.hobbies,
  }));
  const dispatch = useAppDispatch();
  const defaultValue = {
    checkbox: "",
  };

  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
    } else setIsActive(false);
  };

  const handleCheckbox = (values: any) => {
    const myHobbies = values.hobbies;
    dispatch(setHobbies(myHobbies));
    console.log(myHobbies, "1234");
    
  };

  return (
    <Box className="p-10">
      <Formik initialValues={defaultValue} onSubmit={handleCheckbox}>
        <Form>
          <Box>
            <Text className="white text-base">
              <Link to={`/dashboard/${id}/EditUser`}>Back to Edit Page</Link>
            </Text>
          </Box>
          <Box className="w-100 mx-auto h-full overflow-auto white p-6 br-2">
            <Box className="mb-6">
              <Text className="text-lg weight-6">
                Add/Update your hobbies
              </Text>
            </Box>
            {hobbiesArr.map((element: string, index: number) => {
              return (
                <Box
                  key={index}
                  sx={raisedClasses}
                  className={
                    isActive
                      ? "mb-4 flex align-center justify-between relative selected-checbox"
                      : "mb-4 flex align-center justify-between relative"
                  }
                >
                  <label>{element}</label>
                  <Field
                    type="checkbox"
                    name="hobbies"
                    value={element}
                    className="absolute checkbox"
                    onClick={handleClick}
                  ></Field>
                </Box>
              );
            })}
            <Button type="submit" colorScheme="blue" className="w-full" >
              Add Hobbies
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};
