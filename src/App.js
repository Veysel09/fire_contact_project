import { useState } from "react";
import "./App.css";
import Contact from "./components/contacts/Contacts";
import FormCoponents from "./components/form/FormCoponents";

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "", 
};

function App() {
  const [info, setInfo] = useState(initialValues);

  const handleSubmit = (e)=>{

  }

  return (
    <div className="App">
      <FormCoponents info ={info} setInfo={setInfo} handleSubmit={handleSubmit} />
      <Contact />
    </div>
  );
}

export default App;
