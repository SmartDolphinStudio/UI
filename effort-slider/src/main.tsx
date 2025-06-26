/**
 * @file        main.tsx
 * @author      Astraeus
 * @created     2026-06-18 20:08:51 UTC
 * @license     GPL-2.0-only
 *
 * Application entry point. Mounts the React root into the DOM.
 *
 * @disclaimer
 * This file is distributed under GNU General Public License v2.0. Anyone who modifies any source files of this project shall fully open-source all modified codes under the same GPLv2 license. The author assumes no liability for any direct or indirect economic losses and legal risks arising from the usage of this code. All interpretation rights of this repository belong exclusively to Astraeus. Contact: SmartDolphinStudio@gmail.com
 */

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found.')

createRoot(rootElement).render(<App />)
