import "./globals.css";

export const metadata = {
  title: "ARC BUNKER",
  description: "Next Level Designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
