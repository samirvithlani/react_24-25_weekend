import logo from './logo.svg';
import './App.css';

function App() {

  //we can return only 1 tag at a time...
  //every tag must have a closing tag
  //whatever we write in the return statement it will display on the screen

  var age = 20;
  var name = "Ram";
  var isActive = true;
  var user = {
    name:"Shyam",
    salary:50000,
  }


  return (
    <div className="App">
      <h1>HELLO</h1>
      {age}
      <h1>AGE = {age}</h1>
      <h2>Name : {name}</h2>
      <h3>Active :{isActive == true ? "Active":"Not ACtive"}</h3>
      <h3>Active :{isActive ? "Active":"Not ACtive"}</h3>
      <h3>userName = {user.name}</h3>
      <h3>Salary = {user.salary}</h3>
    </div>
  );
}

export default App;
