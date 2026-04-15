import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "KeenKeeper — Keep Your Friendships Alive",
  description: "Your personal shelf of meaningful connections.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}