# Elevate Animation - GrowthX Club SDE Frontend Assignment

A Next.js application featuring an animated logo design with smooth, performant animations built using React, TypeScript, and Framer Motion.

## 🚀 Features

- **Animated Logo**: Smooth entrance animations for logo elements
- **Responsive Design**: Works across all screen sizes
- **Performance Optimized**: Built with Next.js 15 and Turbopack for fast development
- **Modern Stack**: React 19, TypeScript, Tailwind CSS, and Framer Motion
- **Accessibility**: Keyboard navigation and reduced motion support

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

You can check your Node.js version by running:
```bash
node --version
```

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd my-app
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### 4. Open in Browser
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
my-app/
├── src/
│   └── app/
│       ├── page.tsx          # Main animation page
│       ├── layout.tsx        # Root layout
│       └── globals.css       # Global styles
├── public/                   # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🎨 Available Pages

- **Main Animation**: `http://localhost:3000` - Features the main Elevate logo animation

## 🛠️ Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with Turbopack for faster builds.

### Production Build
```bash
npm run build
```
Creates an optimized production build.

### Start Production Server
```bash
npm run start
```
Starts the production server (requires `npm run build` first).

## 🎯 Assignment Requirements

This project fulfills the GrowthX Club SDE Frontend assignment requirements:

- ✅ **No Dynamic Imports**: All imports are static
- ✅ **Instant Load**: Optimized for fast loading
- ✅ **Performance**: Smooth, performant animations
- ✅ **No Lottie**: Pure CSS and JavaScript animations
- ✅ **Re-triggerable**: Animations can be restarted
- ✅ **Responsive**: Works on all screen sizes

## 🎨 Animation Features

- **Star Animation**: Four-pointed star with smooth entrance
- **Bowl Animation**: Inverted bowl shape with curved edges
- **Text Animation**: "ELEVATE" text with letter spacing effects
- **Interactive**: Click anywhere or press Space to replay animations
- **Accessibility**: Respects `prefers-reduced-motion` setting

## 🛠️ Technologies Used

- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Turbopack**: Fast bundler for development


## 🐛 Troubleshooting

### Common Issues

**Port 3000 is already in use:**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
npm run build
```

### Getting Help

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify Node.js version compatibility
4. Check the [Next.js documentation](https://nextjs.org/docs)

## 📝 Development Notes

- The project uses Turbopack for faster development builds
- Hot reloading is enabled for instant updates
- TypeScript strict mode is enabled
- Tailwind CSS is configured for optimal performance

---

**Happy Coding! 🎉**
