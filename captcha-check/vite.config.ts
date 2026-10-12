// SPDX-License-Identifier: GPL-2.0-only
// Copyright (C) 2000-2026 Astraeus <SmartDolphinStudio@gmail.com>

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
 server: { proxy: { '/api': { target: 'http://127.0.0.1:18080', changeOrigin: true } } },
});
