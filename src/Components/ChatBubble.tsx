import { motion, usePresence } from "framer-motion";
import "../styles/BubbleChat.sass";

interface ChatBubbleProps {
  infoText: String;
  key: number;
}

const transition = {
  type: 'spring',
  stiffness: 500,
  damping: 50,
  default: {
    duration: 0.4
  }
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ infoText }) => {
  
  const [isPresent, safeToRemove] = usePresence();

  const animation = {
    layout: true,
    initial: "out",
    animate: "in",
    variants: {
      in: { opacity: 1, translateY: 0 },
      out: { opacity: 1, translateY: 0 }
    },
    exit: { opacity: 0, translateY: 0 },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition
  };
  
  return (
      <motion.div className="bubble-chat__container" {...animation}>
        <span className="bubble-chat__text">{infoText}</span>
      </motion.div>
  );
};
