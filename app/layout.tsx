import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, CssBaseline, Toolbar } from "@mui/material";

import NavigationAndSideBar from "./_components/navigationadsidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ポートフォリオ",
  description: "Next.js + TypeScriptで制作したポートフォリオサイト",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <NavigationAndSideBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, maxWidth: "100%", }}>
              <Toolbar />
              {children}
            </Box>
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}