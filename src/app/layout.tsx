import React from "react";
import { CustomizerContextProvider } from "./context/customizerContext";

import MyApp from "./app";
import "./global.css";
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: "Flexy Main Demo",
  description: "Flexy Main kit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTopLoader color="#1e4db7" />
        <CustomizerContextProvider>
          <MyApp>{children}</MyApp>
        </CustomizerContextProvider>
      </body>
    </html>
  );
}
