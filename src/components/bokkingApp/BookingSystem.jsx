
import Header from './header/Header';
import { ShowData } from './showdata/ShowData';

const BookingSystem = () => {
    return (
      <div className=" flex flex-col gap-3 ">
        <div className=" text-center text-5xl capitalize font-bold my-8 text-[#706fd3] ">
          How does react-redux Work
        </div>
        <Header></Header>
        <ShowData></ShowData>
      </div>
    );
};

export default BookingSystem;