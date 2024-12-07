import logo from "./logo.svg";
import "./App.css";
//link rel styl.,,,,,
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import Header from "./components/Header";

function App() {
  //we can return only 1 tag at a time...
  //every tag must have a closing tag
  //whatever we write in the return statement it will display on the screen

  
  return (
    
    <div className="App">
      
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
