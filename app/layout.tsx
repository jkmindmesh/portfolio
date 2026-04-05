```tsx
import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
