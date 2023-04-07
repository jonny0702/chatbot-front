import { Header } from "./Header"
import { VoxelModel } from "./VoxelModel"
import { InputChat } from "./InputChat"
import "../styles/Home.sass"
import { ChatBubble } from "./ChatBubble"
export const Home = ()=>{
  return (
    <>
      <div className="home__container m-3">
        <section className="header_section">
          <Header />
          <div className="voxel__container">
            <VoxelModel /> 
          </div>
        </section>
        <section className="chat__container">
            {/* <ChatBubble /> */}
        </section>
        <footer className="footer__input--container">
          <InputChat />
        </footer>
      </div>
    </>
  )
}