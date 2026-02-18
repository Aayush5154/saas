import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "SaaSify – Ship Faster, Scale Smarter",
  description:
    "The all-in-one SaaS platform that helps teams collaborate, automate, and grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-dark-bg text-white font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
