import { Inter } from "next/font/google";
import "@/src/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
    
        <div className="dashboard-container">
          {children}
          </div>
      
      </body>
    </html>
  );
}
