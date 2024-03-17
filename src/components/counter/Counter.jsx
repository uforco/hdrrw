// import { useState } from "react";
import { connect } from "react-redux";
import { decrement, increment } from './../../redux/counter/action';

const Counter = ({ count, increment, decrement }) => {
  
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
              onClick={() => increment(3)}
            >
              Increment
            </button>
            <button
              className="btn px-10 btn-warning"
              onClick={() => decrement(2)}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  count: state.staticCount.value
});

const mapDispatchToProps = dispatch =>  ({
  increment: (value)=> dispatch(increment(value)),
  decrement: (value)=> dispatch(decrement(value))
});


export default connect(mapStateToProps, mapDispatchToProps)(Counter)

