# ModelNex Console

A modern login interface for ModelNex.ai with animated character interactions.

## Features

- **Animated Characters**: Four colorful monsters with GSAP-powered animations
- **Interactive Eyes**: Characters follow mouse movement and react to typing
- **Password Visibility**: Toggle password visibility with eye animation
- **TOTP Support**: Google Authenticator integration for 2FA
- **Responsive Design**: Mobile-friendly layout

## Tech Stack

- **TypeScript** - Type-safe development
- **React** - UI framework
- **TailwindCSS** - Utility-first styling
- **GSAP** - Animation library
- **Vite** - Build tool and dev server

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:1313](http://localhost:1313) to view in browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
modelnex-console/
├── public/
│   └── favicon.png
├── src/
│   ├── components/
│   │   └── AnimatedCharacters/
│   │       └── index.tsx
│   ├── pages/
│   │   └── Login/
│   │       ├── index.tsx
│   │       └── index.module.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## Contact

- Email: SmartDolphinStudio@gmail.com

## License

GPL-2.0-only
