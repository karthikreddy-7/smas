// src/app/layout.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

export const metadata = {
  title: 'Skanda Marine Algae Solutions (SMAS)',
  description: 'Skanda Marine Algae Solutions (SMAS) is an initiative dedicated to sustainable seaweed farming and value-added marine products. Our mission is to empower coastal communities with innovative farming techniques and technologically advanced solutions for seaweed cultivation.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}