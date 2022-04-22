import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      400: "#1ED760",
      500: "#45BB63",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 500,
        borderRadius: 30,
      },
      variants: {
        solid: {
          bg: "primary.500",
          color: "white",
          px: 6,
          _disabled: {
            opacity: "0.5",
          },
          _hover: {
            _disabled: {
              bg: "primary.400",
            },
            bg: "primary.400",
          },
          _focus: {
            ring: 0,
            ringColor: "",
          },
        },
        outline: {
          borderColor: "primary.500",
          color: "primary.500",
          px: 6,
          _focus: {
            ring: 0,
            ringColor: "",
          },
          _hover: {
            color:"white",
            bg: "primary.500",
          },
        },
        link: {
          _hover: {
            color: "white",
            ring: 0,
            ringColor: "",
          },
          _focus: {
            ring: 0,
            ringColor: "",
          },
        },
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: "primary.500",
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "primary.500",
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: '"Poppins", sans-serif',
      },
    },
  },
});

export default theme;
