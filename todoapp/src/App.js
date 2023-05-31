import './App.css';
import Header from "./components/Header"
import Footer from './components/Footer'
import Todos from './components/Todos'

function App() {
  return (
 <>
    <Header title="My Todos List"/>
    <Todos/>
    <Footer/>
  </>
   
  );
}
 
export default App;
