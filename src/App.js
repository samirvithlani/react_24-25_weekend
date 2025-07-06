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
import { AboutNetflix } from "./components/netflix/AboutNetflix";
import { ContactNetflix } from "./components/netflix/ContactNetflix";
import { NetflixPlayMovie } from "./components/netflix/NetflixPlayMovie";
import { FormDemo1 } from "./components/forms/FormDemo1";
import { McqGeneration } from "./components/forms/McqGeneration";
import { FormDemo2 } from "./components/forms/FormDemo2";
import { FormDemo3 } from "./components/forms/FormDemo3";
import { InputDemo } from "./components/forms/InputDemo";
import { ApiDemo1 } from "./components/apis/ApiDemo1";
import { Omdb1 } from "./components/apis/Omdb1";
import { ApiDemo2 } from "./components/apis/ApiDemo2";
import { UseEffectDemo } from "./components/UseEffectDemo";
import { UseMemoDemo } from "./components/UseMemoDemo";
import { EditUser } from "./components/apis/EditUser";
import { Products } from "./components/context/Products";
import { FindBombGame } from "./components/FindBombGame";
import { Login } from "./components/Login";
import { ProductComponent } from "./components/ProductComponent";
import { BankComponent } from "./components/BankComponent";
import { useSelector } from "react-redux";
import "./assets/css/theme.css";
import { StudentTable } from "./components/StudentTable";
import { StudentTable2 } from "./components/StudentTable2";
import { ContentComponent } from "./components/ContentComponent";
import { MuiButton } from "./mui/MuiButton";
import { FileUpload } from "./components/FileUpload";
import { io } from "socket.io-client"; 
import { useEffect } from "react";


function App() {
  const socket = io("http://localhost:3002")

  const sendMessageHandler= ()=>{

    socket.emit("sendMessage","hi this is from react..")

  }
  useEffect(()=>{
    socket.on("receiveMessage",(data)=>{
      console.log("message received...",data)
    })
  },[])
  //we can return only 1 tag at a time...
  //every tag must have a closing tag
  //whatever we write in the return statement it will display on the screen
  var title = "REACT JS";
  var city = "Pune";

  var address = {
    country: "India",
    state: "Gujarat",
    city: "Ahmedabad",
  };
  const themeState = useSelector((state) => state.theme.theme);
  console.log("themeState", themeState);

  return (
    // <div className="App" style={{backgroundColor:themeState === "light" ? "white" :"black",color:themeState === "light" ? "black" :"white"}}>
    // <div className= {themeState === "light" ? "light" : "dark"}>
    <div className={`App ${themeState === "light" ? "light" : "dark"}`}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<NetflixDashboard />}></Route>
        <Route path="/dashboard" element={<NetflixDashboard />}></Route>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/aboutnetflix" element={<AboutNetflix />}></Route>
        <Route
          path="/dashboard/contactnetflix"
          element={<ContactNetflix />}
        ></Route>
        <Route
          path="/netflixmovies/play/:id"
          element={<NetflixPlayMovie />}
        ></Route>
        <Route path="/formdemo1" element={<InputDemo />}></Route>
        <Route path="/genmcq" element={<McqGeneration />}></Route>
        <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
        <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
        <Route
          path="/moveidetail/:id"
          element={<h1>moviedetail compin</h1>}
        ></Route>
        <Route path="/useeffectdemo" element={<UseEffectDemo />}></Route>
        <Route path="/useMemoDemo" element={<UseMemoDemo />}></Route>
        <Route path="/edituser/:id" element={<EditUser />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/findbomb" element={<FindBombGame />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/productcomponent" element={<ProductComponent />}></Route>
        <Route path="/bankapp" element={<BankComponent />}></Route>
        <Route path = "/sturecords" element = {<StudentTable/>}></Route>
        <Route path = "/sturecords2" element = {<StudentTable2/>}></Route>
        <Route path="/content" element = {<ContentComponent/>}></Route>
        <Route path="/muibutton" element ={<MuiButton/>}></Route>
        <Route path="/fileupload"element = {<FileUpload/>}></Route>

        {/* <Route path="/*" element ={<h1>Error....</h1>}></Route>   */}
        <Route path="/*" element={<Error404 />}></Route>
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
      <button onClick={()=>{sendMessageHandler()}}>SEND</button>
    </div>
  );
}

export default App;
