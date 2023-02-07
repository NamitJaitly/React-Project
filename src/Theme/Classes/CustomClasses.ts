const COLORS = {
    0: "#F7F7FA",
    5: "#EDEDF0",
    10: "#E1E1E3",
    40: "#9696A0",
    controlColor: "#2264D1",
    focusColor: "#9DC2FF"
  };
  

export const raisedClasses = {
    minH: "40px",
    px: "12px",
    w: "100%",
    borderRadius: "6px",
    transition: "all 150ms",
    _active: {
      bg: COLORS[5],
      boxShadow:
        "inset 0px 1px 2px rgba(73, 95, 131, 0.24), inset 0px 2px 4px rgba(62, 90, 135, 0.24);"
    },
    "span[class*='checkbox__control']:not([data-disabled])": {
      borderColor: COLORS.controlColor,
      borderRadius: "2px",
      _checked: {
        bg: COLORS.controlColor,
        borderColor: COLORS.controlColor
      },
      _focus: {
        boxShadow: `0 0 0 2px ${COLORS.focusColor}`,
        _checked: {
          boxShadow: `0 0 0 2px ${COLORS.focusColor}`
        }
      }
    },
    _hover: {
      boxShadow:
        "0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24);",
      bg: COLORS[0],
      transition: "all 350ms",
      _checked: {
        bg: COLORS[5],
        boxShadow:
          "inset 0px 1px 2px rgba(73, 95, 131, 0.24), inset 0px 2px 4px rgba(62, 90, 135, 0.24);"
      }
    }
  };