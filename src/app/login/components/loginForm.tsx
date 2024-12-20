import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'
import { CardLine } from './ui/styles'
import { Error } from '~/app/components/custom-alert/alert'
import { useForm, Controller } from 'react-hook-form'
import { Icon } from '@iconify/react'
// import { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { LoginButton as TelegramLoginButton } from '@telegram-auth/react'
// import { authenticate, getSetting } from '../action'
// import useTranslator from '~/app/_redux/features/translator/useTranslator'
// import { x2_setting_general as SettingGeneral } from '@prisma/client'

interface HeadersCaptcha {
  report?: {
    captcha: {
      code: string
    }
  }
}

interface LoginFormData {
  username: string
  password: string
  captcha: string
}

interface ErrorsFormData {
  username: boolean
  password: boolean
  captcha: boolean
}

const LoginCredentialsForm = () => {
  // const { _t } = useTranslator()
  const _t = (val: string, valu2: string, valu3?: string) => {return valu2 ? val : val}

  const [err, setErr] = useState<ErrorsFormData>({ username: false, captcha: false, password: false })
  // const [setting, setSetting] = useState<SettingGeneral>()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [captchaImage, setCaptchaImage] = useState<string | null>(null)
  const [captchaCode, setCaptchaCode] = useState<string | null>(null)
  const theme = useTheme()
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: { username: '', password: '', captcha: '' },
    mode: 'onBlur'
  })

  // useEffect(() => {
  //   const fetchAndUpdateSetting = async () => {
  //     const res = await getSetting()
  //     if (res) setSetting(JSON.parse(res))
  //   }
  //   fetchAndUpdateSetting()
  //   refreshCaptcha()
  // }, [])

  const refreshCaptcha = async () => {
    await fetch('/api/captcha', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        limit: encodeURIComponent(btoa(JSON.stringify({ time: new Date() })))
      }
    })
      .then(async res => {
        const headers = res.headers
        const headersObject: HeadersCaptcha = {}
        headers.forEach((value, name) => {
          if (name === 'report') {
            headersObject[name] = JSON.parse(atob(JSON.parse(decodeURIComponent(value))))
          }
        })
        if (headersObject?.report?.captcha) {
          const { code } = headersObject.report.captcha
          setCaptchaCode(code)
        }

        return res.text()
      })
      .then(svg => setCaptchaImage(svg))
  }

  const phoneNumberRegExp = (digit: number[] = [8], val: string): boolean => {
    let regExp: RegExp | null = null
    if (digit.length > 0 && val) {
      if (digit.length > 1) {
        const reg = process.env.NEXT_PUBLIC_CURRENCY === 'MMK' ? `^09\\d{${digit[0]},${digit[1]}}$` : `^0[0-9]\\d{${digit[0]},${digit[1]}}$`
        regExp = new RegExp(reg)
      }
      if (digit.length === 1) {
        const reg = process.env.NEXT_PUBLIC_CURRENCY === 'MMK' ? `^09\\d{${digit[0]}}$` : `^0[0-9]\\d{${digit[0]}}$`
        regExp = new RegExp(reg)
      }

      return regExp ? regExp?.test(val) : false
    } else {
      return false
    }
  }

  const onSubmit = async (data: LoginFormData) => {
    const { username, password, captcha } = data
    if (captcha && captcha === captchaCode) {
      // await authenticate(username, password).then(res => {
      //   if (res && !res.error) {
      //     // SetEmitSocket(new Date())
      //     // Loading()
      //     window.location.href = '/single'
      //   } else if (res?.error) {
      //     /**===================================================
      //      * @augments res.error.ACCOUNT_SUSPENDED    = User Account is Suspended, Status = false
      //      * @augments res.error.INVALID_CREDENTIALS  = Invalid Credentials, Password or Username is incorrect
      //      * @augments res.error.ERROR                = Error, Something went wrong
      //      * @type {Object}
      //      * ===================================================
      //      * If you want to add more error code, please add it in the action.js
      //      * by: @DrunkNerd
      //      * @returns {String} errorMessage
      //      **/
      //     let errorMessage = ''
      //     switch (res.error) {
      //       case 'ACCOUNT_SUSPENDED':
      //         errorMessage = _t('You Account Is Under Suspended.', 'Alert account suspended', 'loginForm')
      //         break
      //       case 'INVALID_CREDENTIALS':
      //         errorMessage = _t('Invalid Credentials', 'Alert username or password incorrect', 'loginForm')
      //         break
      //       default:
      //         errorMessage = _t('Something went wrong, Please try again later.', 'Alert something wrong', 'loginForm')
      //         break
      //     }
      //     Error(_t('Warning', 'LoginForm', 'Warning title'), errorMessage)
      //     refreshCaptcha()
      //     reset({ username: username, password: password, captcha: '' })
      //   }
      // })
    } else {
      const errorMessage:string = _t('Captcha not match', 'LoginForm', 'Alert captcha not match')
      const err2 = _t('Please try again', 'Text please try again', 'loginForm')
      Error({title: errorMessage, text: err2})
      refreshCaptcha()
      reset({ username: username, password: password, captcha: '' })
    }
  }

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name="username"
              control={control}
              rules={{
                required: true,
                validate: value => (process.env.NEXT_PUBLIC_CURRENCY === 'MMK' ? value.startsWith('09') : value.startsWith('0'))
              }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label={_t('Phone number', 'TextField phone number', 'loginForm')}
                  value={value || ''}
                  onBlur={onBlur}
                  size="medium"
                  onChange={e => {
                    const digit: number[] = process.env.NEXT_PUBLIC_CURRENCY === 'MMK' ? [7, 9] : [8] // count digits [THB 8+(0) | MMK 7+(09)]
                    const count = process.env.NEXT_PUBLIC_CURRENCY === 'MMK' ? 9 : 10 // count digits [THB 8+(0) | MMK 7+(09)]
                    const newValue = e.target.value.replace(/\D/g, '')
                    const validCaptchaRegex = phoneNumberRegExp(digit, newValue)
                    if ((newValue.length > 0 || newValue.length === count) && !validCaptchaRegex) {
                      setErr({ ...err, username: true })
                    } else if ((newValue.length > 0 || newValue.length === count) && validCaptchaRegex) {
                      setErr({ ...err, username: false })
                    }
                    onChange(newValue)
                  }}
                  error={err.username ? true : false}
                  placeholder={_t('Phone number', 'Placeholder phone number', 'loginForm')}
                  autoFocus={true}
                  slotProps={{
                    htmlInput: {
                      minLength: process.env.NEXT_PUBLIC_CURRENCY === 'MMK' ? 9 : 10,
                      maxLength: process.env.NEXT_PUBLIC_CURRENCY === 'MMK' ? 11 : 10
                    },
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Icon fontSize={25} icon={'mdi-cellphone-android'} color={theme.palette.grey[600]} />
                        </InputAdornment>
                      )
                    }
                  }}
                />
              )}
            />
            {err.username && (
              <FormHelperText error={err.username}>
                {`Can be input number only and start with
                          ${process.env.NEXT_PUBLIC_CURRENCY === 'MMK' ? '09' : '0'}.`}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  value={value || ''}
                  label={_t('Password', 'TextField password', 'loginForm')}
                  onChange={e => {
                    const newValue = e.target.value.replace(/[^a-zA-Z0-9]/g, '')
                    if (newValue.length < 6) {
                      setErr({ ...err, password: true })
                    } else {
                      setErr({ ...err, password: false })
                    }
                    onChange(newValue)
                  }}
                  id="password"
                  size="medium"
                  placeholder={_t('Password', 'Placeholder password', 'loginForm')}
                  error={err.password ? true : false}
                  type={showPassword ? 'text' : 'password'}
                  slotProps={{
                    htmlInput: {
                      minLength: 6
                    },
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Icon fontSize={25} icon={'mdi-key-variant'} color={theme.palette.grey[600]} style={{ rotate: '90deg' }} />
                        </InputAdornment>
                      ),

                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="pass"
                            edge="end"
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} fontSize={20} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }}
                />
              )}
            />
            {errors.password && <FormHelperText sx={{ color: 'error.main' }}></FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mt: 0, mb: 4 }}>
            <Controller
              name="captcha"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label={_t('Enter captcha', 'TextField enter captcha', 'loginForm')}
                  value={value || ''}
                  size="medium"
                  onBlur={onBlur}
                  error={err.captcha ? true : false}
                  onChange={e => {
                    const newValue = e.target.value.replace(/[^a-zA-Z0-9]/g, '')
                    const validCaptchaRegex = /^[a-zA-Z0-9]{4}$/
                    if (!validCaptchaRegex.test(newValue)) {
                      setErr({ ...err, captcha: true })
                    } else {
                      setErr({ ...err, captcha: false })
                    }
                    onChange(newValue)
                  }}
                  placeholder={_t('Enter captcha', 'Placeholder enter captcha', 'loginForm')}
                  sx={{
                    '& .MuiTextField-root: ': { fontSize: '0.16px' }
                  }}
                  slotProps={{
                    htmlInput: {
                      minLength: 0,
                      maxLength: 4
                    },
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Image width={24} height={24} alt="logo" src="/images/capcha1.png" priority style={{ color: theme.palette.grey[600] }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          {captchaImage ? (
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                textAlign: 'center',
                                alignItems: 'center',
                                justifyContent: 'end'
                              }}
                            >
                              <Box
                                sx={{
                                  textAlign: 'center',
                                  alignItems: 'center',
                                  margin: 'auto',
                                  width: 90,
                                  height: 45
                                }}
                              >
                                <Box dangerouslySetInnerHTML={{ __html: captchaImage }} />
                              </Box>
                              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                              <IconButton color="primary" sx={{ p: '5px' }} aria-label="directions" onClick={refreshCaptcha}>
                                <Icon fontSize={20} icon="mdi-refresh"></Icon>
                              </IconButton>
                            </Box>
                          ) : (
                            <></>
                          )}
                        </InputAdornment>
                      )
                    }
                  }}
                />
              )}
            />
            {errors.captcha && <FormHelperText sx={{ color: 'error.main' }}></FormHelperText>}
          </FormControl>
        </Box>
        {/* {setting?.otp_status && ( */}
        <Box sx={{ textAlign: 'end', marginTop: '10px' }}>
          <Link
            role="link"
            scroll={false}
            style={{
              color: theme.palette.primary.main,
              margin: '0px 5px',
              fontWeight: 300,
              fontSize: '12px',
              textDecoration: 'none'
            }}
            href={`${process.env.NEXT_PUBLIC_PATH_UNAUTHORIZED}/forgetPassword`}
          >
            {_t('Forget Your Password', 'Button forget password', 'loginForm')}
          </Link>
        </Box>
        {/* )} */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Button
            id="login_btn"
            disabled={err.username || err.password}
            sx={{
              width: 'auto',
              minWidth: '250px',
              height: '46px',
              borderRadius: '5px',
              boxShadow: theme => theme.shadows[10],
              backgroundColor: err.username || err.password ? theme.palette.grey[400] : theme => theme.palette.primary.main,
              color: theme => theme.palette.primary.contrastText,
              '&:hover, &:focus ,&:active ': {
                backgroundColor: theme => theme.palette.primary.light,
                color: theme => theme.palette.primary.contrastText
              }
            }}
            type="submit"
          >
            {_t('login', 'Button login', 'loginForm')}
          </Button>
        </Box>

        {process.env.NEXT_PUBLIC_CURRENCY === 'THB' && (
          <>
            {/* {setting?.sl_line_status || */}
            {/* (setting?.sl_line_status && ( */}
            <Divider>
              <Typography>{_t('or', 'Text or', 'loginForm')}</Typography>
            </Divider>
            {/* ))} */}

            {/* {setting?.sl_line_status && ( */}
            <Box sx={{ textAlign: 'center', alignItems: 'center' }}>
              <CardLine
                id="login_btn_line"
                size="small"
                type="button"
                sx={{ mb: 1 }}
                onClick={() => {
                  localStorage.removeItem('hasSubscribed')
                  signIn('line')
                }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 3
                  }}
                >
                  <Avatar alt="Line" src="/images/contact/line_88.png" sx={{ width: 30, height: 30 }} />
                  {_t('Log in with LINE', 'Button login with LINE', 'loginForm')}
                </Box>
              </CardLine>
            </Box>
            {/* )} */}

            {/* {setting?.sl_telegram_status && ( */}
            <Box sx={{ textAlign: 'center', alignItems: 'center', mt: 2, ml: '20px' }}>
              <TelegramLoginButton
                botUsername="onextwothbot"
                onAuthCallback={data => {
                  localStorage.removeItem('hasSubscribed')
                  signIn('telegram', { callbackUrl: '/' }, data)
                }}
              />
            </Box>
            {/*  )} */}
          </>
        )}
      </form>
    </Box>
  )
}

export default LoginCredentialsForm
