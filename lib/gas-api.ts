// src/lib/gas-api.ts
const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL!;

export async function getGpoData(action: string) {
  try {
    const response = await fetch(`${GAS_URL}?action=${action}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store' // ป้องกันการติด Cache ของ Next.js
    });
    
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}