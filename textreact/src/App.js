// import logo from "./logo.svg";
import "./App.css";
import Switch from "./components/Switch";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";  
// import About from './components/About';


// let name="Sejal";

//Props :: nothing but a property you want to pasd in your component ,which help you to change any type of text or frmat and help to reuse it
//Example::
// title and aboutText

//Proptype::
// It tell us that we just want to pass those dataype component which we pass as proptype ::

//For example: title proptype as a string

function App() {
  return (
    <>
      {/* <Navbar title="MY RC" aboutText="About US" /> */}

      {/* container is a class of bootstrap which make your content into middle */}
      {/* my-3 margin increase */}
      {/* <div className="container  my-3"> */}
      {/* <TextForm heading="Enter a Text to analyze"/> */}
      {/* <About/> */}
      {/* </div> */}

      {/* if we not pass any value it write that statment only which is our default value */}
      {/* <Navbar/>   */}




      {/* switch add */}
      <Switch/>
    </>
















    /*{ <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
     </nav> 
    <div className="container">
      <h1>Hello {name}
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, tempora dolorum! Dolores cupiditate autem facere corrupti enim labore cumque saepe.</p>
      </h1>
    </div> }*/
    // { <div className="blank">Hii</div> }

    /* { <h1>THis is me</h1>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with sk
          </a>
        </header>
      </div> }*/
  );
}
export default App;
