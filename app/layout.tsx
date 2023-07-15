import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { TaskStoreProvider } from "@/models/TaskStore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Management App",
  description:
    "A simple task management app with create, read, update and functionality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskStoreProvider>
          <Navbar />
          {children}
        </TaskStoreProvider>
      </body>
    </html>
  );
}
