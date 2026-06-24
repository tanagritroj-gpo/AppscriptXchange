// src/app/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { getGpoData } from '../lib/gas-api';

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getGpoData('getData');
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <div>กำลังโหลดข้อมูลจากระบบ GPO...</div>;

  return (
    <main>
      <h1>ข้อมูลระบบรับคืนสินค้า</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}