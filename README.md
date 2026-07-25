# Clear&Shine Professional Laundry Website

A modern, responsive website for Clear&Shine laundry service built with Next.js and Tailwind CSS.

## Features

- 🎯 **Services Section** - Detailed information about laundry and dry cleaning services
- 💰 **Pricing List** - Comprehensive pricing for all services
- 🧮 **Price Calculator** - Interactive calculator for customers
- ⭐ **Testimonials** - Client reviews and ratings
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast Performance** - Optimized with Next.js

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kanski21/LaundryWebsite.git
cd LaundryWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Add your logo:
   - Place your logo file as `public/logo.png`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── pages/
│   ├── _app.jsx
│   ├── _document.jsx
│   └── index.jsx
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Pricing.jsx
│   ├── Calculator.jsx
│   ├── Testimonials.jsx
│   └── Footer.jsx
├── styles/
│   └── globals.css
├── public/
│   └── logo.png (add your logo here)
└── package.json
```

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#4B7BA7',      // Blue
  secondary: '#7EABAF',    // Light Blue
  accent: '#2C5282',       // Dark Blue
}
```

### Contact Information

Update contact details in:
- `components/Header.jsx`
- `components/Hero.jsx`
- `components/Footer.jsx`

### Services and Pricing

Edit `components/Services.jsx` and `components/Pricing.jsx` to update your services and prices.

## Deployment

This project is ready to deploy on:
- **Vercel** (Recommended) - https://vercel.com
- **Netlify** - https://netlify.com
- **Any Node.js hosting**

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Technologies Used

- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **React** - JavaScript library
- **JavaScript** - Programming language

## License

All rights reserved © 2024 Clear&Shine

## Contact

📞 Phone: +359 888 004 606
✉️ Email: info@clearshine.bg
👤 Contact Person: Georgi Neshev
