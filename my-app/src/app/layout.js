import StyledComponentsRegistry from "../../registry";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="icon" href="/js.png"></link>
        <title>Cau's Portfolio Micro Interactions</title>
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
