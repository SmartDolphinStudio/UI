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
        onProofReady={async (payload) => {
          setOpen(false);
          setMessage('Proof computed; waiting for server acceptance.');
          try {const response=await fetch('/api/chat/verify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({payload})});const body=await response.json();if(!response.ok||body.ok!==true)throw new Error('Server rejected proof');setMessage('Server accepted and consumed this proof. Demo only; no login session was created.');}catch(error){setMessage(error instanceof Error?error.message:'Verification unavailable');}
        }}
        onError={setMessage}
      />
    </main>
  );
}
