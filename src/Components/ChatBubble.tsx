import { motion, usePresence } from "framer-motion";
import "../styles/BubbleChat.sass";

interface ChatBubbleProps {
  infoText: String;
  isResponse?: boolean;
}

const transition = {
  type: "spring",
  stiffness: 500,
  damping: 50,
  default: {
    duration: 0.4,
  },
};

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  infoText,
  isResponse,
}) => {
  const [isPresent, safeToRemove] = usePresence();

  const animation = {
    layout: true,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition,
  };

  return (
    <>
      <motion.div
        className={
          isResponse ? "bubble-response__container" : "bubble-chat__container"
        }
        {...animation}
      >
        <span className="bubble-chat__text">{infoText}</span>
      </motion.div>
    </>
  );
};
