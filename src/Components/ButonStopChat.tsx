interface ButtonStopChatProps {
  action: () => void;
}

export const ButtonStopChat = ({ action }: ButtonStopChatProps) => {
  return (
    <div
      style={{
        display:"flex",
        position: "fixed",
        width: "100%",
        justifyContent: "center",
        height: "fit-content",
        bottom: "4.5rem",
      }}
      onClick={action}
    >
      <button type="button" className="btn btn-light outline-1">
        Stop Chatting
      </button>
    </div>
  );
};
