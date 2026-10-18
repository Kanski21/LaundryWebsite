# Clear&Shine Professional Laundry Website

A modern, responsive website for Clear&Shine laundry service built with Next.js and Tailwind CSS.

## Features

- **Hero with care label** – the brand's services shown as a garment care label with laundry care symbols
- **For businesses and for homes** – separate offers for hotels/restaurants and for individual customers
- **Five-step process** – pickup, washing, drying and ironing, packing, return
- **What we wash** – textile groups; prices are quoted per order
- **Inquiry builder** – customers pick items and quantities, and the form opens a ready email to info@clearshine.bg
- **Responsive and accessible** – works from 375px phones up, keyboard focus, reduced motion

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

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

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
│   ├── Audiences.jsx
│   ├── Process.jsx
│   ├── Textiles.jsx
│   ├── Inquiry.jsx
│   ├── Footer.jsx
│   ├── CareSymbols.jsx
│   └── contact.js
├── styles/
│   └── globals.css
├── public/
│   └── logo.png
└── package.json
```

## Customization

### Colors and fonts

Colors and fonts live in `tailwind.config.js`. Fonts (Cormorant Garamond and Commissioner, both with Cyrillic) are installed from npm and loaded in `pages/_app.jsx`.

### Contact information

Phone, email and contact person are set once in `components/contact.js`.

### Textiles

The list of textiles in `components/Textiles.jsx` is used both on the page and in the inquiry form.

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
