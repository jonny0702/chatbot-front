import { useState, useCallback } from "react";

export interface Message {
  id: number
  message: String;
}

export const useMessage = (initValue: Array<Message> = []) => {
  const [messages, setMessages] = useState(initValue);

  const addMessage = useCallback(
    (msg: Message) => {
      setMessages((messages) => [...messages, msg]);
    },
    [setMessages]
  );

  return [messages, addMessage, setMessages] as const;
};
