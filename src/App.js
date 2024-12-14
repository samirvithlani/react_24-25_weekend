import logo from "./logo.svg";
import "./App.css";
//link rel styl.,,,,,
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Content } from "./components/Content";
import { MapDemo } from "./components/MapDemo";
import { Univ } from "./components/Univ";

function App() {
  //we can return only 1 tag at a time...
  //every tag must have a closing tag
  //whatever we write in the return statement it will display on the screen
  var title = "REACT JS"
  var city = "Pune"

  var address = {
    country:"India",
    state:"Gujarat",
    city:"Ahmedabad"

  }
  
  
  return (
    
    <div className="App">
      <Header title = {title} city={city}></Header>
      <Univ/>
      {/* <MapDemo/> */}
      {/* <Content city={city} title ={title}></Content> */}
      {/* <Home address = {address}></Home> */}
      {/* <Footer t = {title}></Footer> */}
    </div>
  );
}

export default App;
