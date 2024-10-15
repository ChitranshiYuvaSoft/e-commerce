import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "./redux-provider";
import LayoutWrapper from "@/privateRoutes/LayoutWrapper";
import toast, { Toaster } from "react-hot-toast";
import { CopilotKit } from "@copilotkit/react-core"; 
import "@copilotkit/react-ui/styles.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <LayoutWrapper>
          <CopilotKit runtimeUrl="/api/copilotkit">
            {children}
            </CopilotKit> 
            </LayoutWrapper>
        </ReduxProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
