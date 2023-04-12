import { motion, usePresence } from "framer-motion";
import { CodeMarkdown } from "./CodeMarkdown";
import Markdown from "markdown-to-jsx";

import "../styles/BubbleChat.sass";

interface ChatBubbleProps {
  infoText: any;
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
        {isResponse ? (
          <>
            <div className={"bubble-chat__mark"}>
              <Markdown
                options={{
                  wrapper: "div",
                  disableParsingRawHTML: true,
                  overrides: {
                    code: {
                      component: CodeMarkdown,
                    },
                  },
                }}
              >
                {infoText}
              </Markdown>
            </div>
          </>
        ) : (
          <span className="bubble-chat__text">{infoText}</span>
        )}
      </motion.div>
    </>
  );
};
