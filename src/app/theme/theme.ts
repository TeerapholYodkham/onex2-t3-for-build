'use client'
import { Inter } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
// import themeConfig from '@/config/theme/themeConfig'
// import themeOptions from '@/config/theme/ThemeOptions'
// import _ from 'lodash-es'
import { fonts } from './fonts'
import { shadows } from './shadows'
import {DefaultSize} from './size'

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

const theme = (mode: string) => {
  // if (!_.values(global.THEME).includes(mode)) {
  //   throw new Error('Invalid theme mode, allowed only light or dark')
  // }

  const greyColor = '#D9D9D9'
  const whiteColor = '#ffffff'
  const blackColor = '#000000'
  const lightColor = '#F7F7F9'
  const darkColor = '#0F1729'
  const mainColor = '#0C356A'
  const secondaryColor = '#FFC436'


  const defaultBgColor = () => {
    return mode === 'light' ? lightColor : darkColor
  }

  return createTheme({
    breakpoints:  {
      values: {
        ss: 0,
        s: 320,
        m: 400,
        l: 430,
        tablet: 768,
        laptop: 1024,
        laptopL: 1440,
        d4K: 2560,
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      }
    },
    typography: {
      fontFamily: inter.style.fontFamily
    },
    palette: {
      primary: {
        main: mainColor,
        light: '#326AB2',
        dark: '#294870',
        // grey: greyColor,
        contrastText: whiteColor
      },
      secondary: {
        main: secondaryColor,
        light: '#FFD46E',
        dark: '#F0B31F',
        contrastText: whiteColor
      },
      third: {
        main: '#0174BE',
        light: '#0588DD',
        dark: '#0174BE',
        contrastText: whiteColor
      },
      size: {
        navbottom: 60, // px
        header: 60, // px
        maxwidth: 500,
        buttonday: 30, // px : day match change
        imgsport: 30,
        paddingcontent: '0px 10px',
        authButton: `38px`,
        logo: 150,
        authBar: 50,
        searchBar: 95,
        menuHeader: 55
      },
      shadows: shadows
    },
    fonts,
    // size: { ...size(), h1: 38},
    size:DefaultSize,
    background: {
      paper: mode === 'light' ? lightColor : '#312D4B',
      default: defaultBgColor(),
      light: lightColor,
      white: whiteColor
    },
    xShadows: {
      button: '0px 2px 2px 0px #0000001A',
      title: '0px 4px 4px 0px #00000040'
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: defaultBgColor(),
            color: mode === 'light' ? blackColor : whiteColor
          }
        }
      },
      MuiButtonBase: {
        defaultProps: {
          // The props to apply
          disableRipple: true // No more ripple, on the whole application 💣!
        }
      }
    },

    // TODO: Correct the following
    action: {
      // active: `rgba(${mainColor}, 0.54)`,
      // hover: `rgba(12, 53, 106}, 0.04)`
      // hover: `rgba(255, 196, 54}, 0.04)`
      // selected: `rgba(${mainColor}, 0.08)`,
      disabled: `#A1A0A1`

      // disabledBackground: `rgba(${mainColor}, 0.12)`,
      // focus: `rgba(${mainColor}, 0.12)`
    }

    // cssVariables: true
  })
}

export default theme
