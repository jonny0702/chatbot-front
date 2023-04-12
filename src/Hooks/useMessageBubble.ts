import { useState, useCallback } from "react";

export interface Messages {
    id: number;
    isResponse: boolean
    message: String;
}

export const useMessage = (initValueMessage: Array<Messages> = []) => {
  const [messages, setMessages] = useState(initValueMessage);

  const addMessage = useCallback(
    (msg: Messages) => {
      setMessages((messages) => [...messages, msg]);
    },
    [setMessages]
  );

  return [
    messages,
    addMessage,
    setMessages,
  ] as const;
};
