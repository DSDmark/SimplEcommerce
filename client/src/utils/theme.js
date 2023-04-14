import createTheme from "@mui/material/styles/createTheme";

export const shades = {
  sco: {
    100: "#fee0eb",
    200: "#fda1c3",
    300: "#fc629a",
    400: "#fb2372",
    500: "#dc0452",
    600: "#9d033b",
    700: "#9d033b",
  },
  con: {
    100: "#e5f9e6",
    200: "#b1edb4",
    300: "#7ee182",
    400: "#4ad551",
    500: "#2ab531",
    600: "#1e8123",
    700: "#124e15",
  },
  pri: {
    100: "#f9e5e5",
    200: "#edb1b2",
    300: "#e17d7f",
    400: "#d5494b",
    500: "#b62a2b",
    600: "#821e1f",
    700: "#4e1213",
  }
}

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          textTransformation: "capitalize",
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: shades.sco[100],
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: shades.sco[600],
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          justifyContent: "center",
          alignItems: "center",
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: shades.sco[100],
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          textTransform: "capitalize",
        }
      }
    }
  },
  palette: {
    mode: "light",
    primary: {
      main: shades.pri[500],
      light: shades.pri[100],
      dark: shades.pri[700]
    },
    secondary: {
      main: shades.sco[500],
      light: shades.sco[100],
      dark: shades.sco[700]
    },
    info: {
      main: shades.con[500],
      light: shades.con[100],
      dark: shades.con[700]
    },
  },
  typography: {
    title: {
      color: shades.sco[700],
      fontSize: "2rem"
    },
    subtitle: {
      fontSize: "1.2rem",
      color: shades.sco[500],
    },
    caption: {
      color: shades.sco[200],
      fontSize: "1rem",
    }
  },
  zIndex: [10, 100],
})

export default theme
