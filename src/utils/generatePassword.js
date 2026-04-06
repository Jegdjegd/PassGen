const CHARS = {
  alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ÑñÁáÉéÍíÓóÚú',
  numeric: '0123456789!@#$%^&*',
  all: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*ÑñÁáÉéÍíÓóÚú',
}

export function generatePassword(mode, length) {
  const charset = CHARS[mode]
  let password = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    password += charset[randomIndex]
  }
  return password
}