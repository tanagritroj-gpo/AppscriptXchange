import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // อย่าลืมสร้างไฟล์นี้ไว้สำหรับแต่ง CSS นะครับ

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GPO System',
  description: 'ระบบจัดการรับคืน/แลกเปลี่ยนสินค้าองค์การเภสัชกรรม',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={inter.className}>
        {/* กิตสามารถใส่ Navbar ไว้ตรงนี้เพื่อแสดงทุกหน้าได้เลย */}
        <nav className="p-4 bg-slate-800 text-white">
          GPO Management Portal
        </nav>

        <main className="container mx-auto p-4">
          {children}
        </main>

        <footer className="mt-10 p-4 text-center text-sm text-gray-500">
          © 2026 Government Pharmaceutical Organization
        </footer>
      </body>
    </html>
  );
}