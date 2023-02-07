import { Fragment } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Box, Text, Image, Grid, GridItem, Divider } from "@chakra-ui/react";
import { RootState } from "../../redux/configureStore";

export const UserView = () => {
  const { id } = useParams();
  const { usersLoading, usersData } = useSelector((state: RootState) => ({
    usersLoading: state.users.loading,
    usersData: state.users.users,
  }));
  console.log("id", id);
  
  const item = usersData.find((i) => i.id == id);
  console.log("user id",item);
  
  if (item == null) return null;
  return (
    <Fragment>
      <Box className="purple p-12 w-full h-full flex align-center justify-center">
        <Box className="p-10 blue lighten br-5 box-shadow-2 profile-width  h-full overflow-auto no-scroll" key={item.id}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem colSpan={1} className="white p-3 br-3">
              <Box className="flex align-center vertical">
                <Box className="mb-4 profile-circle">
                  <Image src={item.profileImg} />
                </Box>
                <Text className="text-3xl weight-6 ">{item.name}</Text>
                <Text className="text-lg weight-4 mb-3">{item.dob}</Text>
              </Box>
              <Divider className="my-5" />
              <Box className="my-3">
                <Text className="text-xl weight-6 my-4 text-center">
                  Personal Info
                </Text>
                <Box className="flex justify-between mb-3">
                  <Text className="text-lg weight-6">Gender</Text>
                  <Text className="text-base weight-5">{item.gender}</Text>
                </Box>
                <Box className="flex justify-between mb-3">
                  <Text className="text-lg weight-6">Email</Text>
                  <Text className="text-base weight-5">{item.email}</Text>
                </Box>
                <Box className="flex justify-between mb-3">
                  <Text className="text-lg weight-6">Phone</Text>
                  <Text className="text-base weight-5">{item.phone}</Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={2} className="white p-4 br-3">
              <Box className="mb-3">
                <Text className="text-lg weight-6 mt-2 mb-4">About User</Text>
                <Text className="text-base weight-5 line-7">{item.about}</Text>
              </Box>
              {/* <Box>
                <Text className="text-lg weight-6 mb-2 mt-4">Hobbies</Text>
                {item.hobbies.map((element: any, index: number) => {
                  return (
                    <Text key={index} className="text-base">
                      {element}
                    </Text>
                  );
                })}
              </Box> */}
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
};
