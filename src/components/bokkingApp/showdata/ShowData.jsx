import { Card, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import Tbdata from "./Tbdata";

const TABLE_HEAD = [
  "Destination From",
  "Destination To",
  "Journey Date",
  "Guests",
  "Class",
  "Delete",
];

export function ShowData() {
  const bookinglist = useSelector((state) => state.bookingodata);
  //   console.log(bookinglist.length);
  return bookinglist.length < 1 ? (
    ""
  ) : (
    <Card className="h-full w-full overflow-hidden">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=" w-full overflow-scroll ">
          {bookinglist.map((dataitem, index) => (
            <Tbdata key={index} inx={index} dataitem={dataitem}></Tbdata>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
