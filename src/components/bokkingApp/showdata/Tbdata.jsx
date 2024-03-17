import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { bookingdelete } from "../../../redux/bookingapp/action";

const Tbdata = ({ dataitem, inx }) => {
  const d = new Date(dataitem.JourneyDate);
    // console.log(dataitem);
    const Dispatch = useDispatch()

    const deletedata = () => {
        Dispatch(bookingdelete(inx));
    }

  return (
    <>
      <tr className="even:bg-blue-gray-50/50 w-full ">
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {dataitem.DestinationFrom}
          </Typography>
        </td>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {dataitem.DestinationTo}
          </Typography>
        </td>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {` ${d.getMonth() + 1} / ${d.getDate()} / ${d.getFullYear()}`}
          </Typography>
        </td>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {dataitem.Guests}
          </Typography>
        </td>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {dataitem.Class}
          </Typography>
        </td>

        <td className="p-4">
          <div>
            <RiDeleteBin6Line
              className=" text-4xl border-2  hover:bg-red-500 hover:border-red-500 hover:shadow-none hover:text-white cursor-pointer p-1 rounded shadow-inner text-red-400 shadow-red-100 border-red-200 "
              onClick={deletedata}
            ></RiDeleteBin6Line>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Tbdata;

Tbdata.propTypes = {
  dataitem: PropTypes.object,
  inx: PropTypes.number
};
