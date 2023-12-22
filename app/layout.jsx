import { AOSInit } from "./aos";
import Footer from "./components/Footer";

import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Xtech",
  description: "Xtech is a tech company that provides web development  .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className="overflow-x-hidden">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
