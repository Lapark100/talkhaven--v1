import { Chat, Channel, Window, MessageList, MessageInput } from "stream-chat-react";

import { chatClient } from "@/lib/streamChat";

export default function ChatBox({ user }) {
  const channel = chatClient.channel("messaging", "general", {
    name: "General Chat",
  });

  return (
    <Chat client={chatClient}>
      <Channel channel={channel}>
        <Window>
          <MessageList />
          <MessageInput />
        </Window>
      </Channel>
    </Chat>
  );
}
