'use client'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import styles from './toastStyles.module.css'

const alert = withReactContent(Swal)

interface AlertPropsType {
  title?: string
  text?: string
  time?: number
  outside?: boolean
  backdrop?: boolean
  amount?: string
  needAcknowledge?: boolean
}

interface AlertSecoundPropsType {
  title: string
  text: string
  time: number
}

export const Success = ({title = 'Alert', text = 'do some thing successfully', time = 3000, outside = false, backdrop = false}: AlertPropsType) => {
  return alert.fire({
    title: title,
    text: text,
    icon: 'success',
    timer: time,
    allowEscapeKey: false,
    showConfirmButton: false,
    allowOutsideClick: outside,
    backdrop: backdrop,
    position: 'center',
    animation: true,
    width: '300px',
    customClass: {
      container: styles['custom-containter']
    }
  })
}

export const Error = ({title = 'Alert', text = 'some thing wrong', time = 3000, outside = false, backdrop = true}: AlertPropsType) => {
  return alert.fire({
    title: title,
    text: text,
    icon: 'error',
    allowEscapeKey: false,
    showConfirmButton: true,
    timer: time,
    confirmButtonColor: '#0C3569',
    width: '300px',
    position: 'center',
    allowOutsideClick: outside,
    backdrop: backdrop,
    customClass: {
      container: styles['custom-containter']
    }
  })
}

export const Warning = ({title = 'Alert', text = 'some thing wrong', time = 3000, outside = false, backdrop = true}: AlertPropsType) => {
  return alert.fire({
    title: title,
    text: text,
    icon: 'warning',
    timer: time,
    width: '300px',
    showConfirmButton: false,
    position: 'center',
    allowOutsideClick: outside,
    backdrop: backdrop,
    customClass: {
      container: styles['custom-containter']
    }
  })
}

export const Info = ({title = 'Alert', text = 'do some thing', time = 3000, outside = false, backdrop = true}: AlertPropsType) => {
  return alert.fire({
    title: title,
    text: text,
    icon: 'info',
    timer: time,
    width: '300px',
    showConfirmButton: outside,
    position: 'center',
    allowOutsideClick: outside,
    backdrop: backdrop,
    customClass: {
      container: styles['custom-containter']
    }
  })
}

const AlertTitle = styled(Typography)(({  }) => ({
  fontSize: '28px',
  fontWeight: '600',
  color: '#7DDA97'
}))

const AlertText = styled(Typography)(({  }) => ({
  fontSize: '14px',
  color: '#0F1729'
}))

const AlertAmount = styled(Typography)(({  }) => ({
  fontSize: '40px',
  fontWeight: '600',
  color: '#0C3569'
}))

export const alertSuccess = ({title = 'Alert', text = 'do some thing', amount = '0', time = 3000, outside = false, backdrop = true}: AlertPropsType ) => {
  const close = () => {
    Swal.close()
  }

  const textFile = (
    <Box sx={{ position: 'relative', display: 'block', padding: '10px' }}>
      <Box sx={{ position: 'absolute', top: -12, right: -20, cursor: 'pointer' }} onClick={close}>
        <CloseIcon fontSize='medium' />
      </Box>
      <AlertTitle sx={{ marginBottom: '8px' }}>{title}</AlertTitle>
      <AlertAmount sx={{ marginBottom: '4px' }}>{amount}</AlertAmount>
      <AlertText>{text}</AlertText>
    </Box>
  )

  return alert.fire({
    width: '400px',
    html: textFile,
    position: 'center',
    showConfirmButton: false,
    timer: time,
    allowOutsideClick: outside,
    backdrop: backdrop,
    customClass: {
      container: styles['custom-containter']
    }
  })
}

