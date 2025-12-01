# Premier Guard Services Corp.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.28-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-316192)](https://www.postgresql.org/)

A modern, responsive website for Premier Guard Services Corp., a luxury professional security services company serving across Canada.

![Premier Guard Services](https://cdn.abacus.ai/images/fbb7dfc1-475e-418b-b3ad-bef404ca9384.png)

## 🛡️ About

Premier Guard Services Corp. provides luxury professional, licensed security services across Canada. Our comprehensive security solutions include:

- **Private Event Security** - Corporate events, weddings, concerts, and private functions
- **Retail Security** - Loss prevention and customer safety
- **Construction Site Security** - 24/7 site protection and access control
- **Mobile Patrol Services** - Regular patrols for multiple locations
- **Concierge / Front Desk Security** - Professional reception and access control
- **Emergency / Short-Notice Security** - Rapid deployment for urgent needs
- **24/7 Security Coverage** - Round-the-clock protection

## 🚀 Features

- **Modern UI/UX**: Dark-themed, luxury design with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Contact Forms**: Integrated contact and quote request forms with database storage
- **Blog Section**: Built-in blog with security tips and industry insights
- **SEO Optimized**: Comprehensive metadata and OpenGraph tags
- **Fast Performance**: Next.js 14 with App Router for optimal performance
- **Database Integration**: PostgreSQL with Prisma ORM
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14.2.28 (App Router)
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.3 + shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend
- **Database**: PostgreSQL
- **ORM**: Prisma 6.7.0
- **API**: Next.js API Routes

### UI Components
- Radix UI primitives
- shadcn/ui component library
- Custom animated components

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Yarn package manager

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/premier-guard-services.git
cd premier-guard-services
```

2. **Install dependencies**

```bash
cd nextjs_space
yarn install
```

3. **Set up environment variables**

Create a `.env` file in the `nextjs_space` directory:

```bash
cp .env.example .env
```

Then edit `.env` with your database credentials:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
NEXTAUTH_URL=http://localhost:3000
```

4. **Set up the database**

```bash
yarn prisma generate
yarn prisma db push
```

5. **Run the development server**

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
premier_guard_services/
├── nextjs_space/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── api/               # API routes (contact, quote)
│   │   ├── blog/              # Blog pages
│   │   ├── contact/           # Contact page
│   │   ├── quote/             # Quote request page
│   │   ├── services/          # Services page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── header.tsx        # Header navigation
│   │   └── footer.tsx        # Footer
│   ├── lib/                   # Utility functions
│   │   ├── db.ts             # Database client
│   │   ├── types.ts          # TypeScript types
│   │   └── utils.ts          # Helper functions
│   ├── prisma/               # Database schema
│   │   └── schema.prisma     # Prisma schema
│   ├── public/               # Static assets
│   ├── .env                  # Environment variables (not in git)
│   ├── .env.example          # Environment template
│   ├── next.config.js        # Next.js configuration
│   ├── package.json          # Dependencies
│   ├── tailwind.config.ts    # Tailwind configuration
│   └── tsconfig.json         # TypeScript configuration
└── README.md
```

## 🔧 Available Scripts

- `yarn dev` - Start development server on port 3000
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn prisma generate` - Generate Prisma client
- `yarn prisma db push` - Push schema changes to database
- `yarn prisma studio` - Open Prisma Studio

## 🌐 Deployment

The application is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Custom servers** with Node.js

### Environment Variables for Production

Ensure these environment variables are set in your deployment platform:

```env
DATABASE_URL=postgresql://...
NEXTAUTH_URL=https://yourdomain.com
```

## 📱 Contact Information

- **Phone**: (437) 445-9542
- **Email**: Premierguardservicescorp@gmail.com
- **Instagram**: [@premierguardservices](https://www.instagram.com/premierguardservices/)
- **Service Area**: Canada

## 🎨 Design Features

- **Color Scheme**: Dark slate background with amber accent colors
- **Typography**: Inter font family for modern, professional look
- **Animations**: Smooth scroll animations and transitions
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Accessibility**: ARIA labels and semantic HTML

## 📄 License

Copyright © 2024 Premier Guard Services Corp. All rights reserved.

## 🤝 Contributing

This is a private commercial project. For inquiries about contributions or modifications, please contact Premier Guard Services Corp.

## 📞 Support

For technical support or inquiries about Premier Guard Services:

- Email: Premierguardservicescorp@gmail.com
- Phone: (437) 445-9542

---

**Built with ❤️ for Premier Guard Services Corp.**
