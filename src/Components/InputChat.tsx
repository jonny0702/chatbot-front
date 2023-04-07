import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import "../styles/inputChat.sass";

export const InputChat = () => {
  return (
    <>
      <form className="input_chat--container">
        <div className="input--container">
          <div className="icon__container">
            <FontAwesomeIcon icon={faPaperPlane} size="1x" bounce style={{color: "#3a3a3a"}}/>
          </div>
          <input
            type="text"
            className="input_chat"
            placeholder="chat with chatGPT..."
          />
        </div>
      </form>
    </>
  );
};
