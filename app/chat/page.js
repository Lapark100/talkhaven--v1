"use client"

import { useState } from "react";
import { Input } from "../contact/components/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/card";
import { CardContent } from "@/components/cardCompoent";
import { Tabs } from "@/components/tabs";
import { TabsList } from "@/components/tabs-list";
import { TabsTrigger } from "@/components/tab-triggers";
import { TabsContent } from "@/components/tabs-content";
import { ScrollArea } from "@/components/scroll-area";
// import { Avatar } from "@/components/avatart";

const messagesMock = [
  { id: 1, sender: "John", text: "Hey, are we meeting today?", group: false },
  { id: 2, sender: "You", text: "Yes, at 5 PM.", group: false },
  { id: 3, sender: "Team", text: "Don't forget the presentation slides!", group: true },
  { id: 4, sender: "You", text: "On it!", group: true },
];

export default function ChatUI() {
  const [messages, setMessages] = useState(messagesMock);
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState("individual");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: Date.now(),
      sender: "You",
      text: input,
      group: activeTab === "group",
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  const filteredMessages = messages.filter(
    (msg) => msg.group === (activeTab === "group")
  );

  return (
    <Card className="w-full max-w-6xl mx-auto mt-10 rounded-2xl shadow-md">
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-t-2xl">
            <TabsTrigger value="individual">Individual</TabsTrigger>
            <TabsTrigger value="group">Group</TabsTrigger>
          </TabsList>

          <TabsContent value="individual">
            <ScrollArea className="h-96 p-4 space-y-4">
              {filteredMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-xs p-3 rounded-xl ${msg.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"}`}>
                    <div className="text-sm font-medium">{msg.sender}</div>
                    <div>{msg.text}</div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>

          <TabsContent value="group">
            <ScrollArea className="h-96 p-4 space-y-4">
              {filteredMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-xs p-3 rounded-xl ${msg.sender === "You" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-900"}`}>
                    <div className="text-sm font-medium">{msg.sender}</div>
                    <div>{msg.text}</div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
        </Tabs>

        <div className="flex items-center border-t p-4 gap-2">
          <Input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </CardContent>
    </Card>
  );
}
