import { useContext } from "react";
import {ObjFly} from "../context/flyContext";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';


import "../scss/fromDestination.scss"


const ToDestination = () => {

    const {catreDestination, setToggleTo, selectTo, setSelectTo} = useContext(ObjFly);


    const selectFromElement = (item) =>{
        setToggleTo(false)

        if(selectTo.includes(item)){
            let deleteIncludes = selectTo.filter(element => element !== item)
            setSelectTo(deleteIncludes)
            setToggleTo(true)

        }else{
            setSelectTo(prev => [...prev, item])
        }
    }


    const selectFromElementOther = (item) =>{

        if(selectTo.includes(item)){
            return
        }else{
            setSelectTo(prev => [...prev, item])
            setToggleTo(false)
        }

    }



    const deleteAdded = (item) =>{
        let deleteAdd = selectTo.filter(element => element !== item);
    
        setSelectTo(deleteAdd)

      }


    return ( 
        <div className="from_destination">

            <div className="from_destination__input">
                <h5>Spre</h5>
                {selectTo && selectTo.map((item, i) => (
              <div className="header__from_direction__input_element__item_added" key={i}>
                <p onClick={() => setToggleTo(true)} >{item}</p>
                <CancelIcon fontSize="small" onClick={() => deleteAdded(item)}/>
              </div>
            ))}
                <input type="text"  />
            </div>


              {selectTo.length > 0 && <h5>Deja incluse</h5>}

            {selectTo && selectTo.map((item, i) => (
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

           {selectTo.length > 0 && <hr/>}

            {catreDestination.map((item, i) => (
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
 
export default ToDestination;