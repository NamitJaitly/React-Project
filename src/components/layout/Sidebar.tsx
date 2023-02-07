import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Box className="w-15 px-3 py-5 white h-screen fixed top-0 left-0">
      <Text className="text-xl weight-5">
        <Link to="/">
          <Text className="text-2xl weight-7 black-text">
            NS
          </Text>
        </Link>
      </Text>
    </Box>
  );
};
