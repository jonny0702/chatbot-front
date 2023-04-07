import { useState, useCallback, useEffect, FormEventHandler } from "react";
import { useMessage } from "../Hooks/useMessageBubble";
import { Header } from "./Header";
import { VoxelModel } from "./VoxelModel";
import { InputChat } from "./InputChat";
import { ChatBubble } from "./ChatBubble";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "../styles/Home.sass";

export const Home = () => {
  const [onChat, setOnChat] = useState(false);
  const [chatText, setChatText] = useState("");
  const [messages, addMessage] = useMessage([]);
  const [responseInfo, setResponseInfo] = useState("");

  const handleChangeInput= (event: React.ChangeEvent<HTMLInputElement>)=>{
    setChatText(event.currentTarget.value);
  }

  const handleSubmit: FormEventHandler<HTMLFormElement | HTMLDivElement> =(e)=>{
    e.preventDefault();
    if(chatText.length > 0){
      addMessage({
        id: +new Date(),
        message: chatText
      })
    }
    setChatText("");
    setOnChat(true);
  }
  // const chatResponse= useCallback(()=>{
  //  handleSubmit;
  // },[chatText, messages])

  // useEffect(()=>{
  //   fetch("http://localhost:8080/api/chatgpt", {
  //     method: "POST",
  //     body: chatText
  //   }).then(res => res.json())
  //     .then(res => {
  //       console.log(res)
  //     });
  // },[handleSubmit])

  return (
    <>
      <div className="home__container m-3">
        {!onChat ? (
          <section className="header_section">
            <Header />
            <div className="voxel__container">
              <VoxelModel />
            </div>
          </section>
        ) : (
          <section className="chat__container">
            {
              messages.map(msg =>(
                <ChatBubble infoText={msg.message} key={msg.id}/>
              ))
            }
          </section>
        )}
        <footer className="footer__input--container">
          <InputChat>
            <form className="input_chat--container" onSubmit={handleSubmit}>
              <div className="input--container">
                <div className="icon__container" onClick={handleSubmit}>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    size="1x"
                    bounce
                    style={{ color: "#3a3a3a" }}
                  />
                </div>
                <input
                  type="text"
                  className="input_chat"
                  placeholder="chat with chatGPT..."
                  onChange={(e) => handleChangeInput(e)}
                  value={chatText}
                />
              </div>
            </form>
          </InputChat>
        </footer>
      </div>
    </>
  );
};
