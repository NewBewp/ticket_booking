import React from "react";
import Seat from "./Seat";

const SeatList = ({ seatData }) => {
  // console.log("seatData: ", seatData);

  return (
    <div className="mt-5">
      {seatData.map((hangGhe) => {
        return (
          <div
            key={hangGhe.hang}
            className="d-flex gap-3"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p className="hangGhe mt-4" style={{ width: 30, height: 30 }}>
              {hangGhe.hang}
            </p>
            {hangGhe.danhSachGhe.map((ghe) => {
              return <Seat key={ghe.soGhe} ghe={ghe} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SeatList;
