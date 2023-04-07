import { Header } from "./Header"
import { VoxelModel } from "./VoxelModel"
import { InputChat } from "./InputChat"
import "../styles/Home.sass"
export const Home = ()=>{
  return (
    <>
      <div className="home__container m-3">
        <section className="header_section">
          <Header />
          <div className="">
            <VoxelModel /> 
          </div>
        </section>
        <section className="chat__container">
            
        </section>
        <footer className="footer__input--container">
          <InputChat />
        </footer>
      </div>
    </>
  )
}