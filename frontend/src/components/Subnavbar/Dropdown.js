import { useState } from "react"

 const Dropdown = ({selected,setselected}) =>{
     const [active,setActive] = useState (false);
     const options = ["Delhi","Pune","Mumbai","Nagpur","Kochi"]
     return(
    <div className="dropdown">
        <div className="dropdown_button" onClick={(e)=>
            setActive(!active)}>
                {selected}
                Choose one
                </div>
        {active && (
            <div className="drop-content">
                {options.map((option) => (
                   <div 
                   onClick={(e) => {

                       setselected(option);
                       setActive(false);
                    }}
                    className="dropdown-item"
                    >
                        {option}
                        </div>
                ))}
            
        </div>
        )}
    </div>
     );
}

export default Dropdown