import "@/app/globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "CalculatorHub",
  description: "300+ calculators for finance, health, math, and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col">
        {/* <Navbar /> */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
