import { useContext } from "react";
import {ObjFly} from "../context/flyContext";
import { FcBriefcase } from "react-icons/fc";


import "../scss/fromDestination.scss"


const FromDestination = () => {

    const {dinDestination, setToggleFrom, setSelectedFrom, selectedFrom} = useContext(ObjFly);


    const selectFromElement = (item) =>{
        setToggleFrom(false)

        if(selectedFrom.includes(item)){
            let deleteIncludes = selectedFrom.filter(element => element !== item)

            setSelectedFrom(deleteIncludes)

        }else{
            setSelectedFrom(prev => [...prev, item])
        }
    }


    const selectFromElementOther = (item) =>{

        if(selectedFrom.includes(item)) return
        setSelectedFrom(prev => [...prev, item])

    }


    return ( 
        <div className="from_destination">

            <div className="from_destination__input">
                <h5>Din</h5>
                <input type="text"  />
            </div>


              {selectedFrom.length > 0 && <h5>Deja incluse</h5>}

            {selectedFrom && selectedFrom.map((item, i) => (
                <div onClick={() => selectFromElement(item)} key={i} className="from_destination__icons_dest">
                <FcBriefcase/>
                <p>{item}</p>
           </div>
            ))}

           {selectedFrom.length > 0 && <hr/>}

            {dinDestination.map((item, i) => (
               <div onClick={() => selectFromElementOther(item)} key={i} className="from_destination__icons_dest">
                    <FcBriefcase/>
                    <p>{item}</p>
               </div>
            ))}

        </div>
     );
}
 
export default FromDestination;