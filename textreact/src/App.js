// import logo from "./logo.svg";
import "./App.css";

// let name="Sejal";
function App() {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Testutil</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   


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