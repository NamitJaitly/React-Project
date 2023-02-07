import { ComponentMultiStyleConfig } from "@chakra-ui/react";

const Table: ComponentMultiStyleConfig = {
  parts: ["table", "th", "tr", "td"],
  variants: {
    SimpleTable: {
      tr: {
        borderBottom: "10px solid #e6f4f8",
        boxShadow: "2px 2px 20px #c4cfd3",
        _last: {
          borderBottom: "0px",
        },
        _hover: {
          bgColor: "#e6f4f8",
          boxShadow: "none",
        },
      },
      td: {
        bgColor: "#ffffff",
        _first: {
          borderTopLeftRadius: "6px",
          borderBottomLeftRadius: "6px",
        },
        _last: {
          borderTopRightRadius: "6px",
          borderBottomRightRadius: "6px ",
        },
      },
    },
  },
};

export default Table;
