# Skanda Marine Algae Solutions (SMAS)

## Overview
**Skanda Marine Algae Solutions (SMAS)** is an initiative dedicated to **sustainable seaweed farming** and **value-added marine products**. Our mission is to empower coastal communities with **innovative farming techniques** and **technologically advanced solutions** for seaweed cultivation.

## Vision
Our vision is to be a global leader in **marine algae cultivation**, utilizing **cutting-edge technology** to create **high-value products** while promoting **eco-friendly farming practices** and **sustainable livelihoods** for farmers.

## Seaweed Farming & Impact
- **Empowering Coastal Communities:** We work with **local farmers, especially women**, to provide training and resources for seaweed farming.
- **Sustainable Practices:** We promote farming techniques such as **floating bamboo rafts, longline methods, and tube net cultivation**.
- **Economic Growth:** We help farmers integrate into the **global supply chain** for seaweed-based **organic fertilizers, food additives, and animal feed supplements**.

## Farming Techniques
- **Floating Bamboo Raft Method** - Ideal for calm waters.
- **Longline/Monoline Method** - Used in shallow waters with moderate waves.
- **Tube Net Method** - Suitable for areas with strong waves.

## Valuable Products
1. **Organic Manure with Seaweed-Coated Fertilizer** - Enhances soil fertility and crop yield.
2. **Agar and Carrageenan** - Food stabilizers used in dairy, beverages, and processed foods.
3. **Animal Feed Supplements** - Rich in essential nutrients, amino acids, and vitamins.

---

# Technical Overview

## Project Structure
```
smas/
│── README.md
│── eslint.config.mjs
│── next-env.d.ts
│── next.config.ts
│── package-lock.json
│── package.json
│── postcss.config.mjs
│── public/
│   │── assets/
│   │── icons/
│   └── images/
│── src/
│   │── app/
│   │   │── about/
│   │   │   └── page.tsx
│   │   │── contact/
│   │   │   └── page.tsx
│   │   │── farming/
│   │   │   └── page.tsx
│   │   │── favicon.ico
│   │   │── layout.tsx
│   │   │── page.tsx
│   │   └── products/
│   │       └── page.tsx
│   │── components/
│   │   │── Footer.tsx
│   │   │── Hero.tsx
│   │   │── Navbar.tsx
│   │   │── ProductCard.tsx
│   │   └── Section.tsx
│   │── constants/
│   │   │── farming.ts
│   │   └── products.ts
│   └── styles/
│       └── globals.css
└── tsconfig.json
```

## Technology Stack
- **Framework:** Next.js (React-based framework for SSR & SSG)
- **Styling:** CSS Modules for scoped styles
- **TypeScript:** Ensures type safety and maintainability
- **Hosting:** Vercel (Continuous Deployment with `main` for development and `prd` for production)

## Deployment Strategy
- **`main` Branch** → Deployed on **Vercel preview** (`smas-gray.vercel.app`)
- **`prd` Branch** → Deployed to **skandamarine.com** for real users

## Installation & Setup
### Prerequisites
- Node.js (>=16)
- npm or yarn package manager

### Steps
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo/smas.git
   cd smas
   ```
2. **Install Dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Run the Development Server**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build and Run for Production**
   ```sh
   npm run build
   npm run start
   ```

## Contribution
We welcome contributions! Feel free to fork the repo, create feature branches, and submit pull requests.

## Contact
📩 **Email:** skanda……@gmail.com  
📞 **Phone:** +91 XXXXXXXXXX  
🏢 **Office Location:** [Address Placeholder]  
🌍 **Website:** [skandamarine.com](https://skandamarine.com)

---

This README provides a **clear theoretical and technical overview**, making it easy for both **developers and AI models** to understand the project's structure, purpose, and functionality.
