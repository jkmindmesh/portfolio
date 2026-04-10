import "./globals.css";
import "./styles.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Jiya Kapoor - Portfolio",
  description: "High school student exploring engineering and AI",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Jiya Kapoor" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
