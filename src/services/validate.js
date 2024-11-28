import { toast } from 'react-toastify'
import { MESSAGE } from '../utils/constant'

export const displayNameValidate = (element) => {
  const text = element.value
  if (text.length >= 3 && text.length <= 40) {
    return true
  }
  toast.error(MESSAGE.DISPLAYNAME_INPUT_FAILURE)
  return false
}

export const emailValidate = (element) => {
  const text = element.value
  const regex = /^.*@.*\..*$/
  if (text.match(regex)) {
    return true
  }
  toast.error(MESSAGE.EMAIL_INPUT_FAILURE)
  return false
}

export const passwordValidate = (element) => {
  const text = element.value
  if (text.length >= 8 && text.length <= 40) {
    return true
  }
  toast.error(MESSAGE.PASSWORD_INPUT_FAILURE)
  return false
}

export const oldPasswordValidate = (element) => {
  const text = element.value
  if (text.length >= 8 && text.length <= 40) {
    return true
  }
  toast.error(MESSAGE.OLD_PASSWORD_INPUT_FAILURE)
  return false
}

export const newPasswordValidate = (element) => {
  const text = element.value
  if (text.length >= 8 && text.length <= 40) {
    return true
  }
  toast.error(MESSAGE.NEW_PASSWORD_INPUT_FAILURE)
  return false
}

export const codeValidate = (element) => {
  const text = element.value
  if (text.length === 4) {
    return true
  }
  toast.error(MESSAGE.CODE_INPUT_FAILURE)
  return false
}

export const additionalUrlValidate = (element) => {
  const text = element.value
  if (text.length <= 2048) {
    return true
  }
  toast.error(MESSAGE.ADDITIONAL_URL_INPUT_FAILURE)
  return false
}

export const bioValidate = (element) => {
  const text = element.value
  if (text.length <= 256) {
    return true
  }
  toast.error(MESSAGE.BIO_INPUT_FAILURE)
  return false
}
