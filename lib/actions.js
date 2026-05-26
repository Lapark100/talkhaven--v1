'use server';


import { StreamChat } from "stream-chat";




export async function generateUserToken(userId) {
  if (!secretKey) throw new Error("Missing Stream secret key");

  const serverClient = StreamChat.getInstance(apiKey, secretKey);
  const token = serverClient.createToken(userId);

  return token;
}
