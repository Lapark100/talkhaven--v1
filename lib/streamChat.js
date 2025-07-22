import { StreamChat } from "stream-chat";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const secretKey = process.env.STREAM_SECRET_KEY; // Keep this secure on the server-side

export const chatClient = StreamChat.getInstance(apiKey);