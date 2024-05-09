// SPDX-License-Identifier: GPL-2.0-only
// Copyright (C) 2000-2026 Astraeus <SmartDolphinStudio@gmail.com>

import { useState } from 'react';
import { SmartDolphinVerification } from './components/SmartDolphinVerification';
import './styles.css';

export function App() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('Ready for verification.');

  return (
    <main className="demo-shell">
      <button type="button" className="demo-login" onClick={() => setOpen(true)}>
        Login
      </button>
      <p className="demo-status">{message}</p>
      <SmartDolphinVerification
        open={open}
        onClose={() => setOpen(false)}
        onVerified={(payload) => {
          setOpen(false);
          setMessage(`Verification payload ready: ${payload.slice(0, 24)}...`);
        }}
        onError={setMessage}
      />
    </main>
  );
}
