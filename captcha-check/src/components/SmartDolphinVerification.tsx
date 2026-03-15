// SPDX-License-Identifier: GPL-2.0-only
// Copyright (C) 2000-2026 Astraeus <SmartDolphinStudio@gmail.com>

import { useState } from 'react';
import { X } from 'lucide-react';
import { ClawCaptcha } from 'playcaptcha';
import 'playcaptcha/clawcaptcha.css';
import { createSmartDolphinVerification, type SmartDolphinVerificationOptions } from '../sdk/smartDolphinVerification';

export type SmartDolphinVerificationProps = SmartDolphinVerificationOptions & {
  open: boolean;
  onClose: () => void;
  onVerified: (payload: string) => void;
  onError?: (message: string) => void;
};

export function SmartDolphinVerification({
  open,
  onClose,
  onVerified,
  onError,
  ...options
}: SmartDolphinVerificationProps) {
  const [busy, setBusy] = useState(false);
  const [nonce, setNonce] = useState(0);

  if (!open) {
    return null;
  }

  const verify = async () => {
    setBusy(true);
    try {
      onVerified(await createSmartDolphinVerification(options));
    } catch (error) {
      setNonce((value) => value + 1);
      onError?.(error instanceof Error ? error.message : 'Smart Dolphin Verification failed.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="sdv-overlay" role="dialog" aria-modal="true" aria-label="Smart Dolphin Verification">
      <section className="sdv-modal">
        <button type="button" className="sdv-close" aria-label="Close Smart Dolphin Verification" onClick={onClose} disabled={busy}>
          <X size={18} />
        </button>
        <div className={busy ? 'sdv-busy' : undefined}>
          <ClawCaptcha key={nonce} title="Smart Dolphin Verification" assetBase="/toys/" onVerify={() => void verify()} />
        </div>
        {busy ? <div className="sdv-status">Verifying secure challenge...</div> : null}
      </section>
    </div>
  );
}
