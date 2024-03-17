import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/counter/Counter";
import store from "./redux/store";
import DynamicHookCounter from './components/dynamicHookCounter/DynamicHookCounter';
import BookingSystem from './components/bokkingApp/BookingSystem';

function App() {
  return (
    <>
    <Provider store={store} >
      <div className="  w-full py-10 ">
        <div className=" m-auto container  " >
          <div className=" w-full flex justify-center items-center " >
            <div>
              <BookingSystem></BookingSystem>
              <Counter></Counter>
              <DynamicHookCounter></DynamicHookCounter>
            </div>
          </div>
        </div>
      </div>
      </Provider>
    </>
  );
}

export default App;
