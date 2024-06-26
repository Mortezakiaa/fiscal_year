import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Provider from "@/store/Provider";

export const metadata: Metadata = {
  title: "",
  description: "Generated by Morteza kia (member of amisa.me team)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <AppRouterCacheProvider>
          <Provider>{children}</Provider>
        </AppRouterCacheProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
