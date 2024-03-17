import { useState } from "react";
import { useForm } from "react-hook-form";
import Datetime from "./Datetime";
import { SlLocationPin } from "react-icons/sl";
import { CgCalendarDates } from "react-icons/cg";
import { IoPersonCircleOutline, IoBusinessSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { bookingadd } from "./../../../redux/bookingapp/action";
import bddistric from "../../../../public/bd-districts";

const Header = () => {
  const Dispatch = useDispatch();

  const [districts, setDistricts] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  if (districts.length < 1) {
    setDistricts(bddistric());
  }
  console.log();
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.DestinationFrom === "selete" || data.DestinationTo === "selete") {
      console.log("Not Add Booking system");
    } else {
      Dispatch(bookingadd({ ...data, JourneyDate: startDate }));
    }
  };

  const seletestyle =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <div>
      <form
        className=" flex bg-white rounded p-3 px-6 gap-6 justify-center items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="  text-black flex gap-20 justify-center items-center ">
          {/* Destination From */}

          <div>
            <h2>Destination From</h2>
            <div className=" py-4 flex justify-center items-center gap-2 text-xl ">
              <p>
                <SlLocationPin />
              </p>
              <select className={seletestyle} {...register("DestinationFrom")}>
                <option value="selete">selete</option>
                {districts?.length < 1 ? (
                  <option value="selete">selete</option>
                ) : (
                  districts?.map((item, inx) => (
                    <option key={inx} value={item.name}>
                      {item.name}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>

          {/* Destination To */}
          <div>
            <h2>Destination To</h2>
            <div className=" py-4 flex justify-center items-center gap-2 text-xl ">
              <p>
                <SlLocationPin />
              </p>
              <select className={seletestyle} {...register("DestinationTo")}>
                <option value="selete">selete</option>
                {districts?.length < 1 ? (
                  <option value="selete">selete</option>
                ) : (
                  districts?.map((item, inx) => (
                    <option key={inx} value={item.name}>
                      {item.name}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
          {/* Journey Date */}
          <div>
            <h2>Journey Date</h2>
            <div className=" py-4 flex justify-center items-center gap-2 text-xl ">
              <Datetime
                startDate={startDate}
                setStartDate={setStartDate}
              ></Datetime>
              <p>
                <CgCalendarDates />
              </p>
            </div>
          </div>
          {/* Guests */}
          <div>
            <h2>Guests</h2>
            <div className=" py-4 flex justify-center items-center gap-2 text-xl ">
              <p>
                <IoPersonCircleOutline />
              </p>
              <select className={seletestyle} {...register("Guests")}>
                <option value="1 Person">1 Person</option>
                <option value="2 Person">2 Person</option>
                <option value="3 Person">3 Person</option>
                <option value="4 Person">4 Person</option>
              </select>
            </div>
          </div>
          {/* Class */}
          <div>
            <h2>Class</h2>
            <div className=" py-4 flex justify-center items-center gap-2 text-xl ">
              <p>
                <IoBusinessSharp />
              </p>
              <select className={seletestyle} {...register("Class")}>
                <option value="Business">Business</option>
                <option value="Economy">Economy</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className="flex cursor-pointer bg-blue-600 p-2 rounded font-semibold text-white justify-center items-center gap-2">
            <p>
              <FaPlus></FaPlus>
            </p>
            <input className=" cursor-pointer " type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
