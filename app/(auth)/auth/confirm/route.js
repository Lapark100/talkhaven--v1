import { NextResponse } from "next/server";
import { createClient } from "@/lib/supaase/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");

  // Validate token_hash and type
  if (!token_hash || !type) {
    return NextResponse.json({ error: "Invalid request parameters" }, { status: 400 });
  }

  const supabase = await createClient();
  if (!supabase || !supabase.auth) {
    console.error("Supabase client is not initialized properly");
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

  // Verify OTP
  const { data, error } = await supabase.auth.verifyOtp({
    type,
    token_hash,
  });

  if (error) {
    console.error("Error verifying OTP:", error.message);
    return NextResponse.json({ error: "OTP verification failed" }, { status: 401 });
  }

  // Update session after successful OTP verification
  const { data: session, error: sessionError } = await supabase.auth.getSession();

  if (sessionError || !session) {
    console.error("Error fetching session:", sessionError?.message);
    return NextResponse.json({ error: "Session update failed" }, { status: 500 });
  }

  // Set the session properly to cookies
  await supabase.auth.setSession(session.access_token);

  console.log("User session updated:", session);

  // Redirect user to home page
  return NextResponse.redirect(new URL("/", request.url));
}
