import {useState} from "react"
export function Counter({getcounter}){
    const [counter,setCounter] = useState(1);
    getcounter(counter)
    const incCounter = (value)=>{
       setCounter(counter + value); 
    }
    return (
    <div className="Counter1"> Guest:
        <button className = "incbtn" onClick = {()=>{incCounter(1)}}>+</button>
        <p className="counter_display">{counter}</p>
        
        <button className = "incbtn" onClick = {()=>{
            if(counter >= 2){
                incCounter(-1)}}
            }
            >-</button>


    </div>
    )
}