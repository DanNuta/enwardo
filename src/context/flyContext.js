import { createContext } from "react";
import React from "react";

export const ObjFly = createContext();

const FlyContext = (props) => {

    const [toggleFrom, setToggleFrom] = React.useState(false);
    const [toggleTo, setToggleTo] = React.useState(false)
    const [selectedFrom, setSelectedFrom] = React.useState([])
    const [selectTo, setSelectTo] = React.useState([])

    const dinDestination = ["Chisinau", "Cahul", "Bucuresti", "Iasi", "Odesa"];
    const catreDestination = ["Londra", "Moscova", "Kiev", "Berlin", "Istambul"];


    return ( 
        <ObjFly.Provider value={
            {dinDestination, catreDestination, setToggleFrom, toggleFrom, setSelectedFrom,
             selectedFrom, toggleTo, setToggleTo, selectTo, setSelectTo}}>
            {props.children}
        </ObjFly.Provider>
     );
}
 
export default FlyContext;

