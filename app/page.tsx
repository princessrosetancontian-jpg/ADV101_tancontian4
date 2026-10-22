'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage('Email address cannot be empty.');
      return;
    }

    if (!password) {
      setErrorMessage('Password cannot be empty.');
      return;
    }

    if (
      email.trim().toLowerCase() !== 'rhianznisnisan02@gmail.com' ||
      password !== 'redyanzetlorex'
    ) {
      setErrorMessage('Invalid email or password.');
      return;
    }

    router.push('/notes');
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@500;600;700&display=swap"
        rel="stylesheet"
      />
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>SYSTEM LOGIN</h2>
          <p style={styles.subtitle}>Enter credentials to access Note Terminal</p>

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>EMAIL ADDRESS</label>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>PASSWORD</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
            </div>

            <button type="submit" style={styles.button}>
              AUTHENTICATE
            </button>

            {errorMessage && (
              <div style={styles.errorBox}>
                <p style={styles.errorText}>[!] {errorMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0d14',
    fontFamily: "'Rajdhani', sans-serif",
    padding: '20px',
    backgroundImage: 'radial-gradient(circle at 50% 30%, #111d2e 0%, #080a0f 100%)',
  },
  card: {
    backgroundColor: 'rgba(13, 20, 32, 0.95)',
    padding: '36px',
    borderRadius: '4px',
    border: '1px solid #00f0ff',
    boxShadow: '0 0 25px rgba(0, 240, 255, 0.25), inset 0 0 10px rgba(0, 240, 255, 0.1)',
    width: '100%',
    maxWidth: '420px',
    boxSizing: 'border-box',
    clipPath: 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)',
  },
  title: {
    color: '#ffffff',
    margin: '0 0 6px 0',
    fontSize: '26px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: '1px',
    textShadow: '0 0 12px rgba(0, 240, 255, 0.6)',
  },
  subtitle: {
    color: '#7088a8',
    margin: '0 0 24px 0',
    fontSize: '14px',
    textAlign: 'center',
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    color: '#00f0ff',
    fontSize: '12px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: '700',
    letterSpacing: '1px',
  },
  input: {
    padding: '12px 14px',
    borderRadius: '2px',
    border: '1px solid #1e3a5f',
    backgroundColor: '#05080e',
    color: '#ffffff',
    fontSize: '15px',
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: '600',
    outline: 'none',
  },
  button: {
    padding: '14px',
    borderRadius: '2px',
    border: 'none',
    backgroundColor: '#00f0ff',
    color: '#05080e',
    fontSize: '16px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: '900',
    letterSpacing: '1px',
    cursor: 'pointer',
    marginTop: '8px',
    boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)',
  },
  errorBox: {
    backgroundColor: 'rgba(255, 0, 85, 0.1)',
    border: '1px solid #ff0055',
    padding: '10px 12px',
    borderRadius: '2px',
    marginTop: '6px',
  },
  errorText: {
    color: '#ff4d8d',
    margin: 0,
    fontSize: '13px',
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: '700',
    textAlign: 'center',
  },
};