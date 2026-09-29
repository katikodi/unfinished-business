import './App.css'
import BackgroundShape from './Components/BackgroundShape'
import GridItems from './Components/GridItems'


function App() {
  return (
    <>
      <div className="bg-wrapper">
        <BackgroundShape color="pink"/>
        <BackgroundShape color="green"/>
        <BackgroundShape color="purple"/>
      </div>

      <main>
        <div id="upper-header">
          <h1>Kathrine Scheel</h1>
          <h2>UX/UI & development</h2>
        </div>
        <header>
          <GridItems/>
          <div id="my-image"></div>
        </header>

        <div id="more">
          <div id="textbox">
            <p>ADNOIAIFNIOAFAOFNOAIFN AONnkadoinoain oadnjksn</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App