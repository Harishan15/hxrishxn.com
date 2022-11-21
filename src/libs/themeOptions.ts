import { PaletteColorOptions, PaletteMode } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles/createTheme';

const themeOptions: (mode: PaletteMode) => ThemeOptions = (
  mode: PaletteMode
) => ({
  palette: {
    mode,
    // mode: "light",
    primary: {
      main: mode === 'dark' ? '#4920FF' : '#000555',
      // main: mode === "dark" ? "#4920FF" : "#4920FF",
      light: '#BFC6FF',
      dark: '#16048C',
    },
    secondary: {
      main: '#505050',
      light: '#ffffff',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: '700',
    },
    h2: {
      fontWeight: '700',
    },
    h3: {
      fontWeight: '700',
    },
    h4: {
      fontWeight: '700',
    },
    h5: {
      fontWeight: '700',
    },
    h6: {
      fontWeight: '700',
    },
    body1: {
      fontSize: '16px',
    },
    body2: {
      fontSize: '14px',
      color: '#777',
    },
    subtitle1: {
      fontSize: '16px',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
      },
      styleOverrides: {
        root: {
          // boxShadow: '0px 2px 8px 0px rgb(0 0 0 / 15%)',
          // boxShadow: '0px 2px 0px 0px rgb(0 0 0 / 100%)',
          boxShadow: '0px 1px 0px 0px #00000033',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        // variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
    },
    MuiTableContainer: {
      defaultProps: {},
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: 'none',
          border: '1px solid',
          borderColor: '#77777730',
          // boxShadow: "0px 2px 10px 0px rgb(0 0 0 / 12%)",
        },
      },
    },
    MuiTable: {
      defaultProps: {},
      styleOverrides: {
        root: {
          borderRadius: '50px',
          boxShadow: 'none',
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
        square: false,
      },
      styleOverrides: {
        root: {
          '&:before': {
            backgroundColor: 'unset',
          },
          borderRadius: '10px',
          boxShadow: 'none',
          border: '1px solid',
          borderColor: '#77777730',
          // boxShadow: "0px 2px 10px 0px rgb(0 0 0 / 12%)",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 10px 0px rgb(0 0 0 / 32%)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 15px 0px rgb(0 0 0 / 15%)',
          // border: "1px solid",
          // borderColor: "#77777730",
        },
      },
    },
    MuiModal: {
      defaultProps: {
        slotProps: {
          backdrop: {
            style: {
              // background: "rgb(0 0 0 / 40%)",
              // backdropFilter: "blur(4px)",
            },
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        // root: {
        //   // boxShadow: "0px 2px 15px 0px rgb(0 0 0 / 15%)",
        //   border: "1px solid",
        //   borderColor: "#77777740",
        //   borderRadius: "12px",
        // },
        root: ({ ownerState }) => ({
          border: '1px solid',
          borderRadius: '12px',
          borderColor: '#77777700',
          transition: 'all 0.5s',
          ...(ownerState.selected === true && {
            borderColor: '#77777730',
          }),
        }),
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          // boxShadow: "0px 2px 15px 0px rgb(0 0 0 / 15%)",
          border: '1px solid',
          borderColor: '#77777740',
          borderRadius: '12px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          // boxShadow: "0px 2px 15px 0px rgb(0 0 0 / 12%)",
          boxShadow: '0px 2px 15px 0px rgb(0 0 0 / 5%)',
          // border: "1px solid",
          // borderColor: "#77777740",
          // borderRadius: "12px",
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + $track': {
              opacity: 1,
              border: 'none',
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: '1px solid #bdbdbd',
          backgroundColor: '#fafafa',
          opacity: 1,
          transition:
            'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
        sx: { pb: '1rem', pt: '1rem' },
      },
    },
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
});

export default themeOptions;

export const purpleThemeOptions: PaletteColorOptions = {
  main: '#6200ea',
  light: '#000000',
  dark: '#000000',
};

export const greenThemeOptions: PaletteColorOptions = {
  main: '#00bfa5',
  light: '#000000',
  dark: '#000000',
};

export const blueThemeOptions: PaletteColorOptions = {
  main: '#0091ea',
  light: '#000000',
  dark: '#000000',
};

export const orangeThemeOptions: PaletteColorOptions = {
  main: '#dd2c00',
  light: '#000000',
  dark: '#000000',
};
