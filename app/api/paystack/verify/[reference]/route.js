import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const reference = params.reference;

  const response = await fetch(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    }
  );

  const data = await response.json();

  if (data.data.status === "success") {
    return NextResponse.json({
      success: true,
      data,
    });
  }

  return NextResponse.json({
    success: false,
  });
}