// import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/dynamiccounter/action";


const DynamicHookCounter = () => {

  const count = useSelector( (state)=> state.dynamicCount.value)

  const Dispatch = useDispatch()
    

  const dynamicIncrement = (velue) => {
    Dispatch( increment(velue) )
  }
  const dynamicDecrement = (velue) => {
    Dispatch( decrement(velue))
  }

  
  

  
  return (
    <>
      <div className=" p-4 bg-slate-800 m-6 rounded-lg  " >
        <div className="card">
          <div className=" flex justify-center items-center p-8 ">
            <h2 className=" text-3xl ">{count}</h2>
          </div>
          <div className=" flex justify-center items-center gap-10 ">
            <button
              className="btn px-10 btn-success"
              onClick={()=> dynamicIncrement(5)}
            >
              Increment
            </button>
            
            <button
              className="btn px-10 btn-warning"
              onClick={()=> dynamicDecrement(2)}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default DynamicHookCounter

