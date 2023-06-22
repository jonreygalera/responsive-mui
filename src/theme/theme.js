import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const lightTheme = createTheme({
  spacing: 10, 
  palette: {
    mode: 'light',
    primary: {
      main: '#E53935',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E84E4B',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#2196F3',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFC107',
      contrastText: '#000000',
    },
    error: {
      main: '#D32F2F',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',
      contrastText: '#FFFFFF',
    },
    icon: {
      main: '#616161',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#757575',
    },
    background: {
      default: '#F9F9F9',
      paper: '#F9F9F9',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    h5: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    h6: {
      fontWeight: 700,
      fontSize: '0.85rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        position: 'sticky',
        color: 'primary',
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'large',
        sx: {
          borderRadius: '8px',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: 'large',
      },
    },
    MuiChip: {
      defaultProps: {
        size: 'large',
      },
    },
    MuiDialog: {
      defaultProps: {
        maxWidth: 'sm',
        fullWidth: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'large',
      },
    },
    MuiInput: {
      defaultProps: {
        size: 'large',
      },
    },
    MuiRadio: {
      defaultProps: {
        size: 'large',
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: 'outlined',
        size: 'large',
      },
    },
    MuiSlider: {
      defaultProps: {
        size: 'large',
      },
    },
    MuiSwitch: {
      defaultProps: {
        size: 'large',
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'large',
        fullWidth: true
      },
    },
    MuiToolbar: {
      defaultProps: {
        variant: 'dense',
        sx: {
          minHeight: '64px',
        },
      },
    },
    MuiAvatar: {
      defaultProps: {
        variant: 'circular',
        sx: {
          width: 48,
          height: 48,
        },
      },
    },
    MuiBadge: {
      defaultProps: {
        variant: 'dot',
      },
    },
    MuiFab: {
      defaultProps: {
        size: 'large',
      },
    },
    MuiMenu: {
      defaultProps: {
        variant: 'selectedMenu',
      },
    },
    MuiSpeedDial: {
      defaultProps: {
        FabProps: {
          size: 'large',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          '-ms-overflow-style': '-ms-autohiding-scrollbar',
          '--scrollbarBG': 'transparent',
          '--thumbBG': grey[500],
        },
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--thumbBG) var(--scrollbarBG)'
        },
        '*::-webkit-scrollbar-track': {
          background: 'var(--scrollbarBG)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'var(--thumbBG)',
          borderRadius: '6px',
          border: '3px solid #000'
        },
        '*::-webkit-scrollbar-corner': {
          background: 'transparent',
        },
        '*::-webkit-scrollbar': {
          width: '11px',
          height: '11px',
        },
      }
    }
  },
});

export const darkTheme = createTheme({
  ...lightTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF5252',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF7F7F',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#64B5F6',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFD740',
      contrastText: '#000000',
    },
    error: {
      main: '#FF5252',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#81C784',
      contrastText: '#FFFFFF',
    },
    icon: {
      main: '#BDBDBD',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#BDBDBD',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
});