import logo from "./logo.svg";
import "./App.css";
//link rel styl.,,,,,
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Content } from "./components/Content";
import { MapDemo } from "./components/MapDemo";
import { Univ } from "./components/Univ";
import { UseStateDemo } from "./components/UseStateDemo";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStaeDemo2 } from "./components/UseStaeDemo2";
import { MapDemo2 } from "./components/MapDemo2";
import { Country } from "./components/Country";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/netflix/NetflixHome";
import { NetflixMovies } from "./components/netflix/NetflixMovies";
import { NetflixDashboard } from "./components/netflix/NetflixDashboard";
import { Error404 } from "./components/netflix/Error404";

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
      <Navbar></Navbar>
      <Routes>
      
        <Route path="/" element = {<NetflixDashboard/>}></Route>
        <Route path="/netflixhome" element={<NetflixHome/>}></Route>
        <Route path="/netflixmovies" element ={<NetflixMovies/>}></Route>
        {/* <Route path="/*" element ={<h1>Error....</h1>}></Route>   */}
        <Route path="/*" element={<Error404/>}></Route>
      </Routes>
      
      {/* <Header title = {title} city={city}></Header>
      <Country></Country> */}
      {/* <UseStateDemo></UseStateDemo> */}
      {/* <UseStateDemo1></UseStateDemo1> */}
      {/* <UseStaeDemo2></UseStaeDemo2> */}
      {/* <MapDemo2/> */}
      {/* <Univ/> */}
      {/* <MapDemo/> */}
      {/* <Content city={city} title ={title}></Content> */}
      {/* <Home address = {address}></Home> */}
      {/* <Footer t = {title}></Footer> */}
    </div>
  );
}

export default App;
