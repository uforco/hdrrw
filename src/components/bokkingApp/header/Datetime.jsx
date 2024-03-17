
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PropTypes } from 'prop-types';

const seletestyle =
  "bg-gray-50 dark:bg-gray-100 dark:text-gray-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500";

const Datetime = ({ startDate, setStartDate }) => {
  return (
    <ReactDatePicker
      className={seletestyle}
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
      }}
    />
  );
};

export default Datetime;

Datetime.propTypes = {
  startDate: PropTypes.object,
  setStartDate: PropTypes.func
};