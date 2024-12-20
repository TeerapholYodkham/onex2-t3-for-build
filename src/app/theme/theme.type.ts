import { ThemeOptions } from '@mui/material/styles'

export interface CustomPalette {
  mode: string
  common: {
    black: string
    white: string
    grey: string
  }
  primary: {
    light: string
    main: string
    dark: string
    grey: string
    contrastText: string
  }

  secondary: {
    light: string
    main: string
    dark: string
    contrastText: string
  }
  third: {
    main: string
    light: string
    dark: string
    contrastText: string
  }
  size: {
    navbottom: number
    header: number
    maxwidth: number
    buttonday: number
    imgsport: number
    paddingcontent: string
    authButton: string
    logo: number
    authBar: number
    searchBar: number
    menuHeader: number
  }
  shadows: {
    sh1: string
    sh2: string
    sh3: string
    sh4: string
    sh5: string
    sh6: string
    sh7: string
  }
  action: {
    disabled: string
  }
}

export interface CustomTheme {
  // size: {
  //   navbottom: number
  //   header: number
  //   maxwidth: number
  //   buttonday: number
  //   imgsport: number
  //   paddingcontent: string
  //   authButton: string
  //   logo: number
  //   authBar: number
  //   searchBar: number
  //   menuHeader: number
  //   h1: number
  // }
  size: DefaultSizeType;
  fonts: {
    Regular: number
    Medium: number
    Large: number
  }
  background: {
    paper: string
    default: string
    light: string
    white: string
  }
  xShadows: {
    button: string
    title: string
  }
  action: {
    disabled: string
  }
}

export interface DefaultSizeType {
  paddingcontent: string;
  authButton: string;
  menuHeader: number;
  menuHeaderLabel: number;
  foldSize: number;

  eleMixUnAuth: number;
  eleTranAuth: number;

  eleUnAuthSingFb: number;

  eleSettingAuth: number;
  eleSettingTop: number;

  eleSportUnAuth: number;
  eleSportAuth: number;

  eleMixparlayUnAuth: number;
  eleMixparlayAuth: number;

  eleWalletFullBalan: number;
  eleWalletMiniBalan: number;
  eleWalletRecordTop: number;
  eleWalletTopUnAuth: number;
  eleWalletTopAuth: number;

  elePromotion: number;

  eleCouponUnAuth: number;
  eleCouponAuth: number;
  eleCouponTop: number;
  eleCouponUnAuthTop: number;

  eleBanktranfer: number;

  eleFavoriteAuth: number;
  eleFavoriteUnAuth: number;

  eleSettingUnAuth: number;

  eleNavbottom: number;

  eleHeader: number;

  eleAuthBar: number;

  eleWithdraw: number;
  eleWithdrawTop: number;

  eleDeposit: number;
  eleDepositTop: number;

  eleHistory: number;

  eleContactAuth: number;
  eleContactAuthContainer: number;

  eleContactUnAuth: number;
  eleContactUnAuthContainer: number;

  eleProfileAuth: number;

  eleinviteFriend: number;

  eleSportDeail: number;
  eleSportDeailUnAuth: number;
}

declare module '@mui/material/styles' {
  interface Palette extends CustomPalette { }
  interface PaletteOptions extends CustomPalette { }
  interface Theme extends CustomTheme { }
  interface ThemeOptions extends CustomTheme { }
  interface BreakpointOverrides {
    ss: true; // adding custom breakpoints
    s: true;
    m: true;
    l: true;
    tablet: true;
    laptop: true;
    laptopL: true;
    d4K: true;
  }
}