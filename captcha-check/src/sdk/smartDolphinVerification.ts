// SPDX-License-Identifier: GPL-2.0-only
// Copyright (C) 2000-2026 Astraeus <SmartDolphinStudio@gmail.com>

import { solveChallenge, pbkdf2, type Challenge, type Payload } from 'altcha/lib';

export type SmartDolphinChallenge = {
  parameters: {
    algorithm: string;
    nonce: string;
    salt: string;
    cost: number;
    keyLength: number;
    keyPrefix: string;
    keySignature?: string;
    expiresAt?: number;
  };
  signature: string;
};

export type SmartDolphinVerificationOptions = {
  apiBase?: string;
  challengePath?: string;
  timeoutMs?: number;
  fetcher?: typeof fetch;
};

const defaultApiBase = 'https://api.smartdolphin.top';
const defaultChallengePath = '/api/chat/challenge';

function encodePayload(payload: Payload) {
  return window.btoa(JSON.stringify(payload));
}

function joinUrl(base: string, path: string) {
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export async function createSmartDolphinVerification(options: SmartDolphinVerificationOptions = {}) {
  const fetcher = options.fetcher ?? fetch;
  const challengeUrl = joinUrl(options.apiBase ?? defaultApiBase, options.challengePath ?? defaultChallengePath);
  const response = await fetcher(challengeUrl, { credentials: 'include' });
  if (!response.ok) {
    throw new Error('Smart Dolphin Verification is temporarily unavailable.');
  }

  const challenge = (await response.json()) as SmartDolphinChallenge;
  const solution = await solveChallenge({
    challenge: challenge as Challenge,
    deriveKey: pbkdf2.deriveKey,
    timeout: options.timeoutMs ?? 30000,
  });
  if (!solution) {
    throw new Error('Smart Dolphin Verification timed out. Please try again.');
  }

  return encodePayload({ challenge: challenge as Challenge, solution });
}
