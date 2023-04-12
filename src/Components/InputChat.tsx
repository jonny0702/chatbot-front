import { ReactNode } from "react";
import "../styles/inputChat.sass";

interface InputChatProps {
  children: ReactNode;
}

export const InputChat: React.FC<InputChatProps> = ({ children }) => {
  return <>{children}</>;
};