export const alertError = ({title = 'Alert', text = 'do some thing', time = 3000, needAcknowledge = false, backdrop = true}: AlertPropsType) => {
  const close = () => {
    Swal.close()
  }

  const textFile = (
    <Box sx={{ position: 'relative', display: 'block', padding: '10px' }}>
      <Box sx={{ position: 'absolute', top: -12, right: -20, cursor: 'pointer' }} onClick={close}>
        <CloseIcon fontSize='medium' />
      </Box>
      <AlertTitle sx={{ marginBottom: '8px', color: 'error.main' }}>{title}</AlertTitle>
      <AlertText sx={{ fontSize: '16px' }}>{text}</AlertText>
    </Box>
  )

  return alert.fire({
    width: '400px',
    html: textFile,
    position: 'center',
    showConfirmButton: needAcknowledge,
    timer: time,
    backdrop: backdrop,
    customClass: {
      container: styles['custom-containter']
    }
  })
}

export const ErrorPage = ({title = 'Alert', text = 'do some thing', time = 5000, outside = false, backdrop = true}:AlertPropsType) => {
  const close = () => {
    Swal.close()
  }

  const textFile = (
    <Box sx={{ position: 'relative', display: 'block', padding: '10px' }}>
      <Box sx={{ position: 'absolute', top: -12, right: -20, cursor: 'pointer' }} onClick={close}>
        <CloseIcon fontSize='medium' />
      </Box>
      <AlertTitle sx={{ fontSize: '22px', marginBottom: '8px', color: 'error.main' }}>{title}</AlertTitle>
      <AlertText sx={{ fontSize: '16px' }}>{text}</AlertText>
    </Box>
  )

  return alert.fire({
    width: '400px',
    html: textFile,
    position: 'center',
    timer: time,
    allowOutsideClick: outside,
    backdrop: backdrop,
    allowEscapeKey: false,
    showConfirmButton: true,
    confirmButtonColor: '#0C3569',
    customClass: {
      container: styles['custom-containter']
    }
  })
}

export const SaveConfirm = async ({title, text}:{title: string, text: string}) => {
  const testAlert = (
    <Box sx={{ position: 'relative', display: 'block', padding: '10px' }}>
      <AlertTitle sx={{ fontSize: '16px', marginBottom: '8px', color: '#0F1729' }}>{title}</AlertTitle>
      <AlertText sx={{ fontSize: '14px' }}>{text}</AlertText>
    </Box>
  )

  return await alert.fire({
    html: testAlert,
    showCancelButton: true,
    cancelButtonColor: '#D94444',
    allowOutsideClick: false,
    confirmButtonText: 'OK',
    confirmButtonColor: '#0C3569',
    position: 'center',
    icon: 'question',
    width: '400px',
    backdrop: false,
    customClass: {
      container: styles['custom-containter']
    }
  })
}

export const Loading = (timer = 2000) => {
  return alert.fire({
    allowEscapeKey: false,
    allowOutsideClick: false,
    width: '100px',
    timer: timer,
    backdrop: false,
    customClass: {
      container: styles['custom-containter']
    },
    didOpen: () => {
      alert.showLoading()
    }
  })
}

export const LoadingNew = ({active = true, time = 3000}:{active: boolean, time: number}) => {
  /**
   *
   * @param { Boolean } active ตัวแปรแสดง loading ( true / false)
   */
  if (active) {
    Swal.fire({
      allowEscapeKey: false,
      allowOutsideClick: false,
      width: '100px',
      timer: time,
      backdrop: false,
      customClass: {
        container: styles['custom-containter']
      },
      didOpen: () => {
        alert.showLoading()
      }
    })
  }
}

// Toast Alert *********************************************************
const Toast = alert.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: toast => {
    toast.onmouseenter = Swal.stopTimer
    toast.onmouseleave = Swal.resumeTimer
  }
})

export const toastSuccess = ({title, text, time = 2000}: AlertSecoundPropsType) => {
  return Toast.fire({
    title: title,
    text: text,
    timer: time,
    icon: 'success',
    customClass: {
      container: styles['custom-containter']
    }
  })
}

export const toastError = ({title, text, time}: AlertSecoundPropsType) => {
  return Toast.fire({
    title: title,
    text: text,
    timer: time,
    icon: 'error',
    customClass: {
      container: styles['custom-containter']
    }
  })
}
