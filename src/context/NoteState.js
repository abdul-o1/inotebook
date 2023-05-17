import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
        const s1 ={
            "name":"abdul",
            "class":"10a"
        }
        const  [state, setstate] = useState(s1);
        const update = () =>{
            setTimeout(() => {
                setstate({
                    "name": "rahman","class": "11"
                })
                
            }, 1000);
        }
    return(
        <noteContext.Provider value={{state:state, update:update}} >
                { props.children }
        </noteContext.Provider>

)
}
export default NoteState;