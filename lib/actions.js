'use server';

import { createClient } from "@/lib/supaase/server"; // ✅ Correct import
import { StreamChat } from "stream-chat";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const secretKey = process.env.STREAM_SECRET_KEY;

export async function login(prevState, formData) {
  const supabase = await createClient()
  const email = formData.get('email')
  const { error } = supabase.auth.signInWithOtp({
    email: email,
    option: {
      shouldCreateUser: true
    }
  })

  if(error) {
    return {
      error: true,
      message: 'Error Authenticating'
    }
  }
  
  return {
    message: `Email sent to ${email}`
  }

  
  
}

export async function generateUserToken(userId) {
  if (!secretKey) throw new Error("Missing Stream secret key");

  const serverClient = StreamChat.getInstance(apiKey, secretKey);
  const token = serverClient.createToken(userId);

  return token;
}
