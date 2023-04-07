import "../styles/Header.sass";

export const Header = ()=>{

  return (
    <>
      <header className="header__container">
        <h1 className="text-md-center">
          ChatBot👾
        </h1>
        <section className="section--header__container">
          <p className="text-sm-center m-auto" >This ChatBot are using Chat-GPT API</p>
          <p className="text-sm-center m-auto" >Try something like:</p>
          <div className="card card-text bg-light align-items-*-center">
            <p className="text-sm-center m-auto p-1" >"explain quantum computing in simple terms"</p>
          </div>
        </section>
      </header>
    </>
  )

}