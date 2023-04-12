interface ButtonStopChatProps {
  action: () => void;
}

export const ButtonStopChat = ({ action }: ButtonStopChatProps) => {
  return (
    <div
      style={{
        height: "fit-content",
      }}
      onClick={action}
    >
      <button type="button" className="btn btn-light outline-1">
        Stop Chatting
      </button>
    </div>
  );
};
