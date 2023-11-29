import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/Shared/SideBar";
import { MqttProvider } from "@/context/MqttContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "E-Live",
  description: "E-Live The Equipment Tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MqttProvider>
        <body className={roboto.className}>
          <SideBar>{children}</SideBar>
        </body>
      </MqttProvider>
    </html>
  );
}
