export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

export async function GET() {
  // Generate random sales data for 2022, 2023, 2024
  function getRandomSales(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const salesData = [
    { year: 2022, sales: getRandomSales(10000, 20000) },
    { year: 2023, sales: getRandomSales(10000, 20000) },
    { year: 2024, sales: getRandomSales(10000, 20000) },
  ];
  return NextResponse.json(salesData);
}
