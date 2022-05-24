import FromDestination from "./components/fromDestination";
import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import ToDestination from "./components/toDestination";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';



import {ObjFly} from "./context/flyContext";

import { useContext } from "react";


// style
import "./scss/App.scss";



function App() {


  const {setToggleFrom, toggleFrom, selectedFrom, setSelectedFrom, toggleTo, setToggleTo, selectTo} = useContext(ObjFly);


  const deleteAdded = (item) =>{
    let deleteAdd = selectedFrom.filter(element => element !== item);

    setSelectedFrom(deleteAdd)

    setToggleFrom(!toggleFrom)

    console.log("Added")
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
                <CancelIcon fontSize="small" onClick={() => deleteAdded(item)}/>
              </div>
            ))}
          </div>
         
        </div>

       <SwapHorizIcon/>

       <div className="header__from_direction">
         <h5>Spre</h5>

         <div  onClick={() => setToggleTo(true)} className="header__from_direction__input_element">

            {selectTo && selectTo.map((item, i) => (
              <div className="header__from_direction__input_element__item_added" key={i}>
                <p onClick={() => setToggleFrom(true)} >{item}</p>
                <CancelIcon fontSize="small" onClick={() => deleteAdded(item)}/>
              </div>
            ))}
          </div>
       </div>


      {toggleFrom && <FromDestination/>}
      {toggleTo && <ToDestination/>}

      </header>



    </div>
  );
}

export default App;
