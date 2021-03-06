import { useContext } from "react";
import {ObjFly} from "../context/flyContext";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';


import "../scss/fromDestination.scss"


const FromDestination = () => {

    const {dinDestination, setToggleFrom, setSelectedFrom, selectedFrom} = useContext(ObjFly);


    const selectFromElement = (item) =>{
        setToggleFrom(false)

        if(selectedFrom.includes(item)){
            let deleteIncludes = selectedFrom.filter(element => element !== item)
            setSelectedFrom(deleteIncludes)
            setToggleFrom(true)

        }else{
            setSelectedFrom(prev => [...prev, item])
        }
    }


    const selectFromElementOther = (item) =>{

        if(selectedFrom.includes(item)){
            return
        }else{
            setSelectedFrom(prev => [...prev, item])
            setToggleFrom(false)
        }

    }



    const deleteAdded = (item) =>{
        let deleteAdd = selectedFrom.filter(element => element !== item);
    
        setSelectedFrom(deleteAdd)

      }


    return ( 
        <div className="from_destination">

            <div className="from_destination__input">
                <h5>Din</h5>
                {selectedFrom && selectedFrom.map((item, i) => (
              <div className="header__from_direction__input_element__item_added" key={i}>
                <p onClick={() => setToggleFrom(true)} >{item}</p>
                <CancelIcon fontSize="small" onClick={() => deleteAdded(item)}/>
              </div>
            ))}
                <input type="text"  />
            </div>


              {selectedFrom.length > 0 && <h5>Deja incluse</h5>}

            {selectedFrom && selectedFrom.map((item, i) => (
            <div onClick={() => selectFromElement(item)} key={i} className="from_destination__icons_dest">
               <div className="from_destination__icons_dest__location_select">
                <LocationCityIcon/>
                    <p>{item}</p>
               </div>

               <div>
                   <CheckCircleOutlineIcon/>
               </div>
           </div>
            ))}

           {selectedFrom.length > 0 && <hr/>}

            {dinDestination.map((item, i) => (
               <div onClick={() => selectFromElementOther(item)} key={i} className="from_destination__icons_dest">
                    <div className="from_destination__icons_dest__location_select">
                        <LocationCityIcon/>
                        <p>{item}</p>
                    </div>

                    <div>
                        <CircleOutlinedIcon/>
                    </div>
               </div>
            ))}

        </div>
     );
}
 
export default FromDestination;