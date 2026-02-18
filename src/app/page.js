import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProductShowcase from "@/components/landing/ProductShowcase";
import Features from "@/components/landing/Features";
import Guide from "@/components/landing/Guide";
import Companies from "@/components/landing/Companies";
import CTABanner from "@/components/landing/CTABanner";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Features />
      <Guide />
      <Companies />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
