import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect } from 'react';
import useUIStore from '../../stores/uiStore';
import { useLocalStorage } from '../../hooks/useStorage';
import useWindowSize from '../../hooks/useWindowSize';
import { screenType } from '../../types/screenType';
import { app } from '../../config/app';
import mobileLight from '../../theme/light/mobileLight';
import ThemeType from '../../types/themeType';

const RootProvider = ({ children }) => {
  const [{ systemTheme : theme, screenType: screenTypeDetails }, { setAppName, setScreenType, setSystemTheme}] = useUIStore();
  const [systemTheme] = useLocalStorage('systemTheme', theme);
  const {width, height} = useWindowSize();

  const getTheme = () => {
    return (screenTypeDetails) ?
    (systemTheme === ThemeType.LIGHT ? screenTypeDetails?.theme?.light : screenTypeDetails?.theme?.dark) :
    mobileLight;
  }

  useEffect(() => {
    setSystemTheme(systemTheme);
    setAppName(app('APP_NAME'));
    console.log(screenType(width, height))
    setScreenType(screenType(width, height));
  }, [width, height, systemTheme]);

  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
}

export default RootProvider;
