# SaaSFlow - Subscription & Billing Platform

A futuristic, production-ready SaaS application built with Next.js 14, Firebase, Stripe, and cutting-edge UI design.

## 🚀 Features

- **Futuristic UI Design**: Quantum dark mode with aurora gradients, glass morphism, and neon glows
- **Complete Authentication**: Firebase Auth with email/password and Google OAuth
- **Subscription Management**: Full Stripe integration with webhooks
- **Real-time Dashboard**: Analytics, user management, and billing overview
- **Responsive Design**: Mobile-first approach with smooth animations
- **Type Safety**: Built with TypeScript for robust development

## 🎨 Design System

- **Theme**: Quantum Dark (#000, #0A0A0A) with Aurora Glow (cyan → teal → mint)
- **Typography**: Playfair Display (cinematic) + Inter (futuristic)
- **Components**: Glass panels, liquid buttons, orbital hover effects
- **Animations**: Framer Motion with parallax and micro-interactions

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animation**: Framer Motion
- **Backend**: Firebase (Auth, Firestore), Firebase Admin SDK
- **Payments**: Stripe (Checkout, Customer Portal, Webhooks)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── api/webhooks/      # Stripe webhooks
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── pricing/           # Pricing page
│   └── ...
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   └── sections/         # Page sections
├── lib/                  # Utilities and configs
│   ├── firebase/         # Firebase config
│   ├── stripe/           # Stripe config
│   └── actions/          # Server actions
└── styles/               # Global styles
```

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   git clone <repository>
   cd saasflow-platform
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Fill in your Firebase and Stripe credentials
   ```

3. **Firebase Setup**
   - Create a Firebase project
   - Enable Authentication (Email/Password, Google)
   - Create Firestore database
   - Generate service account key

4. **Stripe Setup**
   - Create Stripe account
   - Set up products and prices
   - Configure webhooks endpoint
   - Get API keys

5. **Run Development Server**
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### Firebase Collections Structure

```
users/
├── {userId}
    ├── email: string
    ├── displayName: string
    ├── role: 'user' | 'admin'
    ├── stripeCustomerId: string
    ├── subscriptionStatus: string
    └── createdAt: timestamp

subscriptions/
├── {subscriptionId}
    ├── userId: string
    ├── stripeSubscriptionId: string
    ├── status: string
    ├── planId: string
    └── currentPeriodEnd: timestamp

invoices/
├── {invoiceId}
    ├── userId: string
    ├── amount: number
    ├── status: string
    └── paidAt: timestamp
```

### Stripe Webhooks

Configure these webhook events:
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.paid`
- `invoice.payment_failed`

## 🎯 Key Components

### AuroraBackground
Animated background with floating aurora effects and atmospheric fog.

### GlowButton
Interactive button with shimmer effects and multiple variants.

### PricingCard
Glass morphism pricing cards with hover animations and popular badges.

### Navbar
Responsive navigation with scroll effects and mobile menu.

## 🔐 Security Features

- Protected routes with middleware
- Role-based access control
- Firebase Admin SDK for server operations
- Stripe webhook signature verification
- Environment variable validation

## 📱 Pages Included

- **Landing Page**: Hero, features, pricing, FAQ
- **Authentication**: Login, signup, password reset
- **Dashboard**: Analytics, quick actions, plan overview
- **Pricing**: Interactive pricing with Stripe checkout
- **Billing**: Subscription management and invoices
- **Admin Panel**: User management and plan creation

## 🚀 Deployment

1. **Vercel Deployment**
   ```bash
   npm run build
   vercel --prod
   ```

2. **Environment Variables**
   - Add all environment variables to Vercel
   - Configure Stripe webhook endpoint
   - Set up Firebase security rules

3. **Domain Configuration**
   - Update Firebase authorized domains
   - Configure Stripe webhook URL
   - Update CORS settings

## 🎨 Customization

The design system is fully customizable through Tailwind config:

- **Colors**: Modify aurora gradients and quantum theme
- **Animations**: Adjust timing and effects in keyframes
- **Typography**: Change font families and weights
- **Components**: Extend glass panel and glow effects

## 📄 License

MIT License - feel free to use for commercial projects.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

---

Built with ❤️ using Next.js 14, Firebase, and Stripe.