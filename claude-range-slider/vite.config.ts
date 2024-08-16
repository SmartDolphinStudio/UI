/**
 * @file        vite.config.ts
 * @author      Astraeus
 * @created     2026-06-18 20:08:51 UTC
 * @license     GPL-2.0-only
 *
 * Vite build configuration with React and Tailwind CSS v4 plugins.
 *
 * @disclaimer
 * This file is distributed under GNU General Public License v2.0. Anyone who modifies any source files of this project shall fully open-source all modified codes under the same GPLv2 license. The author assumes no liability for any direct or indirect economic losses and legal risks arising from the usage of this code. All interpretation rights of this repository belong exclusively to Astraeus. Contact: SmartDolphinStudio@gmail.com
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 1313,
    host: '0.0.0.0',
  },
})
