"use client";
import { useContext, createContext } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const ThemeContext = createContext("light");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useContext(ThemeContext);
  return (
    <html lang="en">
      <ThemeContext.Provider value="dark">
        <body
          style={{
            background: theme === "dark" ? "#3e3e3e" : "#fff",
            color: theme === "dark" ? "#fff" : "#3e3e3e",
          }}
          className={inter.className}
        >
          {children}
        </body>
      </ThemeContext.Provider>
    </html>
  );
}
