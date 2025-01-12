import { AnimatedCharacters } from '../../components/AnimatedCharacters'
import { FormEvent, useMemo, useState } from 'react'

import styles from './index.module.css'

type LoginValues = {
  email: string
  password: string
  totp: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function filterEmailInput(value: string) {
  return value.replace(/[^A-Za-z0-9.@]/g, '')
}

function filterPasswordInput(value: string) {
  return value.replace(/[^A-Za-z0-9]/g, '')
}

async function mockLogin(values: LoginValues) {
  await new Promise((resolve) => setTimeout(resolve, 700))

  if (!navigator.onLine) {
    throw new Error('Network connection is unavailable.')
  }
  if (values.totp !== '123456') {
    throw new Error('Authenticator code is incorrect.')
  }

  return { data: { access_token: `mock_token_${Date.now()}` } }
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [totpCode, setTotpCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const astraeusUrl = useMemo(() => 'https://astraeuszhao.com', [])
  const smartDobbyUrl = useMemo(() => 'https://smartdocking.top', [])

  function validate(nextEmail = email, nextPassword = password, nextTotpCode = totpCode): boolean {
    const normalizedEmail = nextEmail.trim()
    if (!normalizedEmail) {
      setError('Enter your email address.')
      return false
    }
    if (!EMAIL_PATTERN.test(normalizedEmail)) {
      setError('Enter a valid email address.')
      return false
    }
    if (!nextPassword) {
      setError('Enter your password.')
      return false
    }
    if (nextPassword.length < 8) {
      setError('Password must be at least 8 characters.')
      return false
    }
    if (!/^\d{6}$/.test(nextTotpCode)) {
      setError('Authenticator code must be 6 digits.')
      return false
    }
    return true
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    const formData = new FormData(event.currentTarget)
    const nextEmail = String(formData.get('email') || email).trim()
    const nextPassword = String(formData.get('password') || password)
    const nextTotpCode = String(formData.get('totp') || totpCode).replace(/\D/g, '').slice(0, 6)

    setEmail(nextEmail)
    setPassword(nextPassword)
    setTotpCode(nextTotpCode)

    if (!validate(nextEmail, nextPassword, nextTotpCode)) {
      return
    }

    setLoading(true)
    try {
      const { data } = await mockLogin({ email: nextEmail, password: nextPassword, totp: nextTotpCode })
      localStorage.setItem('access_token', data.access_token)
      window.location.href = '/'
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to sign in. Try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.charactersArea}>
          <AnimatedCharacters
            isTyping={isTyping}
            showPassword={showPassword}
            passwordLength={password.length}
          />
        </div>

        <div className={styles.leftFooter}>
          <a href={astraeusUrl} target="_blank" rel="noreferrer">
            Go to Astraeus
          </a>
          <a href={smartDobbyUrl} target="_blank" rel="noreferrer">
            Go to SmartDobby
          </a>
        </div>

        <div className={styles.decorShade} />
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.brandBar}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span className={styles.brandText}>Smart Dolphin by Astraeus</span>
        </div>

        <div className={styles.formWrapper}>
          <h1 className={styles.formTitle}>Sign in to Modelnex.ai</h1>
          <p className={styles.formSubtitle}>
            {loading ? 'Signing in...' : 'Welcome to Modelnex.ai'}
          </p>

          {error && (
            <div className={styles.errorMsg}>{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Email</span>
              <span className={styles.inputWrap}>
                <span className={styles.prefixIcon}><UserIcon /></span>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  disabled={loading}
                  onFocus={() => setIsTyping(true)}
                  onBlur={() => setIsTyping(false)}
                  onChange={(event) => setEmail(filterEmailInput(event.currentTarget.value))}
                  placeholder="name@modelnex.ai"
                />
              </span>
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>Password</span>
              <span className={styles.inputWrap}>
                <span className={styles.prefixIcon}><LockIcon /></span>
                <input
                  className={styles.input}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  autoComplete="current-password"
                  value={password}
                  disabled={loading}
                  onFocus={() => setIsTyping(true)}
                  onBlur={() => setIsTyping(false)}
                  onChange={(event) => setPassword(filterPasswordInput(event.currentTarget.value))}
                  placeholder="Enter your password"
                />
                <button
                  className={styles.eyeToggle}
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  disabled={loading}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => setShowPassword((current) => !current)}
                >
                  {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </span>
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>Google Authenticator</span>
              <span className={styles.inputWrap}>
                <span className={styles.prefixIcon}><ShieldIcon /></span>
                <input
                  className={styles.input}
                  type="text"
                  name="totp"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  value={totpCode}
                  disabled={loading}
                  maxLength={6}
                  onFocus={() => setIsTyping(true)}
                  onBlur={() => setIsTyping(false)}
                  onChange={(event) => setTotpCode(event.currentTarget.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="6-digit code"
                />
              </span>
            </label>

            <button className={styles.submitBtn} type="submit" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
