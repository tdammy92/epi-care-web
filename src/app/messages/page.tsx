"use client";

import { useState } from "react";
import { Search, MessageSquare, Phone, Video, MoreVertical, Send, Paperclip, Smile } from "lucide-react";
import Image from "next/image";
import Avatar from "@/components/avatar";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(0);

  const chats = [
    {
      id: 0,
      name: "Dr. Sarah Wilson",
      role: "Cardiologist",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastMessage: "Patient report has been updated",
      time: "2m ago",
      unread: 2,
      online: true,
    },
    {
      id: 1,
      name: "Dr. Michael Chen",
      role: "Neurologist",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastMessage: "Emergency consultation needed",
      time: "5m ago",
      unread: 1,
      online: true,
    },
    {
      id: 2,
      name: "Dr. Emily Brown",
      role: "Pediatrician",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastMessage: "Schedule updated for tomorrow",
      time: "1h ago",
      unread: 0,
      online: false,
    },
  ];

  const messages = [
    { id: 1, sender: "them", content: "Hi, I need a consultation regarding a patient case.", time: "9:41 AM" },
    { id: 2, sender: "me", content: "Of course, I'm available. What's the case about?", time: "9:42 AM" },
    { id: 3, sender: "them", content: "Patient showing unusual cardiac readings. Could you take a look at the report?", time: "9:45 AM" },
    { id: 4, sender: "me", content: "Yes, please share the report and I'll review it right away.", time: "9:47 AM" },
  ];

  return (
    <div className="h-screen bg-gray-50 pt-8 px-8">
      <div className="bg-white rounded-xl shadow-sm h-[calc(100vh-6rem)] flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 border-r flex flex-col">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search messages"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`p-4 cursor-pointer hover:bg-gray-50 ${selectedChat === chat.id ? 'bg-indigo-50' : ''}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    {/* <Image
                      src={chat.avatar}
                      alt={chat.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    /> */}
                    <Avatar name={chat.name} round size={35} /> 
                    {chat.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold truncate">{chat.name}</h4>
                      <span className="text-sm text-gray-500">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{chat.role}</p>
                    <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                  </div>
                  {chat.unread > 0 && (
                    <div className="bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {chat.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* <Image
                src={""}
                alt={chats[selectedChat].name}
                width={48}
                height={48}
                className="rounded-full"
              /> */}
              <Avatar name={chats[selectedChat].name} round size={30} />
              <div>
                <h3 className="font-semibold">{chats[selectedChat].name}</h3>
                <p className="text-sm text-gray-600">{chats[selectedChat].role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Phone className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Video className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.sender === 'me'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p>{message.content}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'me' ? 'text-indigo-200' : 'text-gray-500'}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Paperclip className="w-5 h-5 text-gray-600" />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Smile className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}