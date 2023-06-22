export const ScreenTypeName = Object.freeze({
  MOBILE: 'mobile',
  TABLET: 'tablet',
  LAPTOP: 'laptop',
  DESKTOP: 'desktop',
  LARGE_DESKTOP: 'largeDesktop',
})

export const ScreenTypeProps = Object.freeze({
  MOBILE: {
    type: ScreenTypeName.MOBILE,
    minWidth: 0,
    maxWidth: 600,
    height: 1200,
  },
  TABLET: {
    type: ScreenTypeName.TABLET,
    minWidth: 601,
    maxWidth: 900,
    height: 1200,
  },
  LAPTOP: {
    type: ScreenTypeName.LAPTOP,
    minWidth: 901,
    maxWidth: 1200,
    height: 1200,
  },
  DESKTOP: {
    type: ScreenTypeName.DESKTOP,
    minWidth: 1201,
    maxWidth: 1440,
    height: 1200,
  },
  LARGE_DESKTOP: {
    type: ScreenTypeName.LARGE_DESKTOP,
    minWidth: 1441,
    maxWidth: 2560,
    height: 10000,
  }
});

export const screenType = (width, height) => { 
  return {
    ...Object.values(ScreenTypeProps).find(data => (width >= data.minWidth && width <= data.maxWidth)),
    screenWidth: width,
    screenHeight: height
  };
}