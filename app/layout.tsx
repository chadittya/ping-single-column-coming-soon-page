import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Frontend Mentor | Ping coming soon page",
  description: "Coded by Galih Arizza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
