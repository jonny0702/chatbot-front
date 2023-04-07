import "../styles/BubbleChat.sass"

interface ChatBubbleProps{
  infoText: String;
}

export const ChatBubble:React.FC<ChatBubbleProps> = ({infoText})=>{
  return(
    <div className="bubble-chat__container">
      <span className="bubble-chat__text">
        {infoText}
      </span>
    </div>
  )
}