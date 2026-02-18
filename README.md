# SaaSify - Modern SaaS Landing Page & Dashboard

A modern, responsive SaaS application built with **Next.js 14**, **Tailwind CSS**, and **JWT Authentication**. Features a sleek dark-themed landing page and a fully functional admin dashboard.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

### Landing Page
- **Hero Section** with gradient backgrounds and floating elements
- **Product Showcase** with feature highlights
- **Pricing Plans** (Silver, Gold, Premium tiers)
- **Testimonials** carousel
- **FAQ** accordion
- **Contact Form**
- Fully responsive design

### Dashboard
- **Authentication** with JWT & HTTP-only cookies
- **Protected Routes** via middleware
- **Dashboard Home** with stat cards
- **Users Management** - Search, Sort, Pagination, Detail Modal
- **Settings** - Profile info, Theme toggle
- Clean, formal black & white design

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/saasify-landing-dashboard.git
   cd saasify-landing-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your values.

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## Demo Credentials

```
Email: admin@saas.com
Password: admin123
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── login/route.js
│   │       ├── logout/route.js
│   │       └── me/route.js
│   ├── dashboard/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── users/page.js
│   │   └── settings/page.js
│   ├── login/page.js
│   ├── register/page.js
│   ├── pricing/page.js
│   ├── testimonials/page.js
│   ├── faq/page.js
│   ├── layout.js
│   └── page.js
├── components/
│   ├── landing/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Features.js
│   │   └── ...
│   └── dashboard/
│       └── UserModal.js
├── context/
│   └── AuthContext.js
├── middleware.js
└── globals.css
```

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| Tailwind CSS 3.4 | Utility-first CSS |
| Lucide React | Icons |
| JWT | Authentication tokens |
| JSONPlaceholder | Mock API for users data |

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/saasify-landing-dashboard)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy!

### Self-Hosted / Docker

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `JWT_SECRET` | Secret key for JWT signing | Yes |
| `NEXT_PUBLIC_API_URL` | API base URL (optional) | No |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@email](vjaayush5154@gmail.com)

Project Link: [https://github.com/YOUR_USERNAME/saasify-landing-dashboard](https://github.com/YOUR_USERNAME/saasify-landing-dashboard)

---

Made with using Next.js and Tailwind CSS
