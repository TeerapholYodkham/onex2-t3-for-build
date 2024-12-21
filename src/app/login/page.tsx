'use client'
// import useTranslator from '../_redux/features/translator/useTranslator'
import LoginForm from './components/loginForm'
import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LoginPage = () => {
  // const { _t } = useTranslator()
  const _t = (val: string, valu2: string) => {return valu2 ? val : val}
  
  const path: string | null = usePathname()

  return (
    <>
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: 1,
          alignItems: 'center',
          minHeight: '50vh',
          paddingX: 3,
          height: '100%'
        }}
        elevation={1}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: 'auto',
              minHeight: '40px',
              padding: '5px',
              borderRadius: '10px 10px 0px 0px'
            }}
          >
            <Link href='/v/register' passHref legacyBehavior>
              <Button
                sx={{
                  width: '100%',
                  height: 'auto',
                  minHeight: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '5px',
                  borderRadius: 1,
                  boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)'
                }}
              >
                <Typography sx={{ fontSize: theme => theme.fonts.Large, fontWeight: 600 }}>{_t('register', 'Tab Register')}</Typography>
              </Button>
            </Link>
            <Divider variant='middle' orientation='vertical' flexItem sx={{ borderColor: 'rgba(0,0,0,0.1)', width: '1px' }} />
            <Button
              sx={{
                width: '100%',
                height: 'auto',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                padding: '5px',
                borderRadius: 1,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                backgroundColor: theme => theme.palette.third.main,
                color: theme => theme.palette.primary.contrastText,
                ...(path === '/v/login' && { fontWeight: 600 })
              }}
            >
              {_t('login', 'Tab Login')}
            </Button>
          </Box>
          <LoginForm />
        </Box>
      </Paper>
    </>
  )
}

export default LoginPage
