import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export default createTheme(({
  palette: {
    mode: 'light',
    primary: {
      main: '#E53935'
    },
    secondary: {
      main: '#D63535',
    },
    info: {
      main: '#61A3E5'
    },
    warning: {
      main: '#edce2a'
    },
    error: {
      main: '#D32F2F'
    },
    success: {
      main: '#03C04A'
    },
    icon: {
      main: '#757575'
    },
    text: {
      main: '#4E4E4E'
    },
    background: {
      default: '#F9F9F9',
      paper: '#F9F9F9',
    },
  },
  shadows: Array(25).fill('none'),
  spacing: 4, 
  typography: {
    fontSize: 14, 
    color: '#595959',
    fontFamily: [
      'Arial'
    ].join(','),
    at: {
      fontSize: 24, 
      color: '#000',
      fontWeight: 'bold' 
    },
    h1: {
      fontWeight: 700,
      fontSize: '3rem', 
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem', 
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.5rem', 
    },
    h3l: {
      fontWeight: 400,
      fontSize: '1.5rem', 
    },
    h4: {
      fontWeight: 700,
      fontSize: '1rem', 
    },
    h5: {
      fontWeight: 700,
      fontSize: '0.875rem', 
    },
    h6: {
      fontWeight: 700,
      fontSize: '0.75rem', 
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'large'
      },
      styleOverrides: {
        root: {
          fontSize: '0.75rem', 
          borderRadius: '10px', 
          textTransform: 'capitalize',
          boxShadow: 'none',
          minWidth: '64px', 
        },
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
        variant: 'outlined'
      },
      styleOverrides: {
        root: {
          '.MuiOutlinedInput-root': {
            borderRadius: '10px', 
            minHeight: '32px', 
            gap: '3px', 
          },
        }
      }
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
}));
