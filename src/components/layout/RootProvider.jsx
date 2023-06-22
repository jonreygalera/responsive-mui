import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import useUIStore from '../../stores/uiStore';
import { useLocalStorage } from '../../hooks/useStorage';
import useWindowSize from '../../hooks/useWindowSize';
import { screenType } from '../../types/screenType';
import { app } from '../../config/app';
import { darkTheme, lightTheme } from '../../theme/theme';
import ThemeType from '../../types/themeType';

const RootProvider = ({ children }) => {
  const [{ systemTheme : theme, screenType: screenTypeDetails }, { setAppName, setScreenType, setSystemTheme}] = useUIStore();
  const [systemTheme, setSystemThemeValue] = useLocalStorage('systemTheme', theme);
  const {width, height} = useWindowSize();

  const getTheme = useMemo(() => {
    return (screenTypeDetails) ?
    (systemTheme === ThemeType.LIGHT ? lightTheme: darkTheme) :
    lightTheme;
  }, [screenTypeDetails, systemTheme])

  useEffect(() => {
    setSystemTheme(theme);
    setSystemThemeValue(theme);
    setAppName(app('APP_NAME'));
    console.log(screenType(width, height))
    setScreenType(screenType(width, height));
  }, [width, height, theme]);

  return (
    <ThemeProvider theme={getTheme}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
}

export default RootProvider;
