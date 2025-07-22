"use client";

import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const chatClient = StreamChat.getInstance(apiKey);

export default function ChatClient({ user }) {
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    async function connectUser() {
      const response = await fetch("/api/chat-token", {
        method: "POST",
        body: JSON.stringify({ userId: user.id }),
      });
      const { token } = await response.json();

      await chatClient.connectUser(
        {
          id: user.id,
          name: user.name,
          image: user.image,
        },
        token
      );

      setClientReady(true);
    }

    connectUser();

    return () => {
      chatClient.disconnectUser();
    };
  }, [user]);

  if (!clientReady) return <p>Loading chat...</p>;

  return <p>Chat is ready!</p>; // Replace with your chat UI
}
