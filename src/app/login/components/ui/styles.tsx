import { styled } from '@mui/material'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

export const Reloadcapcha = styled(Button)({
  width: '100%',
  height: '100%',
  color: '#fff',
  backgroundImage: 'linear-gradient(130deg, rgba(40,149,255,1) 60%, rgba(89,154,218,1) 100%)',
  ':hover': {
    filter: 'drop-shadow(0px 0px 2px rgba(40,149,255,1))'
  }
})

export const LoginSubmitBtn = styled(Button)(({ theme }) => ({
  width: 'auto',
  minWidth: '200px',
  height: 'auto',
  minHeight: '30px',
  borderRadius: '25px',
  color: '#fff',
  backgroundColor: theme.palette.primary.main,
  ':hover': {
    filter: 'drop-shadow(0px 0px 2px rgba(40,149,255,1))'
  }
}))

export const CardLine = styled(Button)(({ theme }) => ({
  width: 'auto',
  minWidth: '225px',
  maxWidth: '240px',
  height: '40px',
  minHeight: '40px',
  borderRadius: '25px',
  backgroundColor: '#06C755',
  color: theme.palette.background.paper,
  fontWeight: 500,
  boxShadow: theme.shadows[10],
  '&:focus,&:active,&:hover': {
    backgroundColor: '#06C755',
    color: theme.palette.background.paper
  },
  textDecoration: 'none',
  textTransform: 'none'
}))

export const LoginContentBox = styled(Box)({
  width: '100%',
  height: '100%',
  overflowY: 'auto',
  scrollbarWidth: 'auto',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
})

export const LoginFormBox = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '100%',
  minHeight: '300px',
  borderRadius: '10px',
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 0px',
  boxShadow: 'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  color: '#000'
}))
