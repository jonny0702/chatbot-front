import { motion, usePresence } from "framer-motion";
import "../styles/BubbleChat.sass";

interface ResponseBubbleProps {
  responseInfo: String;
}

const transition = {
  type: "spring",
  stiffness: 500,
  damping: 50,
  default: {
    duration: 0.4,
  },
};

export const ResponseBubble: React.FC<ResponseBubbleProps> = ({
  responseInfo,
}) => {
  
  const animation = {
    layout: true,
    initial: "out",
    animate: "in",
    variants: {
      in: { opacity: 1, translateY: 0 },
      out: { opacity: 1, translateY: 0 },
    },
    exit: { opacity: 0, translateY: 0 },
    transition,
  };

  return (
    <motion.div className="bubble-response__container" {...animation}>
      <span className="bubble-chat__text">{responseInfo}</span>
    </motion.div>
  );
};
