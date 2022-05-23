import FromDestination from "./components/fromDestination";
import React from "react";
import { AiTwotoneSetting } from "react-icons/ai";



import {ObjFly} from "./context/flyContext";

import { useContext } from "react";


// style
import "./scss/App.scss";



function App() {


  const {setToggleFrom, toggleFrom, selectedFrom, setSelectedFrom} = useContext(ObjFly);


  const deleteAdded = (item) =>{

    let deleteAdd = selectedFrom.filter(element => element !== item);

    console.log(deleteAdd)

    setSelectedFrom(deleteAdd)

    console.log(item)

  }

 

  return (
    <div className="App">


      <header className="header">
       
        <div className="header__from_direction">
          <h5>Din</h5>

          <div  onClick={() => setToggleFrom(true)} className="header__from_direction__input_element">

            {selectedFrom && selectedFrom.map((item, i) => (
              <div className="header__from_direction__input_element__item_added" key={i}>
                <p onClick={() => setToggleFrom(true)} >{item}</p>
                <AiTwotoneSetting onClick={() => deleteAdded(item)}/>
              </div>
            ))}
          </div>
         
        </div>

      </header>


      {toggleFrom && <FromDestination style={{padding:'0px 10px', position: 'fixed'}}/>}

    </div>
  );
}

export default App;
