'use server';

import { createClient } from "@/lib/supaase/server"; // ✅ Correct import
import { cookies } from "next/headers";

export async function login(prevState, formData) {
  const email = formData.get('email');

  // ✅ Ensure createClient is awaited
  const supabase = await createClient();

  // ✅ Ensure supabase.auth is available
  if (!supabase || !supabase.auth) {
    console.error("Supabase client is not initialized properly");
    return { error: true, message: "Internal Server Error" };
  }

  // Handle OTP sign-in request
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      shouldCreateUser: true,
    },
  });

  console.log("Login Response Data:", data);
  console.log("Login Error:", error);

  if (error) {
    return { error: true, message: 'Error Authenticating' };
  }

  // Session management - Ensure session is updated after login
  const { data: session, error: sessionError } = await supabase.auth.getSession();

  if (sessionError || !session) {
    console.error("Error fetching session:", sessionError?.message);
    return { error: true, message: "Session update failed" };
  }

  console.log("Session Data:", session);

  // Ensure session is set in cookies
  await supabase.auth.setSession(session.access_token);

  return { error: false, message: 'Check your email for the login link!' };
}
