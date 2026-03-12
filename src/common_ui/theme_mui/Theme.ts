import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";
import { FontFamily } from "./FontFamily";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    taupeBrownFilled: true;
    taupeBrownOutline: true;
    grayOutline: true;
    grayFilledOutline: true;
  }
}

const baseTheme = createTheme({
  palette: {
    primary: {
      main: colors.taupeBrown,
    },
    secondary: {
      main: colors.orange,
    },
    success: {
      main: colors.green,
    },
    error: {
      main: colors.red,
    },
    background: {
      default: colors.lightGray,
      paper: colors.white,
    },
  },

  typography: {
    fontFamily: FontFamily.Book,

    h1: {
      fontSize: "40px",
      fontWeight: 700,
      fontFamily: FontFamily.Bold,
    },

    h2: {
      fontSize: "32px",
      fontWeight: 600,
      fontFamily: FontFamily.Bold,
    },

    h3: {
      fontSize: "26px",
      fontWeight: 600,
    },

    body1: {
      fontSize: "16px",
      fontFamily: FontFamily.Book,
    },

    button: {
      textTransform: "none",
      fontFamily: FontFamily.Book,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const theme = createTheme(baseTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          borderRadius: "8px",
          // padding: "8px 30px",
          padding: "8px 20px",
          textTransform: "none",
          border: `1px solid ${colors.black}`,
          backgroundColor: "transparent",
          color: colors.black,
          height: "100%",
        },
      },

      variants: [
        // Taupe Brown Button
        {
          props: { variant: "taupeBrownFilled" },
          style: {
            borderColor: colors.taupeBrown,
            backgroundColor: colors.taupeBrown,
            color: colors.white,
            // "&:hover": {
            //   backgroundColor: "#1b5e20",
            // },
          },
        },

        // Taupe Brown Outline Button
        {
          props: { variant: "taupeBrownOutline" },
          style: {
            borderColor: colors.taupeBrown,
            backgroundColor: colors.white,
            color: colors.taupeBrown,
            // "&:hover": {
            //   backgroundColor: "#1b5e20",
            // },
          },
        },

        // Gray Outline Button
        {
          props: { variant: "grayOutline" },
          style: {
            borderColor: colors.gray,
            backgroundColor: colors.white,
            color: colors.black,
            // "&:hover": {
            //   backgroundColor: "#e8f5e9",
            // },
          },
        },

        // Gray FilledOutline Button
        {
          props: { variant: "grayFilledOutline" },
          style: {
            borderColor: colors.gray,
            backgroundColor: colors.lightGray,
            color: colors.black,
            // "&:hover": {
            //   backgroundColor: "#e8f5e9",
            // },
          },
        },
        // Disable Button
        {
          props: { variant: "grayFilledOutline" },
          style: {
            borderColor: colors.gray,
            backgroundColor: colors.gray,
            color: colors.white,
            // "&:hover": {
            //   backgroundColor: "#e8f5e9",
            // },
          },
        },
      ],
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.gray,
          "& .MuiSvgIcon-root": {
            borderRadius: "4px",
          },
          "&.Mui-checked": {
            color: colors.taupeBrown,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "2px 20px",
          borderColor: colors.gray,
          fontSize: "14px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
});

export default theme;
